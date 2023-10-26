/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * 'License'); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { curveCatmullRom } from 'd3-shape';
import { path } from 'd3-path';

 /*
  * NOTE: This session recording player implementation is based on the Session
  * Recording Player for Glyptodon Enterprise which is available at
  * https://github.com/glyptodon/glyptodon-enterprise-player under the
  * following license:
  *
  * Copyright (C) 2019 Glyptodon, Inc.
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in
  * all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  * THE SOFTWARE.
  */

/**
 * A service for generating heat maps of activity levels per time interval,
 * for session recording playback.
 */
angular.module('player').factory('playerHeatMapService', [() => {

    /**
     * A default Gaussian smoothing kernel with a sigma of 4. This kernel
     * should produce reasonable looking histograms for most recordings.
     *
     * @type {Number[]}
     */
    const DEFAULT_GAUSSIAN_KERNEL = [0.121, 0.142, 0.156, 0.162, 0.156, 0.142, 0.121];

    /**
     * A default Gaussian smoothing kernel with a FHWM of 4. This kernel
     * should produce reasonable looking histograms for most recordings.
     *
     * @type {Number[]}
     */
    const DEFAULT_NUM_BUCKETS = 100;

    /**
     * Given a list of values to smooth out, and a smoothing kernel, produce
     * a smoothed data set with the same length as the original provided
     * list. If the provided kernel is invalid, a warning will be logged and
     * the provided list will be returned unchanged.
     *
     * @param {!Number[]} values
     *     The list of histogram values to smooth out.
     *
     * @param {!Number[]} kernel
     *     The kernel to use when smoothing the values. This would usually be,
     *     but is not required to be, a Gaussian smoothing kernel. It must
     *     sum to 1, and must be an odd length in order to be used.
     *
     * @returns
     *     The smoothed value array, or the original array if the provided
     *     smoothing kernel is not valid.
     */
    function smooth(values, kernel) {

        // Ensure that all provided kernels are valid - they must sum to 1 to
        // maintain normalization, and they must be an odd length, since they
        // must center on a particular value
        if (_.sum(kernel) !== 1 || kernel.length % 2 !== 1) {
            console.warn("Smoothing kernel must sum to 1 and be an odd length.");
            return values;
        }

        // The starting offset into the values array for each calculation
        const lookBack = Math.floor(kernel.length / 2);

        // Apply the smoothing kernel to each value in the provided array
        return _.map(values, (value, index) => {

            // Total up the weighted values for each position in the kernel.
            // This total is guaranteed to already be normalized since the
            // kernel sums to 1.
            return _.reduce(kernel, (total, weight, kernelIndex) => {

                // The offset into the original values array for the kernel
                const valuesOffset = kernelIndex - lookBack;

                // The position inside the original values array to be included
                const valuesIndex = index + valuesOffset;

                // If the contribution to the final smoothed value would be outside
                // the bounds of the array, just use the original value instead
                const contribution = ((valuesIndex >= 0) && valuesIndex < values.length)
                        ? values[valuesIndex] : value;

                // Use the provided weight from the kernel and add to the total
                return total + (contribution * weight);

            }, 0);

        });
    }

    function createPath(bucketizedData) {

        const curvedPath = path();
        const curve = curveCatmullRom(curvedPath);

        curve.lineStart();

        for (let x = 0; x < bucketizedData.length; x++) {
            const y = bucketizedData[x];
            curve.point(x, y);
        }

        curve.lineEnd();

        // Generate the SVG path for this curve
        console.log(curvedPath.toString());
    }

    const service = {};

    /**
     * Given a raw array of timestamps indicating when events of a certain type
     * occured during a record, generate and return a smoothed, graphing-ready
     * array of values indicating how many events occured during each equal-length
     * bucket. Optionally, the number of buckets and the smoothing kernel can also
     * be supplied.
     *
     * @param {!Number[]} timestamps
     *     A raw array of timestamps, one for every relevant event. These
     *     must be monotonically increasing, or behavior is undefined.
     *
     * @param {Number} numBucket=DEFAULT_NUM_BUCKETS
     *     The number of entries that should be returned in the final graphable array.
     *
     * @param {Number[]} kernel=DEFAULT_GAUSSIAN_KERNEL
     *     The kernel that should be used for smoothing the data in the returned
     *     graphable array. If provided, it must sum to 1 and be an odd length.
     *
     * @returns
     *     A smoothed, graphable array containing counts of activity during each
     *     bucket of time, as extracted from the provided timestamps.
     */
    service.generateHeatMapPath = (timestamps, numBuckets, kernel) => {

        // Use the default number of buckets if not overriden
        if (!numBuckets)
            numBuckets = DEFAULT_NUM_BUCKETS;

        // An initially empty array containing no activity in any bucket
        const buckets = new Array(numBuckets).fill(0);

        // If no events occured, return the still-empty array
        if (!timestamps.length)
            return buckets;

        // Use the default gaussian smoothing kernel if not overriden
        if (!kernel)
            kernel = DEFAULT_GAUSSIAN_KERNEL;

        // Determine the time range and bucket granularity
        const first = timestamps[0];
        const last  = timestamps[timestamps.length - 1];
        const duration = last - first;
        const bucketDuration = duration / numBuckets;

        // If the duration is invalid, return the still-empty array
        if (duration <= 0)
            return buckets;

        // Partition the events into a count of events per bucket
        let currentBucketIndex = 0;
        timestamps.forEach(timestamp => {

            // If the current timestamp has passed the end of the current
            // bucket, move to the appropriate bucket
            if (timestamp >= (currentBucketIndex + 1) * bucketDuration)
                currentBucketIndex = Math.min(
                    Math.floor((timestamp / bucketDuration)), numBuckets - 1);

            // Increment the count for the current bucket
            buckets[currentBucketIndex]++;

        });

        // Smooth the data for better aesthetics before creating the path
        const smoothed = smooth(buckets, kernel);

        // Create an SVG path based on the smoothed data
        return createPath(smoothed);

    }


    return service;

}]);

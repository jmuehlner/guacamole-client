/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Arbitrary data which can be contained by the clipboard.
 */
export class ClipboardData {

    /**
     * The mimetype of the data currently stored within the clipboard.
     */
    type : string = 'text/plain';

    /**
     * The data currently stored within the clipboard. Depending on the
     * nature of the stored data, this may be either a string, a Blob, or a
     * File.
     */
    data : string | Blob | File = '';

    constructor(template : ClipboardData | object = {}) {
        Object.assign(this, template);
    }

}


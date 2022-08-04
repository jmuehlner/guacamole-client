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

package org.apache.guacamole.net;

import org.apache.guacamole.GuacamoleException;

/**
 * An exception thrown when additional information is required to establish a connection,
 * beyond any connection parameters that may already have been provided.
 */
public class GuacamoleInsufficientConnectionInformationException extends GuacamoleException {

    /**
     * The required information in order for the connection to be established.
     */
    private final AdditionalConnectionInformation requestedConnectionInfo;

    /**
     * Creates a new GuacamoleInsufficientConnectionInformationException with the given
     * message, cause, and associated credential information.
     *
     * @param message
     *     A human readable description of the exception that occurred.
     *
     * @param cause
     *     The cause of this exception.
     *
     * @param requestedConnectionInfo
     *     Information describing the form of valid credentials.
     */
    public GuacamoleInsufficientConnectionInformationException(String message, Throwable cause,
            AdditionalConnectionInformation requestedConnectionInfo) {
        super(message, cause);
        this.requestedConnectionInfo = requestedConnectionInfo;
    }

    /**
     * Creates a new GuacamoleInsufficientConnectionInformationException with the given
     * message and associated credential information.
     *
     * @param message
     *     A human readable description of the exception that occurred.
     *
     * @param requestedConnectionInfo
     *     Information describing the form of valid credentials.
     */
    public GuacamoleInsufficientConnectionInformationException(
            String message, AdditionalConnectionInformation requestedConnectionInfo) {
        super(message);
        this.requestedConnectionInfo = requestedConnectionInfo;
    }

    /**
     * Creates a new GuacamoleInsufficientConnectionInformationException with the given
     * cause and associated credential information.
     *
     * @param cause
     *     The cause of this exception.
     *
     * @param requestedConnectionInfo
     *     Information describing the form of valid credentials.
     */
    public GuacamoleInsufficientConnectionInformationException(
            Throwable cause, AdditionalConnectionInformation requestedConnectionInfo) {
        super(cause);
        this.requestedConnectionInfo = requestedConnectionInfo;
    }

    /**
     * Return the additional connection information required to establish
     * the connection.
     *
     * @return The additional connection information required to establish
     *     the connection.
     */
    public AdditionalConnectionInformation getAdditionalConnectionInformation() {
        return requestedConnectionInfo;
    }

}

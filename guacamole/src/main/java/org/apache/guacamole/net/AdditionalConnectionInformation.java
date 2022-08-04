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

import java.util.Collection;
import java.util.Collections;
import org.apache.guacamole.form.Field;

/**
 * A class representing a set of additional information required in order
 * to establish a conneciton, in addition to any connection parameters that
 * may already be set.
 */
public class AdditionalConnectionInformation {

    /**
     * All additional fields required to establish the connection.
     */
    private final Collection<Field> fields;

    /**
     * Creates a new ConnectionInformation object which requires the given fields
     * in order to establish the connection.
     *
     * @param fields
     *     The fields to require.
     */
    public AdditionalConnectionInformation(Collection<Field> fields) {
        this.fields = fields;
    }

    /**
     * Returns all additional fields required to establish the connection.
     *
     * @return
     *     All additional fields required to establish the connection.
     */
    public Collection<Field> getFields() {
        return Collections.unmodifiableCollection(fields);
    }

}

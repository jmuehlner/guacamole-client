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
 * The module for code relating to communication with the REST API of the
 * Guacamole web application.
 */
module.exports = angular.module('rest', [
    require('app/auth'),
    require('app/locale')
]).name;

require('./services/activeConnectionService.js');
require('./services/cacheService.js');
require('./services/connectionGroupService.js');
require('./services/connectionService.js');
require('./services/dataSourceService.js');
require('./services/historyService.js');
require('./services/languageService.js');
require('./services/membershipService.js');
require('./services/patchService.js');
require('./services/permissionService.js');
require('./services/requestService.js');
require('./services/schemaService.js');
require('./services/sharingProfileService.js');
require('./services/tunnelService.js');
require('./services/userGroupService.js');
require('./services/userService.js');
require('./types/ActiveConnection.js');
require('./types/Connection.js');
require('./types/ConnectionGroup.js');
require('./types/ConnectionHistoryEntry.js');
require('./types/Error.js');
require('./types/Field.js');
require('./types/Form.js');
require('./types/PermissionFlagSet.js');
require('./types/PermissionPatch.js');
require('./types/PermissionSet.js');
require('./types/Protocol.js');
require('./types/RelatedObjectPatch.js');
require('./types/SharingProfile.js');
require('./types/TranslatableMessage.js');
require('./types/User.js');
require('./types/UserCredentials.js');
require('./types/UserGroup.js');
require('./types/UserPasswordUpdate.js');

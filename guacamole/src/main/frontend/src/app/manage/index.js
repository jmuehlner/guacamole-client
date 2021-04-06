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
 * The module for the administration functionality.
 */
module.exports = angular.module('manage', [
    require('app/form'),
    require('app/groupList'),
    require('app/list'),
    require('app/locale'),
    require('app/navigation'),
    require('app/notification'),
    require('app/rest')
]).name;

require('./styles/attributes.css');
require('./styles/connection-parameter.css');
require('./styles/forms.css');
require('./styles/locationChooser.css');
require('./styles/manage-user-group.css');
require('./styles/manage-user.css');
require('./styles/related-objects.css');

require('./controllers/manageConnectionController.js');
require('./controllers/manageConnectionGroupController.js');
require('./controllers/manageSharingProfileController.js');
require('./controllers/manageUserController.js');
require('./controllers/manageUserGroupController.js');
require('./directives/connectionPermissionEditor.js');
require('./directives/dataSourceTabs.js');
require('./directives/identifierSetEditor.js');
require('./directives/locationChooser.js');
require('./directives/managementButtons.js');
require('./directives/systemPermissionEditor.js');
require('./types/HistoryEntryWrapper.js');
require('./types/ManageableUser.js');
require('./types/ManageableUserGroup.js');
require('./types/ManagementPermissions.js');


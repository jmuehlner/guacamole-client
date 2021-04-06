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
 * The module for manipulation of general settings. This is distinct from the
 * "manage" module, which deals only with administrator-level system management.
 */
module.exports = angular.module('settings', [
    require('app/groupList'),
    require('app/list'),
    require('app/navigation'),
    require('app/notification'),
    require('app/rest'),
    require('app/storage')
]).name;

require('./styles/buttons.css');
require('./styles/connection-list.css');
require('./styles/history.css');
require('./styles/input-method.css');
require('./styles/mouse-mode.css');
require('./styles/preferences.css');
require('./styles/sessions.css');
require('./styles/settings.css');
require('./styles/user-group-list.css');
require('./styles/user-list.css');

require('./controllers/settingsController.js');
require('./directives/guacSettingsConnectionHistory.js');
require('./directives/guacSettingsConnections.js');
require('./directives/guacSettingsPreferences.js');
require('./directives/guacSettingsSessions.js');
require('./directives/guacSettingsUserGroups.js');
require('./directives/guacSettingsUsers.js');
require('./services/csvService.js');
require('./services/preferenceService.js');
require('./types/ActiveConnectionWrapper.js');
require('./types/ConnectionHistoryEntryWrapper.js');


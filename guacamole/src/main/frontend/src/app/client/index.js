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
 * The module for code used to connect to a connection or balancing group.
 */
module.exports = angular.module('client', [
    require('app/auth'),
    require('app/clipboard'),
    require('app/element'),
    require('app/history'),
    require('app/navigation'),
    require('app/notification'),
    require('app/osk'),
    require('app/rest'),
    require('app/textInput'),
    require('app/touch')
]).name;

require('./controllers/clientController.js');
require('./directives/guacClient.js');
require('./directives/guacClientPanel.js');
require('./directives/guacFileBrowser.js');
require('./directives/guacFileTransfer.js');
require('./directives/guacFileTransferManager.js');
require('./directives/guacThumbnail.js');
require('./directives/guacViewport.js');
require('./directives/guacZoomCtrl.js');
require('./services/guacAudio.js');
require('./services/guacClientManager.js');
require('./services/guacImage.js');
require('./services/guacVideo.js');
require('./types/ClientProperties.js');
require('./types/ManagedArgument.js');
require('./types/ManagedClient.js');
require('./types/ManagedClientState.js');
require('./types/ManagedClientThumbnail.js');
require('./types/ManagedDisplay.js');
require('./types/ManagedFileTransferState.js');
require('./types/ManagedFileUpload.js');
require('./types/ManagedFilesystem.js');
require('./types/ManagedShareLink.js');


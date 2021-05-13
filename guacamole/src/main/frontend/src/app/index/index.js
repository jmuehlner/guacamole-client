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
 * The module for the root of the application.
 */
module.exports = angular.module('index', [

    require('angular-route'),
    require('angular-touch'),
    require('angular-translate'),

    require('app/auth'),
    require('app/client'),
    require('app/clipboard'),
    require('app/home'),
    require('app/login'),
    require('app/manage'),
    require('app/navigation'),
    require('app/notification'),
    require('app/rest'),
    require('app/settings'),

    'templates-main'

]).name;

require('angular-translate-interpolation-messageformat');
require('angular-translate-loader-static-files');

require('./config/httpDefaults.js');
require('./config/indexRouteConfig.js');
require('./config/indexTranslationConfig.js');
require('./config/templateRequestDecorator.js');
require('./controllers/indexController.js');
require('./filters/arrayFilter.js');
require('./services/iconService.js');


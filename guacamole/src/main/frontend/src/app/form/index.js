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
 * Module for displaying dynamic forms.
 */
module.exports = angular.module('form', [
    require('app/locale'),
    require('app/rest')
]).name;

require('./styles/form-field.css');
require('./styles/form.css');
require('./styles/redirect-field.css');
require('./styles/terminal-color-scheme-field.css');

require('./controllers/checkboxFieldController.js');
require('./controllers/dateFieldController.js');
require('./controllers/languageFieldController.js');
require('./controllers/numberFieldController.js');
require('./controllers/passwordFieldController.js');
require('./controllers/redirectFieldController.js');
require('./controllers/selectFieldController.js');
require('./controllers/terminalColorSchemeFieldController.js');
require('./controllers/textFieldController.js');
require('./controllers/timeFieldController.js');
require('./controllers/timeZoneFieldController.js');
require('./directives/form.js');
require('./directives/formField.js');
require('./directives/guacInputColor.js');
require('./directives/guacLenientDate.js');
require('./directives/guacLenientTime.js');
require('./services/colorPickerService.js');
require('./services/formService.js');
require('./types/ColorScheme.js');
require('./types/FieldType.js');


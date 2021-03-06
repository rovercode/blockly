/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * Copyright 2015 Brady L. Hurlburt.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for sensor blocks.
 * @author brady.hurlburt@rovercode.com (Brady L. Hurlburt)
 */
'use strict';

goog.provide('Blockly.JavaScript.sensors');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['sensors_get_covered'] = function(block) {
  var dropdown_sensors = block.getFieldValue('SENSOR');
  var code = "getSensorCovered('"+dropdown_sensors+"')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['light_sensor_value'] = function(block) {
  var dropdown_sensors = block.getFieldValue('SENSOR');
  var code = "getLightSensorValue('" + dropdown_sensors + "')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_sensor_value'] = function(block) {
  var dropdown_sensors = block.getFieldValue('SENSOR');
  var code = "getLineSensorValue('" + dropdown_sensors + "')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['button_press'] = function(block) {
  var dropdown_button = block.getFieldValue('BUTTON');
  var code = "buttonHasBeenPressed('" + dropdown_button + "')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
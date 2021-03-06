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
 * @fileoverview Generating JavaScript for motor blocks.
 * @author brady.hurlburt@rovercode.com (Brady L. Hurlburt)
 */
'use strict';

goog.provide('Blockly.JavaScript.motors');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['motors_start'] = function(block) {
  var dropdown_motor = block.getFieldValue('MOTOR');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "setMotor('" + dropdown_motor + "', '" + dropdown_direction + "'";
  if (value_speed && isNaN(parseInt(value_speed))) {
    code += ", " + value_speed + ".toString());\n";
  } else {
    code += ", '" + value_speed + "');\n";
  }
  return code;
};

Blockly.JavaScript['motors_stop'] = function(block) {
  var dropdown_motor = block.getFieldValue('MOTOR');
  var code = "stopMotor('"+dropdown_motor+"');\n";
  return code;
};

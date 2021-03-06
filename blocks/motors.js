/**
 * @license
 * Visual Blocks Editor
 *
 * opyright 2012 Google Inc.
 * Copyright 2016 Brady L. Hurlburt
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
 * @fileoverview Motor blocks for Blockly.
 * @author brady.hurlburt@rovercode.com (Brady L. Hurlburt)
 */
'use strict';

goog.provide('Blockly.Blocks.motors');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.motors.HUE = 42;

Blockly.Blocks['motors_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn on")
        .appendField(new Blockly.FieldDropdown([["left motor", "LEFT"], ["right motor", "RIGHT"], ["both motors", "BOTH"]]), "MOTOR")
        .appendField("going")
        .appendField(new Blockly.FieldDropdown([["forward", "FORWARD"], ["backward", "BACKWARD"]]), "DIRECTION")
        .appendField("at speed");
    this.appendValueInput("SPEED")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motors.HUE);
    this.setTooltip('Set the speed and direction of one or both motors. 0 is stopped; 100 is max speed.');
    this.setHelpUrl('https://docs.rovercode.com/blocks/motors-start');
  }
};

Blockly.Blocks['motors_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop")
        .appendField(new Blockly.FieldDropdown([["left motor", "LEFT"], ["right motor", "RIGHT"], ["both motors", "BOTH"]]), "MOTOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motors.HUE);
    this.setTooltip('Stop one or both motor');
    this.setHelpUrl('https://docs.rovercode.com/blocks/motors-stop');
  }
};

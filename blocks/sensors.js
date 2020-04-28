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
 * @fileoverview Sensors blocks for Blockly.
 * @author brady.hurlburt@rovercode.com (Brady L. Hurlburt)
 */
'use strict';

goog.provide('Blockly.Blocks.sensors');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.sensors.HUE = 160;

Blockly.Blocks['sensors_get_covered'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left", "SENSORS_leftIr"], ["right", "SENSORS_rightIr"]]), "SENSORS");
    this.appendDummyInput()
        .appendField(" sensor is covered");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.sensors.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['light_sensor_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["right","RIGHT"]]), "SENSOR")
        .appendField("light sensor value");
    this.setOutput(true, "Number");
    this.setTooltip("Get the brightness value from a light sensor. 0 is darkest; 1023 is brightest.");
    this.setColour(Blockly.Blocks.sensors.HUE);
    this.setHelpUrl("https://docs.rovercode.com/blocks/light-sensor-value");
  }
};

Blockly.Blocks['button_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("button")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "BUTTON")
        .appendField("has been pressed");
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.sensors.HUE);
    this.setTooltip("Returns true if the button has been pressed since the last time you asked.");
    this.setHelpUrl("https://docs.rovercode.com/blocks/button-press");
  }
};

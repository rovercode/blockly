/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * Copyright 2019 Rovercode
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
 * @fileoverview LED blocks for Blockly.
 * @author brady.hurlburt@rovercode.com (Brady L. Hurlburt)
 */
'use strict';

goog.provide('Blockly.Blocks.leds');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.leds.HUE = 77;

Blockly.Blocks['chainable_rgb_led_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set LED ");
    this.appendValueInput("LED_ID")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("to color ");
    this.appendValueInput("COLOUR")
        .setCheck("Colour");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.leds.HUE);
    this.setTooltip('Set the color of an RGB LED');
    this.setHelpUrl('https://docs.rovercode.com/blocks/chainable_rgb_set');
  }
};


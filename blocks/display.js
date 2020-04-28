/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * Copyright 2020 Brady L. Hurlburt
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
 * @fileoverview Display blocks for Rovercode.
 * @author brady.hurlburt@rovercode.com (Brady L. Hurlburt)
 */
'use strict';

goog.provide('Blockly.Blocks.display');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.display.HUE = 230;

Blockly.Blocks['display_message'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck(["String", "Boolean", "Number"])
        .appendField("display message");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Scroll a message on the 5x5 LED display");
    this.setHelpUrl("https://docs.rovercode.com/blocks/display-string");
  }
};

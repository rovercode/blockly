/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * Copyright 2019 Rovercode.
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
 * @fileoverview Generating JavaScript for LED blocks.
 * @author brady.hurlburt@rovercode.com (Brady L. Hurlburt)
 */
'use strict';

goog.provide('Blockly.JavaScript.leds');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['chainable_rgb_led_set'] = function(block) {
  console.log(block);
  var ledId = Blockly.JavaScript.valueToCode(block, 'LED_ID', Blockly.JavaScript.ORDER_ATOMIC);
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "setChainableRgbLed(" + ledId + ", " + colour + ");";
  return code;
};

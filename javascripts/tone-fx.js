/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');

//// INST and FX Sounds////
module.exports.delayOne = new Tone.FeedbackDelay();
// delayOne.wet.value = 0;

module.exports.phaserOne = new Tone.Phaser();
// phaserOne.wet.value = 0;

module.exports.arpVolPan = new Tone.PanVol();
module.exports.bassVolPan = new Tone.PanVol();
module.exports.beatVolPan = new Tone.PanVol();
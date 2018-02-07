/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');

//// INST and FX Sounds////
let delayOne = new Tone.FeedbackDelay();
// delayOne.wet.value = 0;

let reverbOne = new Tone.Freeverb();
reverbOne.dampening.value = 1600;
// phaserOne.wet.value = 0;

let arpVolPan = new Tone.PanVol();
let bassVolPan = new Tone.PanVol();
let beatVolPan = new Tone.PanVol();

//Compressor
let masterComp = new Tone.Compressor(-30, 3);

module.exports = {
    delayOne,
    reverbOne,
    arpVolPan,
    bassVolPan,
    beatVolPan,
    masterComp
};
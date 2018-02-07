/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');

//// INST and FX Sounds////
let delayOne = new Tone.FeedbackDelay({
    wet: 0,
    delayTime: 0,
    feedback: 0
});
// delayOne.wet.value = 0;

let reverbOne = new Tone.Freeverb({
    dampening: 1600,
    wet: 0,
    roomSize: 0.05
});
// reverbOne.dampening.value = 1600;
// reverbOne.wet.value = 0;
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
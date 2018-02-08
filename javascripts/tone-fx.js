/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');

//// INST and FX Sounds////
let delayOne = new Tone.FeedbackDelay({
    wet: 0,
    delayTime: 0,
    feedback: 0
});

//Arp Reverb
let reverbOne = new Tone.Freeverb({
    dampening: 1600,
    wet: 0.01,
    roomSize: 0.05
});
//Drum Reverb
let drumSlap = new Tone.JCReverb({
    wet: 0,
    roomSize: 0.05
});

//Arp Volume and Pan
let arpVolPan = new Tone.PanVol();
//Bass Volume and Pan
let bassVolPan = new Tone.PanVol();
//Beat Volume and Pan
let beatVolPan = new Tone.PanVol();

//Compressor
let masterComp = new Tone.Compressor(-30, 3);

//Distortion
let drumDisto = new Tone.Distortion({
        distortion  : 0,
        wet: 0,
        oversample: "4x"       
});

module.exports = {
    delayOne,
    reverbOne,
    arpVolPan,
    bassVolPan,
    beatVolPan,
    masterComp,
    drumDisto,
    drumSlap
};
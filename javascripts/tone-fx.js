/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');
const interface = require('./interfaces');

//// INST and FX Sounds////
//Arp Delay
let delayOne = new Tone.FeedbackDelay({
    wet: 0,
    delayTime: 0,
    feedback: 0
});
//Synth Delay
let synthDelay = new Tone.FeedbackDelay({
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
//Master Reverb
let masterReverb = new Tone.Freeverb({
    dampening: 1600,
    wet: 0.01,
    roomSize: 0.05
});

//Arp Volume and Pan
let arpVolPan = new Tone.PanVol();
//Bass Volume and Pan
let bassVolPan = new Tone.PanVol();
//Beat Volume and Pan
let beatVolPan = new Tone.PanVol();
//Synth Volume and Pan
let synthVolPan = new Tone.PanVol();

//Compressor
let masterComp = new Tone.Compressor({
    ratio  : 20,
    threshold: -40 ,
    }
    );

//Distortion
let drumDisto = new Tone.Distortion({
    distortion: 0,
    wet: 0,
    oversample: "4x"
});
//Chebyshev
let drumChebyShev = new Tone.Chebyshev({
    order: 1,
    oversample: "none",
    wet: 0
});

//Master Volume
let masterVolume = new Tone.Volume ({
    volume: 0,
    mute: false
});


// Live Synthesizer
let liveSynth = new Tone.MonoSynth().chain(synthVolPan, synthDelay, Tone.Master);

module.exports = {
    delayOne,
    synthDelay,
    reverbOne,
    masterReverb,
    arpVolPan,
    bassVolPan,
    beatVolPan,
    masterComp,
    masterVolume,
    drumDisto,
    drumSlap,
    liveSynth,
    synthVolPan,
    drumChebyShev
};
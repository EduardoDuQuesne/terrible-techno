/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');
const interface = require('./interfaces');
const fx = require('./tone-fx');

let synth = new Tone.Synth().chain(fx.arpVolPan, fx.delayOne, fx.phaserOne, Tone.Master);
let bassSynth = new Tone.FMSynth().chain(fx.bassVolPan, Tone.Master);
synth.envelope.release = 0.2;
bassSynth.envelope.sustain = 0.1;
// bassSynth.envelope.decay = 0;
// bassSynth.envelope.release = 0.4;

/////Load Chords On Page Load
let arpKeys = [];
let loadChords = () => {
    arpKeys = [];
    for (let i = 0; i < 8; i++) {
        let div = $(`.chord-${i}`);
        arpKeys.push($(`.chord-${i}`).children().filter('.play').attr('value'));
    }
};
/////Change Chords On Click/////
let changeChords = (target) => {
    arpKeys = [];
    target.siblings().removeClass('play');
    target.addClass('play');
    for (let i = 0; i < 8; i++) {
        let div = $(`.chord-${i}`);
        arpKeys.push($(`.chord-${i}`).children().filter('.play').attr('value'));
    }
};

let getChords = () => {
    let arpKeys = [];
    for (let i = 0; i < 8; i++) {
        let div = $(`.chord-${i}`);
        arpKeys.push($(`.chord-${i}`).children().filter('.play').attr('value'));
    }
    return arpKeys;
};


let loadUserChords = (chords) => {
    arpKeys = [];
    let count = 0;
    chords.forEach((chord) => {
        $(`.chord-${count}`).children().removeClass('play');
            $(`.chord-${count}`).find(`.${chord}`).addClass('play');
            arpKeys.push($(`.chord-${count}`).children().filter('.play').attr('value'));
            count += 1;
    });
};


///// Arpeggiator One /////
//Sounds to be replaced later//
let notes = new Tone.Players({
    "A": "../audio/A1.[mp3|ogg]",
    "A#": "../audio/As1.[mp3|ogg]",
    "B": "../audio/B1.[mp3|ogg]",
    "C": "../audio/C2.[mp3|ogg]",
    "C#": "../audio/Cs2.[mp3|ogg]",
    "D": "../audio/D2.[mp3|ogg]",
    "D#": "../audio/Ds2.[mp3|ogg]",
    "E": "../audio/E2.[mp3|ogg]",
    "F": "../audio/F2.[mp3|ogg]",
    "F#": "../audio/Fs2.[mp3|ogg]",
    "G": "../audio/G2.[mp3|ogg]",
    "G#": "../audio/Gs1.[mp3|ogg]"
}, {
    "volume": -10,
    "fadeOut": "64n"
}).chain(fx.arpVolPan, fx.delayOne, fx.phaserOne, Tone.Master);

///// Arpeggiator One ////
//Note Names Arrays//
let noteNames = {
    Imaj: ["A4", "C#4", "E4", "G#4"],
    // ASmin: ["A#", "C#", "F", "G#"],
    iimin: ["B4", "D4", "F#4", "A5"],
    // Cmaj: ["C", "E", "G", "B"],
    iiimin: ["C#4", "E4", "G#4", "B5"],
    IVmaj: ["D4", "F#4", "A5", "C#5"],
    // DSmin: ["D#", "F#", "A#", "C#"],
    Vdom: ["E4", "G#4", "B5", "D5"],
    // Fmaj: ["F", "G#", "C", "D#"],
    vimin: ["F#4", "A5", "C#5", "E5"],
    // Gmaj: ["G", "A#", "C#", "F"],
    viiminb5: ["G#4", "B5", "D5", "F5"]
};
let seqKey = [];
let step = [];
let arpLoop = new Tone.Sequence((time, col) => {
    step = [];
    for (let i = 0; i < 4; i++) {
        step.push(interface.sequencer.matrix.pattern[i][col]);
    }
    for (let i = 0; i < 4; i++) {
        if (step[i] === true) {
           synth.triggerAttackRelease(seqKey[i], "8n");
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");

///// BASS LOOP /////
//Sounds and notes//
let notes2 = new Tone.Players({
    "A": "../audio/A1.[mp3|ogg]",
    "A#": "../audio/As1.[mp3|ogg]",
    "B": "../audio/B1.[mp3|ogg]",
    "C": "../audio/C2.[mp3|ogg]",
    "C#": "../audio/Cs2.[mp3|ogg]",
    "D": "../audio/D2.[mp3|ogg]",
    "D#": "../audio/Ds2.[mp3|ogg]",
    "E": "../audio/E2.[mp3|ogg]",
    "F": "../audio/F2.[mp3|ogg]",
    "F#": "../audio/Fs2.[mp3|ogg]",
    "G": "../audio/G2.[mp3|ogg]",
    "G#": "../audio/Gs1.[mp3|ogg]"
}, {
    "volume": -10,
    "fadeOut": "64n"
}).chain(fx.bassVolPan, Tone.Master);

let noteNamesBass = {
    Imaj: ["A2", "C#2", "E2", "G#2"],
    // ASmin: ["A#", "C#", "F", "G#"],
    iimin: ["B2", "D2", "F#2", "A3"],
    // Cmaj: ["C", "E", "G", "B"],
    iiimin: ["C#2", "E2", "G#2", "B3"],
    IVmaj: ["D2", "F#2", "A3", "C#3"],
    // DSmin: ["D#", "F#", "A#", "C#"],
    Vdom: ["E2", "G#2", "B3", "D3"],
    // Fmaj: ["F", "G#", "C", "D#"],
    vimin: ["F#2", "A3", "C#3", "E3"],
    // Gmaj: ["G", "A#", "C#", "F"],
    viiminb5: ["G#2", "B3", "D3", "F3"]
};

let bassLoop = new Tone.Sequence((time, col) => {
    step = [];
    for (let i = 0; i < 4; i++) {
        step.push(interface.bassSequencer.matrix.pattern[i][col]);
    }
    for (let i = 0; i < 4; i++) {
        if (step[i] === true) {
            bassSynth.triggerAttackRelease(seqKeyBass[i]);
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");


///// DRUM LOOP /////
//Sounds//
let drums = new Tone.Players({
    "kick": "../audio/drums/kick-vinyl02.wav",
    "snare": "../audio/drums/snare-vinyl01.wav",
    "clap": "../audio/drums/clap-808.wav",
    "hihat": "../audio/drums/hihat-acoustic01.wav"
}, {
    "volume": -10,
    "fadeOut": "64n"
}).chain(fx.beatVolPan, Tone.Master);
//Beat Loop//
let step2 = [];
let beatName = ["kick", "snare", "clap", "hihat"];
let drumLoop = new Tone.Sequence((time, col) => {
    step2 = [];
    for (let i = 0; i < 4; i++) {
        step2.push(interface.beatSequencer.matrix.pattern[i][col]);
    }
    for (let i = 0; i < 4; i++) {
        if (step2[i] === true) {
            drums.get(beatName[i]).start(time, 0, "32n", 0);
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");

///// MASTER CHORD LOOP /////
let chordLoop = new Tone.Sequence((time, col) => {
    arpLoop.start();
    bassLoop.start();
    drumLoop.start();
    seqKey = noteNames[arpKeys[col]];
    seqKeyBass = noteNamesBass[arpKeys[col]];
    $(`.chord-${col}`).addClass('border');
    $(`.chord-${col}`).siblings().removeClass('border');

}, [0, 1, 2, 3, 4, 5, 6, 7], "1n");

module.exports = {
    arpKeys,
    arpLoop,
    bassLoop,
    drumLoop,
    chordLoop,
    changeChords,
    loadChords,
    getChords,
    loadUserChords,
};
/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');
const interface = require('./interfaces');
const fx = require('./tone-fx');

///// Arpeggiator Sounds /////
let simpleSynth = new Tone.Synth({
    envelope  : {
        attack  : 0.005 ,
        decay  : 0.1 ,
        sustain  : 0.3 ,
        release  : 1
        }
}).chain(fx.arpVolPan, fx.delayOne, fx.reverbOne, Tone.Master);

let fmSynth = new Tone.FMSynth({
    envelope  : {
        attack  : 0.01 ,
        decay  : 0.01 ,
        sustain  : 1 ,
        release  : 0.5
        }
}).chain(fx.arpVolPan, fx.delayOne, fx.reverbOne, Tone.Master);

let amSynth = new Tone.AMSynth({
    envelope  : {
        attack  : 0.01 ,
        decay  : 0.01 ,
        sustain  : 1 ,
        release  : 0.5
        }
}).chain(fx.arpVolPan, fx.delayOne, fx.reverbOne, Tone.Master);

let synth = simpleSynth;
let synthName = "simpleSynth";
let arpSounds = {  
    "simpleSynth": simpleSynth,
    "FMSynth": fmSynth,
    "AMSynth": amSynth
};

//Arp Sound Select
$('.arp-sound-select').on('click', function () {
    module.exports.synth = arpSounds[$(this).attr('value')];
    synth = arpSounds[$(this).attr('value')];
    synthName = $(this).attr('value');
});
//Store and Recall Arp Sound
let recallArpSound = (synthPatch) => {
    synth = arpSounds[`${synthPatch}`];
};
let storeArpSound = () => {
    return synthName;
};

///// Bass Sounds /////
let bassSimpleSynth = new Tone.Synth({
    envelope  : {
        attack  : 0.005 ,
        decay  : 0.1 ,
        sustain  : 0.3 ,
        release  : 1
        }
}).chain(fx.bassVolPan, Tone.Master);

let bassMonoSynth = new Tone.MonoSynth({
    envelope  : {
        attack  : 0.005 ,
        decay  : 0.1 ,
        sustain  : 0.9 ,
        release  : 1,
        }
}).chain(fx.bassVolPan, Tone.Master);


let bassFMSynth = new Tone.FMSynth({
    envelope  : {
        attack  : 0.01 ,
        decay  : 0.01 ,
        sustain  : 1 ,
        release  : 0.5
        }
}).chain(fx.bassVolPan, Tone.Master);

let bassSynth = bassSimpleSynth;
let bassSynthName = "bassSimpleSynth";
let bassSounds = {
    "bassSimpleSynth": bassSimpleSynth,
    "bassMonoSynth": bassMonoSynth,
    "bassFMSynth": bassFMSynth,
};

//Bass Sound Select
$('.bass-sound-select').on('click', function () {
    console.log('Check3', bassSynth);
    module.exports.bassSynth = bassSounds[$(this).attr('value')];
    bassSynth = bassSounds[$(this).attr('value')];
    bassSynthName = $(this).attr('value');
    // if ($(this).attr('value') !== "bassSimpleSynth") {
    //     fx.bassVolPan.volume.input.value = 0.3;

    // }
    // if ($(this).attr('value') === "bassMonoSynth") {
    //     fx.bassVolPan.volume.input.value = 0.05;

    // }
    

});
//Store and Recall Bass Sounds
let recallBassSound = (synthPatch) => {
    bassSynth = bassSounds[synthPatch];
};
let storeBassSound = () => {
    return bassSynthName;
};


/////Load Chords On Page Load/////
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

/////Get Chords For Settings/////
let getChords = () => {
    let arpKeys = [];
    for (let i = 0; i < 8; i++) {
        let div = $(`.chord-${i}`);
        arpKeys.push($(`.chord-${i}`).children().filter('.play').attr('value'));
    }
    return arpKeys;
};
/////Load Chords on Recall/////
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

///// Arpeggiator One ////
//Note Names Arrays//
let noteNames = {
    Imaj: ["A4", "C#4", "E4", "G#4"],
    iimin: ["B4", "D4", "F#4", "A5"],
    iiimin: ["C#4", "E4", "G#4", "B5"],
    IVmaj: ["D4", "F#4", "A5", "C#5"],
    Vdom: ["E4", "G#4", "B5", "D5"],
    vimin: ["F#4", "A5", "C#5", "E5"],
    viiminb5: ["G#4", "B5", "D5", "F5"]
};
// let noteNames = {
//     Imaj: ["C3", "E3", "G3", "B3"],
//     iimin: ["D3", "F3", "A ", "C "],
//     iiimin: ["E3", "G3", "B ", "D "],
//     IVmaj: ["F3", "A3", "C ", "E "],
//     Vdom: ["G3", "B3", "D ", "F "],
//     vimin: ["A4", "C ", "E ", "G "],
//     viiminb : ["B4", "D ", "F ", "A "]
// };
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

//////Bass//////
//Bass Notes
let noteNamesBass = {
    Imaj: ["A2", "C#2", "E2", "G#2"],
    iimin: ["B2", "D2", "F#2", "A3"],
    iiimin: ["C#2", "E2", "G#2", "B3"],
    IVmaj: ["D2", "F#2", "A3", "C#3"],
    Vdom: ["E2", "G#2", "B3", "D3"],
    vimin: ["F#2", "A3", "C#3", "E3"],
    viiminb5: ["G#2", "B3", "D3", "F3"]
};
//Bass Loop
let bassLoop = new Tone.Sequence((time, col) => {
    step = [];
    for (let i = 0; i < 4; i++) {
        step.push(interface.bassSequencer.matrix.pattern[i][col]);
    }
    for (let i = 0; i < 4; i++) {
        if (step[i] === true) {
            bassSynth.triggerAttackRelease(seqKeyBass[i], "8n");
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
    "volume": 0,
    "fadeOut": "64n"
}).chain(fx.beatVolPan, fx.drumDisto, fx.drumSlap, Tone.Master);
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
    fmSynth,
    amSynth,
    simpleSynth,
    synth,
    synthName,
    storeArpSound,
    recallArpSound,
    arpSounds,
    bassSimpleSynth,
    bassMonoSynth,
    bassFMSynth,
    bassSynth,
    bassSynthName,
    bassSounds,
    storeBassSound,
    recallBassSound
};
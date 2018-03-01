/*jshint esversion: 6 */

const $ = require('jquery');
const interface = require('./interfaces');
const fx = require('./tone-fx');
const firebase = require("./config/fbConfig");
const auth = require('./userFactory');
const factory = require('./songFactory');
const Nexus = require('nexusui');
const Tone = require('tone');
const loops = require('./loops');
const settings = require('./set-settings');
const view = require('./view');

Nexus.context = Tone.context;
Tone.Transport.start();
Tone.Master.chain(fx.masterReverb, fx.masterComp, fx.masterVolume);

let oscilloscope = new Nexus.Oscilloscope('#oscilloscope', {
    'size': [965, 25]
});
let meterDrums = new Nexus.Meter('#stereo-meter-drums', {
    size: [45, 125]
});
let meterBass = new Nexus.Meter('#stereo-meter-bass', {
    size: [45, 125]
});
let meterArp = new Nexus.Meter('#stereo-meter-arp', {
    size: [45, 125]
});
let meterSynth = new Nexus.Meter('#stereo-meter-synth', {
    size: [45, 125]
});
let meterMix = new Nexus.Meter('#stereo-meter-mix', {
    size: [45, 125]
});

//Authorization//
interface.logIn.on("click", function () {
    auth.logIn()
        .then(result => {})
        .catch(error => {
        });
});
interface.logOut.on("click", function () {
    auth.logOut()
        .then(result => {
        });
});
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        $('.logged-out-message').hide();
        $('.user-setting-content').show();
        $("#login-btn").hide();
        $("#logout-btn").show();
        factory.getAllSettings(user.uid)
        .then(settings => {
            let userSettings = settings;
            view.displaySettings(userSettings);
            $('.icon-spin').hide();
        });
    } else {
        $('.user-setting-content').hide();
        $('.logged-out-message').show();
        $('.icon-spin').show();
        $("#login-btn").show();
        $("#logout-btn").hide();
        $("#store-btn").hide();
    }
});

/////Tempo/////
interface.tempoKnob.on("change", function () {
    Tone.Transport.bpm.value = interface.tempoKnob.value;
});

///// Start and Stop /////
let startCount = 0;
$('#play').on("click", () => {
    startCount += 1;
    loops.chordLoop.start();
});
$('#stop').on("click", () => {
    startCount += 1;
    loops.arpLoop.stop();
    loops.chordLoop.stop();
    loops.bassLoop.stop();
    loops.drumLoop.stop();
    loops.styleLoop.stop();
    $('body').removeClass();
});
$(document).on('keydown', function (event) {
    if (!$('#settings-title').is(":focus") &&
        event.which === 32) {
        startCount += 1;
        event.preventDefault();
        if (startCount % 2 !== 0) {
            loops.chordLoop.start();
        } else {
            loops.arpLoop.stop();
            loops.chordLoop.stop();
            loops.bassLoop.stop();
            loops.drumLoop.stop();
            loops.styleLoop.stop();
            $('body').removeClass();
        }
    }
});
$(`.header`).on('click', function () {
    loops.styleLoop.start();
});

/////User Settings/////

//Store Settings//
$("#save-settings").on("click", function () {
    if ($('#save-btn').hasClass('red-icon') === true) {
        $('#save-btn').removeClass('red-icon');
        $('#settings-title').hide();
        $('.save-text').show();
    } else {
        $('#settings-title').show();
        $('#settings-title').focus();
        $('#save-btn').addClass('red-icon');
        $('.save-text').hide();
    }
});
$('#settings-title').on('keypress', function (e) {
    if (e.which === 13 && $('#save-btn').hasClass('red-icon') === true) {
        let input = $('#settings-title').val();
        let currentSettings = settings.storeSettings(input);
        factory.storeSettings(currentSettings);
        $('#settings-title').blur().val('');
        $('#save-btn').removeClass('red-icon');
        $('#settings-title').hide();
        $('.save-text').show();
        factory.getAllSettings(firebase.auth().currentUser.uid)
            .then(settings => {
                let userSettings = settings;
                view.displaySettings(userSettings);
            });
    }
});
/////Load Setting/////
$(document).on("click", ".get-setting", function () {
    let user = firebase.auth().currentUser.uid;
    let settingId = $(this).attr('id');
    $('.get-setting').removeClass("highlight");
    factory.getSetting(settingId)
        .then(setting => {
            meterArp.connect(loops.arpSounds[setting.arpSound]);
            meterBass.connect(loops.bassSounds[setting.bassSound]);
            $(this).addClass("highlight");
            settings.recallSetting(setting);
        });
});

/////Delete Setting/////
$(document).on("click", ".delete-setting", function () {
    let fbId = $(this).attr('id').slice(4);
    factory.deleteSetting(fbId)
        .then(() => {
            return factory.getAllSettings(firebase.auth().currentUser.uid);
        })
        .then(settings => {
            let userSettings = settings;
            view.displaySettings(userSettings);
        });
});

/////Clear Settings/////
$("#clear-settings").on("click", function () {});


/////Set class to play on all 'Iman' chords on startup/////
$(document).ready(function () {
    loops.loadChords();
});

/////Reassign Chords Array on Grid/////
$('p.chord').on('click', function () {
    let target = $(this);
    loops.changeChords(target);
});

/////DELAY/////
interface.dialDelayWet.on('change', function () {
    fx.delayOne.wet.value = interface.dialDelayWet.value;

});
interface.dialDelayFeedback.on('change', function () {
    fx.delayOne.feedback.value = interface.dialDelayFeedback.value;

});
interface.dialDelayTime.on('change', function () {
    fx.delayOne.delayTime.value = interface.dialDelayTime.value;
});

/////Reverb/////
interface.dialReverbWet.on('change', function () {
    fx.reverbOne.wet.value = interface.dialReverbWet.value;
});
interface.dialReverbDampening.on('change', function () {
    fx.reverbOne.dampening.value = interface.dialReverbDampening.value;
});
interface.dialReverbRoomSize.on('change', function () {
    fx.reverbOne.roomSize.value = interface.dialReverbRoomSize.value;
});

//Sequencer Select
let counter = 0;
let seqTab = ["Arpeggiator", "Bass", "Rhythm", "Synthesizer", "Chords"];
$(".tab-select").on("click", function () {
    let value = $(this).attr('value');
    $(`#${value}`).show();
    $(`#${value}`).siblings().hide();
    $(`.tab-select-${value}`).addClass('highlight');
    $(`.tab-select-${value}`).siblings().removeClass('highlight');
    counter = seqTab.indexOf(value);
});
//Tab Through Sequencer
$(document).on('keyup', function (event) {
    if (event.which === 187) {
        counter += 1;
        if (counter === seqTab.length) {
            counter = 0;
        }
    } else if (event.which === 189) {
        counter -= 1;
        if (counter === -1) {
            counter = seqTab.length - 1;
        }
    }
    $(`#${seqTab[counter]}`).show();
    $(`#${seqTab[counter]}`).siblings().hide();
    $(`.tab-select-${seqTab[counter]}`).addClass('highlight');
    $(`.tab-select-${seqTab[counter]}`).siblings().removeClass('highlight');
});


/////VOL AND PAN/////
interface.arpVolPanKnob.on('change', function () {
    fx.arpVolPan.volume.input.value = interface.arpVolPanKnob.y;
    fx.arpVolPan.pan.value = interface.arpVolPanKnob.x;
});
interface.bassVolPanKnob.on('change', function () {
    fx.bassVolPan.volume.input.value = interface.bassVolPanKnob.y;
    fx.bassVolPan.pan.value = interface.bassVolPanKnob.x;
});
interface.beatVolPanKnob.on('change', function () {
    fx.beatVolPan.volume.input.value = interface.beatVolPanKnob.y;
    fx.beatVolPan.pan.value = interface.beatVolPanKnob.x;
});
interface.synthVolPanKnob.on('change', function () {
    fx.synthVolPan.volume.input.value = interface.synthVolPanKnob.y;
    fx.synthVolPan.pan.value = interface.synthVolPanKnob.x;
});

/////Master Section/////
//Master Compressor
interface.thresholdKnob.on("change", function (value) {
    fx.masterComp.threshold.value = value;
});
interface.thresholdNumber.link(interface.thresholdKnob);

interface.ratioKnob.on("change", function (value) {
    fx.masterComp.ratio.value = value;
});
interface.ratioNumber.link(interface.ratioKnob);

interface.attackKnob.on("change", function (value) {
    fx.masterComp.attack.value = value;
});
interface.attackNumber.link(interface.attackKnob);

interface.releaseKnob.on("change", function (value) {
    fx.masterComp.release.value = value;
});
interface.releaseNumber.link(interface.releaseKnob);

//Master Reverb
interface.dialMasterReverbWet.on('change', function (value) {
    fx.masterReverb.wet.value = value;
});
interface.dialMasterReverbDampening.on('change', function (value) {
    fx.masterReverb.dampening.value = value;
});
interface.dialMasterReverbRoomSize.on('change', function (value) {
    fx.masterReverb.roomSize.value = value;
});

//Master Volume
interface.dialMasterVolume.on("change", function (value) {
    Tone.Master.volume.value = value;
});
$(document).on("keydown", function (event) {
    if (event.which === 40) {

        Tone.Master.volume.value = Tone.Master.volume.value - 10;
        interface.dialMasterVolume.value = interface.dialMasterVolume.value - 10;
        event.preventDefault();
    }
    if (event.which === 38) {
        Tone.Master.volume.value = Tone.Master.volume.value + 10;
        interface.dialMasterVolume.value = interface.dialMasterVolume.value + 10;
        event.preventDefault();
    }
});

///// Arpeggiator Synth Envelopes //////
let currentSynth = loops.arpSounds.simpleSynth;
let currentBassSynth = loops.bassSounds.bassSimpleSynth;
$(document).ready(function () {
    meterArp.connect(currentSynth);
    meterBass.connect(currentBassSynth);
});
$('.arp-sound-select').on('click', function () {
    $(this).addClass('highlight-soft');
    $(this).siblings().removeClass('highlight-soft');
    currentSynth = loops.arpSounds[$(this).attr('value')];
    meterArp.connect(currentSynth);
    interface.arpSynthEnvelope.setSlider(0, loops.arpSounds[$(this).attr('value')].envelope.attack);
    interface.arpSynthEnvelope.setSlider(1, loops.arpSounds[$(this).attr('value')].envelope.decay);
    interface.arpSynthEnvelope.setSlider(2, loops.arpSounds[$(this).attr('value')].envelope.sustain);
    interface.arpSynthEnvelope.setSlider(3, loops.arpSounds[$(this).attr('value')].envelope.release);
});
$(document).on('mouseup', '.fm-multislider', function () {
    currentSynth.envelope.attack = interface.arpSynthEnvelope.values[0];
    currentSynth.envelope.decay = interface.arpSynthEnvelope.values[1];
    currentSynth.envelope.sustain = interface.arpSynthEnvelope.values[2];
    currentSynth.envelope.release = interface.arpSynthEnvelope.values[3];
});

///// Bass Synth Envelopes /////
$('.bass-sound-select').on('click', function () {
    $(this).addClass('highlight-soft');
    $(this).siblings().removeClass('highlight-soft');
    currentBassSynth = loops.bassSounds[$(this).attr('value')];
    meterBass.connect(currentBassSynth);
    interface.bassSynthEnvelope.setSlider(0, loops.bassSounds[$(this).attr('value')].envelope.attack);
    interface.bassSynthEnvelope.setSlider(1, loops.bassSounds[$(this).attr('value')].envelope.decay);
    interface.bassSynthEnvelope.setSlider(2, loops.bassSounds[$(this).attr('value')].envelope.sustain);
    interface.bassSynthEnvelope.setSlider(3, loops.bassSounds[$(this).attr('value')].envelope.release);
});
$(document).on('mouseup', '.bass-multislider', function () {
    currentBassSynth.envelope.attack = interface.bassSynthEnvelope.values[0];
    currentBassSynth.envelope.decay = interface.bassSynthEnvelope.values[1];
    currentBassSynth.envelope.sustain = interface.bassSynthEnvelope.values[2];
    currentBassSynth.envelope.release = interface.bassSynthEnvelope.values[3];
});

/////Drum Distortion/////
interface.drumDistoWetDial.on("change", function (value) {
    fx.drumDisto.wet.value = value;
});

interface.drumDistoAmountDial.on("change", function (value) {
    fx.drumDisto.distortion = value;
});

/////Drum Slap/////
interface.dialDrumSlapWet.on("change", function (value) {
    fx.drumSlap.wet.value = value;
});
interface.dialDrumSlapRoomSize.on("change", function (value) {
    fx.drumSlap.roomSize.value = value;
});

//// Drum Chebyshev /////
interface.dialDrumChebyWet.on("change", function (value) {
    fx.drumChebyShev.wet.value = value;
});
interface.dialDrumChebyOrder.on("change", function (value) {
    fx.drumChebyShev.order = value;
});
let sampleValue = ["none", "2x", "4x"];
interface.dialDrumChebyOverSample.on("change", function (value) {
    fx.drumChebyShev.oversample = sampleValue[value];
});

///// Mutes /////
let drumMuteCount = 0;
$(document).on("keydown", function (event) {
    if (event.which === 49) {
        drumMuteCount += 1;
        if (drumMuteCount % 2 !== 0) {
            loops.drums.mute = true;
        }
        if (drumMuteCount % 2 === 0) {
            loops.drums.mute = false;
        }
    }
});

/////Live Synth/////
//Note Array for Piano Clicks
let noteArray = ["C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
    "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6"
];
//Click on Piano Keys
interface.liveSynthKeyboard.on("change", function (key) {
    if (key.state === true) {
        fx.liveSynth.triggerAttack(noteArray[key.note]);
    }
    if (key.state === false) {
        fx.liveSynth.triggerRelease();
    }
});
//Play with Keyboard
let octave = 4;
let keyboardNotes = {
    "key-65": `C${octave}`,
    "key-87": `C#${octave}`,
    "key-83": `D${octave}`,
    "key-69": `D#${octave}`,
    "key-68": `E${octave}`,
    "key-70": `F${octave}`,
    "key-84": `F#${octave}`,
    "key-71": `G${octave}`,
    "key-89": `G#${octave}`,
    "key-72": `A${octave}`,
    "key-85": `A#${octave}`,
    "key-74": `B${octave}`,
    "key-75": `C${octave + 1}`,
    "key-79": `C#${octave + 1}`,
    "key-76": `D${octave + 1}`,
    "key-80": `D#${octave + 1}`,
    "key-186": `E${octave + 1}`
};

let keyDown = false;
let lastKeyDown = 0;
let index = 0;
let downIndex = 0;
$(document).on("keydown", function (event) {
    if (!$('#settings-title').is(":focus") &&
        !keyDown &&
        keyboardNotes[`key-${event.which}`] !== undefined) {
        lastKeyDown = event.which;
        downIndex = noteArray.indexOf(keyboardNotes[`key-${event.which}`]);
        interface.liveSynthKeyboard.keys[downIndex].state = true;
        keyDown = true;
    }
    if (!$('#settings-title').is(":focus") && keyDown &&
        event.which !== lastKeyDown &&
        keyboardNotes[`key-${event.which}`] !== undefined) {
        interface.liveSynthKeyboard.keys[downIndex].state = false;
        downIndex = noteArray.indexOf(keyboardNotes[`key-${event.which}`]);
        interface.liveSynthKeyboard.keys[downIndex].state = true;
    }
    lastKeyDown = event.which;
});
$(document).on("keyup", function (event) {
    let upIndex = noteArray.indexOf(keyboardNotes[`key-${event.which}`]);
    if (interface.liveSynthKeyboard.keys[downIndex].state !== undefined &&
        downIndex === upIndex) {
        interface.liveSynthKeyboard.keys[downIndex].state = false;
        keyDown = false;
    }
});

//////settings
//Octave
interface.octaveInterface.on("change", function (value) {
    octave = value;
    keyboardNotes = {
        "key-65": `C${octave}`,
        "key-87": `C#${octave}`,
        "key-83": `D${octave}`,
        "key-69": `D#${octave}`,
        "key-68": `E${octave}`,
        "key-70": `F${octave}`,
        "key-84": `F#${octave}`,
        "key-71": `G${octave}`,
        "key-89": `G#${octave}`,
        "key-72": `A${octave}`,
        "key-85": `A#${octave}`,
        "key-74": `B${octave}`,
        "key-75": `C${octave + 1}`,
        "key-79": `C#${octave + 1}`,
        "key-76": `D${octave + 1}`,
        "key-80": `D#${octave + 1}`,
        "key-186": `E${octave + 1}`
    };
});

//Type
interface.selectSynthType.on("change", function (type) {
    fx.liveSynth.oscillator.type = type.value;
});
//Envelope
interface.synthAttackDial.on("change", function (value) {
    fx.liveSynth.envelope.attack = value;
});
interface.synthDecayDial.on("change", function (value) {
    fx.liveSynth.envelope.decay = value;
});
interface.synthSustainDial.on("change", function (value) {
    fx.liveSynth.envelope.sustain = value;
});
interface.synthReleaseDial.on("change", function (value) {
    fx.liveSynth.envelope.release = value;
});
//filter envelope
interface.synthFilterAttackDial.on("change", function (value) {
    fx.liveSynth.filterEnvelope.attack = value;
});
interface.synthFilterDecayDial.on("change", function (value) {
    fx.liveSynth.filterEnvelope.decay = value;
});
interface.synthFilterSustainDial.on("change", function (value) {
    fx.liveSynth.filterEnvelope.sustain = value;
});
interface.synthFilterReleaseDial.on("change", function (value) {
    fx.liveSynth.filterEnvelope.release = value;
});
//portamento
interface.synthPortamentoDial.on("change", function (value) {
    fx.liveSynth.portamento = value;
});
interface.synthDetuneDial.on("change", function (value) {
    fx.liveSynth.detune.value = value;
});
$('.dial-detune').on('click', function () {
    fx.liveSynth.detune.value = 0;
    interface.synthDetuneDial.value = 0;
});
//synth delay
interface.dialSynthDelayWet.on('change', function (value) {
    fx.synthDelay.wet.value = value;

});
interface.dialSynthDelayFeedback.on('change', function (value) {
    fx.synthDelay.feedback.value = value;

});
interface.dialSynthDelayTime.on('change', function (value) {
    fx.synthDelay.delayTime.value = value;
});

//Connect Meters and Oscilloscope
oscilloscope.connect(Tone.Master);
meterDrums.connect(loops.drums);
meterSynth.connect(fx.liveSynth);
meterMix.connect(Tone.Master);
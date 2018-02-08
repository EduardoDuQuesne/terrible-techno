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
Tone.Master.chain(fx.masterComp);
// interface.spectogram.connect(Tone.Master);

//Authorization//
interface.logIn.on("click", function () {
    auth.logIn()
        .then(result => {})
        .catch(error => {
            console.log('Error: ', error);
        });
});
interface.logOut.on("click", function () {
    auth.logOut()
        .then(result => {});
});
firebase.auth().onAuthStateChanged((user) => {
    console.log('User: ', user);
    if (user) {
        $("#login-btn").hide();
        $("#logout-btn").show();
        $("#store-btn").show();
        factory.getAllSettings(user.uid)
            .then(settings => {
                let userSettings = settings;
                view.displaySettings(userSettings);
                $('.icon-spin').hide();
            });
    } else {
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
});
$(document).on('keydown', function (event) {
    
    if (event.which === 32) {
        startCount += 1;
        event.preventDefault();
        if (startCount % 2 !== 0) {
            loops.chordLoop.start();
        } else {
            loops.arpLoop.stop();
            loops.chordLoop.stop();
            loops.bassLoop.stop();
            loops.drumLoop.stop();
        }
    }
});

/////User Settings/////

//Store Settings//
$("#save-settings").on("click", function () {
    $('#settings-title').focus();
    $('#save-btn').addClass('red-icon');
});
$('#settings-title').on('keypress', function (e) {
    if (e.which === 13 && $('#save-btn').hasClass('red-icon') === true) {
        let input = $('#settings-title').val();
        let currentSettings = settings.storeSettings(input);
        factory.storeSettings(currentSettings);
        $('#settings-title').blur().val('');
        $('#save-btn').removeClass('red-icon');
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
    factory.getSetting(settingId)
        .then(setting => {
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
/////Select Button Listeners/////
//Arp Fx
interface.selectFx.on('change', function (select) {
    $(`.show-${select.value}`).show();
    $(`.show-${select.value}`).siblings().hide();
});
//Drum Fx
interface.selectDrumFx.on('change', function (select) {
    $(`.show-${select.value}`).show();
    $(`.show-${select.value}`).siblings().hide();
});
//Sequencer
$(".tab-select").on("click", function () {
    let value = $(this).attr('value');
    $(`#${value}`).show();
    $(`#${value}`).siblings().hide();
});
//Tab Through Sequencer
let seqTab = ["Arpeggiator", "Bass", "Rhythm"];
let counter = 0;
$(document).on('keyup', function (event) {
    console.log('Key Check', event.which);
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

/////Master Compressor/////
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

///// Arpeggiator Synth Envelopes //////
let currentSynth = loops.arpSounds.simpleSynth;
$('.arp-sound-select').on('click', function () {
    currentSynth = loops.arpSounds[$(this).attr('value')];
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
let currentBassSynth = loops.bassSounds.bassSimpleSynth;
$('.bass-sound-select').on('click', function () {
    currentBassSynth = loops.bassSounds[$(this).attr('value')];
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

/////Drum Reverb/////
interface.dialDrumSlapWet.on("change", function (value) {
    fx.drumSlap.wet.value = value;
});
interface.dialDrumSlapRoomSize.on("change", function (value) {
    fx.drumSlap.roomSize.value = value;
});
/*jshint esversion: 6 */

const $ = require('jquery');
const fx = require('./tone-fx');
const interface = require('./interfaces');
const Tone = require('tone');
const firebase = require("./config/fbConfig");
const loops = require('./loops');

module.exports.storeSettings = (input) => {
    let currentChords = loops.getChords();
    let arpSoundName = loops.storeArpSound();
    let bassSoundName = loops.storeBassSound();
    let settings = {
        //uid//
        uid: firebase.auth().currentUser.uid,
        title: input,
        //tempo//
        tempo: Tone.Transport.bpm.value,
        tempoDisplay: interface.tempoKnob.value,
        //arp//
        arpMatrix: interface.sequencer.matrix.pattern,
        arpPan: fx.arpVolPan.pan.value,
        arpPanDisplay: interface.arpVolPanKnob.x,
        arpVol: fx.arpVolPan.volume.input.value,
        arpVolDisplay: interface.arpVolPanKnob.y,
        //arp sound//
        arpSound: arpSoundName,
        //bass sound//
        bassSound: bassSoundName,
        //bass//
        bassMatrix: interface.bassSequencer.matrix.pattern,
        bassPan: fx.bassVolPan.pan.value,
        bassPanDisplay: interface.bassVolPanKnob.x,
        bassVol: fx.bassVolPan.volume.input.value,
        bassVolDisplay: interface.bassVolPanKnob.y,
        //drums//  
        beatMatrix: interface.beatSequencer.matrix.pattern,
        beatPan: fx.beatVolPan.pan.value,
        beatPanDisplay: interface.beatVolPanKnob.x,
        beatVol: fx.beatVolPan.volume.input.value,
        beatVolDisplay: interface.beatVolPanKnob.y,
        //arp delay//
        delayOneWet: fx.delayOne.wet.value,
        delayOneDisplay: interface.dialDelayWet.value,
        delayOneFB: fx.delayOne.feedback.value,
        delayOneFBDisplay: interface.dialDelayFeedback.value,
        delayOneTime: fx.delayOne.delayTime.value,
        delayOneTimeDisplay: interface.dialDelayTime.value,
        //arp reverb//
        reverbOneWet: fx.reverbOne.wet.value,
        reverbOneWetDisplay: interface.dialReverbWet.value,
        reverbOneDampening: fx.reverbOne.dampening.value,
        reverbOneDampeningDisplay: interface.dialReverbDampening.value,
        reverbOneRoomSize: fx.reverbOne.roomSize.value,
        reverbOneRoomSizeDisplay: interface.dialReverbRoomSize.value,
        //arp envelope//
        arpSimpleEnvAttack: loops.simpleSynth.envelope.attack,
        arpSimpleEnvDecay: loops.simpleSynth.envelope.decay,
        arpSimpleEnvSustain: loops.simpleSynth.envelope.sustain,
        arpSimpleEnvRelease: loops.simpleSynth.envelope.release,
        arpFMEnvAttack: loops.fmSynth.envelope.attack,
        arpFMEnvDecay: loops.fmSynth.envelope.decay,
        arpFMEnvSustain: loops.fmSynth.envelope.sustain,
        arpFMEnvRelease: loops.fmSynth.envelope.release,
        arpAMEnvAttack: loops.amSynth.envelope.attack,
        arpAMEnvDecay: loops.amSynth.envelope.decay,
        arpAMEnvSustain: loops.amSynth.envelope.sustain,
        arpAMEnvRelease: loops.amSynth.envelope.release,
        //bass envelope//
        bassSimpleEnvAttack: loops.bassSimpleSynth.envelope.attack,
        bassSimpleEnvDecay: loops.bassSimpleSynth.envelope.decay,
        bassSimpleEnvSustain: loops.bassSimpleSynth.envelope.sustain,
        bassSimpleEnvRelease: loops.bassSimpleSynth.envelope.release,
        bassMonoEnvAttack: loops.bassMonoSynth.envelope.attack,
        bassMonoEnvDecay: loops.bassMonoSynth.envelope.decay,
        bassMonoEnvSustain: loops.bassMonoSynth.envelope.sustain,
        bassMonoEnvRelease: loops.bassMonoSynth.envelope.release,
        bassFMEnvAttack: loops.bassFMSynth.envelope.attack,
        bassFMEnvDecay: loops.bassFMSynth.envelope.decay,
        bassFMEnvSustain: loops.bassFMSynth.envelope.sustain,
        bassFMEnvRelease: loops.bassFMSynth.envelope.release,
        //drum distortion
        drumDistoWet: fx.drumDisto.wet.value,
        drumDistoAmount: fx.drumDisto.distortion,
        //drum reverb
        drumSlapWet: fx.drumSlap.wet.value,
        drumSlapRoomSize: fx.drumSlap.roomSize.value,
        //Chords//
        chords: currentChords
    };
    console.log('SETTINGS!', settings);
    return settings;
};

module.exports.recallSetting = (setting) => {
    console.log('Setting: ', setting);
    loops.loadUserChords(setting.chords);
    Tone.Transport.bpm.value = setting.tempo;
    interface.tempoKnob.value = setting.tempoDisplay;
    //arp//
    interface.sequencer.matrix.set.all(setting.arpMatrix);
    fx.arpVolPan.pan.value = setting.arpPan;
    interface.arpVolPanKnob.x = setting.arpPanDisplay;
    fx.arpVolPan.volume.input.value = setting.arpVol;
    interface.arpVolPanKnob.y = setting.arpVolDisplay;
    //arp sound//
    loops.recallArpSound(setting.arpSound);
    //bass sound
    loops.recallBassSound(setting.bassSound);
    //bass//
    interface.bassSequencer.matrix.set.all(setting.bassMatrix);
    fx.bassVolPan.pan.value = setting.bassPan;
    interface.bassVolPanKnob.x = setting.bassPanDisplay;
    fx.bassVolPan.volume.input.value = setting.bassVol;
    interface.bassVolPanKnob.y = setting.bassVolDisplay;
    //drums//  
    interface.beatSequencer.matrix.set.all(setting.beatMatrix);
    fx.beatVolPan.pan.value = setting.beatPan;
    interface.beatVolPanKnob.x = setting.beatPanDisplay;
    fx.beatVolPan.volume.input.value = setting.beatVol;
    interface.beatVolPanKnob.y = setting.beatVolDisplay;
    //arp delay//
    fx.delayOne.wet.value = setting.delayOneWet;
    interface.dialDelayWet.value = setting.delayOneDisplay;
    fx.delayOne.feedback.value = setting.delayOneFB;
    interface.dialDelayFeedback.value = setting.delayOneFBDisplay;
    fx.delayOne.delayTime.value = setting.delayOneTime;
    interface.dialDelayTime.value = setting.delayOneTimeDisplay;
    //arp reverb//
    fx.reverbOne.wet.value = setting.reverbOneWet;
    interface.dialReverbWet.value = setting.reverbOneWetDisplay;
    fx.reverbOne.dampening.value = setting.reverbOneDampening;
    interface.dialReverbDampening.value = setting.reverbOneDampeningDisplay;
    fx.reverbOne.roomSize.value = setting.reverbOneRoomSize;
    interface.dialReverbRoomSize.value = setting.reverbOneRoomSizeDisplay;
    //arp envelope
    // setEnvDisplay(setting.arpSound);
    loops.simpleSynth.envelope.attack = setting.arpSimpleEnvAttack;
    loops.simpleSynth.envelope.decay = setting.arpSimpleEnvDecay;
    loops.simpleSynth.envelope.sustain = setting.arpSimpleEnvSustain;
    loops.simpleSynth.envelope.release = setting.arpSimpleEnvRelease;
    loops.fmSynth.envelope.attack = setting.arpFMEnvAttack;
    loops.fmSynth.envelope.decay = setting.arpFMEnvDecay;
    loops.fmSynth.envelope.sustain = setting.arpFMEnvSustain;
    loops.fmSynth.envelope.release = setting.arpFMEnvRelease;
    loops.amSynth.envelope.attack = setting.arpAMEnvAttack;
    loops.amSynth.envelope.decay = setting.arpAMEnvDecay;
    loops.amSynth.envelope.sustain = setting.arpAMEnvSustain;
    loops.amSynth.envelope.release = setting.arpAMEnvRelease;
    //bass envelope
    loops.bassSimpleSynth.envelope.attack = setting.bassSimpleEnvAttack;
    loops.bassSimpleSynth.envelope.decay = setting.bassSimpleEnvDecay;
    loops.bassSimpleSynth.envelope.sustain = setting.bassSimpleEnvSustain;
    loops.bassSimpleSynth.envelope.release = setting.bassSimpleEnvRelease;
    loops.bassMonoSynth.envelope.attack = setting.bassMonoEnvAttack;
    loops.bassMonoSynth.envelope.decay = setting.bassMonoEnvDecay;
    loops.bassMonoSynth.envelope.sustain = setting.bassMonoEnvSustain;
    loops.bassMonoSynth.envelope.release = setting.bassMonoEnvRelease;
    loops.bassFMSynth.envelope.attack = setting.bassFMEnvAttack;
    loops.bassFMSynth.envelope.decay = setting.bassFMEnvDecay;
    loops.bassFMSynth.envelope.sustain = setting.bassFMEnvSustain;
    loops.bassFMSynth.envelope.release = setting.bassFMEnvRelease;
    //drum disto
    fx.drumDisto.wet.value = setting.drumDistoWet;
    interface.drumDistoWetDial.value = setting.drumDistoWet;
    fx.drumDisto.distortion = setting.drumDistoAmount;
    interface.drumDistoAmountDial.value = setting.drumDistoAmount;
    //drum slap
    fx.drumSlap.wet.value = setting.drumSlapWet;
    interface.dialDrumSlapWet.value = setting.drumSlapWet;
    fx.drumSlap.roomSize.value = setting.drumSlapRoomSize;
    interface.dialDrumSlapRoomSize.value = setting.drumSlapRoomSize;
};

// let setEnvDisplay = (synthPatch) => {
//     console.log('synthpatch', loops.arpSounds[synthPatch].envelope.attack );
//     let env1 = loops.arpSounds[synthPatch].envelope.attack;
//     let env2 = loops.arpSounds[synthPatch].envelope.decay;
//     let env3 = loops.arpSounds[synthPatch].envelope.sustain;
//     let env4 = loops.arpSounds[synthPatch].envelope.release;
//     interface.arpSynthEnvelope.setSlider(0, env1);
//     interface.arpSynthEnvelope.setSlider(1, env2);
//     interface.arpSynthEnvelope.setSlider(2, env3);
//     interface.arpSynthEnvelope.setSlider(3, env4);
// };
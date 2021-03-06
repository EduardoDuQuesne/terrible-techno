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
        //drum chebyshev
        drumChebyWet: fx.drumChebyShev.wet.value,
        drumChebyOrder: fx.drumChebyShev.order,
        drumChebyOverSample: fx.drumChebyShev.oversample,
        drumChebyOverSampleDisplay: interface.dialDrumChebyOverSample.value,
        //Chords//
        chords: currentChords,
        //synth
        synthType: fx.liveSynth.oscillator.type,
        synthAttack: fx.liveSynth.envelope.attack,
        synthDecay: fx.liveSynth.envelope.decay,
        synthSustain: fx.liveSynth.envelope.sustain,
        synthRelease: fx.liveSynth.envelope.release,
        synthFilterAttack: fx.liveSynth.filterEnvelope.attack,
        synthFilterDecay: fx.liveSynth.filterEnvelope.decay,
        synthFilterSustain: fx.liveSynth.filterEnvelope.sustain,
        synthFilterRelease: fx.liveSynth.filterEnvelope.release,
        synthPortamento: fx.liveSynth.portamento,
        synthDetune: fx.liveSynth.detune.value,
        synthPan: fx.synthVolPan.pan.value,
        synthPanDisplay: interface.synthVolPanKnob.x,
        synthVol: fx.synthVolPan.volume.input.value,
        synthVolDisplay: interface.synthVolPanKnob.y,
        //synth delay
        synthDelayWet: fx.synthDelay.wet.value,
        synthDelayFeedback: fx.synthDelay.feedback.value,
        synthDelayWetTime: fx.synthDelay.delayTime.value,
        //master comp
        masterCompThresh: fx.masterComp.threshold.value,
        masterCompRatio: fx.masterComp.ratio.value,
        masterCompAttack: fx.masterComp.attack.value,
        masterCompRelease: fx.masterComp.release.value,
        //master reverb
        masterReverbWet: fx.masterReverb.wet.value,
        masterReverbDampening: fx.masterReverb.dampening.value,
        masterReverbRoomSize: fx.masterReverb.roomSize.value



    };
    return settings;
};

module.exports.recallSetting = (setting) => {
    loops.loadUserChords(setting.chords);
    loops.recallSoundDisplay(setting.arpSound, setting.bassSound);
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
    //drum ChebyShev
    fx.drumChebyShev.wet.value = setting.drumChebyWet;
    interface.dialDrumChebyWet.value = setting.drumChebyWet;
    fx.drumChebyShev.order = setting.drumChebyOrder;
    interface.dialDrumChebyOrder.value = setting.drumChebyOrder;
    fx.drumChebyShev.oversample = setting.drumChebyOverSample;
    interface.dialDrumChebyOverSample.value = setting.drumChebyOverSampleDisplay;
    //synth settings
    fx.liveSynth.oscillator.type = setting.synthType;
    interface.selectSynthType.value = setting.synthType;
    fx.liveSynth.envelope.attack = setting.synthAttack;
    interface.synthAttackDial.value = setting.synthAttack;
    fx.liveSynth.envelope.decay = setting.synthDecay;
    interface.synthDecayDial.value = setting.synthDecay;
    fx.liveSynth.envelope.sustain = setting.synthSustain;
    interface.synthSustainDial.value = setting.synthSustain;
    fx.liveSynth.envelope.release = setting.synthRelease;
    interface.synthReleaseDial.value = setting.synthRelease;
    fx.liveSynth.filterEnvelope.attack = setting.synthFilterAttack;
    interface.synthFilterAttackDial.value = setting.synthFilterAttack;
    fx.liveSynth.filterEnvelope.decay = setting.synthFilterDecay;
    interface.synthFilterDecayDial.value = setting.synthFilterDecay;
    fx.liveSynth.filterEnvelope.sustain = setting.synthFilterSustain;
    interface.synthFilterSustainDial.value = setting.synthFilterSustain;
    fx.liveSynth.filterEnvelope.release = setting.synthFilterRelease;
    interface.synthFilterReleaseDial.value = setting.synthFilterRelease;
    fx.liveSynth.portamento = setting.synthPortamento;
    interface.synthPortamentoDial.value = setting.synthPortamento;
    fx.liveSynth.detune.value = setting.synthDetune;
    interface.synthDetuneDial.value = setting.synthDetune;
    fx.synthVolPan.pan.value = setting.synthPan;
    interface.synthVolPanKnob.x = setting.synthPanDisplay;
    fx.synthVolPan.volume.input.value = setting.synthVol;
    interface.synthVolPanKnob.y = setting.synthVolDisplay;
    //Synth Delay
    fx.synthDelay.wet.value = setting.synthDelayWet;
    interface.dialSynthDelayWet.value = setting.synthDelayWet;
    fx.synthDelay.feedback.value = setting.synthDelayFeedback;
    interface.dialSynthDelayFeedback.value = setting.synthDelayFeedback;
    fx.synthDelay.delayTime.value = setting.synthDelayWetTime;
    interface.dialSynthDelayTime.value = setting.synthDelayWetTime;
    //Master Comp
    fx.masterComp.threshold.value = setting.masterCompThresh;
    interface.thresholdKnob.value = setting.masterCompThresh;
    fx.masterComp.ratio.value = setting.masterCompRatio;
    interface.ratioKnob.value = setting.masterCompRatio;
    fx.masterComp.attack.value = setting.masterCompAttack;
    interface.attackKnob.value = setting.masterCompAttack;
    fx.masterComp.release.value = setting.masterCompRelease;
    interface.releaseKnob.value = setting.masterCompRelease;
    //Master Reverb
    fx.masterReverb.wet.value = setting.masterReverbWet;
    interface.dialMasterReverbWet.value = setting.masterReverbWet;
    fx.masterReverb.dampening.value = setting.masterReverbDampening;
    interface.dialMasterReverbDampening.value = setting.masterReverbDampening;
    fx.masterReverb.roomSize.value = setting.masterReverbRoomSize;
    interface.dialMasterReverbRoomSize.value = setting.masterReverbRoomSize;
};



// let setEnvDisplay = (synthPatch) => {
//     }.log('synthpatch', loops.arpSounds[synthPatch].envelope.attack );
//     let env1 = loops.arpSounds[synthPatch].envelope.attack;
//     let env2 = loops.arpSounds[synthPatch].envelope.decay;
//     let env3 = loops.arpSounds[synthPatch].envelope.sustain;
//     let env4 = loops.arpSounds[synthPatch].envelope.release;
//     interface.arpSynthEnvelope.setSlider(0, env1);
//     interface.arpSynthEnvelope.setSlider(1, env2);
//     interface.arpSynthEnvelope.setSlider(2, env3);
//     interface.arpSynthEnvelope.setSlider(3, env4);
// };
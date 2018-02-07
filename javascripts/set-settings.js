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
    // reverbOneRoomSize: fx.reverbOne.roomSize.value,
    // reverbOneRoomSizeDisplay: interface.dialReverbRoomSize.value,
    //Chords//
    chords: currentChords
    };
    console.log('SETTINGS!', settings );
    return settings;
};


module.exports.recallSetting = (setting) => {
    console.log('Setting: ', setting );
    loops.loadUserChords(setting.chords);
    Tone.Transport.bpm.value =  setting.tempo;
    interface.tempoKnob.value = setting.tempoDisplay;
    //arp//
    interface.sequencer.matrix.set.all(setting.arpMatrix);
    fx.arpVolPan.pan.value = setting.arpPan;
    interface.arpVolPanKnob.x = setting.arpPanDisplay;
    fx.arpVolPan.volume.input.value = setting.arpVol;
    interface.arpVolPanKnob.y = setting.arpVolDisplay;
    //arp sound//
    loops.recallArpSound(setting.arpSound);
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
    // fx.reverbOne.roomSize.value = setting.reverbOneRoomSize;
    // interface.dialReverbRoomSize.value = setting.reverbOneRoomSizeDisplay;
};
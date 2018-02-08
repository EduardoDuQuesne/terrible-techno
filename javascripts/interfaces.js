/*jshint esversion: 6 */

const $ = require('jquery');
const Nexus = require('nexusui');

/////Log In and Out/////
module.exports.logIn = new Nexus.TextButton('#login-btn' ,{
    'size': [150,50],
    'state': false,
    'text': 'Log In',
    'alternate': false
});
module.exports.logOut = new Nexus.TextButton('#logout-btn' ,{
    'size': [150,50],
    'state': false,
    'text': 'Log Out',
    'alternate': false
});

/////Tempo Interface/////
module.exports.tempoKnob = new Nexus.Number('#tempo', {
    'size': [70, 50],
    'value': 120,
    'min': 60,
    'max': 180,
    'step': 1
});

//Septrogram
module.exports.spectogram = new Nexus.Spectrogram('#spectogram', {
    'size': [100, 50]
});

/////Sequencer Interfaces/////
module.exports.sequencer = new Nexus.Sequencer('#sequencer', {
    'size': [800, 200],
    'mode': 'toggle',
    'rows': 4,
    'columns': 16,
});
module.exports.bassSequencer = new Nexus.Sequencer('#bass-sequencer', {
    'size': [800, 200],
    'mode': 'toggle',
    'rows': 4,
    'columns': 16,
});
module.exports.beatSequencer = new Nexus.Sequencer('#beat-sequencer', {
    'size': [800, 200],
    'mode': 'toggle',
    'rows': 4,
    'columns': 16,
});
/////Stop and Start Interface/////
module.exports.playButton = new Nexus.TextButton('#play', {
    'size': [150, 50],
    'state': false,
    'text': 'Play',
    'alternate': false
});
module.exports.stopButton = new Nexus.TextButton('#stop', {
    'size': [150, 50],
    'state': false,
    'text': 'Stop',
    'alternate': false
});
/////Select Interfaces
module.exports.selectFx = new Nexus.Select('#one-fx-select', {
    'size': [75, 25],
    'options': ['Default', 'Delay', 'Reverb']
});

module.exports.selectDrumFx = new Nexus.Select('#three-fx-select', {
    'size': [75, 25],
    'options': ['Default', 'Distortion', 'Slap']
});

/////Delay Interface/////
module.exports.dialDelayWet = new Nexus.Dial('#delay-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.dialDelayFeedback = new Nexus.Dial('#delay-feedback', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.dialDelayTime = new Nexus.Dial('#delay-time', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
/////Reverb Interface/////
//Arp Reverb
module.exports.dialReverbWet = new Nexus.Dial('#reverb-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0.05,
    'value': 0
});
module.exports.dialReverbDampening = new Nexus.Dial('#reverb-dampening', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 100,
    'max': 1600,
    'step': 0.05,
    'value': 1600
});
module.exports.dialReverbRoomSize = new Nexus.Dial('#reverb-room-size', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0.05,
    'max': 1,
    'step': 0,
    'value': 0.01
});
//Drum Reverb
module.exports.dialDrumSlapWet = new Nexus.Dial('#drumSlap-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0.05,
    'value': 0
});
module.exports.dialDrumSlapRoomSize = new Nexus.Dial('#drumSlap-room-size', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0.05,
    'max': 1,
    'step': 0,
    'value': 0.01
});


///// VOLUME/PAN AXIS INTERFACE /////
module.exports.arpVolPanKnob = new Nexus.Position('#arp-volpan', {
    'size': [200, 198],
    'mode': 'absolute',
    'x': 0,
    'minX': -1,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,
    'minY': 0,
    'maxY': 1,
    'stepY': 0
});

module.exports.bassVolPanKnob = new Nexus.Position('#bass-volpan', {
    'size': [200, 198],
    'mode': 'absolute',
    'x': 0,
    'minX': -1,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,
    'minY': 0,
    'maxY': 1,
    'stepY': 0
});

module.exports.beatVolPanKnob = new Nexus.Position('#beat-volpan', {
    'size': [200, 198],
    'mode': 'absolute',
    'x': 0,
    'minX': -1,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,
    'minY': 0,
    'maxY': 1,
    'stepY': 0
});

/////Master Compressor/////
module.exports.thresholdKnob = new Nexus.Dial('#threshold', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': -60,
    'max': 0,
    'step': 1,
    'value': -30
});
module.exports.thresholdNumber = new Nexus.Number('#threshold-number',{
    'size': [40,25]
  });

module.exports.ratioKnob = new Nexus.Dial('#ratio', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 1,
    'max': 20,
    'step': 1,
    'value': 0
});
module.exports.ratioNumber = new Nexus.Number('#ratio-number',{
    'size': [40,25]
  });

module.exports.attackKnob = new Nexus.Dial('#attack', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0.05,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.attackNumber = new Nexus.Number('#attack-number',{
    'size': [40,25]
  });

module.exports.releaseKnob = new Nexus.Dial('#release', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0.05,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.releaseNumber = new Nexus.Number('#release-number',{
    'size': [40,25]
  });

//Arp Synth Envelope
module.exports.arpSynthEnvelope = new Nexus.Multislider('#fm-multislider',{
    'size': [200,100],
    'numberOfSliders': 4,
    'min': 0,
    'max': 1,
    'step': 0,
    'values': [0.005, 0.1, 0.3, 1]
   });

//Bass Synth Envelope
module.exports.bassSynthEnvelope = new Nexus.Multislider('#bass-multislider',{
    'size': [200,100],
    'numberOfSliders': 4,
    'min': 0,
    'max': 1,
    'step': 0,
    'values': [0.7,0.7,0.7,0.7,0.7]
   });

   //Drum Distortion
   module.exports.drumDistoWetDial = new Nexus.Dial('#distortion-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
   });
   
   module.exports.drumDistoAmountDial = new Nexus.Dial('#distortion-amount', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
   });
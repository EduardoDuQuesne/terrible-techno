/*jshint esversion: 6 */

const $ = require('jquery');
const Nexus = require('nexusui');

/////Log In and Out/////
module.exports.logIn = new Nexus.TextButton('#login-btn', {
    'size': [80, 30],
    'state': false,
    'text': 'Log In',
    'alternate': false
});
module.exports.logOut = new Nexus.TextButton('#logout-btn', {
    'size': [80, 30],
    'state': false,
    'text': 'Log Out',
    'alternate': false
});

/////Tempo Interface/////
module.exports.tempoKnob = new Nexus.Number('#tempo', {
    'size': [100, 30],
    'value': 120,
    'min': 60,
    'max': 180,
    'step': 1
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

/////Synthesizer Interface/////
module.exports.liveSynthKeyboard = new Nexus.Piano('#synthesizer-live', {
    'size': [800, 200],
    'mode': 'button', // 'button', 'toggle', or 'impulse'
    'lowNote': 0,
    'highNote': 53
});
/////Stop and Start Interface/////
module.exports.playButton = new Nexus.TextButton('#play', {
    'size': [100, 30],
    'state': false,
    'text': 'Play',
    'alternate': false
});
module.exports.stopButton = new Nexus.TextButton('#stop', {
    'size': [101, 30],
    'state': false,
    'text': 'Stop',
    'alternate': false
});

module.exports.selectSynthType = new Nexus.Select('#synth-type', {
    'size': [75, 25],
    'options': ['square', 'sine', 'triangle', 'sawtooth']
});
module.exports.selectKey = new Nexus.Select('#select-key', {
    'size': [100, 30],
    'options': ['Amaj', 'Bmaj', 'Cmaj', 'Dmaj', 'Emaj', 'Fmaj', 'Gmaj']
});

/////Delay Interfaces/////
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
module.exports.dialDrumChebyWet = new Nexus.Dial('#chebyshev-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.dialDrumChebyOverSample = new Nexus.Dial('#chebyshev-oversample', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 2,
    'step': 1,
    'value': 0
});
module.exports.dialDrumChebyOrder = new Nexus.Dial('#chebyshev-order', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 1,
    'max': 3,
    'step': 1,
    'value': 1
});
//Master Reverb
module.exports.dialMasterReverbWet = new Nexus.Dial('#master-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0.05,
    'value': 0
});
module.exports.dialMasterReverbDampening = new Nexus.Dial('#master-dampening', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 100,
    'max': 1600,
    'step': 0.05,
    'value': 1600
});
module.exports.dialMasterReverbRoomSize = new Nexus.Dial('#master-room-size', {
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
    'size': [150, 150],
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
    'size': [150, 150],
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
    'size': [150, 150],
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

module.exports.synthVolPanKnob = new Nexus.Position('#synth-volpan', {
    'size': [150, 150],
    'mode': 'absolute',
    'x': 0,
    'minX': -1,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,
    'minY': 0,
    'maxY': 0.3,
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
    'value': -40
});
module.exports.thresholdNumber = new Nexus.Number('#threshold-number', {
    'size': [35, 20]
});

module.exports.ratioKnob = new Nexus.Dial('#ratio', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 1,
    'max': 20,
    'step': 1,
    'value': 20
});
module.exports.ratioNumber = new Nexus.Number('#ratio-number', {
    'size': [35, 20]
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
module.exports.attackNumber = new Nexus.Number('#attack-number', {
    'size': [35, 20]
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
module.exports.releaseNumber = new Nexus.Number('#release-number', {
    'size': [35, 20]
});

//Arp Synth Envelope
module.exports.arpSynthEnvelope = new Nexus.Multislider('#fm-multislider', {
    'size': [200, 100],
    'numberOfSliders': 4,
    'min': 0,
    'max': 1,
    'step': 0,
    'values': [0.005, 0.1, 0.3, 1]
});

//Bass Synth Envelope
module.exports.bassSynthEnvelope = new Nexus.Multislider('#bass-multislider', {
    'size': [200, 100],
    'numberOfSliders': 4,
    'min': 0,
    'max': 1,
    'step': 0,
    'values': [0.7, 0.7, 0.7, 0.7, 0.7]
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

/////Synthesizer Dials/////
//Octave
module.exports.octaveInterface = new Nexus.Number('#synth-octave', {
    'size': [40, 25],
    'value': 4,
    'min': 2,
    'max': 5,
    'step': 1
});
//Envelope
module.exports.synthAttackDial = new Nexus.Dial('#synth-attack', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthDecayDial = new Nexus.Dial('#synth-decay', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthSustainDial = new Nexus.Dial('#synth-sustain', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthReleaseDial = new Nexus.Dial('#synth-release', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
//Filter Envelope
module.exports.synthFilterAttackDial = new Nexus.Dial('#synth-filter-attack', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthFilterDecayDial = new Nexus.Dial('#synth-filter-decay', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthFilterSustainDial = new Nexus.Dial('#synth-filter-sustain', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthFilterReleaseDial = new Nexus.Dial('#synth-filter-release', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthPortamentoDial = new Nexus.Dial('#synth-portamento', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.synthDetuneDial = new Nexus.Dial('#synth-detune', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': -3000,
    'max': 3000,
    'step': 0,
    'value': 0
});
//Delay
module.exports.dialSynthDelayWet = new Nexus.Dial('#synth-delay-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.dialSynthDelayFeedback = new Nexus.Dial('#synth-delay-feedback', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.dialSynthDelayTime = new Nexus.Dial('#synth-delay-time', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});

///// Master Volume /////
module.exports.dialMasterVolume = new Nexus.Dial('#master-volume', {
    'size': [80, 80],
    'interaction': 'radial',
    'mode': 'relative',
    'min': -60,
    'max': 0,
    'step': 1,
    'value': 0
});
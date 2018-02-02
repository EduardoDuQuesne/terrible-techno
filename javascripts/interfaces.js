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
    'options': ['Default', 'Delay', 'Phaser']
});

module.exports.selectSeq = new Nexus.Select('#select-sequencer', {
    'size': [75, 25],
    'options': ['Arpeggiator', 'Bass', 'Rhythm']
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
/////Phaser Interface/////
module.exports.dialPhaserWet = new Nexus.Dial('#phaser-wet', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});
module.exports.dialPhaserOctaves = new Nexus.Dial('#phaser-octaves', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 1,
    'max': 5,
    'step': 0,
    'value': 0
});
module.exports.dialPhaserFrequency = new Nexus.Dial('#phaser-frequency', {
    'size': [25, 25],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
});

///// VOLUME/PAN AXIS INTERFACE /////
module.exports.arpVolPanKnob = new Nexus.Position('#arp-volpan', {
    'size': [200, 198],
    'mode': 'absolute',
    'x': 0.5,
    'minX': 0,
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
    'x': 0.5,
    'minX': 0,
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
    'x': 0.5,
    'minX': 0,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,
    'minY': 0,
    'maxY': 1,
    'stepY': 0
});
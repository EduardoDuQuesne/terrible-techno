/*jshint esversion: 6 */

// const $ = require('jquery');
// const Nexus = require('nexusui');
// const Tone = require('tone');

// let sequencer2 = new Nexus.Sequencer('#sequencer2', {
//     'size': [100, 400],
//     'mode': 'toggle',
//     'rows': 1,
//     'columns': 1,
// });

// let notes2 = new Tone.Players({
//     "A": "../audio/A1.[mp3|ogg]",
//     "C#": "../audio/Cs2.[mp3|ogg]",
//     "E": "../audio/E2.[mp3|ogg]",
//     "G#": "../audio/Gs1.[mp3|ogg]"
// }, {
//         "volume": -10,
//         "fadeOut": "64n"
//     }).toMaster();

// let noteNames2 = ["A", "C#", "E", "G#"];
// let loop2 = new Tone.Sequence((time, col) => {
//     let step = sequencer2.matrix.pattern[col];
//     // console.log('CHECK', sequencer.matrix.pattern[col]);
//     // console.log('val check', col);
//     for (let i = 0; i < 4; i++) {
//         if (step[i] === true) {
//             notes2.get(noteNames2[i]).start(time, 0, "32n", 0);
//             // console.log("time", time);
//         }
//     }
// }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");


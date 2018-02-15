/*jshint esversion: 6 */

let Amaj = {
    Imaj: ["A3", "C#4", "E4", "G#4"],
    iimin: ["B4", "D4", "F#4", "A5"],
    iiimin: ["C#4", "E4", "G#4", "B5"],
    IVmaj: ["D4", "F#4", "A5", "C#5"],
    Vdom: ["E4", "G#4", "B5", "D5"],
    vimin: ["F#4", "A5", "C#5", "E5"],
    viiminb5: ["G#4", "B5", "D5", "F#5"]
};
let Bmaj = {
    Imaj: ["B4", "D#4", "F#4", "A#4"],
    iimin: ["C#4", "E4", "A#4", "B5"],
    iiimin: ["D#4", "F#4", "B4", "C#5"],
    IVmaj: ["E4", "G#4", "C#5", "D#5"],
    Vdom: ["F#4", "A#4", "D#5", "E5"],
    vimin: ["G#4", "B5", "E5", "F#5"],
    viiminb5: ["A#4", "C#5", "F#5", "G#5"]
};
let Cmaj = {
    Imaj: ["C3", "E3", "G3", "B3"],
    iimin: ["D3", "F3", "A4", "C4"],
    iiimin: ["E3", "G3", "B4", "D4"],
    IVmaj: ["F3", "A4", "C4", "E4"],
    Vdom: ["G3", "B4", "D4", "F4"],
    vimin: ["A4", "C4", "E4", "G4"],
    viiminb5: ["B4", "D4", "F4", "A4"]
};
let Dmaj = {
    Imaj: ["D3", "F#3", "A4", "C#4"],
    iimin: ["E3", "G3", "B3", "D4"],
    iiimin: ["F#3", "A3", "C#3", "E4"],
    IVmaj: ["G3", "B3", "D4", "F#4"],
    Vdom: ["A3", "C#3", "E4", "G4"],
    vimin: ["B3", "D4", "F#4", "A4"],
    viiminb5: ["C#4", "E4", "G4", "B4"]
};
let Emaj = {
    Imaj: ["E3", "G#3", "B3", "D#3"],
    iimin: ["F#3", "A3", "C#3", "E4"],
    iiimin: ["G#3", "B3", "D#3", "F#4"],
    IVmaj: ["A3", "C#3", "E4", "G#4"],
    Vdom: ["B3", "D#3", "F#4", "A4"],
    vimin: ["C#4", "E4", "G#4", "B4"],
    viiminb5: ["D#4", "F#4", "A4", "C#4"]
};
let Fmaj = {
    Imaj: ["F3", "A3", "C4", "E4"],
    iimin: ["G3", "A#3", "D3", "F4"],
    iiimin: ["A3", "C3", "E3", "G4"],
    IVmaj: ["A#3", "D3", "F4", "A4"],
    Vdom: ["C3", "E3", "G4", "A#4"],
    vimin: ["D3", "F4", "A4", "C4"],
    viiminb5: ["E3", "G4", "A#4", "D4"]    
};
let Gmaj = {
    Imaj: ["G3", "B3", "D4", "F#4"],
    iimin: ["A3", "C3", "E3", "G4"],
    iiimin: ["B3", "D3", "F#3", "A4"],
    IVmaj: ["C3", "E3", "G4", "B4"],
    Vdom: ["D3", "F#3", "A4", "C4"],
    vimin: ["E3", "G4", "B4", "D4"],
    viiminb5: ["F#3", "A4", "C4", "E4"]    
};


module.exports = {
    Amaj,
    Bmaj,
    Cmaj,
    Dmaj,
    Emaj,
    Fmaj,
    Gmaj
};
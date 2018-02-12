/*jshint esversion: 6 */

let Amaj = {
    Imaj: ["A2", "C#2", "E2", "G#2"],
    iimin: ["B2", "D2", "F#2", "A2"],
    iiimin: ["C#2", "E2", "G#2", "B2"],
    IVmaj: ["D2", "F#2", "A2", "C#2"],
    Vdom: ["E2", "G#2", "B2", "D2"],
    vimin: ["F#2", "A2", "C#2", "E2"],
    viiminb5: ["G#2", "B2", "D2", "F2"]
};
let Bmaj = {
    Imaj: ["B2", "D#2", "F#2", "A#2"],
    iimin: ["C#2", "E2", "A#2", "B2"],
    iiimin: ["D#2", "F#2", "B2", "C#2"],
    IVmaj: ["E2", "G#2", "C#2", "D#2"],
    Vdom: ["F#2", "A#2", "D#2", "E2"],
    vimin: ["G#2", "B2", "E2", "F#2"],
    viiminb5: ["A#2", "C#2", "F#2", "G#2"]
};
let Cmaj = {
    Imaj: ["C2", "E2", "G2", "B2"],
    iimin: ["D2", "F2", "A2", "C2"],
    iiimin: ["E2", "G2", "B2", "D2"],
    IVmaj: ["F2", "A2", "C2", "E2"],
    Vdom: ["G2", "B2", "D2", "F2"],
    vimin: ["A2", "C2", "E2", "G2"],
    viiminb5: ["B2", "D2", "F2", "A2"]
};
let Dmaj = {
    Imaj: ["D2", "F#2", "A2", "C#2"],
    iimin: ["E2", "G2", "B2", "D2"],
    iiimin: ["F#2", "A2", "C#2", "E2"],
    IVmaj: ["G2", "B2", "D2", "F#2"],
    Vdom: ["A2", "C#2", "E2", "G2"],
    vimin: ["B2", "D2", "F#2", "A2"],
    viiminb5: ["C#2", "E2", "G2", "B2"]
};
let Emaj = {
    Imaj: ["E2", "G#2", "B2", "D#2"],
    iimin: ["F#2", "A2", "C#2", "E2"],
    iiimin: ["G#2", "B2", "D#2", "F#2"],
    IVmaj: ["A2", "C#2", "E2", "G#2"],
    Vdom: ["B2", "D#2", "F#2", "A2"],
    vimin: ["C#2", "E2", "G#2", "B2"],
    viiminb5: ["D#2", "F#2", "A2", "C#2"]
};
let Fmaj = {
    Imaj: ["F2", "A2", "C2", "E2"],
    iimin: ["G2", "A#2", "D2", "F2"],
    iiimin: ["A2", "C2", "E2", "G2"],
    IVmaj: ["A#2", "D2", "F2", "A2"],
    Vdom: ["C2", "E2", "G2", "A#2"],
    vimin: ["D2", "F2", "A2", "C2"],
    viiminb5: ["E2", "G2", "A#2", "D2"]    
};
let Gmaj = {
    Imaj: ["G2", "B2", "D2", "F#2"],
    iimin: ["A2", "C2", "E2", "G2"],
    iiimin: ["B2", "D2", "F#2", "A2"],
    IVmaj: ["C2", "E2", "G2", "B2"],
    Vdom: ["D2", "F#2", "A2", "C2"],
    vimin: ["E2", "G2", "B2", "D2"],
    viiminb5: ["F#2", "A2", "C2", "E2"]    
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
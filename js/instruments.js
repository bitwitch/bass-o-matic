// Lead Instruments
const notesMelody = ["F3", "G3", "A3", "Bb3", "C4"];
const notesPolySine = [ ["F3", "C3"], ["Fb3", "G3"], ["F3", "A3"], ["F3", "Bb3"], ["F3", "C4"] ];

const triangleSynth1 = new Tone.Synth().toMaster();

const sineSynth1 = new Tone.MonoSynth({
  frequency  : "F3",
    detune  : 0 ,
    oscillator  : {
    type  : "sine"
    }  ,
  filter  : {
    Q  : 6 ,
    type  : "lowpass" ,
    rolloff  : -24
    }  ,
  envelope  : {
    attack  : 0.0005 ,
    decay  : 0.1 ,
    sustain  : 0.9 ,
    release  : 0.7
    }  ,
  filterEnvelope  : {
    attack  : 0.06 ,
    decay  : 0.2 ,
    sustain  : 0.5 ,
    release  : 1 ,
    baseFrequency  : 600 ,
    octaves  : 10 ,
    exponent  : 3
    }
}).toMaster();

const sineSynth3 = new Tone.PolySynth(2, Tone.MonoSynth).toMaster();
sineSynth3.set({
  "oscillator" : {
    type: "sine"
  },
  "envelope" : {
    attack  : 0.0005 ,
    decay  : 0.1 ,
    sustain  : 0.8 ,
    release  : 1
  },
  "filterEnvelope"  : {
    attack  : 0.06 ,
    decay  : 0.2 ,
    sustain  : 0.5 ,
    release  : 1 ,
    baseFrequency  : 600 ,
    octaves  : 10 ,
    exponent  : 2
    }
});
sineSynth3.volume.value = -5;

// Bassline Instruments
const notesBassSynth = ["F1", "C2", "F2"];

const sineSynth2 = new Tone.Synth({
envelope  : {
  attack  : 0.0025 ,
  decay  : 0.13 ,
  sustain  : 0.5 ,
  release  : 1
  }
}).toMaster();

const sineSynth4 = new Tone.MonoSynth({
  frequency  : "F2",
    detune  : 0 ,
    oscillator  : {
    type  : "sine"
    }  ,
  filter  : {
    Q  : 6 ,
    type  : "lowpass" ,
    rolloff  : -24
    }  ,
  envelope  : {
    attack  : 0.05 ,
    decay  : 0.1 ,
    sustain  : 0.5 ,
    release  : 2
    }  ,
  filterEnvelope  : {
    attack  : 0.06 ,
    decay  : 0.2 ,
    sustain  : 0.5 ,
    release  : 1 ,
    baseFrequency  : 600 ,
    octaves  : 8 ,
    exponent  : 3
    }
}).toMaster();


const squareSynth1 = new Tone.Synth({
  oscillator  : {
    type  : "square"
    }  ,
  envelope  : {
    attack  : 0.005 ,
    decay  : 0.30 ,
    sustain  : 1 ,
    release  : 0.6
    }
}).toMaster();
squareSynth1.volume.value = -23;

const kick = new Tone.PolySynth(3, Tone.MembraneSynth).toMaster();
kick.pitchDecay = 0.0001;
kick.set({
  "envelope" : {
    "attack"  : 0.00025 ,
    "decay"  : 1 ,
    "sustain"  : 0 ,
    "release"  : 0.1 ,
    "attackCurve"  : "exponential"
    }
    });

// Noise
const noiseSynth1 = new Tone.NoiseSynth({
  noise  : {
    type  : "white"
  }  ,
  envelope  : {
    attack  : 0.005 ,
    decay  : 0.1 ,
    sustain  : 0
  }
}).toMaster();
noiseSynth1.volume.value = -9;

const noiseSynth2 = new Tone.NoiseSynth({
  noise  : {
    type  : "pink"
  }  ,
  envelope  : {
    attack  : 0.005 ,
    decay  : 0.13 ,
    sustain  : 0.01
    }
}).toMaster();
noiseSynth2.volume.value = -4;
noiseSynth2.set({"noise": {"type": "pink"}})

// Current Instrument Config
currentLead  = triangleSynth1;
currentBass  = sineSynth2;
currentNoise = "white";

let currentNotesLead  = notesMelody;
let currentNotesBass  = notesBassSynth;

const instruments = {
  'triangleSynth1': triangleSynth1,
  'sineSynth1': sineSynth1,
  'sineSynth3': sineSynth3,
  'sineSynth2': sineSynth2,
  'sineSynth4': sineSynth4,
  'squareSynth1': squareSynth1,
  'noiseSynth1': noiseSynth1,
  'noiseSynth2': noiseSynth2
}

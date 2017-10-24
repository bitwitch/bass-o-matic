
const synth1 = new Tone.Synth().toMaster();

const notes = ["E3", "F#3", "G3", "A3", "B3", "C3", "D3"];




//setup sampler
// const keys = new Tone.Sampler({
//   "21" : "https://vocaroo.com/i/s1lSYORT3Zyb",
//   "28" : "https://vocaroo.com/i/s1lkuTJvjjMI",
//   "29" : "http://www.filedropper.com/piano-029",
//   "33" : "http://www.filedropper.com/piano-033",
//   "40" : "http://www.filedropper.com/piano-040",
//   "41" : "http://www.filedropper.com/piano-049"
// }, {
//   "volume" : -10,
//   "fadeOut" : "64n",
// }).toMaster();

// keys.triggerAttackRelease('21') ;
// //the notes
// const noteNames = ["21", "28", "29", "33", "40", "41"];
// const loop = new Tone.Sequence(function(time, col){
//   let column = sequencer.matrix[col];
//   for (let i = 0; i < 6; i++){
//     if (column[i] === 1){
//       //slightly randomized velocities
//       let vel = Math.random() * 0.5 + 0.5;
//       keys.get(noteNames[i]).start(time, 0, "32n", 0, vel);
//     }
//   }
// }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");









//HATS
//filtering the hi-hats a bit
//to make them sound nicer
const lowPass = new Tone.Filter({
    "frequency": 14000,
}).toMaster();

//we can make our own hi hats with 
//the noise synth and a sharp filter envelope
const openHiHat = new Tone.NoiseSynth({
  "volume" : -10,
    "filter": {
        "Q": 1
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.3
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.03,
        "baseFrequency": 4000,
        "octaves": -2.5,
        "exponent": 4,
    }
}).connect(lowPass);

const openHiHatPart = new Tone.Part(function(time){
  openHiHat.triggerAttack(time);
}, ["2*8n", "6*8n"]).start(0);

const closedHiHat = new Tone.NoiseSynth({
  "volume" : -10,
    "filter": {
        "Q": 1
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.15
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.03,
        "baseFrequency": 4000,
        "octaves": -2.5,
        "exponent": 4,
    }
}).connect(lowPass);

const closedHatPart = new Tone.Part(function(time){
  closedHiHat.triggerAttack(time);
}, ["0*8n", "1*16n", "1*8n", "3*8n", "4*8n", "5*8n", "7*8n", "8*8n"]).start(0);

//BASS
const bassEnvelope = new Tone.AmplitudeEnvelope({
    "attack": 0.01,
    "decay": 0.2,
    "sustain": 0,
    "release": 0,
}).toMaster();

const bassFilter = new Tone.Filter({
    "frequency": 600,
    "Q": 8
});

const bass = new Tone.PulseOscillator("A2", 0.4).chain(bassFilter, bassEnvelope);
bass.start();

const bassPart = new Tone.Part(function(time, note){
  bass.frequency.setValueAtTime(note, time);
    bassEnvelope.triggerAttack(time);
}, [["0:0", "A1"],
  ["0:2", "G1"],
  ["0:2:2", "C2"],
  ["0:3:2", "A1"]]).start(0);

//BLEEP
const bleepEnvelope = new Tone.AmplitudeEnvelope({
    "attack": 0.01,
    "decay": 0.4,
    "sustain": 0,
    "release": 0,
}).toMaster();

const bleep = new Tone.Oscillator("A4").connect(bleepEnvelope);
bleep.start();

const bleepLoop = new Tone.Loop(function(time){
   bleepEnvelope.triggerAttack(time);
}, "2n").start(0);

//KICK
const kickEnvelope = new Tone.AmplitudeEnvelope({
    "attack": 0.01,
    "decay": 0.2,
    "sustain": 0,
    "release": 0
}).toMaster();

const kick = new Tone.Oscillator("A2").connect(kickEnvelope).start();
kickSnapEnv = new Tone.FrequencyEnvelope({
    "attack": 0.005,
    "decay": 0.01,
    "sustain": 0,
    "release": 0,
    "baseFrequency": "A2",
    "octaves": 2.7
}).connect(kick.frequency);

const kickPart = new Tone.Part(function(time){
  kickEnvelope.triggerAttack(time);
  kickSnapEnv.triggerAttack(time);
}, ["0", "0:0:3", "0:2:0", "0:3:1"]).start(0);
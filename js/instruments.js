const triangleSynth1 = new Tone.Synth().toMaster();
const notesTriangleSynth1 = ["F3", "G3", "A3", "Bb3", "C4"];

const triangleSynth2 = new Tone.Synth().toMaster(); 

const sawSynth1 = new Tone.Synth({
envelope  : {
  attack  : 0.00025 ,
  decay  : 0.1 ,
  sustain  : 0.5 ,
  release  : 2
  }
}).toMaster();
sawSynth1.oscillator = new Tone.OmniOscillator("C2", "sawtooth");
const notesSawSynth1 = ["F1", "C2", "F2"];

const noiseSynth1 = new Tone.NoiseSynth({
  envelope  : {
    attack  : 0.005 ,
    decay  : 0.1 ,
    sustain  : 0
  }
}).toMaster();
noiseSynth1.volume.value = -9;

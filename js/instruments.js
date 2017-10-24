const triangleSynth = new Tone.Synth().toMaster();
const triangleSynthNotes = ["F3", "G3", "A3", "Bb3", "C4"];

const sawSynth = new Tone.Synth({
envelope  : {
  attack  : 0.00025 ,
  decay  : 0.1 ,
  sustain  : 0.5 ,
  release  : 2
  }
}).toMaster();
sawSynth.oscillator = new Tone.OmniOscillator("C2", "sawtooth");
const sawSynthNotes = ["C2", "F2"];

const noiseSynth = new Tone.NoiseSynth({
  envelope  : {
    attack  : 0.005 ,
    decay  : 0.1 ,
    sustain  : 0
  }
}).toMaster();
noiseSynth.volume.value = -9;

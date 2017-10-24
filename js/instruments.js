// Lead Instruments 
const triangleSynth1 = new Tone.Synth().toMaster();
const notesMelody = ["F3", "G3", "A3", "Bb3", "C4"];

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

// Bassline Instruments 
const sineSynth2 = new Tone.Synth({
envelope  : {
  attack  : 0.00025 ,
  decay  : 0.1 ,
  sustain  : 0.5 ,
  release  : 2
  }
}).toMaster();
const notesSawSynth1 = ["F1", "C2", "F2"];

const squareSynth1 = new Tone.Synth({
  oscillator  : {
    type  : "square"
    }  ,
  envelope  : {
    attack  : 0.0005 ,
    decay  : 0.30 ,
    sustain  : 0.6 ,
    release  : 0.6
    }
}).toMaster();
squareSynth1.volume.value = -20; 

// Noise 
const noiseSynth1 = new Tone.NoiseSynth({
  envelope  : {
    attack  : 0.005 ,
    decay  : 0.1 ,
    sustain  : 0
  }
}).toMaster();
noiseSynth1.volume.value = -9;

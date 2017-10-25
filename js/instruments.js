// Lead Instruments 
const notesMelody = ["F3", "G3", "A3", "Bb3", "C4"];

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

const sineSynth3 = new Tone.MonoSynth({
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

const kickSub = new Tone.MembraneSynth({
  pitchDecay  : 0.001 ,
  octaves  : 10 ,
  oscillator  : {
    type  : "sine"
    }  ,
  envelope  : {
    attack  : 0.0025 ,
    decay  : 1 ,
    sustain  : 0 ,
    release  : 0.1 ,
    attackCurve  : "exponential"
    }
})

const kick = new Tone.PolySynth(2, Tone.MembraneSynth).toMaster();
kick.volume.value = -10;
kick.pitchDecay = 0.001;
kick.envelope = {
    attack  : 0.0025 ,
    decay  : 1 ,
    sustain  : 0 ,
    release  : 0.1 ,
    attackCurve  : "exponential"
    }; 
kick.triggerAttackRelease(["F1", "F2"], "4n");
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
noiseSynth2.volume.value = -9;


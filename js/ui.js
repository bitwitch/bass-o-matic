let leadClosed  = true;
let bassClosed  = true;
let noiseClosed = true;

const selectLead  = document.getElementById('select-lead');
const selectBass  = document.getElementById('select-bass');
const selectNoise = document.getElementById('select-noise');

document.getElementById('lead-link').addEventListener('click', handleSelect);
document.getElementById('bass-link').addEventListener('click', handleSelect);
document.getElementById('noise-link').addEventListener('click', handleSelect);
document.getElementById('lead-triangle').addEventListener('click', handlePickLead);
document.getElementById('lead-sine').addEventListener('click', handlePickLead); 
document.getElementById('lead-poly').addEventListener('click', handlePickLead);
document.getElementById('bass-sine').addEventListener('click', handlePickBass); 
document.getElementById('white-noise').addEventListener('click', handlePickNoise);
document.getElementById('pink-noise').addEventListener('click', handlePickNoise);

function handlePickLead(e) {
  e.preventDefault(); 
  switch(e.target.id) {
    case "lead-triangle" :
      leadSequencer.instrument = triangleSynth1;
      leadSequencer.instrumentName = "triangleSynth1";
      leadSequencer.notes = notesMelody; 
      break;
    case "lead-sine"  :
      leadSequencer.instrument = sineSynth1;
      leadSequencer.instrumentName = "sineSynth1";
      leadSequencer.notes = notesMelody; 
      break;
    case "lead-poly" :
      leadSequencer.instrument = sineSynth3;
      leadSequencer.instrumentName = "sineSynth3";
      leadSequencer.notes = notesPolySine; 
      break;
  }
};

function handlePickBass(e) {
  e.preventDefault(); 
  switch(e.target.id) {
    case "bass-sine" :
      bassSequencer.instrument = sineSynth2;
      bassSequencer.instrumentName = "sineSynth2";
      bassSequencer.notes = notesBassSynth; 
      break;
    }
};

function handlePickNoise(e) {
  e.preventDefault();
  switch(e.target.id) {
    case "white-noise" :
      noiseSequencer.instrument = noiseSynth1;
      noiseSequencer.instrumentName = "noiseSynth1"
      break;
    case "pink-noise"  :
      noiseSequencer.instrument = noiseSynth2;
      noiseSequencer.instrumentName = "noiseSynth2"
      break;
  }
};

function handleSelect(e) {
  e.preventDefault(); 

  switch (e.target.className.split(" ")[0]) {
    case "lead-link" : 
      leadClosed ? selectLead.style.width = "300px" : selectLead.style.width = "40px";
      leadClosed = !leadClosed; 
      break;
    case "bass-link" :
      bassClosed ? selectBass.style.width = "300px" : selectBass.style.width = "40px";
      bassClosed = !bassClosed;
      break;
    case "noise-link" : 
      noiseClosed ? selectNoise.style.width = "300px" : selectNoise.style.width = "40px";
      noiseClosed = !noiseClosed; 
      break;
  };

};

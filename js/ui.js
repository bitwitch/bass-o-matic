let leadClosed  = true; 
let bassClosed  = true; 
let noiseClosed = true; 

const selectLead  = document.getElementById('select-lead');
const selectBass  = document.getElementById('select-bass');
const selectNoise = document.getElementById('select-noise');

document.getElementById('lead-link').addEventListener('click', handleSelect);
document.getElementById('bass-link').addEventListener('click', handleSelect);
document.getElementById('noise-link').addEventListener('click', handleSelect);

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
  }
};
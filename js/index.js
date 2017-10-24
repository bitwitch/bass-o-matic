document.addEventListener('DOMContentLoaded', function () { 

  // Fires any time the sequencer steps to the next column, in sequece mode. 
  // The event data is an array containing all values in the column, top first. 
  triangleSequencer.on('step',function(e) {
    for (let i=0; i<5; i++) {
      if (e[i]) {
        playTriangle(triangleSynthNotes[i]) 
      }
    }
  });

  sawtoothSequencer.on('step',function(e) {
    for (let i=0; i<2; i++) {
      if (e[i]) {
        playSaw(sawSynthNotes[i]) 
      }
    }
  });
  


  play.on('change',function(e) {
    if (e) {
      triangleSequencer.start();
      sawtoothSequencer.start();
      noiseSequencer.start(); 
    } else {
      triangleSequencer.stop();
      sawtoothSequencer.stop();
      noiseSequencer.stop();
    }
  });

  function playTriangle(note, duration="16n") {
    triangleSynth.triggerAttackRelease(note, duration);
  };

  function playSaw(note, duration="8n") {
    sawSynth.triggerAttackRelease(note, duration);
  };

});
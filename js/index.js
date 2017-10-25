document.addEventListener('DOMContentLoaded', function () { 

  // Fires any time the sequencer steps to the next column, in sequece mode. 
  // The event data is an array containing all values in the column, top first. 
  loadAshesTune();
  console.log("hey boo");

  leadSequencer.on('step',function(e) {
    for (let i=0; i<5; i++) {
      if (e[i]) {
        playTriangle(triangleSynth1, notesMelody[i]) 
      }
    }
  });

  bassSequencer.on('step',function(e) {
    for (let i=0; i<3; i++) {
      if (e[i]) {
        playSaw(sineSynth2, notesBassSynth[i]) 
      }
    }
  });

  noiseSequencer.on('step',function(e) {
    for (let i=0; i<1; i++) {
      if (e[i]) {
        playNoise(noiseSynth1);
      }
    }
  });
  
  play.on('change',function(e) {
    if (e) {
      leadSequencer.start();
      bassSequencer.start();
      noiseSequencer.start(); 
    } else {
      leadSequencer.stop();
      leadSequencer.stepper.value = 15;
      bassSequencer.stop();
      bassSequencer.stepper.value = 7;
      noiseSequencer.stop();
      noiseSequencer.stepper.value = 15;
    }
  });

  clear.on('change', function(e) {
    clearSequencer();
  });

  demo1.on('change', function(e) {
    loadAshesTune();
  });

  demo2.on('change', function(e) {
    loadDemo1();
  });

  function clearSequencer() {
    clearTriangleSequencer();
    clearSawtoothSequencer();
    clearNoiseSequencer();
  };

  function playTriangle(synth, note) {
    synth.triggerAttackRelease(note, "16n");
  };

  function playSaw(synth, note) {
    synth.triggerAttackRelease(note, "8n");
  };

  function playNoise(synth) {
    synth.triggerAttackRelease("16n");
  }

  function clearTriangleSequencer() {
    const matrix = leadSequencer.matrix.pattern;
    for(let row=0; row<matrix.length; row++) {
      for(let col=0; col<matrix[row].length; col++) {
        if (matrix[row][col] === true) {
          leadSequencer.matrix.toggle.cell(col, row); 
        }
      }
    }
  }

  function clearSawtoothSequencer() {
    const matrix = bassSequencer.matrix.pattern;
    for(let row=0; row<matrix.length; row++) {
      for(let col=0; col<matrix[row].length; col++) {
        if (matrix[row][col] === true) {
          bassSequencer.matrix.toggle.cell(col, row); 
        }
      }
    }
  }

  function clearNoiseSequencer() {
    const matrix = noiseSequencer.matrix.pattern;
    for(let row=0; row<matrix.length; row++) {
      for(let col=0; col<matrix[row].length; col++) {
        if (matrix[row][col] === true) {
          noiseSequencer.matrix.toggle.cell(col, row); 
        }
      }
    }
  }

  function loadDemo1() {
    clearSequencer(); 

    leadSequencer.matrix.toggle.cell(0,0);
    leadSequencer.matrix.toggle.cell(1,1);
    leadSequencer.matrix.toggle.cell(3,2);
    leadSequencer.matrix.toggle.cell(9,2);
    leadSequencer.matrix.toggle.cell(8,3);
    leadSequencer.matrix.toggle.cell(6,4);

    bassSequencer.matrix.toggle.cell(0,0); 
    bassSequencer.matrix.toggle.cell(3,0);
    bassSequencer.matrix.toggle.cell(6,1);

    noiseSequencer.matrix.toggle.cell(4,0); 
    noiseSequencer.matrix.toggle.cell(12,0)
  }

  function loadAshesTune() {
    clearSequencer();

    leadSequencer.matrix.toggle.cell(15,0);
    leadSequencer.matrix.toggle.cell(10,1);
    leadSequencer.matrix.toggle.cell(7,2);
    leadSequencer.matrix.toggle.cell(11,2);
    leadSequencer.matrix.toggle.cell(1,4);
    leadSequencer.matrix.toggle.cell(4,4);
    leadSequencer.matrix.toggle.cell(7,4);
    leadSequencer.matrix.toggle.cell(10,4);
    leadSequencer.matrix.toggle.cell(13,4);

    bassSequencer.matrix.toggle.cell(0,0);
    bassSequencer.matrix.toggle.cell(3,0);
    bassSequencer.matrix.toggle.cell(1,1);
    bassSequencer.matrix.toggle.cell(4,1);
    bassSequencer.matrix.toggle.cell(6,1);
    bassSequencer.matrix.toggle.cell(2,2);
    bassSequencer.matrix.toggle.cell(5,2);
    bassSequencer.matrix.toggle.cell(7,2);

    noiseSequencer.matrix.toggle.cell(2,0);
    noiseSequencer.matrix.toggle.cell(6,0);
    noiseSequencer.matrix.toggle.cell(10,0);
    noiseSequencer.matrix.toggle.cell(14,0);
  };

});
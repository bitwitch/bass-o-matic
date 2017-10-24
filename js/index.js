document.addEventListener('DOMContentLoaded', function () { 


  // const loop = new Tone.Sequence(function(time, col){
  //     let column = sequencer.matrix[col];
  //     for (let i = 0; i < 5; i++){
  //       if (column[i] === 1){
  //         //slightly randomized velocities
  //         let vel = Math.random() * 0.5 + 0.5;
  //         keys.get(noteNames[i]).start(time, 0, "32n", 0, vel);
  //       }
  //     }
  //   }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
  // // Fires any time the interface's matrix changes. 
  // // The event data is an object containing row (number), 
  // // column (number), and state (boolean) properties.
  // sequencer.on('change',function(e) {
  //   console.log('change ', e);
  // })

  // Fires any time the sequencer steps to the next column, in sequece mode. 
  // The event data is an array containing all values in the column, top first. 
  sequencer.on('step',function(e) {
    console.log(e);
    for (let i=0; i<5; i++) {
      if (e[i]) {
        playNote(notes[i]) 
      }
    }
  })

  play.on('change',function(e) {
    e ? sequencer.start(): sequencer.stop(); 
  })



  function playNote(note, duration="16n") {
    synth1.triggerAttackRelease(note, duration);
  }


  //*********************************************************************
  //*********************    INSTRUMENTS    *****************************
  //*********************************************************************

  const synth1 = new Tone.Synth().toMaster();
  const polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();
    polySynth.set("detune", -1000);
  const drums = new Tone.MembraneSynth({
    pitchDecay  : 0.05 ,
    octaves  : 5 ,
    envelope  : {
    attack  : 0.00001 ,
    decay  : 0.9 ,
    sustain  : 0.01 ,
    release  : 1.4 
    }
    }).toMaster();
  





});
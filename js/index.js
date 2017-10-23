document.addEventListener('DOMContentLoaded', function () { 
  const btn1  = document.getElementById('btn-1');
  const btn2  = document.getElementById('btn-2');
  const btn3  = document.getElementById('btn-3');
  const btn4  = document.getElementById('btn-4');
  const btn5  = document.getElementById('btn-5');
  const btn6  = document.getElementById('btn-6');
  const btn7  = document.getElementById('btn-7');
  const btn8  = document.getElementById('btn-8');
  const btn9  = document.getElementById('btn-9');
  const btn10 = document.getElementById('btn-10');
  const btn11 = document.getElementById('btn-11');
  const btn12 = document.getElementById('btn-12');
  const btn13 = document.getElementById('btn-13');
  const btn14 = document.getElementById('btn-14');
  const btn15 = document.getElementById('btn-15');
  const btn16 = document.getElementById('btn-16');
  const btn17 = document.getElementById('btn-17');
  const btn18 = document.getElementById('btn-18');
  const btn19 = document.getElementById('btn-19');
  const btn20 = document.getElementById('btn-20');
  const btn21 = document.getElementById('btn-21');


  btn1.addEventListener('click', handleButton);
  btn2.addEventListener('click', handleButton);
  btn3.addEventListener('click', handleButton);
  btn4.addEventListener('click', handleButton);
  btn5.addEventListener('click', handleButton);
  btn6.addEventListener('click', handleButton);
  btn7.addEventListener('click', handleButton);
  btn8.addEventListener('click', handleButton);
  btn9.addEventListener('click', handleButton);
  btn10.addEventListener('click', handleButton);
  btn11.addEventListener('click', handleButton);
  btn12.addEventListener('click', handleButton);
  btn13.addEventListener('click', handleButton);
  btn14.addEventListener('click', handleButton);
  btn15.addEventListener('click', handleButton);
  btn16.addEventListener('click', handleButton);
  btn17.addEventListener('click', handleButton);
  btn18.addEventListener('click', handleButton);
  btn19.addEventListener('click', handleButton);
  btn20.addEventListener('click', handleButton);
  btn21.addEventListener('click', handleButton);

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
  
  

  function handleButton(e) {
    switch(e.target.id) {
      case 'btn-1' : synth1.triggerAttackRelease("C2", "4n"); break;
      case 'btn-2' : synth1.triggerAttackRelease("D2", "4n"); break;
      case 'btn-3' : synth1.triggerAttackRelease("E2", "4n"); break;
      case 'btn-4' : synth1.triggerAttackRelease("F2", "4n"); break;
      case 'btn-5' : synth1.triggerAttackRelease("G2", "4n"); break;
      case 'btn-6' : synth1.triggerAttackRelease("A2", "4n"); break;
      case 'btn-7' : synth1.triggerAttackRelease("B2", "4n"); break;

      case 'btn-8'  : polySynth.triggerAttackRelease(["C#4", "E4", "G#4"], "4n"); break;
      case 'btn-9'  : polySynth.triggerAttackRelease(["D#4", "F#4", "A#4"], "4n"); break;
      case 'btn-10' : polySynth.triggerAttackRelease(["E4", "G#4", "B4"], "4n"); break;
      case 'btn-11' : polySynth.triggerAttackRelease(["F#4", "A4", "C#4"], "4n"); break;
      case 'btn-12' : polySynth.triggerAttackRelease(["C4", "E4", "A4"], "4n"); break;
      case 'btn-13' : polySynth.triggerAttackRelease(["C4", "E4", "A4"], "4n"); break;
      case 'btn-14' : polySynth.triggerAttackRelease(["C4", "E4", "A4"], "4n"); break;

      case 'btn-15' : drums.triggerAttackRelease("D2", "16n");
      case 'btn-16' : drums.triggerAttackRelease("D2", "16n");
      case 'btn-17' : drums.triggerAttackRelease("D2", "16n");
      case 'btn-18' : drums.triggerAttackRelease("D2", "16n");
      case 'btn-19' : drums.triggerAttackRelease("D2", "16n");
      case 'btn-20' : drums.triggerAttackRelease("D2", "16n");
      case 'btn-21' : drums.triggerAttackRelease("D2", "16n");
    }
  };




});
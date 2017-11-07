const leadSequencer = new Nexus.Sequencer('#lead-sequencer',{
 'size': [700,300],
 'mode': 'toggle',
 'rows': 5,
 'columns': 16
});
leadSequencer.interval.rate = 150;
leadSequencer.colorize("accent","#ff9a02");
leadSequencer.colorize("fill","#f7deb9");
leadSequencer.colors.mediumLight = "#7f8784";
leadSequencer.instrument = triangleSynth1;
leadSequencer.notes = notesMelody;

const bassSequencer = new Nexus.Sequencer('#bass-sequencer',{
 'size': [700,150],
 'mode': 'toggle',
 'rows': 3,
 'columns': 8
});

bassSequencer.interval.rate = 300;  
bassSequencer.colorize("accent","#7e49b2");
bassSequencer.colorize("fill","#dcc6ef");
bassSequencer.colors.mediumLight = "#7f8784";
bassSequencer.instrument = sineSynth2; 
bassSequencer.notes = notesBassSynth; 

const noiseSequencer = new Nexus.Sequencer('#noise-sequencer',{
 'size': [700,150],
 'mode': 'toggle',
 'rows': 1,
 'columns': 16  
});
noiseSequencer.interval.rate = 150;
noiseSequencer.colorize("accent","#e863a8");
noiseSequencer.colorize("fill","#efc4da");
noiseSequencer.colors.mediumLight = "#7f8784";
noiseSequencer.instrument = noiseSynth1; 

const play = new Nexus.TextButton('#play',{
  'size': [700,50],
  'state': false,
  'text': 'Play',
  'mode': 'toggle',
  'alternate': 'Stop'
})

play.colorize("accent", "#e84c4c");
play.colorize("fill", "#5cd1c7");

const clear = new Nexus.TextButton('#clear',{
  'size': [700,50],
  'state': false,
  'text': 'Clear',
  'alternate': false
});

clear.colorize("accent", "#5cd1c7");
clear.colorize("fill", "#e5da72");

const demo1 = new Nexus.TextButton('#demo-1',{
  'size': [200,50],
  'state': false,
  'text': 'Demo 1',
  'alternate': false
});

demo1.colorize("accent", "#5cd1c7");
demo1.colorize("fill", "#c182ff");

const demo2 = new Nexus.TextButton('#demo-2',{
  'size': [200,50],
  'state': false,
  'text': 'Demo 2',
  'alternate': false
});

demo2.colorize("accent", "#5cd1c7");
demo2.colorize("fill", "#c182ff");

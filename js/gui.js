const triangleSequencer = new Nexus.Sequencer('#triangle-sequencer',{
 'size': [700,300],
 'mode': 'toggle',
 'rows': 5,
 'columns': 16
});
triangleSequencer.interval.rate = 150;
triangleSequencer.colorize("accent","#ff9a02");
triangleSequencer.colorize("fill","#f7deb9");

const sawtoothSequencer = new Nexus.Sequencer('#sawtooth-sequencer',{
 'size': [700,150],
 'mode': 'toggle',
 'rows': 2,
 'columns': 8  
});
sawtoothSequencer.interval.rate = 300;
sawtoothSequencer.colorize("accent","#9b5ce8");
sawtoothSequencer.colorize("fill","#d6c2ef");

const noiseSequencer = new Nexus.Sequencer('#noise-sequencer',{
 'size': [700,150],
 'mode': 'toggle',
 'rows': 1,
 'columns': 16  
});
noiseSequencer.interval.rate = 150;
noiseSequencer.colorize("accent","#e863a8");
noiseSequencer.colorize("fill","#efc4da");

const play = new Nexus.TextButton('#play',{
  'size': [700,50],
  'state': false,
  'text': 'Play',
  'mode': 'toggle',
  'alternate': 'Stop'
})

play.colorize("accent", "#e84c4c");
play.colorize("fill", "#57b8ba");

// Default Pattern
triangleSequencer.matrix.toggle.cell(0,0);
triangleSequencer.matrix.toggle.cell(1,1);
triangleSequencer.matrix.toggle.cell(3,2);
triangleSequencer.matrix.toggle.cell(9,2);
triangleSequencer.matrix.toggle.cell(8,3);
triangleSequencer.matrix.toggle.cell(6,4);

sawtoothSequencer.matrix.toggle.cell(0,0); 
sawtoothSequencer.matrix.toggle.cell(3,0);
sawtoothSequencer.matrix.toggle.cell(6,1);

noiseSequencer.matrix.toggle.cell(4,0); 
noiseSequencer.matrix.toggle.cell(12,0)









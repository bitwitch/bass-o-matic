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
 'rows': 3,
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

const clear = new Nexus.TextButton('#clear',{
  'size': [700,50],
  'state': false,
  'text': 'Clear',
  'alternate': false
});

clear.colorize("accent", "#00a97c");
clear.colorize("fill", "#e5da72");

const demo1 = new Nexus.TextButton('#demo-1',{
  'size': [200,50],
  'state': false,
  'text': 'Demo 1',
  'alternate': false
});

demo1.colorize("accent", "#00a97c");
demo1.colorize("fill", "#e5da72");

const demo2 = new Nexus.TextButton('#demo-2',{
  'size': [200,50],
  'state': false,
  'text': 'Demo 2',
  'alternate': false
});

demo2.colorize("accent", "#00a97c");
demo2.colorize("fill", "#e5da72");

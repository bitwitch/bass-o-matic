const sequencer = new Nexus.Sequencer('#sequencer',{
 'size': [700,300],
 'mode': 'toggle',
 'rows': 5,
 'columns': 16
})
sequencer.colorize("accent","#ffb649")
sequencer.colorize("fill","#efeded")

const play = new Nexus.TextButton('#play',{
  'size': [700,50],
  'state': false,
  'text': 'Play',
  'mode': 'toggle',
  'alternate': 'Stop'
})

play.colorize("accent", "#e84c4c");
play.colorize("fill", "#57b8ba");



 

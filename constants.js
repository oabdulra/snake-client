const IP = '192.168.1.159';
const PORT = 50541;

const moves = {
w: 'Move: up',
a: 'Move: left',
s: 'Move: down',
d: 'Move: right'
};

const emotes = {
  g: 'Say: GG!',
  c: 'Say: Nice Try!',
  x: 'Say: Wow!',
  z: 'Say: Wake up! Wake up!'
};



module.exports = {
  IP,
  PORT,
  moves,
  emotes
};
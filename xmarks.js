const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let position = [];
  for (var move of moves) {
    switch (move) {
      case 'east':
        x = x + 1;
        break;
      case 'west':
        x = x - 1;
        break;
      case 'north':
        y = y + 1;
        break;
      case 'south':
        y = y - 1;
        break;
    }
  }
  position.push(x);
  position.push(y);
  console.log(position);
  return position;
};
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

finalPosition(moves);

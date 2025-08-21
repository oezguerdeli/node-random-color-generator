// import convert from 'color-convert';

// Getting random color
var randomColor = getRandomColor();

console.log('###############################');
console.log('###############################');
console.log('###############################');
console.log('#####                     #####');
console.log(`#####       ${randomColor}       #####`);
console.log('#####                     #####');
console.log('###############################');
console.log('###############################');
console.log('###############################');

// Function to create a random color in hex format for every different possibilities in hex
function getRandomColor() {
  var letters = '0123456789abcdef';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

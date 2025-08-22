import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Declaration of variables
let inputLuminosity = 'random';
let inputHue = 'random';

let generatedColor = undefined;
// No arguments, random color will be created with random hue and lum.
if (argv[2] === undefined) {
  // Random color will be used with random hue and luminosity
} else if (argv.length === 3) {
  // Hue is taken from command line, luminosity is random
  inputHue = argv[2];
} else if (argv.length > 3) {
  // Hue and luminosity is taken from command line
  inputLuminosity = argv[3];
  inputHue = argv[2];
}

// Creating a random hex color variable
generatedColor = randomColor({
  luminosity: inputLuminosity,
  hue: inputHue,
});

console.log(chalk.hex(generatedColor).bold('###############################'));
console.log(chalk.hex(generatedColor).bold('###############################'));
console.log(chalk.hex(generatedColor).bold('###############################'));
console.log(chalk.hex(generatedColor).bold('#####                     #####'));
console.log(
  chalk.hex(generatedColor).bold(`#####       ${generatedColor}       #####`),
);
console.log(chalk.hex(generatedColor).bold('#####                     #####'));
console.log(chalk.hex(generatedColor).bold('###############################'));
console.log(chalk.hex(generatedColor).bold('###############################'));
console.log(chalk.hex(generatedColor).bold('###############################'));

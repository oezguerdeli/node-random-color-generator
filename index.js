import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Declaration of variables
const inputHue = 'random';
const inputLuminosity = 'random';

// Creating a random hex color variable
let generatedColor = undefined;

// No arguments, random color will be created and used
if (argv[2] === undefined) {
  // Random color will be used with random hue and luminosity
  generatedColor = randomColor({
    luminosity: inputLuminosity,
    hue: inputHue,
  });
} else if (argv.length > 2 && argv.length < 4) {
  generatedColor = randomColor({
    luminosity: inputLuminosity,
    hue: argv[2],
  });
} else if (argv.length >= 4) {
  generatedColor = randomColor({
    luminosity: argv[3],
    hue: argv[2],
  });
}

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

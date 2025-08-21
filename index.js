import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Declaration of variables
const inputHue = 'random';
const inputLuminosity = 'random';

// Creating a random hex color
let generatedColor = randomColor({
  luminosity: inputLuminosity,
  hue: inputHue,
});

// No arguments, random color will be created and used
if (argv[2] === undefined) {
  // Radnom color will be used with random hue and luminosity
} else if (argv.length < 4 && argv.length >= 2) {
  generatedColor = randomColor({
    luminosity: inputLuminosity,
    hue: argv[2],
  });
} else if (argv.length >= 3) {
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

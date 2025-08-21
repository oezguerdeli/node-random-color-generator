import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Declaration of variables
const inputLuminosity = 'light';

// Creating a random hex color variable
let generatedColor = undefined;

// No arguments, random color will be created and used
if (argv[2] === undefined) {
  // Random color will be used with random hue and luminosity
  generatedColor = randomColor();
} else if (argv.length === 3) {
  console.log(argv[2]);
  generatedColor = randomColor({
    luminosity: inputLuminosity,
    hue: argv[2],
  });
} else if (argv.length > 3) {
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

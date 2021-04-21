const validator = require('validator');
const chalk = require('chalk');
const sum = require('./utils').sum;
//const isArray = require('lodash').isArray;

console.log(validator.isEmail('asdfasdf@tecnoshare.com'));

console.log(chalk.blueBright.greenBright('Hola mundo!! en verde'));

console.log('Hola mundo 2');

console.log(sum(4,6));

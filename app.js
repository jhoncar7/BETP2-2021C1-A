//const validator = require('validator');
import validator from "validator";
import chalk from 'chalk';
//const sum = require('./utils').sum;
import * as utils from "./utils.js";
//const isArray = require('lodash').isArray;


console.log(validator.isEmail('asdfasdf@tecnoshare.com'));

console.log(chalk.blueBright.greenBright('Hola mundo!! en verde'));

console.log('Hola mundo 2');

console.log(utils.suma(4,6));

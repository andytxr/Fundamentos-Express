const exp1 = require('express');
const exp2 = require('express');

console.log(exp1===exp2);

const s1 = exp1();
const s2 = exp1();
console.log(s1===s2);

const router1 = exp1.Router();
const router2 = exp1.Router();
console.log(router1===router2)
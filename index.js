'use strict';
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

console.log('hi node!');

const result = MyMath.mul(2,6);
console.log('result = ', result);

const comp = new Component();
comp.render();
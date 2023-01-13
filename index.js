'use strict';
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

const result = MyMath.mul(2,6);
console.log('result = ', result);

const comp = new Component();
comp.render();

/*
resolving -> loading -> wrapping -> evaluation -> caching
*/
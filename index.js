'use strict';
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');
//require('test');
const result = MyMath.mul(2,6);
console.log('result = ', result);

const comp = new Component();
comp.render();

/*
resolving -> loading -> wrapping -> evaluation -> caching
resolving
1) core modules
2) file
    - *.js
    - *.json
3) directory 
    - package.json -> "main" 
    - index.js
    - index.json
4) node_modules  
5) throw new Error()  
*/
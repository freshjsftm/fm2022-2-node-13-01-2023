"use strict";
const _ = require("lodash");
// const Component = require("./Component");
import Component from './Component';
require("./style.css");
console.log("random number");
const min = 5;
const max = 10;
console.log(_.random(min, max, true));
console.log("5+10 = ", min + max);
const comp = new Component("test");
console.log(comp);
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

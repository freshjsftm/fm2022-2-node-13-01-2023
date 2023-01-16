"use strict";
const _ = require('lodash');
console.log(_.random(5,10, true))
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

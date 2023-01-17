"use strict";
//core module
//node modules
import _ from 'lodash';
//assets
import './style.css';
//custom modules
import Component from './Component';
//import {pow, sum, div} from './math';
import defMathVar, * as MyMath from './math';
//const {pow, sum, div} = math;
console.log(MyMath.default);
console.log("2**3 = ", MyMath.pow(2,3) );
console.log("2 + 3 = ", MyMath.sum(2,3));
//console.log("2 / 3 = ", div(2, 3 ));
// console.log("random number");
// const min = 5;
// const max = 10;
// console.log(_.random(min, max, true));
// console.log("5+10 = ", min + max);
// const comp = new Component("test");
// console.log(comp);
// comp.render();

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

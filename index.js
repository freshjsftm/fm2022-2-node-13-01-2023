"use strict";
const fs = require("fs").promises;
//console.log(fs)
fs.readFile("./text.txt", { encoding: "utf-8" })
  .then((content) => {
    //console.log(content)
    const newContent = content + "\nnew line\t!\n";
    fs.writeFile("./assets/newText.txt", newContent)
        .then()
        .catch((error) => {
            console.log('no such file or directory');
          })
    //fs.appendFile("./newText.txt", newContent);
  })
  .catch((error) => {
    console.log(error);
  });
//створити новий файл newText.txt і в цей записати зміст файлу text.txt,
//а в кінець ще дописати new line!
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

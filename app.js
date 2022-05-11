// npm -global command, comes with node
// 'npm --version' ou 'npm -v' dans le terminal donnera la version de npm

// local dependency - use it only in this particular project
// npm i <packageName> == npm install

// global dependency - use it in any project
// npm i -g <packageName>

// package.json - manifest file (stores important info about project/package)
// 3 manières d'installer package.json : 
// manual approach (create package.json in the root, create properties...)
// automatique, répondre aux q° une à une : npm init (step by step, press enter to skip)
// automatique, oui à toutes les q° : npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
//  node app => [1, 2, 3, 4]
// PATH

const path = require('path');

// path segment separator / ou \`:
console.log(path.sep);
// node app => \

// path d'un fichier
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);
// node app => \content\subfolder\test.txt

// avoir uniquement la dernière partie du path
const base = path.basename(filePath)
console.log(base);
//  node app => test.txt

// avoir le chemin complet
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
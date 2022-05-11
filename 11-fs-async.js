// FS : file system méthode asynchrone (code non bloquant) avec des callbacks (alternatives : promesses ou async/await)
// node app => console.log : start (l8), starting next task (l40), puis done with this task(l35)
// on commence une tâche, on en sort et le reste du code continue
//  donc node peut servir plusieurs utilisateurs

const {readFile, writeFile} = require('fs');
// équivalent de const fs = require('fs');
// fs.readFile

console.log('start');
// 2 arguments : le chemin et la fonction fléchée
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log('err:', err);
        return;
    }
    // callback : 
    // console.log('result', result); 
    // node app => result <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
    // c'est ce qu'on obtient si on ne met pas le code utf ligne 8
    // avec utf8 entre le chemin et la fonction callback on obtient : 
    // result Hello this is first text file

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if(err) {
            console.log('err:', err);
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log('err:', err);
                return;
            }
            // console.log(result);
            console.log('done with this task');
        })
    })
})
// node app => result 'undefined', mais le fichier result-async.txt est créé et le texte est écrit dedans
console.log('starting next task');
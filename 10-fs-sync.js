// FS : file system méthode synchrone = code bloquant
// synchrone : code lu ligne après ligne. Ce n'est que quand une ligne est exécutée, qu'on passe à la suivante.
// le console.log de la ligne 8 s'execute, puis la tâche writeFileSync s'effectue puis les 2 autres console.log
// si la tâche prend du temps à s'effectuer pour un utilisateur ou plusieurs utilisateurs, node ne pourra pas servir d'autres utilisateurs et l'application crashera.
// l'application ne sera pas utilisable par d'autres utilisateurs.

const {readFileSync, writeFileSync} = require('fs');
// équivalent de const fs = require('fs');
// fs.readFileSync
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);
// node app => Hello this is first text file Hello this is second text file

// créér un 3ème fichier qui n'existe pas encore : result-sync.txt et définir son contenu
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, 
// {flag:'a'} contenu x 2
)
// en faisant node app => le fichier result-sync.txt a été créé dans content avec le contenu qu'on avait défini
console.log('done with the task');
console.log('starting the next one');
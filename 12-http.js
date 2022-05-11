//  HTTP

const http = require('http');

// dans la fonction callback, il ns faut 2 paramètres : req, res (ce sont des objets)
// req représente la requête entrante
// res est ce qu'on renvoie comme réponse à la requête
const server = http.createServer((req, res)=> {
    // console.log(req);
    // node app => rien ne se passe car le serveur attend une requête
    // on retourne dans le navigateur, on rafraichit la page et la le console.log(req) s'affiche dans le terminal
    // regarder url property qui nous donne l'adresse à partir de laquelle le client fait sa requête
    if(req.url === `/`){
        res.end('Welcome to our home page')
    } else if(req.url === '/about'){
        res.end('Here is our short history')
    } else {
        res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
    // res.write('Welcome to our home page');
    // res.end()
})

// définir sur quel port notre serveur va être
server.listen(5000)
// node app => pas de réponse ds le terminal, puisqu'un serveur reste à l'écoute des requêtes en permanence
// si j'ouvre mon navigateur et que je tape localhost:5000 je vois "Welcome to our home page"
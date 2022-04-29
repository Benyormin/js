const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req);
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here it is ')
    }

res.end(`
<h1>  Error 404!!</h1>
<a href ="/" back home </a>


`)
})

server.listen(8080)
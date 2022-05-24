http = require('http')
fs = require('fs')
path = require('path')

PORT = process.env.PORT || 8000

http.createServer( (req,res) => {

    
    if( req.url == '/api'){

        random = Math.random();
        flag = random >= 0.5 ? 1: 0


        obj = {random: random, flag: flag}
        json = JSON.stringify(obj)

        res.writeHead(200, {'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'})
        res.write(json)
        res.end()
    }

    if( req.url == '/coin'){
        fs.readFile('./public/coin.html', (err,data) => {
            res.writeHead(200, {'content-type': 'text/html'})
            res.write(data)
            res.end()

        })

    }

    if( req.url = '/'){
        
        fs.readFile(`./public/index.html`, (err,data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()

        })
    }

    
}).listen(PORT, ()=> console.log(`Listen on port: ${PORT}`))

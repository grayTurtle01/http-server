http = require('http')

http.createServer( (req,res) => {
    res.write("Hello from http Server")
    res.end()
    
}).listen(8000)

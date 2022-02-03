const {Client} = require('pg')
const http = require('http');
const fs = require ('fs');
const path = require('path');

const hostname = '0.0.0.0';
const port = 4000;

const client = new Client({
	user: "postgres",
	password: "mypass",
	host: "postgres",
	port: 5432,
	database: "postgres"
})

client.connect()

server = http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("./index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream("./style.css", "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


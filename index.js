const apiCallFromNode = require('./nodeCallElastic')

const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/_cat/indices?v"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
}).listen(3001);

console.log("service running on 3001 port....");
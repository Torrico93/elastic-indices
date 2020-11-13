const http = require('http');
 
_EXTERNAL_URL = 'http://core.artisview.com:9200/_cat/indices?v';


const callToPortElastic = (callback) => {
    http.get(_EXTERNAL_URL, (resp) => {
    let data = '';
    
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    resp.on('end', () => {
        return callback(data);
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callToPortElastic;
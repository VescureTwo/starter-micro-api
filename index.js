var http = require('http');
const app = http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write();
    res.end();
}).listen(process.env.PORT || 3000);

app.post('/userlogin', function(sReq, sRes){    
    var email = sReq.body;
    console.log(email);
});

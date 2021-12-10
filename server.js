const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/rating', function (req, res) {
    const rate = req.query['rate'];
    switch(rate){
        case '1':
            console.log(`rate: ${rate} star`);
            break;
        default:
            console.log(`rate: ${rate} stars`);
    }
    res.send();
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    const url = `http://localhost:${PORT}`
    console.log(`Listening on ${url}`);
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('E:/Web development/StarWars' + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log('Helo')
})

app.listen(3000, function(){
    console.log('listening on 3000');
})
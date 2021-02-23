const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080; //use env for ability to change ports on run
const run = express();

let tables = [];
let wait = [];

run.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
run.get('/res', (req, res) => res.sendFile(path.join(__dirname, 'res.html')));
run.get('/tab', (req, res) => res.sendFile(path.join(__dirname, 'tab.html')));
run.get('/api/tab',(req, res) => res.json(tables));
run.get('/api/wait',(req, res) => res.json(wait));

//post table to appropriate json obj
run.post('/api/tab',(req, res) => {
    const addTable = req.body;
    if (tab.length < 5) {
        tab.push(addTable);
    } else {
        wait.push(addTable);
    }
    res.json(addTable);
});
//init
run.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
})
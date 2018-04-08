#!/usr/bin/env node

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('helloworld')
});

app.listen(8000, function () {
    console.log('listen on 8000')
});

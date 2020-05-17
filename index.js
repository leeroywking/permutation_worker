'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const arrayBuilder = require('./arrayBuilder.js')
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});
let count = 0

app.post('/permutate', (req, res) => {
    count +=1
    if(count %1 == 0){console.log(`${count} requests so far`)}
    const currentString = req.body.string
    const currentRemaining = req.body.remaining
    // console.log(`Working on ${currentRemaining}, ${currentString}`)
    const arrayOfStringsAndRemainingLetters = arrayBuilder(currentString, currentRemaining)
    res.status(200).send({remaining: arrayOfStringsAndRemainingLetters})
})
 
app.listen(3000, () => console.log('worker node listening on port 3000!'));

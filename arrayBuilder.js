'use strict'

function arrayBuilder(currentString, currentRemaining){
    let arrayOfStringsAndRemainingLetters = []
    for(let i = 0; i < currentRemaining.length; i++){
        let tempRemaining = [...currentRemaining]
        let string = currentString + tempRemaining[i]
        tempRemaining = tempRemaining.filter((v,idx) => idx !== i)
        let obj = {string, remaining: tempRemaining}
        arrayOfStringsAndRemainingLetters.push(obj)
    }
    return arrayOfStringsAndRemainingLetters
}


module.exports = arrayBuilder
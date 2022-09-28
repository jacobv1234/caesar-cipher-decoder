const prompt = require('prompt-sync')()

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

//encoding algorithm
function encodeMessage(message) {
    // generate key
    let key = Math.floor(Math.random() * 9999)
    let output = key + ','

    // go through each letter
    for (let i = 0; i < message.length; i++) {
        // get the letter
        let character = message[i]

        // skip if space
        if (character != ' ') {
            let charIndex = alphabet.indexOf(character)

            // apply adjustment
            charIndex += key
            for (; charIndex > 25; charIndex -= 26) {}
            let newcharacter = alphabet[charIndex]

            // add to output
            output += newcharacter
        } else {
            output += ' '
        }
    }

    // display output
    console.log(output)
}

//decoding algorithm
function decodeMessage(input) {
    // break the input into key and message
    let splitmessage = input.split(',')
    let key = splitmessage[0]
    let message = splitmessage[1]
    let output = '' + ''

    // go through each letter
    for (let i = 0; i < message.length; i++) {
        // get the letter
        let character = message[i]

        // skip if space
        if (character != 0) {
            let charIndex = alphabet.indexOf(character)

            // apply adjustment
            charIndex -= key
            for (; charIndex < 0; charIndex += 26) {}
            let newcharacter = alphabet[charIndex]

            // add to output
            output += newcharacter
        } else {
            output += ' '
        }
    }

    // display output
    console.log(output)
}

// menu
console.log(`
Welcome to the Caesar Cipher encoder / decoder.
Pick from:
1) Encode a message
2) Decode a message
`)
let selection = prompt('>>> ')

if (selection == 1) {
    // encode selected
    let message = prompt('Enter a message to encode (lowercase letters and space only): ')
    encodeMessage(message)
} else {
    // decode selected
    let message = prompt('Enter a message to decode (example format "106,louyhg"): ')
    decodeMessage(message)
}
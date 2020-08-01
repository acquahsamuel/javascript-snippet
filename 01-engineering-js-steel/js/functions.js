function square(num) {
    return num * num
}

function addition(x, y) {
    return x + y
}

let squareS = square(3)
console.log(squareS)

function isPurple(color) {
    return color.toLowerCase() === 'purple'
}

console.log(isPurple('purple'))

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true
        }
    }
    return false
}

// Function Challenge

console.log('========Function Challenge ============')

function isValidPassword(password, username) {
    if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
        return false
    }
    return true
}

console.log(isValidPassword('89Fjj1nms', 'dogluvr'));


// function array challenge
function averageChallenge(arrayValu) {
    let total = 0;
    for (let eachArrayVal of arrayValu) {
        total += eachArrayVal;
    }
    return total / arrayValu.length;
}

console.log(averageChallenge([0, 50]));

// Pangrams
function isPangram(sentence) {
    let lowerCase = sentence.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of alphabet) {
        if (lowerCase.indexOf(char) === -1) {
            return false
        }
    }
    return true;
}

isPangram('Hellow');


// Get Chard

console.log('========getChar ============')


function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}


function getCard() {
    let alphaNum = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];

    let suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    return {value: pick(alphaNum), suit: pick(suit)};

}

console.log(getCard());



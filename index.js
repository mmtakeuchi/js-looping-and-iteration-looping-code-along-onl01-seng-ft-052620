function writeCards(array, event) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return result;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}

countDown();
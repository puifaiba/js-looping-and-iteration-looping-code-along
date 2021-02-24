// Code your solutions in this file
function writeCards(names, event) {
    let message_arr = []
    for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    message_arr.push(message)
    }
    return message_arr;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
}
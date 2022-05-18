const reverseString = function(string) {
    let characters = string.length;
    let index = string.length - 1;
    let reversed = '';
    for (let i=0; i < characters; i++){
        let letter = string.charAt(index);
        reversed += letter;
        index -= 1;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

const reverseString = function(string) {
    // //using bracket notation - brute force
    // let reversedString = "";
    // for(let i = string.length-1; i>=0; i--) {
    //     reversedString += string[i];
    // }
    // return reversedString;
    
    // using split to convert it to array and then reverse array and join??
    let charactersOfString = string.split("");
    return charactersOfString.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

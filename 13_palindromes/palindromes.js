function cleanTheString(string) {
    return string.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const palindromes = function (str) {
    let cleanedString = cleanTheString(str);
    let revStr = cleanedString.split("").reverse().join("");
    return cleanedString === revStr;
};

// Do not edit below this line
module.exports = palindromes;

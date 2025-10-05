const removeFromArray = function(array, ...toBeRemoved) {
    let arr = array.filter((element) => !(toBeRemoved.includes(element)));
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

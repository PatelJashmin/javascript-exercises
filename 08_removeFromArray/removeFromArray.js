function removeEleUsingIndex(array, index) {
    array.splice(index, 1);
}

const removeFromArray = function(array, ...toBeRemoved) {
    for(const remove of toBeRemoved) {
        let index = array.indexOf(remove);
        while (index>=0) {
            removeEleUsingIndex(array, index);
            index = array.indexOf(remove);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

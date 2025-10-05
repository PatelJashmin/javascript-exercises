function arePositiveIntgers(a, b) {
    return Number.isInteger(a) && Number.isInteger(b) && a>=0 && b >=0;
}

const sumAll = function(a, b) {
    if(!arePositiveIntgers(a,b)) return "ERROR";
    
    const min =  Math.min(a,b);
    const max = Math.max(a,b);
    let sum = 0;
    for(let i = min; i<=max; i++) {
        sum += i;
    }
    return sum;   
};

// Do not edit below this line
module.exports = sumAll;

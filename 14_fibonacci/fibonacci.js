const fibonacci = function(n) {
    let num = +n;
    if(num<0) return "OOPS";
    if(num == 0 || num == 1) return num;
    let a = 0, b = 1, c;
    for(let i = 2; i<=num; i++){
        c = b+a;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

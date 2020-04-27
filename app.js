'use strict';

function fib(n) {

    if (n === 0) return 0;

    if (n === 1) return 1;

    // return null;

    return fib(n - 1) + fib(n - 2);

}

let length = 40;

for (let i = 0; i <= length; i++) {

    let result = fib(i);

    console.log(result);
    
}
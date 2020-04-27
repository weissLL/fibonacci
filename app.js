'use strict';

// O(pow(2, n))

/* function fib(n) {

    if (n === 0) return 0;

    if (n === 1) return 1;

    // return null;

    return fib(n - 1) + fib(n - 2);

}

let length = 40;

for (let i = 0; i <= length; i++) {

    let result = fib(i);

    console.log(result);

} */

// O(n)

const memo = new Map();

memo.set(0, 0); memo.set(1, 1);

function fib(n) {

    if (memo.has(n)) return memo.get(n);

    let value = fib(n - 1) + fib(n - 2);

    memo.set(n, value);

    return value;

}

let length = 40;

for (let i = 0; i <= length; i++) {

    let result = fib(i);

    console.log(result);

}
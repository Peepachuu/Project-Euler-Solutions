let fib1 =  1;
let fib2 = 2;
let sum = 0;

while (fib1 < 4000000) {
    if (fib2 % 2 == 0)
        sum += fib2;
    [fib1, fib2] = [fib2, fib1 + fib2];
}
console.log(sum);
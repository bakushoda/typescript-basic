const identity = <T>(value: T):T => value;

let number = identity<number>(10);
console.log(number);
console.log(typeof number);


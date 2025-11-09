"use strict";
const numbers = [1, 2, 3];
const names = ['john', 'mary'];
const addNumber = (arr, num) => [...arr, num]; // 非破壊的なのでpushよりこっちのほうがいい。
console.log(addNumber(numbers, 4));
const addName = (arr, str) => [...arr, str];
console.log(addName(names, 'test'));

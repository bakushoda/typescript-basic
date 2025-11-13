"use strict";
// デフォルト引数
const greet2 = (name, message = "hello") => {
    console.log(`${message}, ${name}`);
};
greet2('taro');
// オプション引数
const displayInfo2 = (name, age) => {
    if (age !== undefined) {
        console.log(`${name}, ${age}`);
    }
    else {
        console.log(`${name}`);
    }
};
displayInfo2('taro');

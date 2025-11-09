// 型注釈
let age2: number = 20;
// age = 'twenty'; error

// const greet = (userName) => `Hello, ${userName}`; // userNameの型を指定していないのでエラーになる
const greet = (userName: string) => `Hello, ${userName}`;
console.log(greet('John')); // 呼び出すときもstringのみ

// 型推論
// let age3 = 30;
// age3 = 'twenty'; // エラーになる

// const greet2 = (userName = 'guest') => `Hello, ${userName}`;
// console.log(greet2(32)); // 型推論でエラーになる

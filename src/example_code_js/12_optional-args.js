// デフォルト引数

const greet = (name, message="こんにちは") => {
    console.log(`${message}, ${name}`);
    
}
greet("太郎");

const calculate = (price, taxRate = 0.1, discount=0) => {
    console.log(price+price*taxRate-discount);
    
}
calculate(1000);


// オプション引数
const displayInfo = (name, age) => {
    if(age !== undefined) {
        console.log(`${name}, ${age}`);
    } else {
        console.log(`${name}`);
    }
}

displayInfo('hanako')
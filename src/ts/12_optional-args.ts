// デフォルト引数

const greet2 = (name: string, message: string="hello"):void => {
    console.log(`${message}, ${name}`);
    
}
greet2('taro');

// オプション引数
const displayInfo2 = (name: string, age?: number) => {  // ?でオプション引数にできる
    if (age !== undefined) {
        console.log(`${name}, ${age}`);
        
    } else {
        console.log(`${name}`);
        
    }
}

displayInfo2('taro');

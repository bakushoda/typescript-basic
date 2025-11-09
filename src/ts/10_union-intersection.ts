// ユニオン型
type Id = number | string;

let userId2: Id = 10;
userId2 = 'ten';
console.log(userId2);

// インターセクション型
interface User4 {
    name: string,
    age: number
}

interface Admin {
    role: "admin"
}

type AdminUser = User4 & Admin; // interfaceを結合
const adminUser: AdminUser = {
    name: 'admin',
    age: 20,
    role: 'admin'
}


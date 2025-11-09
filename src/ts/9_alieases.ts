// 型エイリアス
type UserId = number;

let userId: UserId = 10;
// userId = 'ten';


// 複雑な型の設定を簡潔化
type Address = {
    street: string,
    city: string,
}

type User3 = {
    name: string,
    age: number,
    address: Address
}


// オブジェクトの定義

type User = {
    name: string,
    age: number,
    gender: string,
}

const user:User = {
    name: 'john',
    age: 20,
    gender: 'man'
}

// user.email = 'john.com';  // エラーになる。プロパティを追加する際もtypeを追加したうえで行う。

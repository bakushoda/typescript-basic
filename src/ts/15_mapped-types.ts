interface User6 {
    name: string,
    age: number
}

// データ型の設定
type User6type = {
    [key in keyof User6]: string | number
}

const user6: User6type = {
    name: 'taro',
    age: 20
}

type ReadonlyUser = {
    readonly [P in keyof User6]: User6[P] // User6の要素一つ一つに対してそれをreadonlyにする処理
}

const user7: ReadonlyUser = {
    name: 'taro',
    age: 20
}

console.log(user7);

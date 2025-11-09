const numbers: number[] = [1,2,3];
const names: string[] = ['john', 'mary']

const addNumber = (arr: number[], num: number):number[] => [...arr, num]; // 非破壊的なのでpushよりこっちのほうがいい。
console.log(addNumber(numbers, 4));

const addName = (arr: string[], str: string):string[] => [...arr, str];
console.log(addName(names, 'test'));

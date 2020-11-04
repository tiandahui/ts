// 布尔值
let isDone: boolean = false

// 使用构造函数Boolean创造的对象不是布尔值，返回的是一个boolean类型
let createdByNewBoolean: Boolean = new Boolean(1)


// 数值
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
// es6的二进制
let binaryLiteral: number = 0b1010
// es6的八进制
let octalLiteral: number = 0o744
let notNumber = NaN
let infinityNumber = Infinity


// 字符串
let myName: string = "Tom"
let myAge: number = 25
let sentence = `hello, my name is ${myName}`
let sentenceAge = 'i am' + myAge + 'years old'


// 空值  js中无此定义，ts中用void表示没有返回值的函数
function alterName(): void {
  alert('myNameisTom')
}

// null和undefined
// null和undefined是所有number的子类，可赋值给number类型
// 而void定义的空值不能赋值给number类型
let u: undefined = undefined
let n: null = null

let unum: number = u
// 报错
// let uvoid: void
// let vnum: number = uvoid
// 原始数据类型.ts:40:5 - error TS2322: Type 'void' is not assignable to type 'number'.
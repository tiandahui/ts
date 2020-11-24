// 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候在指定类型的一种特性
// 例子：创建一个指定长度的数组，同时将每一项都填充一个默认值
function creatArray (length: number, value: any): Array<any> {
  let result = []
  for (let i =0; i< length; i++) {
    result[i] = value
  }
  return result
}

creatArray(3, 'x')

// Array<any>允许数组的每一项都为任意类型，他并没有准确的定义返回值的类型
// 但是预期是数组中的每一项都应该是输入的value类型
function createArray<T> (length: number, value: T) { // T用来指代任意输入的类型
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
}


// 多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数
function swap<T, U> (tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道他是那种类型的，所以不能随意操作属性或方法
function loggingIndextity<T>(arg: T): T {
  console.log(arg.length) // 泛型T上面没有length属性，所以编译报错
  return arg
}

interface Lengthwise {
  length: number
}

function loggingIndextitys<T extends Lengthwise> (arg: T) {
  console.log(arg.length)
  return arg
}  // 我们约束了泛型T必须符合接口Lengthwise的形状，也就是必须包含length属性
loggingIndextitys(7)  // 如果调用的时候，传入的arg不包含length，在编译的时候就会报错

// 多个类型参数之间也可以互相约束
function copyFields<T extends U, U> (target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}

let x = {a: 1, b: 2, c: 3, d: 4}
copyFields(x, {b: 10, d: 20}) // 其中要求T继承了U，这样就保证了U上不会出现T中不存在的字段了

// 泛型接口
// 可以使用接口的方式来定义一个函数需要符合的形状
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 也可以使用含有泛型的接口来定义函数的形状
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>
}

let createArray1: CreateArrayFunc
createArray1 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

// 我们可以把泛型参数提前到接口名上

createArray1(3, 'x')

// 与泛型接口类似，泛型也可以用于类型定义中
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number> ()

myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {return x + y}


// 泛型参数的默认类型
function createArray2<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
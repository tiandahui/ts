// 函数要对输入输出进行约束，并且不允许输入多于或者少于参数
function numberSum(x: number, y: number): number {
  return x + y
}


// 通过表达式进行函数定义 
// 原理只对等号右侧的匿名函数进行了类型定义，而等号左边，是通过赋值操作进行类型推论而推断出来的
// let funSum = function (x: number, y: number): number {
//   return x + y
// }

// 若想要手动给funSum添加类型
let funSum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 可选参数，用？定义可选参数, 可选参数必须在必需参数后面，可选参数后面不允许出现必需参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + '' + lastName
  } else {
    return firstName
  }
}
let tomcat = buildName('tom', 'cat')
let tom1 = buildName('tom')

// 默认参数值，ts会将添加了默认值的参数识别成可选参数,此时不受可选参数必在必须参数的后面了
// function buildNamea (firstName: string, lastName: string = 'cat') {
//   return firstName + '' + lastName
// }

function buildNamea(firstName: string = 'jack', lastName: string) {
  return firstName + '' + lastName
}

let jackCat = buildNamea('jack', 'cat')
let jack = buildNamea(undefined, 'cat')

// 剩余参数
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item)
  })
}

let a: any[] = []
push(a, 1, 2, 3)



// 重载，允许一个函数接受不同数量或类型的参数时，作出不同的处理
// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   } else if (typeof x === 'string') {
//     return x.toString().split('').reverse().join('')
//   }
// }

// 上述不能够精确的表达，输入为数字的时候，输出也为数字，输入为字符串的时候，输出也应该为字符串
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.toString().split('').reverse().join('')
  }
}


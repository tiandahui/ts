// 如果定义了两个相同名字的函数，接口或类，那么就把他们合并成一个类型
// 函数的合并,可以使用重载定义多个函数类型
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

// 接口的合并
interface Alarm {
  price: number
}

interface Alarm {
  weight: number
}

// 等同于
interface Alarm {
  price: number
  weight: number
} // 合并的属性类型必须是唯一的， 接口中的方法合并与函数的合并是一样的



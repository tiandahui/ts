// 定义数组类型有多种定义方式
// 1：用类型 + []来定义数组
let fibonacci: number[] = [1, 1, 2, 3, 4]


// 2: 数组泛型 用Array<elemType>来表示数组
let arr: Array<number> = [1, 1, 2, 3, 4]

// 3. 用接口表示数组
interface NumberArray {
  [index: number]: number
}

let Arr: NumberArray = [1, 2, 3, 4, 5]


// 4. 类数组 不是数组类型，不能用普通方式定义，只能用接口的方式进行定义
function sum() {
  let args: {
    [index: number]: number,
    length: number,
    callee: Function
  } = arguments
}

// any在数组中的应用
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]
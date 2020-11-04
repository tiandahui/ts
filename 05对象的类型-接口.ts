// 在面向对象语言中，接口是一个很重要的概念，他是对行为的抽象，而具体如何行动需要由类（classes）实现
// interface Person {
//   name: string
//   age: number
// }
// let tom: Person = {
//   name: 'Tom',
//   age: 17
// }


// 属性必须和接口保持一致，，多一个少一个都不行，
// 也可通过？定义可选属性,该属性可以不存在，但仍然不允许添加未定义的属性
// interface Person {
//   name: string
//   age?: number
// }
// let tom: Person = {
//   name: 'Tom'
// }

// 任意属性
// interface Person {
//   name: string
//   age: number
//   [propName: string]: any // 一旦定义了类型，那么可选属性和确定属性都必须和他类型一致

// }

// let tom: Person = {
//   name: 'Tom',
//   age: 17,
// }


// 只读属性  只能在创建的时候被赋值，可以用readonly定义
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

let tom: Person = {
  id: 123,
  name: 'Tom',
  gender: 'male'
}
tom.id = '89757'


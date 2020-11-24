// 类的概念
// 类：定义了一件事物的抽象特点，包含他的属性和方法
// 对象：类的实例，通过new生成
// 面向对象的三大特征：封装、继承、多态
// 封装：将对数据的操作细节隐藏起来，值暴露对外的接口。外界调用端不需要知道细节
//      就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
// 继承：子类继承父类，子类除了拥有父类的特征之外，还有一些更具体的特性
// 多态：由继承产生了相关的不同的类，对同一方法可以有不同的相应。
// 存取器：可以改变属性的读取和赋值行为
// 修饰符：修饰符是一些关键字，用于限定成员或类型的性质
// 抽象类：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中实现。
// 接口：不同类之间共有的属性或方法，可以抽象成一个接口，接口可以被类实现，一个类智能继承自另一个类，但是可以实现

// ES6使用class定义类，使用constructor定义构造函数
class Animal {
  public name;
  constructor (name) {
    this.name = name
  }
  sayHi () {
    `return my name is ${this.name}`
  }
}
// 继承：通过new生成新实例，会自动调用构造函数，使用extend来实现继承，子类中使用super关键字来调用父类的构造函数和方法，
class Cat extends Animal {
  constructor (name) {
    super (name)
    console.log(this.name)
  }
}
let c = new Cat('Tom')

// 存取器：使用getter和setter可以改变属性的赋值和读取行为
class Animals {
  constructor (name) {
    this.name = name
  }
  get name () {
    return 'Jack'
  }
  set name (value) {
    console.log('setter' + value)
  }
}
let a = new Animals('kitty')
a.name = 'Tom'

// 静态方法，使用stitac修饰符修饰的方法成为静态方法，他们不需要实例化，而是 直接通过类来调用
class Animals1 {
  static isAnimal (a) {
    return a instanceof Animals1
  }
}

let b = new Animals1 ('Jack')
Animals1.isAnimal(b)

// es7中可以直接在类里面定义
class Animals2 {
  name = 'jack'
  constructor () {

  }
}

// ts中类的用法
// public private和protected
// ts中可以使用三种访问修饰符，分别是public，private以及protected
// public：修饰的属性或方法是共有的，可以在任何地方呗访问到，默认所有的属性和方法是public
// private：修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected： 修饰的属性或方法是受保护的，他和private是类似的，区别是他在子类中也是可以被访问的
class Teach {
  public name  // name为公有属性，在外部能访问到，
  public constructor (name) {
    this.name = name
  }
}

let rose = new Teach('rose')
rose.name = 'rose'


class Teaches {
  private name
  public constructor (name) {
    this.name = name
  }
}

let lily = new Teaches('lily')


// 当修饰符是protected的时候，该类只允许被继承
// 修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值
// 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中，reaonly和修饰符同时存在时，只需要写在其后面
// 抽象类，abstract 抽象类不允许实例化，
abstrat class Teaches1 { // 报错是因为抽象类中的抽象方法必须被子类实现
  public name
  public constructor (name) {
    this.name = name
  }
  public abstract sayHi ()
}

class MathTeach extends Teaches1 {
  public sayHi () {
  }
}

let math = new MathTeach('tom')

// 类的类型，与接口类似，
class Type {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi (): string {
    return `name is ${this.name}`
  }
}
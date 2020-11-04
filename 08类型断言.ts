// 类型断言可以用来指定一个值的类型, 类型断言只能‘欺骗’ts编译器，无法避免运行时的错误，滥用类型断言会导致运行时错误
// 语法 值 as 类型 或  <类型>值 在tsx的语法中必须使用前者


// 用途
// 一：将一个联合类型断言为其中一个类型
// interface Cat {
//   name: string,
//   run (): void
// }

// interface Fish {
//   name: string,
//   swim () : void
// }

// function getName (animal: Cat | Fish) {
//   return animal.name
// }

// 有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法
interface Cat {
  name: string,
  run(): void
}

interface Fish {
  name: string,
  swim(): void
}

function isFish(animal: Cat | Fish) {
  // if (typeof animal.swim === 'function') {  // 报错cat上没有swim属性，此时需要使用类型断言， 将animal断言成fish
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 二：作为一个父类断言为更加具体的子类（当类之间有几成关系时，类型断言也是很常见的）
class ApiError extends Error {
  code: number = 0
}

class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') { // 可以使用instanceOf，更适合判断是不是apiError
    return true
  }
  return false
}

// 但ApiError和httpError不是一个真正的类，而只是一个ts的接口，接口是一个类型，不是一个真正的值，
// 在编译结果中会被删除，当然就无法使用instanceof来运行时判断了


// 三：将任何一个类型断言为any
// 比如
// const foo: number = 1
// foo.length = 1
// 此时报错length属性不存在，但有时我们确定是对的，比如：window.foo = 1

(window as any) = 1 //这样就把window断言成any类型，就不会报错了 ，但此方法极有可能掩盖了真正的类型错误，不要轻易使用as any

// 四：将any断言成一个具体的类型
// 遇到any类型，哦们需要改进，通过类型断言将any断言成精确的类型
function getCacheData(key: string): any {
  return (window as any).cache[key]
}

interface CatData {
  name: string,
  run(): void
}

const tom2 = getCacheData('tom') as CatData
tom2.run()

// 类型断言的限制：若A兼容B，那么A能够被断言成B，B也能被断言成A
interface Animal {
  name: string
}
interface Cat {
  name: string,
  run(): void
}

let Jerry: Cat = {
  name: 'Jerry',
  run: () => {
    console.log('run')
  }
}

let animal: Animal = Jerry
// 上述例子中Cat包含了Animal的所有属性，和Cat extends Animal是等价的
interface Animal {
  name: string
}

interface Cat extends Animal {
  run(): void
}
// 当animal兼容cat时就可以互相断言了
interface Animal {
  name: string
}
interface Cat {
  name: string,
  run(): void
}

function testAnimal(animal: Animal) {
  return (animal as Cat)
}

function testCat(cat: Cat) {
  return (cat as Animal)
}



// 综上所述，
// 1. 联合类型可以被断言成其中一个类型
// 2. 父类可以被断言成子类
// 3. 任何类型都可以被断言成any
// 4. any可以被断言成任何类型
// 5. 要使得A能够被断言为B，只需要A兼容B，或者B兼容A即可


// 既然任何类型可以断言成any，any可断言成任何类型，那么可以使用双重断言
// as any as Foo 来讲任何一个类型断言为另一个类型

// 类型断言 vs 类型转换
// 类型断言不是类型转换，不会真的影响到变量的类型
// function toBoolean(something: any): boolean {
//   return something as boolean
// }
// toBoolean(1)


// 若要进行类型转换，需要直接调用类型转换的方法
function toBoolean(something: any): boolean {
  return Boolean(something)
}
toBoolean(1)

// 类型断言 vs 类型声明
// 区别在与 将A断言给B，只需要A兼容B或B兼容A， 二将A赋值给tom，需要满足B兼容A才行，但是B并不兼容A
function getData(key: string): any {
  return (window as any).caChe[key]
}
interface Cat {
  name: string
  run(): void
}

// const rose = getData('rose') as Cat  // 这是使用as Cat将any断言为了cat类型   还可以用
const rose: Cat = getData('rose')  // 这是类型声明，比类型断言更为严格
rose.run()

// 类型断言 vs 泛型
// 对于上述结果第三种解决问题
function getDataCache<T>(key: string): T {
  return (window as any).cache[key]
}

interface Cat {
  name: string,
  run(): void
}

const lily = getDataCache<Cat>('lily')
lily.run()
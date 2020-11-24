// 类实现接口
// 一个类只能继承自另一个类，有时候不用类之间可以有一些共有的特性，这时候就可以把这些特性提取成接口，
// 用implements关键字来实现。这些特性大大提高了面向对象的灵活性
// 举例：门是一个类，防盗门是一个子类，如果防盗门有一个报警器的功能，我们可以简单的给防盗门加一个报警的方法，
//       这时候如果有另一个类，车也有报警功能，就可以把报警器提取出来，作为一个接口，防盗门和车都去实现它
interface Alarm {
  alert (): void
}

class Door {
}

class SecuirtyDoor extends Door implements Alarm {
  alert () {
    console.log('Security alert')
  }
}

class Car implements Alarm {
  alert () {
    console.log('Car alert')
  }
}

// 一个类实现多个接口
interface Alarm {
  alert (): void
}

interface Light {
  lightOn (): void
  lightOff (): void
}

class Cars implements Alarm, Light {
  alert () {
    console.log('Car Alert')
  }
  lightOn () {
    console.log('Car light on')
  }
  lightOff () {
    console.log('Car light off')
  }
}

// 接口继承接口
interface Alarm {
  alert ():
}

interface LightTableAlarm extends Alarm {
  lightOn (): void
  lightOff (): void
}


// 接口继承类
class Point {
  x: number
  y: number
  constructor(x: number, y:number) {
    this.x = x
    this.y = y
  }
}

interface Point3D extends Point {
  z:number
}

let point3D: Point3D = {x: 1, y: 2, z: 3}

// 在声明class Point时  除了会创建一个名为Point的类之外，同时也创建了一个名为Point的类型
// 我们既可以将point当做一个类来用也可以把它当做一个类型来用

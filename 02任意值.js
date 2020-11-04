var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
// 任意值上访问任何属性是允许的
var anything = 'hello';
console.log(anything.myName);
console.log(anything.myName.firstName);
// 也可以调用任何方法
var anyThing = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
// 为声明类型的变量，将会被识别为任意类型

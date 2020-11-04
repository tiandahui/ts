// 布尔值
var isDone = false;
// 使用构造函数Boolean创造的对象不是布尔值，返回的是一个boolean类型
var createdByNewBoolean = new Boolean(1);
// 数值
var decLiteral = 6;
var hexLiteral = 0xf00d;
// es6的二进制
var binaryLiteral = 10;
// es6的八进制
var octalLiteral = 484;
var notNumber = NaN;
var infinityNumber = Infinity;
// 字符串
var myName = "Tom";
var myAge = 25;
var sentence = "hello, my name is " + myName;
var sentenceAge = 'i am' + myAge + 'years old';
// 空值  js中无此定义，ts中用void表示没有返回值的函数
function alterName() {
    alert('myNameisTom');
}
// null和undefined
// null和undefined是所有number的子类，可赋值给number类型
// 而void定义的空值不能赋值给number类型
var u = undefined;
var n = null;
var unum = u;
var uvoid;
var vnum = uvoid;

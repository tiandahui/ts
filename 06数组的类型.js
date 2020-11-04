// 定义数组类型有多种定义方式
// 1：用类型 + []来定义数组
var fibonacci = [1, 1, 2, 3, 4];
// 2: 数组泛型 用Array<elemType>来表示数组
var arr = [1, 1, 2, 3, 4];
var Arr = [1, 2, 3, 4, 5];
// 4. 类数组 不是数组类型，不能用普通方式定义，只能用接口的方式进行定义
function sum() {
    var args = arguments;
}
// any在数组中的应用
var list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];

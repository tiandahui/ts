// 当使用第三方库时，我们需要引用他的声明文件，才能获取对应的代码补全，接口实体等功能


// 声明全局变量
declare var
  // 声明全局方法
  declare fucntion
// 声明全局枚举类型
declare enum
  // 声明全局类
  declare class
  // 声明(含有紫属性的)全局对象
  declare namespace
// 声明全局类型
interface || type
// 导出变量
export
// 导出（含有子属性）对象
export namespace
// ES6默认导出
export default
// commonjs导出模块
export =
// UMD库声明全局变量
export as namespace
// 扩展全局变量
declare global
// 扩展全局变量
declare module
// 三斜线指令
/// <reference />


// 声明语句：在js中jQuery获取id为foo的元素为$('#foo')或者jQuery('#foo')，但ts不认识$ 或者 jQuery，需要用户declare var来定义他的类型
declare var jQuery: (selector: string) => any // declare var 并没有真得定义一个变量，只是定义了全局变量，编译结果中会被删除


// 声明文件：通常会把声明语句放到一个单独的文件中，（xxx.d.ts）若仍然无法解析，
// 需要检查tsconfig.json文件中的files，include华日exclude配置，确保包含了jQuery.d.ts文件

// 第三方声明文件:我们可以直接下载下来,推荐使用@types统一管理第三方库的声明文件
// 书写声明文件:第三方库没有提供声明文件时,就需要自己写
// 不同的场景下,声明文件内容和使用方法会有区别
// 库的使用场景
// 全局变量: 通过script标签引入第三方库,注入全局变量
// npm包: 通过import foo from 'foo'导入  符合ES6模块规范
// UMD库: 既可以通过script标签引入,也可以通过import引入
// 直接
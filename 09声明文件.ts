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
// 直接扩展全局变量：： 通过script引入后，改变一个全局变量的结构
// 在npm包或者UMD库中扩展全局变量：引用npm包或UMD库后，改变一个全局变量的结构
// 模块插件：通过script包或import导入后，改变另一个模块的结构


// 全局变量
declare var // 能够用来定义一个全局变量的类型，与其类似的是declare let和declare const
declare let jQuery: (selector: string) => any
// 声明语句只能定义类型，不能在声明语句中定义具体的实现

declare function jQuery(selector: string): any  // 允许函数重载

declare class Animal { // 只能用来定义类型，不能用来定义具体的实现
  name: string,
  constructor(name: string),
  sayhi (): string
}

declare enum Directions {
  Up,
  Down,
  Left,
  Right
} // 此方法定义的枚举类型也称作外部枚举，同样只是定义类型，不能定义具体的值


declare namespace  // 用来表示全局变量的一个对象，包含很多子属性，子属性也是个全局变量
declare namespace jQuery {
  function ajax(url: string, settings?: any): void // 再此内部直接使用function ajax来声明函数，
                                                   // 而不是使用declare function ajax，类似的可以使用const class enum等语句
}
// ajax可以直接调用

// 嵌套命名空间
declare namespace jQuery {
  function ajax(url: string, settings?: any): void
  namespace fn {
    function extend(object: any): void
  }
}

// interface 和 type
// 除了全局变量之外，可能有一些类型我们也希望能暴露出来。在类型声明文件中，我们可以直接
// 使用interface或type来声明一个全局的接口或类型
interface AjaxSettings {
  method?: 'GET' | 'POST',
  data?: any
}

declare namespace jQuery {
  function ajax(url: string, settings: AjaxSettings): void
}

let settings: AjaxSettings = {
  method: 'POST',
  data: {
    name: 'foo'
  }
}

// 声明合并，jQuwey既是一个函数又是一个对象，拥有子属性，那么我们可以组合多个语句，他们会不冲突的合并起来
declare function jQuery(selector:string): any;
declare namespace jQuery(url: string, settings?: any): void;

// 自动生成声明文件
// 在命令行中添加--declaretion（简写-d），或者在tsconfig.json中添加declaretion选项
{
  "compilerOptions": {
      "module": "commonjs",
      "outDir": "lib",  // 将ts文件输出到lib目录下，然后添加declaretion
      "declaration": true,
  }
}

// 将声明文件通过tsc自动生成的，那么无需做任何其他配置，只需要把编译好的文件也发布到npm上，适用方就可以获取到类型提示了。
// 如果手动写的声明文件，那么需要满足一下条件之一，才能被正确识别：
/** 
 * 给package.json 中的types或typings字段指定一个类型声明的文件地址
 *   例如： {
 *            "name": "foo",
 *            "version": "1.0.0",
 *            "main": 'lib/index.js,
 *            "types": "foo.d.ts"
 *          }   typing和type一样，只是另一种写法，如果没有指定types和typings，那么就会在根目录下寻找index.d.ts文件，将它视为此库的类型声明文件
 *              如果没有找到index.d.ts文件那么会寻找入口文件（package.json中的main字段指定的入口文件）是否存在对应同名不同后缀的.d.ts文件
 *  
 * 在项目根目录下，编写一个index.d.ts文件
 *    
 * 
 * 针对入口文件（package.json中的main字段指定的入口文件），编写一个同名不同后缀的.d.ts文件
 **/

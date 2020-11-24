// 内置对象是根据标准在全局作用域上存在的对象。
// ECMAScript 的内置对象： Boolean，Error，Date，RegExp等
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error occirred')
let d: Date = new Date()
let r: RegExp = /[a-z]/

// DOM,BOM的内置对象：document,HTMLElement,Event,NodeLise等
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click',function(){})



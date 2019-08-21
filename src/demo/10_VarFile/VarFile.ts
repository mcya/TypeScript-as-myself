// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。


/*
`declare global` 扩展全局变量
`declare module` 扩展模块

/// <reference /> 三斜线指令
*/


// 1.声明语句 - 如: `declare var jQuery: (selector: string) => any;`
// 假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。
// 但是在ts中 它并不知道 jQuery 、 $ 是什么东西
declare var jQuery: (selector: string) => any; //声明语句
jQuery('#foo');
// declare var 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。
// 它编译结果是： jQuery('#foo');


// 2.声明文件 - 文件格式: *.d.ts
// 通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件


// 3.第三方声明文件 - 最好是用这个，自己书写很麻烦
// 一般都会有自己的声明文件，如jQuery
// 如： npm install @types/jquery --save-dev
// 使用 @types 统一管理第三方库的声明文件
// 可以在这搜索相关的声明文件： https://microsoft.github.io/TypeSearch/


// 5.书写声明文件
// 当一个第三方库没有提供声明文件时，我们就需要自己书写声明文件了。
// 前面只介绍了最简单的声明文件内容，而真正书写一个声明文件并不是一件简单的事

// 5.1 全局变量
// 全局变量的声明文件主要有以下几种语法：
/*

`declare var` 声明全局变量
`declare function` 声明全局方法
`declare class` 声明全局类
`declare enum` 声明全局枚举类型
`declare namespace` 声明（含有子属性的）全局对象
`interface` 和 `type` 声明全局类型
*/

// 5.1.1 `declare var` 声明全局变量
declare let jQuery: (selector: string) => any; // == declare var jQuery: (selector: string) => any;
// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let
declare const jQuery = function(selector) {
    return document.querySelector(selector);
};

// 5.1.2 `declare function` 声明全局方法
declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

// 5.1.3 `declare class` 声明全局类 - 注: declare class 语句也只能用来定义类型
declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
// 使用：
let cat = new Animal('Tom');


// 5.1.4 `declare enum` 声明全局枚举类型
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

// ... 其他的类型也是如此

// 5.2 npm 包的声明文件主要有以下几种语法
/*
`export` 导出变量
`export namespace` 导出（含有子属性的）对象
`export default` ES6 默认导出
`export = commonjs` 导出模块
`export as namespace` UMD 库声明全局变量
*/
export const name: string;
export function getName(): string;
export class Animal {
    constructor(name: string);
    sayHi(): string;
}
export enum Directions {
    Up,
    Down,
    Left,
    Right
}
export interface Options {
    data: any;
}

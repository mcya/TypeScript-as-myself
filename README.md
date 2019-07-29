# TypeScript #

### 定义

官网定义：
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

翻译一下：
> TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。


### 安装

`npm install -g typescript`

以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了。需要`-g`全局安装后才可执行`tsc`相关命令操作。
我们约定使用 `TypeScript` 编写的文件以 `.ts` 为后缀，用 `TypeScript` 编写 React 时，以 `.tsx` 为后缀。

------------------------------

### 目录结构
```

├─src                    #代码模块
│ ├─demos                   #typescript 学习demo
│ │  ├─ 01_data_types           #原始数据类型 (Primitive data types)
│ │  ├─ 02_any                  #任意值 (Any)
│ │  ├─ 03_TypeInference        #类型推论 (Type Inference)
│ │  ├─ 05_UnionTypes           #联合类型 (Union Types)
│ │  ├─ 06_Interfaces           #接口 (Interfaces)
│ │
│ ├─projTsDemo              #结合VUE在项目中使用的typescript demo

```


------------------------------

## 内容简介：

### Hello TypeScript
```ts
// 执行tsc hello.ts 会自动生成编译后的文件 hello.js
function sayHello(person: string) {
  // 当传入 person 参值不是 string 对象的时候，编译器会报错，但是不影响生成结果
  // 如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。
  return 'Hello, ' + person
}
let user = 'Tony', arry=[1,2,3];
console.log('sayHello', sayHello(user))
```

### 原始数据类型

`JavaScript` 的类型分为两种: 原始数据类型`（Primitive data types）`和对象类型`（Object types）`。
原始数据类型包括: `布尔值`、`数值`、`字符串`、`null`、`undefined` 以及 ES6 中的新类型 `Symbol`。

### 任意值(Any)

任意值（Any）用来表示允许赋值为任意类型. - 不被typescript类型检查！

> 即在typescript中任何值都是有数据类型的,如果不按照对应的类型写在typescript中都是会提示报错的，虽然不影响编译结果。
> 如果使用Any来声明变量，在typescript中是被允许赋任何值的

```js
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

虽然Any被赋予任何值，包括添加属性和function方法，但是不建议添加不存在的东西。在typescript中可能不报错，但是得考虑在编译后的js文件是否可用。

### 类型推论(Type Inference)
在typescript中如果不声明变量类型，其会根据变量的第一赋值来判断该变量的类型，且默认赋予其类型。
```js
let myFavoriteNumber = 'seven'; //等价于 let myFavoriteNumber:string = 'seven';
let myFavoriteNumber; // 等价于let myFavoriteNumber:any;
```


如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查。
如果定义的时候赋值了，则根据值的类型了来推论出该变量的类型，且默认赋予该类型。

### 联合类型(Union Types)
表示取值可以为多种类型中的一种。
```js
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

myFavoriteNumber = true; //error: Type 'boolean' is not assignable to type 'string | number'

// 联合声明的方法属性 只能访问其共有属性
function getString(something: string | number): string {
    return something.toString();
}
```

### 对象的类型——接口(Interfaces)
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

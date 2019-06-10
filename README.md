## TypeScript

### 定义

官网定义：
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

翻译一下：
> TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。


### 安装

`npm install -g typescript`

以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了。需要`-g`全局安装后才可执行`tsc`相关命令操作。
我们约定使用 `TypeScript` 编写的文件以 `.ts` 为后缀，用 `TypeScript` 编写 React 时，以 `.tsx` 为后缀。


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

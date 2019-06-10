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
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tony';
console.log(sayHello(user));
```

### 原始数据类型

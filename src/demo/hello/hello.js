// 执行tsc hello.ts 会自动生成编译后的文件 hello.js
function sayHello(person) {
    // 当传入 person 参值不是 string 对象的时候，编译器会报错，但是不影响生成结果
    // 如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。
    return 'Hello, ' + person;
}
var user = 'Tony', arry = [1, 2, 3];
console.log('sayHello', sayHello(user));

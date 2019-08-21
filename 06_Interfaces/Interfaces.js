// 对象的类型——接口(Interfaces)
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
// 正确:
var tom = {
    age: 25,
    name: 'Tom'
};
var toms = {
    name: 'Tom',
    gender: 'yes',
    num: 1001
};
var tom2 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
tom2.id = 9527; //使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了
console.log(tom2)

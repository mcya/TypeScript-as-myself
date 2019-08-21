// 任意值 Any



// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;
// 当使用不对应的数据类型的时候会在编译过程中报错:
// error TS2322: Type '7' is not assignable to type 'string'. 3 myFavoriteNumber = 7;

// 1.常规使用 如果声明数据类型为any 即可以赋任何值
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 2.在任意值上访问任何属性都是允许的： - 但是不建议这样搞的吧 到时候可能会导致使用的时候出现报错，还是老老实实地在object上来添加属性
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 3.也允许调用任何function函数： - 同时也是不建议的，不搞事情，虽然在typescript中不报错，但是在js中如果找不到对应的会报错
let anyThingFunction: any = 'Tom';
anyThingFunction.setName('Jerry');
anyThingFunction.setName('Jerry').sayHello();
anyThingFunction.myName.setFirstName('Cat');

// 4.变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something;
// 等价于
let something: any;

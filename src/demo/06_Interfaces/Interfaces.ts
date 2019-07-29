// 对象的类型——接口(Interfaces)
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

// 1.基本使用:
// interfaces 声明的接口，不仅需要属性类型是一致，也要求不能多或者少属性的，得一模一样！
interface Person {
  name: string;
  age: number;
}

// 正确:
let tom: Person = { //需要对应 Person类型的
  age: 25,
  name: 'Tom',
};

// error: 定义的变量比接口少了一些属性是不允许的： - 虽然可以成功编译但是会导致编辑器报错
// let tomLess: Person = {
//   name: 'Tom'
// };

// error: 多一些属性也是不允许的：
// let tomMore: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// };


// 2.可选属性:
// 可选属性的含义是该属性可以不存在, 但是仍然不允许添加未定义的属性
// 即可选属性可以不存在，但是不能新增其他属性或者减少非可选属性
interface IPerson {
    name: string;
    age?: number; //可选属性 即 IPerson 类型中 age 可存在/可不存在
}

// 3.任意属性 - 属性为 任意值
interface Persons {
    name: string;
    age?: number;
    [propName: string]: any; //使用 [propName: string] 定义了任意属性取 string 类型的值。
}

let toms: Persons = {
    name: 'Tom',
    gender: 'yes', //可添加属性
    num: 1001, //还能继续添加属性
};


// 只读属性 - 只读不可更改
interface readonlyPerson {
    readonly id: number; //只读属性
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom2: readonlyPerson = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom2.id = 9527;//使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了

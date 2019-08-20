//  函数的类型

// 1. js常见函数
// 1.1 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 1.2 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};

// 2. TypeScript中函数的输入需要声明数据类型
// function 函数名( 参数: 参类型 ) : 函数return返回类型
function sum2(x: number, y: number): number {
  return x + y;
}
// sum2(2, '2') //传入的参数类型需要一致

// error: 输入多余的（或者少于要求的）参数，是不被允许的
// sum2(1, 2, 3); //在普通的js函数中是可以输入多余的参数，然后
// sum2(1);
// error TS2346: Supplied parameters do not match any signature of call target.


// function 函数名( 参数: 参类型 ) : 函数return返回类型
function sum3(x: number, y: string): string {
  return x + y;
}
var sumResult = sum3(1, '2');
console.log(sumResult); //输出结果: 12


// 3. 用接口定义函数的形状 - 没必要这么麻烦  其实可直接定义就好
interface ISearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: ISearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 4. 可选参数 - 用 ? 表示可选的参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 4.1 可选参数后面不允许再出现必须参数了: 即可选参数必须留在后面
// error:
// error TS1016: A required parameter cannot follow an optional parameter.
function buildNameCheckBox(firstName?: string, lastName: string) { //可选参数需要放在后面
    if (firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}
let tomcat1 = buildNameCheckBox('Tom', 'Cat');
let tom1 = buildNameCheckBox('Cat', 'Tom');

// 5. 参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数
// 即定义了默认值的参数为可选参数
function buildDefaultName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildDefaultName('Tom', 'Cat');
let tom = buildDefaultName('Tom'); //这样是允许的

// 或者这样也可以：
// 即 不受「可选参数必须接在必需参数后面」的限制了
function buildDefaultNames(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildDefaultNames('Tom', 'Cat');
let cat = buildDefaultNames(undefined, 'Cat');

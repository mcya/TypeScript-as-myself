//  函数的类型
// 1. js常见函数
// 1.1 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}
// 1.2 函数表达式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
// 2. TypeScript中函数的输入需要声明数据类型
// function 函数名( 参数: 参类型 ) : 函数return返回类型
function sum2(x, y) {
    return x + y;
}
// sum2(2, '2') //传入的参数类型需要一致
// error: 输入多余的（或者少于要求的）参数，是不被允许的
// sum2(1, 2, 3); //在普通的js函数中是可以输入多余的参数，然后
// sum2(1);
// error TS2346: Supplied parameters do not match any signature of call target.
// function 函数名( 参数: 参类型 ) : 函数return返回类型
function sum3(x, y) {
    return x + y;
}
var sumResult = sum3(1, '2');
console.log(sumResult); //输出结果: 12
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 4. 可选参数 - 用 ? 表示可选的参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
// 4.1 可选参数后面不允许再出现必须参数了: 即可选参数必须留在后面
// error:
function buildNameCheckBox(firstName, lastName) {
    if (firstName) {
        return firstName + ' ' + lastName;
    }
    else {
        return lastName;
    }
}
var tomcat1 = buildNameCheckBox('Tom', 'Cat');
var tom1 = buildNameCheckBox('Cat', 'Tom');

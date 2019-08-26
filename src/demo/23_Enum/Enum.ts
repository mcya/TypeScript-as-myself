// 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景

// 1.枚举使用 enum 关键字来定义：
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

enum Days2 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};


// 2.常数枚举
// 常数枚举是使用 const enum 定义的枚举类型：
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 3.外部枚举
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：
declare enum DirectionsWrap {
    Up,
    Down,
    Left,
    Right
}
let directions = [DirectionsWrap.Up, DirectionsWrap.Down, DirectionsWrap.Left, DirectionsWrap.Right];

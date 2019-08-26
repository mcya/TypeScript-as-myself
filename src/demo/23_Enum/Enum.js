// 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 1.枚举使用 enum 关键字来定义：
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 7] = "Sun";
    Days2[Days2["Mon"] = 1.5] = "Mon";
    Days2[Days2["Tue"] = 2.5] = "Tue";
    Days2[Days2["Wed"] = 3.5] = "Wed";
    Days2[Days2["Thu"] = 4.5] = "Thu";
    Days2[Days2["Fri"] = 5.5] = "Fri";
    Days2[Days2["Sat"] = 6.5] = "Sat";
})(Days2 || (Days2 = {}));
;
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var directions = [DirectionsWrap.Up, DirectionsWrap.Down, DirectionsWrap.Left, DirectionsWrap.Right];

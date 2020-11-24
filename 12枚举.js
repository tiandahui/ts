// 枚举类型用于取值被限定在一定范围内的场景，比如一周只能有7天，颜色限定于红绿蓝等
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
// 枚举成员会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射
Days['Sun'] === 0; // true
Days[0] === 'Sun'; // true

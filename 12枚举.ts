// 枚举类型用于取值被限定在一定范围内的场景，比如一周只能有7天，颜色限定于红绿蓝等
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
// 枚举成员会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射
Days['Sun'] === 0 // true
Days[0] === 'Sun' // true
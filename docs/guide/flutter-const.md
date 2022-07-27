---
title: Flutter 语法相关
---

# Flutter 语法相关

> 文章简单描述 flutter 语法使用 和 相关知识点，便于开发过程中查阅

### const 关键字使用细节

1. 使用 const 构造方法的类中，其所有成员属性必须以 final 修饰
2. 使用 const 修饰的对象，其各属性也是无法修改的
3. const 构造方法中传入的值必须是 const 对象

### Map 的索引操作符是可空的

来自官方的空安全：Map 类的 [] 操作符会在键值不存在时返回 null。这就暗示了操作符的返回类型必须是可空的 V? 而不是 V。

运行时的行为还是一样的，返回类型必须是可空的。这意味着你无法在 Map 查询时立马使用查询的结果：

```dart
// Using null safety, incorrectly:
var map = {'key': 'value'};
print(map['key'].length); // Error.
```

这段代码会在 .length 的调用处抛出一个编译异常，因为你尝试调用可空的字符串。在你已经 确定 键值存在的情况下，你可以给类型检查器上一个 !：

```dart
// Using null safety:
var map = {'key': 'value'};
print(map['key']!.length); // OK.
```

### List 使用

```dart
// -----------
// var list = [1, 2, 3, 4, 5];

// 取值 index
list[0] = 11;
var item = list[list.length-1];

// 新增 js：push
list.add("item");

// 定点插入 js：
// Array.prototype.insert = (index,item)=>{
//     this.splice(index, 0, item);
// }
list.insert(1, 1.5); // [1, 1.5, 2, 3, 4, 5];

// 删除指定元素
// js: list = list.filter(v => v!==item);
list.remove(1.5); // [1, 2, 3, 4, 5];

// 移除最后一个元素
list.removeLast();

// -----------
// var list = ['one', 'two', 'three', 'four', 'two', 'five'];

// 索引 从头开始搜索
list.indexOf('two'); // 1

// 索引 从尾开始搜索
list.lastIndexOf('two'); // 4

// 截取，不改变元素组
var newlist = list.sublist(2); // [three, four, two, five]
var newlist = list.sublist(2, 4); // [three, four]

// 拼接
var newlist = list.join('、'); // one、two、three、four、two、five


// -----------
// 遍历数组 for in、forEach、any、every、map
// var list = [1, 2, 3, 4, 5];

for(var item in list){
    print(item); // 1 2 3 4 5
}

list.forEach((item) {
    print(item); // 1 2 3 4 5
});

list.any((item) => item > 3); // 任意元素满足条件，返回ture

list.every((item) => item < 6); // 所有元素满足条件，返回true

var newlist = list.map((item) {
    return item + 10;
});

```

### Map 使用

```dart

var dict= {
    "a": "aa",
    "b": "bb",
    "c": "cc"
}

dict[b]; // bb

dict[b] = 'bbbb';

dict.containsKey('b'); // 存在指定key。返回true

dict.containsValue('aa'); // 存在指定value，返回true

dict.isEmpty; // 是否为空

dict.isNotEmpty; // 是否不为空

dict.remove('c'); // 移除key为c的键值对

dict.keys.forEach((k) {
    print(k); // a b c
});

```

### Function

```dart
// 入参 {...} 形式
fun(String name, {int? age, String? nickname}) {
    print('$name，$age，$nickname');
}

fun('jsdawn',age: 18,nickname: 'jsdawn2');

// 入参 [...] 形式
fun2(String name, [int? age, String? nickname]) {
    print('$name，$age，$nickname');
}

fun2('jsdawn', 18, 'jsdawn2');

// 匿名函数
var fun = (){
    return 'aaa';
}

```

### Class 类

```dart
class Person {
    String name;
    int age;

    Person(this.name, this.age);

    say(String str) {
        print('$name say $str');
    }
}

var jsdawn = Person('jsdawn', 18);
jsdawn.say('hello');

```

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com

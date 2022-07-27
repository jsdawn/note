---
title: Flutter 布局相关
---

# Flutter 布局小部件

> 文章简单描述 flutter 布局常用 Widget 和 相关知识点，便于开发过程中查阅

## 盒约束 BoxConstraints
`约束`是父级渲染对象对子级渲染对象的尺寸限制。
widget只有在 松约束或无约束的父元素下才可自由改变尺寸。

通过 `flutter inspector - detail Tree` 面板里 widget 下的 `renderObject.constraints` 查看该 widget 的约束情况

- 紧约束下设置尺寸无效
- UnconstrainedBox 解除约束，自身无约束，不约束子级
- Flex 、 Column、Row、 Wrap 、Stack 放松约束：0~最大
- CustomSingleChildLayout 自定义新约束
- Flexible 默认 `fit: FlexFit.loose` 松约束， Expanded 为 `fit: FlexFit.tight` 紧约束

## 常用基础 Widget

### StatefulWidget 与 StatelessWidget

- `StatefulWidget`： 状态部件，持有的状态可能在widget生命周期中发生变化。当widget的状态发生变化时，widget会重新构建UI。
实现一个 stateful widget 至少需要两个类：

   1. 一个 `StatefulWidget` 类。
   2. 一个 `State` 类。 StatefulWidget类本身是不变的，但是 State类在widget生命周期中始终存在.

```dart
class Stful extends StatefulWidget {
  Stful({Key? key}) : super(key: key);

  @override
  State<Stful> createState() => _StfulState();
}

class _StfulState extends State<Stful> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

- `StatelessWidget`：状态是不可变的, 这意味着它们的属性不能改变 - 所有的值都是最终的。

```dart
class Stless extends StatelessWidget {
  const Stless({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

### Text 文本

- `Text`：创建一个带格式的文本。

```dart
Text(
  String data, {
  Key? key,
  TextStyle? style, // 文字样式
  StrutStyle? strutStyle,
  TextAlign? textAlign, // 文字对齐方式
  TextDirection? textDirection, // 文字方向
  Locale? locale,
  bool? softWrap, // 是否换行，默认true
  TextOverflow? overflow, // 越界效果
  double? textScaleFactor,
  int? maxLines, // 最大行数
  String? semanticsLabel,
  TextWidthBasis? textWidthBasis,
  TextHeightBehavior? textHeightBehavior,
})
```

### Flex 布局
- `Flex` 弹性布局

```dart
Flex({
  Key? key,
  // 排列方向，水平 horizontal/垂直 vertical
  required Axis direction,
  // 主轴对齐方式
  MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
  // 主轴尺寸
  MainAxisSize mainAxisSize = MainAxisSize.max,
  // 交叉轴对齐方式
  CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
  // 水平时排布方向 ltr/rtl
  TextDirection? textDirection,
  // 垂直时排布方向 down/up
  VerticalDirection verticalDirection = VerticalDirection.down,
  // CrossAxisAlignment.baseline 时 TextBaseline基线类型
  TextBaseline? textBaseline,
  Clip clipBehavior = Clip.none,
  // widget列表
  List<Widget> children = const <Widget>[],
})
```



- `Row`、`Column`：水平（Row）垂直（Column）的`Flex`布局。

```dart
Row({
    Key? key,
    // 主轴对齐方式
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
    // 主轴尺寸
    MainAxisSize mainAxisSize = MainAxisSize.max,
    // 交叉轴对齐方式
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
    // 排列方向、ltr 从左到右（默认）、rtl 从右到左
    TextDirection? textDirection,
    // 垂直方向
    VerticalDirection verticalDirection = VerticalDirection.down,
    // 文本基线
    TextBaseline? textBaseline,
    // widget列表
    List<Widget> children = const <Widget>[],
})

// 例：Column的属性与Row基本一致
Column({
    Key? key,
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
    MainAxisSize mainAxisSize = MainAxisSize.max,
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
    // 排列方向、ltr 从上到下（默认）、rtl 从下到上
    TextDirection? textDirection,
    VerticalDirection verticalDirection = VerticalDirection.down,
    TextBaseline? textBaseline,
    List<Widget> children = const <Widget>[],
})
```

### Stack、Positioned 堆叠与定位

- `Stack`：堆叠布局，运行子widget堆叠，使用`Positioned`定位相对于`Stack` 边框的位置。（Web中的绝对定位布局 `absolute`）

```dart
Stack({
  Key? key,
  // 对齐方式
  AlignmentGeometry alignment = AlignmentDirectional.topStart,
  // 文字排布方向
  TextDirection? textDirection,
  // 适应方式
  StackFit fit = StackFit.loose,
  // 溢出模式
  Overflow overflow = Overflow.clip,
  Clip clipBehavior = Clip.hardEdge,
  // widget列表
  List<Widget> children = const <Widget>[],
})

Positioned({
  Key? key,
  double? left,
  double? top,
  double? right,
  double? bottom,
  double? width,
  double? height,
  required Widget child,
})

// 例：Stack 与 Positioned 配合
Stack(
  // topRight - children里的widget布局在右上角 
  alignment: Alignment.topRight,
  children: [
    Container(
      color: Colors.red,
      width: 100,
      height: 100,
    ),
    Container(
      color: Colors.blue,
      width: 80,
      height: 80,
    ),
    // Positioned 设置独立的绝对定位
    Positioned(
      bottom: 20,
      left: 20,
      child: Container(
        color: Colors.blue,
        width: 70,
        height: 70,
      ),
    ),
  ],
)
```

### Container 容器

- `Container`：创建块级元素（web的块级元素 `div`）

```dart
Container({
  Key? key,
  AlignmentGeometry? alignment, // 对齐方式
  EdgeInsetsGeometry? padding, // 内边距
  Color? color, // 背景颜色
  
  // 装饰：border/radius/gradient/boxshadow/image
  Decoration? decoration, 
  Decoration? foregroundDecoration,
  double? width,
  double? height,
  BoxConstraints? constraints,
  EdgeInsetsGeometry? margin, // 外边距
  Matrix4? transform, // 转换
  AlignmentGeometry? transformAlignment,
  Widget? child, // 子widget
  Clip clipBehavior = Clip.none,
})
```

### SingleChildScrollView 滑动容器

- `SingleChildScrollView` 使包裹的组件可滑动

```dart
SingleChildScrollView({
  Key? key,
  // 滑动方向
  Axis scrollDirection = Axis.vertical,
  // 是否反向
  bool reverse = false,
  // 容器内边距
  EdgeInsetsGeometry? padding,
  bool? primary,
  ScrollPhysics? physics,
  ScrollController? controller,
  // 子组件 Widget
  Widget? child,
  DragStartBehavior dragStartBehavior = DragStartBehavior.start,
  Clip clipBehavior = Clip.hardEdge,
  String? restorationId,
  ScrollViewKeyboardDismissBehavior keyboardDismissBehavior = ScrollViewKeyboardDismissBehavior.manual,
})
```

### ListView 列表容器

- `ListView`：用于显示多个子Widget的可滑动容器

```dart
ListView({
  Key? key,
  // 滑动方向
  Axis scrollDirection = Axis.vertical,
  // 是否反向
  bool reverse = false,
  // 控制器
  ScrollController? controller,
  bool? primary,
  ScrollPhysics? physics,
  bool shrinkWrap = false,
  // 容器内边距
  EdgeInsetsGeometry? padding,
  double? itemExtent,
  Widget? prototypeItem,
  bool addAutomaticKeepAlives = true,
  bool addRepaintBoundaries = true,
  bool addSemanticIndexes = true,
  double? cacheExtent,
  // Widget 列表
  List<Widget> children = const <Widget>[],
  int? semanticChildCount,
  DragStartBehavior dragStartBehavior = DragStartBehavior.start,
  ScrollViewKeyboardDismissBehavior keyboardDismissBehavior = ScrollViewKeyboardDismissBehavior.manual,
  String? restorationId,
  Clip clipBehavior = Clip.hardEdge,
})
```

- `ListView.builder`：ListView item构造器，较`ListView`新增了`itemBuilder`和`itemCount`属性，常用于创建子组件类似的列表

```dart
ListView.builder({
  Key? key,
  // 子组件构造器，传参上下文和索引index
  required Widget Function(BuildContext, int) itemBuilder,
  // 子组件数量
  int? itemCount,
})

// 例：
Widget _itemBuilder(context, index) {
    return SizedBox(
      height: 100,
      child: Text(index.toString()),
    );
  }

ListView.builder(
      itemBuilder: _itemBuilder,
      itemCount: 20,
    )
```

- `ListView.separated`：ListView 分隔构造器，较`ListView`新增了`itemBuilder`、`separatorBuilder`和`itemCount`属性，常用于创建子组件类似且带分割块的列表

```dart
ListView.separated({
  Key? key,
  // 子组件构造器，传参上下文和索引index
  required Widget Function(BuildContext, int) itemBuilder,
  // 分割区域构造器，该条目不计入子组件数量
  required Widget Function(BuildContext, int) separatorBuilder,
  // 子组件数量
  int? itemCount,
})

// 例：
Widget _separatorBuilder(context, index) {
    return const Divider(
      height: 1,
      color: Colors.black,
    );
  }

ListView.separated(
      itemBuilder: _itemBuilder,
      separatorBuilder: _separatorBuilder,
      itemCount: 20,
    )
```




### GestureDetector 手势

- `GestureDetector`：处理手势（web中`onClick`事件等）

```dart
// GestureDetector 类有很多属性，列出较常用的几个
GestureDetector({
  Key? key,
  Widget? child,
  void Function()? onTap, // 点击事件
  void Function()? onDoubleTap, // 双击事件
  void Function()? onLongPress, // 长按事件
});

// 例：
GestureDetector(
  onTap: () => {},
  onDoubleTap: () => {},
  onLongPress: () => {},
  child: const SizedBox(
    width: 100,
    height: 100,
  )
);
```

### 路由导航器

- `Navigator` 导航器组件

```dart
Navigator({
  Key? key,
  List<Page<dynamic>> pages = const <Page<dynamic>>[],
  // 出栈(back)回调
  bool Function(Route<dynamic>, dynamic)? onPopPage,
  // 初始显示路由
  String? initialRoute,
  List<Route<dynamic>> Function(NavigatorState, String) onGenerateInitialRoutes = Navigator.defaultGenerateInitialRoutes,
  // 路由生成器
  Route<dynamic>? Function(RouteSettings)? onGenerateRoute,
  Route<dynamic>? Function(RouteSettings)? onUnknownRoute,
  TransitionDelegate<dynamic> transitionDelegate = const DefaultTransitionDelegate<dynamic>(),
  bool reportsRouteUpdateToEngine = false,
  // 路由监听器
  List<NavigatorObserver> observers = const <NavigatorObserver>[],
  bool requestFocus = true,
  String? restorationScopeId,
})

// 例：
Navigator(
        onPopPage: _onPopPageBack,
        initialRoute: '/home-content',
        onGenerateRoute: _onGenerateRoute,
        observers: [_NavigatorObserver()],
      )
   
/*   
// `MaterialApp`集成了`Navigator`部分核心属性，所以路由部分可直接写到MaterialApp
MaterialApp(
    theme: ThemeData(
        primaryColor: Colors.blue,
    ),
    home: _HomePage,
    initialRoute: '/home-content',
    onGenerateRoute: _onGenerateRoute,
    navigatorObservers: [_NavigatorObserver()],
)
*/
      
Route _onGenerateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/home-content':
        return MaterialPageRoute(
            builder: (_) => HomeContent(), settings: settings);
      case "/my-conetent":
        return MaterialPageRoute(builder: (_) => Mycontent(), settings: settings);
      default:
        return MaterialPageRoute(
            builder: (_) => HomeContent(), settings: settings);
    }
  }
  
  //路由监听器
class _NavigatorObserver extends NavigatorObserver {
    @override
    void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) {
        print(`${route.settings}`);
    }
    
    @override
    void didPop(Route<dynamic> route, Route<dynamic>? previousRoute) {
        print(`${route.settings}`);
    }
    
    // 更多监听事件查看 `NavigatorObserver` 类
}
```

```dart
// 路由跳转
Navigator.of(context).pushNamed(routeName)

// 直接跳转页面控件
Navigator.of(context).push(
    MaterialPageRoute(
        builder: (BuildContext context) => const MyPage(),
    ),
);

// 出栈（返回上一页）
Navigator.of(context).pop();
```


>**转载声明**：
>请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com

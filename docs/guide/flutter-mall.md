---
title: Flutter 2 商城App实战指南（支持Null safety）
---

# Flutter 2 商城 App 实战指南（支持 Null safety）

> `flutter` 从零开发一个电子商城 APP，一套代码库可以高效构建多平台精美应用（包括安卓 App/苹果 IOSApp/苹果 mac 应用/windows 应用）

## 阅读文章你将收获

文章主要针对 flutter 开发实战，详细描述 **主要知识点** 在实战中的运用。希望大家在实战中势如破竹，得心应手。（下图为本项目所有知识点梳理）

![商城思维导图.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9125d56f8ac446ebb0474368ee63241f~tplv-k3u1fbpfcp-watermark.image?)

- **项目自定义主题**：创建自定义主题类，设定项目 UI 颜色，自定义各类文字样式，方便统一项目 UI，灵活布局。
- **Flutter 路由**：项目不可或缺的部分，各页面之间跳转。
- **SVG 图标的使用**：使用精美的 svg 图标，多一份热爱，多一份色彩。
- **瀑布流布局**：商品列表使用瀑布流布局，完美协调列表项。
- **Flutter 数据模型**：让数据可用性更好，JSON 与数据模型转换，以便在项目中使用各类数据。
- **购物车功能**：买不买就看购物车爽不爽。购物车增删改查的实现，购物车商品本地持久化存储。
- **项目 App 打包**：应用打包和其他注意事项。
- **一个完整的商城 App 开发能力**

## Flutter 开发环境搭建

项目使用 `Flutter 2.10.2` 版本，您可使用 >=2.x 的版本：

```json
Flutter 2.10.2 • channel stable • https://github.com/flutter/flutter.git
Framework • revision 097d3313d8
Engine • revision a83ed0e5e3
Tools • Dart 2.16.1 • DevTools 2.9.2
```

1. 选择要安装 Flutter 的操作系统，并按照官方操作流程进行 Flutter 环境的安装及验证：

   - Flutter 官网：https://docs.flutter.dev/get-started/install
   - Flutter 中文官网：https://flutter.cn/docs/get-started/install

2. 在 VS Code 中开发（个人建议使用轻量的 vscode 开发）
   - 配置编辑器：https://flutter.cn/docs/get-started/editor?tab=vscode

## 项目创建与运行

**项目创建：**

在您的工作目录中使用命令行工具：

```sh
flutter create flutter_demo
```

`flutter_demo` 是项目名称（替换为你的项目名称），官方建议文件名称以下划线命名方式。

**项目目录结构：**

```js
├─assets             // 静态文件
├─lib                // 主要工作目录，编写大部分代码放在这里
│  ├─apis            // api 文件
│  ├─components      // 公共组件
│  ├─models          // 数据模型
│  ├─router          // 项目路由
│  ├─utils           // 工具类方法
│  ├─views           // 商城页面UI
│  ├─widgets         // 业务相关组件
│  ├─app_theme.dart  // 自定义主题文件
│  └─mian.js         // 项目入口文件
├─android            // android 编译目录
├─ios                // ios 编译目录
├─pubspec.yaml       // 项目配置文件
```

**运行项目：**

- 准备虚拟机

  - mac 电脑可在终端执行 `$ open -a Simulator` 打开 iphone 虚拟机
  - 安装有 Android Studio 的同学可以在 Android Studio 中打开 安卓虚拟机
  - 无虚拟机，也可以使用 web 浏览器模式运行开发

- 在终端执行指令 `flutter run` 运行项目

## 自定义项目主题

创建自定义主题类，设定项目 UI 颜色，自定义各类文字样式，方便统一项目 UI，灵活布局。

**编写主题类：**

创建文件 `lib/app_theme.dart`, 创建 `AppTheme`类并设计主题颜色和文字样式

```ts
import 'package:flutter/material.dart';

class AppTheme {
  AppTheme._();
  // 颜色设置
  static const Color notWhite = Color(0xFFECF0EF);
  static const Color nearlyWhite = Color(0xFFFFFFFF);

  // 文字样式
  static const TextTheme textTheme = TextTheme(
    headline4: display1,
    headline5: headline,
    headline6: title,
    subtitle2: subtitle,
    bodyText1: body1,
    bodyText2: body2, // bodyText2: flutter默认文字样式
    caption: caption,
  );

  static const TextStyle display1 = TextStyle(
    fontFamily: fontName,
    fontWeight: FontWeight.bold,
    fontSize: 36,
    letterSpacing: 0.5,
    height: 0.9,
    color: darkerText,
  );
  ...
}
```

**引入并使用主题：** `main.dart` 入口文件中引入主题类并使用

```ts
import 'package:shopping_mall/app_theme.dart';

@override
Widget build(BuildContext context) {
    return MaterialApp(
      title: '青山商城',
      debugShowCheckedModeBanner: false,
      // 主题配置
      theme: ThemeData(
        primarySwatch: Colors.teal,
        fontFamily: AppTheme.fontName, // 默认字体
        textTheme: AppTheme.textTheme, // 文字主题
      ),
      onGenerateRoute: onGenerateRoute,
      initialRoute: '/',
      home: const AppHomeScreen(),
    );
}
```

**设置状态栏样式：** `main.dart` 入口文件中使用 `setSystemUIOverlayStyle`

```ts
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // 设置状态栏
  SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
    // 顶部状态栏颜色
    statusBarColor: Colors.transparent,
    // 顶部状态栏图标的亮度
    statusBarIconBrightness: Brightness.dark,
    // 顶部状态栏的亮度
    statusBarBrightness:
        !kIsWeb && Platform.isAndroid ? Brightness.dark : Brightness.light,
    // 系统底部导航栏的颜色
    systemNavigationBarColor: Colors.white,
    // 系统底部导航栏分割线颜色
    systemNavigationBarDividerColor: Colors.transparent,
    // 系统导航栏图标的亮度
    systemNavigationBarIconBrightness: Brightness.dark,
  ));
  // 设置设备方向
  await SystemChrome.setPreferredOrientations(<DeviceOrientation>[
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown
  ]).then((_) => runApp(const ProviderScope(child: MyApp())));
}
```

## Flutter 路由配置

**新建 `lib/routers/routes.dart` 文件：**

```ts
import 'package:flutter/material.dart';
import 'package:shopping_mall/views/detail/detail_index.dart';
import 'package:shopping_mall/views/goods/goods_list_index.dart';

/// 路由生成器
Route onGenerateRoute(RouteSettings settings) {
  switch (settings.name) {
    case '/detail':
      return MaterialPageRoute(
          builder: (_) => const DetailIndex(), settings: settings);
    case '/goods':
      return MaterialPageRoute(
          builder: (_) => const GoodsListIndex(), settings: settings);
    default:
  }
}
```

**`mian.dart` 中使用路由生成器属性 `onGenerateRoute`:**

```ts
return MaterialApp(
  title: '青山商城',
  // 路由生成器
  onGenerateRoute: onGenerateRoute,
  // 初始路由路径
  initialRoute: '/',
  home: const AppHomeScreen(),
);
```

**路由跳转与传参：**

```ts
// 跳转到详情页，传参商品id
Navigator.of(context).pushNamed('/detail', arguments: {'id': goods.id});
// 跳转到首页，传参商品tab，并移除历史路由
Navigator.of(context).pushNamedAndRemoveUntil(
    '/', (route) => false,
    arguments: {'tab': 3});

// 页面获取传过来的参数
Map args = ModalRoute.of(context)?.settings.arguments as Map;
int id = args['id'];
```

## 网络请求与数据模型

### Http 请求

使用 `dio` 库，dio 封装查看: [flutter_dio_util](https://gitee.com/jsdawn/flutter_dio_util)

```ts
// 简单使用
import 'package:dio/dio.dart';

void main() async {
  var dio = Dio();
  final response = await dio.get('https://google.com');
  print(response.data);
}

// response.data 这里返回的是json字符串，可使用 data['name'] 获取值
// 要想像 Object 一样使用 data.name 获取。需要转换为Dart模型（Json to Dart）
```

### Json to Dart

假如有如下 `Person` Json 数据

```json
{
  "name": "jsdawn",
  "age": 18,
  "gender": ""
}
```

使用 [quicktype](https://app.quicktype.io/) 将 Json 快速转换 为 Dart 模型 `person.dart`

```ts
// To parse this JSON data, do
//     final person = personFromJson(jsonString);

import 'dart:convert';
// 字符串转为`Person`模型
Person personFromJson(String str) => Person.fromJson(json.decode(str));
// `Person`数据转为字符串
String personToJson(Person data) => json.encode(data.toJson());

class Person {
    Person({
        this.name,
        this.age,
        this.gender,
    });

    String name;
    int age;
    String gender;

    // json中字段不可少，否则需要判空：json["name"] ?? ""
    factory Person.fromJson(Map<String, dynamic> json) => Person(
        name: json["name"],
        age: json["age"],
        gender: json["gender"],
    );

    Map<String, dynamic> toJson() => {
        "name": name,
        "age": age,
        "gender": gender,
    };
}
```

在 flutter 中使用：

```ts
// 这里 DefaultAssetBundle 的 loadString 加载 Json 文件，模拟接口调用
String jsonString = await DefaultAssetBundle.of(context)
    .loadString('assets/json/data.json');
// 字符串转为 Dart Model
final person = personFromJson(jsonString);
print(person.name); // jsdawn
```

## SVG 图标的使用

使用精美的 svg 图标，多一份热爱，多一份色彩。

**引入图标资源：**

从  [iconfont.cn](https://www.iconfont.cn/)  下载图标的 svg 文件，放入`assets/svg`目录。在 `pubspec.yaml` 中配置静态资源：

```yaml
assets:
  - assets/svg/
```

**引入`flutter_svg`插件并使用：**

在项目终端执行指令 `flutter pub add flutter_svg` 下载插件。在页面中使用，以首页商品类型为例

```ts
import 'package:flutter_svg/svg.dart';

Padding(
    padding: const EdgeInsets.symmetric(vertical: 4),
    // SvgPicture.asset 加载svg静态资源
    child: SvgPicture.asset('assets/svg/category_phone.svg', height: 35),
),
```

## 瀑布流布局

商品列表项的高度可能不同，比如标题有一行也有两行。使用瀑布流布局，可完美协调各块的高度。

**如何挑选插件：**

在 flutter 插件市场 [pub.dev](https://pub.flutter-io.cn/) 中搜索瀑布流布局插件，你找到的可能会很多，如何挑选最适合当前项目的呢？

比如我们项目开发环境是 `flutter v2.x` 版本，该版本最大的特点是支持 `Null Safety`。所以首先需要支持 `Null Safety`，然后挑选 `LIKES` 数量多并且符合瀑布流需求的插件。

**引入插件并使用：**

在项目终端执行指令 `flutter pub add flutter_staggered_grid_view` 下载插件。在项目中使用瀑布流布局编写商品列表组件

```ts
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

@override
Widget build(BuildContext context) {
    // 使用插件的 MasonryGridView 类编写瀑布流布局
    return MasonryGridView.count(
      controller: _scrollController,
      padding: widget.list.isNotEmpty
          ? const EdgeInsets.symmetric(vertical: 12)
          : null,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      crossAxisCount: 2, // 列的数量
      mainAxisSpacing: 20, // 主轴项之间的距离
      crossAxisSpacing: 12, // 交叉轴项之间的距离
      itemCount: widget.list.length,
      // 列表项生成器
      itemBuilder: (context, index) {
        return GoodsListItem(widget.list[index]);
      },
    );
}
```

## 购物车功能

购物车算是商城的核心功能之一，也有较复杂的逻辑。

1. 唯一性：同一件商品在颜色和尺寸等规格都相同的情况下，在购物车里才算同一件物品；
2. 本地存储：购物车中的商品需要存储到本地，用户未结算关闭了应用，当下次打开应用时，购物车商品依然在；
3. 全局状态：购物车需要全局读取，在商品详情页显示数量和加入购物车，在购物车中加减数量等。

### 创建购物车数据模型

![2081658201873_.pic.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ec7b243395b4e8d84432d5455856084~tplv-k3u1fbpfcp-watermark.image?)

购物车列表项 UI 如图所示，商品属性结合类型拟定 Json 数据：

```json
{
  "id": 46,
  "title": "能方研影",
  "price": 61.96,
  "cover": "http://dummyimage.com/300x300/B9C6C3&text=shopping%20mall",
  "count": 3,
  "color": "蓝色",
  "size": "XS"
}
```

Json to Dart：前往[quicktype](https://app.quicktype.io/)，将 Json 数据复制进去转换为 `Dart 数据模型`（当然也可以手动编写）

```ts
class CartInfoModel {
  CartInfoModel({
    required this.id,
    required this.title,
    required this.price,
    required this.cover,
    required this.count,
    required this.color,
    required this.size,
  });

  int id;
  String title;
  double price;
  String cover;
  int count;
  String color;
  String size;
  ...
}
```

### 购物车状态管理

项目使用 Flutter 官方推荐的 [riverpod](https://riverpod.dev/) （一种反应式缓存和数据绑定框架） 进行购物车状态管理，让数据可以跨组件使用。

**引入插件并使用：**

在项目终端执行指令  `flutter pub add flutter_riverpod`  下载插件。创建 `lib/providers/cart_provider.dart`文件：

```ts
import 'package:flutter_riverpod/flutter_riverpod.dart';
...

const cartPrefsKey = 'cartList';
class CartNotifier extends ChangeNotifier {
  // 购物车列表
  final List<CartInfoModel> cartList = <CartInfoModel>[];
  // 总数量
  int get totalCount {
    int total = 0;
    for (var item in cartList) {
      total += item.count;
    }
    return total;
  }
  // 总价格
  double get totalPrice {
    double total = 0;
    for (var item in cartList) {
      total += item.price * item.count;
    }
    return total;
  }
  // 加入购物车
  // 更新购物车数量
  // 移除购物车指定项
  // 查询/初始化购物车
}
// ChangeNotifierProvider 用法
final cartProvider = ChangeNotifierProvider<CartNotifier>((ref) {
  return CartNotifier();
});
```

**注册全局状态：**

```ts
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
    runApp(
        // ProviderScope包裹入口组件，提供全局状态
        ProviderScope(child: MyApp())
    );
}
```

**在组件中读取：**

```ts
// 读取购物车列表
List<CartInfoModel> list =
    ref.watch(cartProvider.select((value) => value.cartList));
// 读取结算价格
double totalPrice =
    ref.watch(cartProvider.select((value) => value.totalPrice));
// 读取总数量
int totalCount =
    ref.watch(cartProvider.select((value) => value.totalCount));
// 调用方法
ref.read(cartProvider.notifier).pushCart(_cartInfo);
```

### 加入购物车

首先查找同一规格的商品，有则更新数量，无则加入购物车。加入购物车的 `cartInfo` 需要**深拷贝**避免影响再次选择该商品**其他规格**的时候改动购物车数据。购物车数据改变后需要调用 `notifyListeners` 通知状态管理器更新状态。

```ts
/// 加入购物车
void pushCart(CartInfoModel cartInfo) {
    // 查找 id/color/size 都相同的购物车商品
    int idx = cartList.indexWhere((item) => (item.id == cartInfo.id &&
        item.color == cartInfo.color &&
        item.size == cartInfo.size));
    if (idx > -1) {
      // 存在则数量+1
      cartList[idx].count += cartInfo.count;
    } else {
      // 不存在则添加（这里深拷贝cartInfo）
      cartList.add(cartInfoModelFromJson(cartInfoModelToJson(cartInfo)));
    }
    // 通知 CartNotifier 状态更新
    notifyListeners();
    // 更新数据存储到本地
    updCartPrefs();
}

/// 更新购物车数量
void updCartCount(CartInfoModel cartInfo, int count) {
    // 查找 id/color/size 都相同的购物车商品
    int idx = cartList.indexWhere((item) => (item.id == cartInfo.id &&
        item.color == cartInfo.color &&
        item.size == cartInfo.size));
    if (idx > -1) {
      // 存在则更新数量
      cartList[idx].count = count;
    }
    notifyListeners();
    // 更新数据存储到本地
    updCartPrefs();
}

/// 移除购物车指定商品
void renmoveCart(CartInfoModel cartInfo) {
    // 查找 id/color/size 都相同的购物车商品
    int idx = cartList.indexWhere((item) => (item.id == cartInfo.id &&
        item.color == cartInfo.color &&
        item.size == cartInfo.size));
    if (idx > -1) {
      // 存在则移除该项
      cartList.removeAt(idx);
    }
    notifyListeners();
    // 更新数据存储到本地
    updCartPrefs();
}
```

### 购物车本地存储

**需求：** 商品加入到购物车，还未结算并退出应用，下次进来购物车商品还在。<br>
**思路：** 每次购物车数据有改动需要把数据更新到本地存储，下次打开 App 的时候从本地恢复数据到购物车。<br>
**持久化存储：** 项目使用 `shared_preferences` 插件进行本地持久化存储。以`key-value`的形式存储字符串到本地。

**引入插件并使用：**

在项目终端执行指令 `flutter pub add shared_preferences` 下载插件，在 `cart_provider.dart` 购物车状态管理类中使用：

```ts
import 'package:shared_preferences/shared_preferences.dart';

class CartNotifier extends ChangeNotifier {
  final List<CartInfoModel> cartList = <CartInfoModel>[];
  ...

  /// 更新购物车数据到本地持久化存储

  void updCartPrefs() async {
    final prefs = await SharedPreferences.getInstance();
    // 购物车数据转为字符串
    String cartString = json.encode(cartList).toString();
    // `setString`存储到本地
    prefs.setString('cartList', cartString);
  }

  /// 查询/初始化 - 从本地读取数据恢复到购物车状态

  Future<List<CartInfoModel>> getCartList() async {
    // 获取持久化实例
    final prefs = await SharedPreferences.getInstance();
    // 调用`getString`方法读取本地字符串数据
    String? _cartString = prefs.getString('cartList');
    cartList.clear();
    // 字符串数据转换为`CartInfoModel`初始化到购物车列表
    if (_cartString != null) {
      List<CartInfoModel> _list = cartInfoModelListFromJson(_cartString);
      cartList.addAll(_list);
    }
    notifyListeners();
    return cartList;
  }
}
```

**初始化购物车：**

用户每次打开应用，恢复购物车数据：在入口文件 `main.dart` 中调用 `getCartList` 方法初始化购物车数据。

```ts
import 'package:flutter_riverpod/flutter_riverpod.dart';

// flutter_riverpod 中的 `ConsumerStatefulWidget` 类
// 在状态组件中提供 ref 以使用状态管理器

class MyApp extends ConsumerStatefulWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  ConsumerState<MyApp> createState() => _MyAppState();
}

class _MyAppState extends ConsumerState<MyApp> {
  @override
  void initState() {
    super.initState();

    // 调用`getCartList`方法初始化购物车
    ref.read(cartProvider).getCartList();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '青山商城',
    );
  }
}
```

## 项目 App 打包

代码写的好不如产品包装的好，打包也是至关重要的一步。由于设备有限，项目只亲测了安卓 apk 打包，其他终端的打包方法参考 [官方打包部署](https://flutter.cn/docs/deployment/android)

### 打包 apk 指令

项目终端执行指令，等待打包结束后提示 apk 位置。`--split-per-abi` 按 abi 拆分 apk，减小包体积

```
flutter build apk --split-per-abi
```

### 应用名称修改

- Android：在 `android/app/src/main/AndroidManifest.xml` 中修改`android:label="应用名称"`

- iOS：在 `ios/Runner/Info.plist` 中修改 `CFBundleName` 对应的 Value

### 应用图标修改

- Android： 在 `android/app/src/res/mipmap` 文件夹中替换相应图片

- iOS：在 `ios/Runner/Assets.xcassets/AppIcon.appiconset` 文件夹中替换相应尺寸的图片。如果使用不同的文件名，还需更新同一目录中的 `Contents.json` 文件中的 `filename`

### 启动页图片

- Android：在 `android/app/src/res/drawable/launch_background.xml` 文件实现自定义启动界面，这里的是 xml 语法。也可以使用默认模版，在 `android/app/src/res/mipmap` 相应尺寸文件下放入启动图片`launch_image`：

  ```xml
  <item>
    <bitmap
      android:gravity="center"
      android:src="@mipmap/launch_image" />
  </item>
  ```

- iOS：在 `ios/Runner/Assets.xcassets/LaunchImage.imageset` 文件夹中替换相应尺寸的图片。如果使用不同的文件名，还需更新同一目录中的 `Contents.json` 文件中的 `filename`

### 安卓 App 签名

若需要将 apk 发布到各大应用市场，比如应用宝等，需要对 app 进行签名。

1. 终端执行下方指令获取秘钥文件，文件默认在当前目录，将生成的 `key.jks` 复制到项目的 `android/app/` 目录下：

```sh
keytool -genkey -v -keystore key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```

2. 修改 `android/key.properties` 文件（没有则新建）

```xml
storePassword=<上一步骤中的密码>
keyPassword=<上一步骤中的密码>
keyAlias=key
storeFile=key.jks
```

3. `android/app/build.gradle` 中，`android` 代码块之前新增内容

```java
// 新增的内容
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

// android 代码块
android {
    ...
}
```

修改 `signingConfigs` 和 `buildTypes` 代码块：

```java
// 新增内容
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
        storePassword keystoreProperties['storePassword']
    }
}
// 替换的内容
buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
```

### 其他打包注意事项

**apk 打包后网络图片不显示：**

在 `android/app/src/profile/AndroidManifest.xml` 中允许网络权限（若无效则需要在 `android/app/src/main/AndroidManifest.xml`也配置一份）：

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

**空安全错误（flutter v2）：**

如果你使用的是 `flutter v2` 版本或者更高版本，运行或打包时报空安全错误(null safety)。是因为你在项目中的部分写法或者**插件**不支持空安全规范，建议替换支持 `Null Safety` 的插件。或者使用以下指令 `--no-sound-null-safety` 跳过 `Null Safety` 检测。

```
flutter build apk --no-sound-null-safety
```

## 结语

可以看到，文章开头的 `Flutter商城APP实战知识点图`，项目知识点大大小小有几十个，因为精力有限，抽取了几个主要知识点讲解。如果大家想要一起学习图中 **其他的知识点**，可以在评论区 **留言 💬**，
每周会抽取时间 **更新文章**。

博观而约取，厚积而薄发<br>
记得 👍 点赞 + ❤️ 收藏，➕ 关注不迷路

项目 Gitee：https://gitee.com/jsdawn/shopping_mall

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com

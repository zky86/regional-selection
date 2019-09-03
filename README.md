# pc端Vue城市地区选择组件。

基本功能：

1. 支持全选、反选以及全部清空。
2. 支持按拼音筛选。
3. 勾选省份将会勾选省份下所有城市。
4. 传入数据，返回数据可灵活处理。
5. 可根据自己实际业务扩展。

![Image text](https://images.vrm.cn/2019/09/03/regionalSelection.png)

## 安装插件方式

``` bash
npm install regionalSelection --save
# 或者
yarn add regionalSelection
```

## 用法

组件引入：
```javascript

// import包
import regionalSelection from 'regionalSelection'

// use
Vue.use(regionalSelection)
```

使用：

```html
<regional-selection
  v-model="pickCity"
  @on-pick-city="pickedCity = $event"
>
</regional-selection>

<!-- 省略代码 -->
data () {
  return {
    pickCity: []
  }
}
```

选择返回的数据：

```json
[{
  "cityIndex": 37,
  "id": "210200",
  "name": "大连市",
  "pinYin": "dalian",
  "shortName": "大连"
}, {
  "cityIndex": 41,
  "id": "210600",
  "name": "丹东市",
  "pinYin": "dadong",
  "shortName": "丹东"
}]
```

## 属性

| 参数       | 说明    |  类型  |  默认值  |
| --------   | -----   | ---- |  ----  |
| placeholder| -    | String | 选择城市 |
| showCloseBtn| 是否显示input框清空按钮   | Boolean | true |
| clickModal| 是否点击遮罩关闭弹层   | Boolean | true |
| inputClass| 替换预设的输入框样式   | String | null |
| width| input框宽度   | Number | 200 |

## 事件

| 事件      | 说明    | 参数  |
| --------   | -----   | ---- |
| on-pick-city|城市选择的回调事件|勾选的城市|

## 本地运行

```bash
安装：npm install
运行：npm run dev
```

如果项目npm安装完毕后无法运行，找到index.html文件里面这段注释即可。
```bash
<script src="https://cdn.bootcss.com/vue/2.5.18-beta.0/vue.min.js"></script>
```


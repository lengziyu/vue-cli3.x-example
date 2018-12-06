# H5移动端项目

> 根据项目需求用vue-cli 3.x改造过的，前期项目暂用于与APP交互（分享、token、call phone）、活动页面。

## 安装&使用

``` bash
# svn地址
svn://192.168.4.127/trunk/h5_code/shop-H5

# 安装依赖
$ cnpm i

# 本地环境，打开：localhost:8008
$ npm run serve

# 打包
$ npm run build

# 打包并查看分析报告
$ npm run build --report

# ui
$ vue ui
```

## 功能点
除了vue-cli本身自带的功能外，还配置了：
- [Vant UI](https://youzan.github.io/vant)
- 全局函数、全局变量
- Flexible rem适配
- babel-polyfill兼容处理
- api管理

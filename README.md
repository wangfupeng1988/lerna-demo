# lerna demo

lerna init 初始化项目

lerna bootstrap 安装各个模块的一来

lerna publish 发布各个模块

lerna run xxx 执行所有模块的 npm scripts ，如 lerna run test ，可使用 `--scope` 参数

lerna add ... 安装 npm 插件或者本地的模块，可使用 `--scope` 参数

参数 `--scope=pkgName` `--scope={pkgName1, pkgName2}` 表示一个范围， lerna add ... 和 lerna run test 都可以使用

----

https://github.com/chinanf-boy/lerna-zh
https://juejin.cn/post/6844904116477493256
https://segmentfault.com/a/1190000021121609

----

changeLog
pre-commit
CI

# lerna demo

MultiRepo vs MonoRepo ，各有各的需求场景。我觉得使用 MonoRepo 必须考虑以下几点：
- 拆分出来的 package ，发布为单独的 npm 包，真的会被单独引用。即有真实的需求，不是为了拆分而拆分。
- 不要为了使用 MonoRepo 把所有模块都包含进来。如 vuex 就不能放在 vue3 的 MonoRepo 中，要单独拆分出去。即要搞清楚模块和项目的关系：包含关系，还是平行独立的关系。

## 初始化

使用 `lerna init` 可初始化项目。有两种模式：
- 固定模式，默认。即所有 package 都使用统一的版本号，lerna.json 中初始化 `"version": "0.0.0"` 。
- 独立模式，使用 `lerna init --independent` 初始化项目。各个 package 使用不同的版本号，lerna.json 中初始化 `"version": "independent"` 。

如果是 git clone 下来的项目，可以通过 `lerna bootstrap` 来安装所有的依赖。<br>
如果想把 npm 包都安装到 root 级别，可以使用 `lerna bootstrap --hoist` ，或者在 lerna.json 中配置  `command.bootstrap.hoist: true`。

## 创建模块

`lerna create moduleName` 创建一个模块，文件和目录可以自己调整。

`lerna add xxx` 可以安装 npm 包（可使用 `--dev` 参数），可以关联 package 。

参数 `--scope=pkgName` `--scope={pkgName1, pkgName2}` 表示一个范围， 也可以用到所有 lerna 命令中，例如：
- 在所有 package 中安装 lodash `lerna add lodash`
- 仅在 pkg1 中安装 lodash `lerna add lodash --scope=pkg1`
- 将 pkg1 关联到 pkg2 `lerna add pkg1 --scope=pkg2`

## 执行 npm scripts

`lerna run xxx` 即运行所有 package 的 `npm run xxx` 。常见的如 `lerna run test` `lerna run build` 。
## 发布

`lerna run publish` 会检查改动的 package 并升级版本，发布到 npm 。当然首先你需要登录 npm 。

发布的常见配置，可见 lerna.json
- `ignoreChanges` 忽略哪些改动
- `message` 发布时的 commit 信息
- `allowBranch` 允许的分支

## 使用 ts

和 lerna 没关系，该怎么用就怎么用。

## 其他命令

`lerna exec ...` 对各个模块执行命令，如 `lerna exec echo 100` ，可使用 `--scope` 参数

`lerna clean` 清理所有模块的 `node_modules`

其他参考 lerna 官网吧。

## 总结

lerna 就这些内容，框架很简介，就是一个“批量操作”，没有发明新的东西。

其他的开发环境配置，例如 eslint、commit-lint、test、打包、ts、CI/CD …… 等这些，都和之前一样，不会因为有了 lerna 而带来新的改变。

## 参考资料

- [lerna 介绍](https://github.com/chinanf-boy/lerna-zh)
- [lerna 入门指南](https://juejin.cn/post/6844904116477493256)
- [lerna 包管理](https://segmentfault.com/a/1190000021121609)
- [lerna 多包管理实践](https://juejin.cn/post/6844904194999058440)
- [基于 Yarn WorkSpace + Lerna + OrangeCI 搭建 Typescript Monorepo 项目实践](https://cloud.tencent.com/developer/article/1659352)
- [基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://my.oschina.net/vivotech/blog/3089030)
- [Lerna的依赖管理及hoisting浅析](https://yrq110.me/post/devops/how-lerna-manage-package-dependencies/)
- yarn workspace

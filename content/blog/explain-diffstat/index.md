---
title: GitHub 中的 diffstat 所代表的含义？
date: "2022-01-13T16:41:28.297Z"
description: 解释下 GitHub 中的 diffstat 柱状图的含义
banner:
  url: ./banner.png
  pattern: top
---
## diffstat 是什么？
在 GitHub 中 diffstat 会以 5 个方块组成的柱状图（diffstat histogram）的形式展示，如封面图中的
<span class="text-green-600">■■■</span><span class="text-gray-400">■■</span>。

在 Git 中的 diffstat 则是以 <span class="text-green-600">++++</span><span class="text-red-600">---</span> 来展示。

可以通过指令 `git diff --stat` 来查看。

## diffstat 是怎么计算出来的？
约定以下 3 个名词：
- changes: 文件变更的总行数
- additions: 文件变更中增加的行数
- deletions: 文件变更减少的行数

以及控制台输出时[默认的](https://invisible-island.net/diffstat/manpage/diffstat.html#h2-OPTIONS)柱状图最大宽度 `80` 下文以 `columns` 代替。

那么计算过程的伪代码如下

``` ruby
if changes > columns
  adjust = columns / changes
else
  adjust = 1
end

# + 字符数量，仅取整数部分
addition_char_count = floor(additions * adjust)

# - 字符数量，仅取整数部分
deletion_char_count = floor(deletions * adjust)
```

以 `12 changes, 8 additions, 4 deletions` 为例，可以得到结果为 <span class="text-green-600">++++++++</span><span class="text-red-600">----</span>。

但如果将 `12 changes, 8 additions, 4 deletions` 的 `columns` 设置为 5 呢？

这样上述公式中的 `adjust` 则会变为 `0.417`，经计算得 `additions` 为 `3`，`deletions` 为 `1`，即可得到 <span class="text-green-600">■■■</span><span class="text-red-600">■</span>，为了保持 5 个方块的长度，将缺少部分用灰色补充，就可以得到 GitHub 样式的 diffstat 柱状图 <span class="text-green-600">■■■</span><span class="text-red-600">■</span><span class="text-gray-400">■</span>。

## 相关资料
- [\[GitHub Blog\] Improved Commit Diffs\#Diffstats](https://github.blog/2010-01-12-improved-commit-diffs/)
- [diffstat manpage](https://invisible-island.net/diffstat/manpage/diffstat.html)





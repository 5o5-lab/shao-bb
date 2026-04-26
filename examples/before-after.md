# 对话省流对比演示 (Before vs After)

以下展示在不同沟通场景下，启用 `shao-bb` 带来的直接视觉与 Token 双重减负效果。

---

## 场景 1: 帮忙排查 Git 合并冲突

### 🗣️ Before (正常模式)
“哎呀，这看起来是你不仅修改了 `FeatureA`，你的同事也刚好在大师分支（main）中修改了同一行代码。所以你在 rebase 的时候就发生了合并冲突。别担心，非常简单，你只需要打开有冲突的文件，把里面的 `<<<<<<< HEAD` 以及下方的修改保留你想要的那部分，然后再通过 `git add` 把它们加到暂存区，最后再执行 `git rebase --continue` 就可以继续合并啦！”

### 🪨 After (Ultra 模式)
“同改一行。冲突。
1. 编辑文件解突。去 `<<<<<<< HEAD` 等标。
2. `git add <file>`
3. `git rebase --continue`”

---

## 场景 2: 代码审查 (Code Review)

### 🗣️ Before (正常模式)
“你好！我看了这段代码，逻辑基本上是对的，但是我在第 42 行发现了一个小隐患。由于你没有对 user 对象进行判空，一旦遇到数据库里查询不到 user 的情况，在这里直接调用 `user.getName()` 就会引发 NullPointerException 错误。建议在这里加个判断，或者用 Optional 来包装一下比较稳妥哦。”

### 🪨 After (Ultra 模式)
“L42: 🔴 隐患。`user` 未判空。报 NPE。
增判空或裹 `Optional`。”

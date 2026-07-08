# Segfault Shrine

程序员的“玄学” Debug 占卜塔罗牌。

遇到玄学 Bug 怎么办？当然是用玄学打败玄学。

Segfault Shrine is a cyber-occult Debug Tarot web app for programmers.
Users paste an error message, draw three different Debug Tarot cards, and receive a darkly funny local interpretation with shareable results.

## 项目简介

这是一个面向程序员自娱自乐的单页 Web 应用。用户输入报错信息，比如 `Segmentation fault`、`Cannot read properties of undefined`、`Dependency conflict`，点击抽牌后，系统会根据报错内容或随机逻辑抽出三张不重复的 Debug 塔罗牌，并生成一段“神棍但有点道理”的 Debug 解读。

第一版不接 AI API，也不需要登录、数据库或后端，所有卡牌、关键词匹配和解读模板都在本地完成。

## 核心玩法

1. 输入一段报错信息或日志。
2. 点击抽牌，启动 Debug 仪式。
3. 三张塔罗牌翻开，展示对应的 Bug 隐喻。
4. 生成一段赛博玄学风格的 Debug 解读。
5. 可以复制结果、生成截图，或者重新抽牌。

## MVP 功能

- 36 张 Debug 塔罗牌
- 三张不重复卡牌抽取
- 报错关键词影响抽牌结果
- 本地模板生成解读文案
- 3D 卡牌翻转动效
- 复制结果
- 生成结果截图
- 移动端适配

## 技术栈

- React：构建单页交互界面
- TypeScript：让数据结构和抽牌逻辑更稳
- Vite：轻量、启动快，适合 MVP
- CSS Modules：方便控制组件样式，避免样式互相污染
- Vercel：后续部署静态站点

## 项目文档

- [PRD](./docs/01-prd.md)
- [Design Spec](./docs/02-design-spec.md)
- [Tech Plan](./docs/03-tech-plan.md)
- [Roadmap](./docs/04-roadmap.md)
- [User Flow](./docs/05-user-flow.md)
- [Design Links](./docs/06-design-links.md)

## 本地开发

```bash
pnpm install
pnpm dev
```

默认开发预览地址：

```text
http://localhost:5174/
```

## 构建检查

```bash
pnpm lint
pnpm build
```

## 当前状态

第一版 MVP 已完成并推送到 GitHub。接下来可以继续做视觉强化、动效打磨和线上部署。

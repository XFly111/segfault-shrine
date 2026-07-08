# Segfault Shrine Tech Plan

## 1. 推荐技术栈

第一版推荐使用：

- React
- TypeScript
- Vite
- CSS Modules + 全局 CSS Design Tokens
- `html-to-image` 或同类轻量 DOM 截图库
- GitHub
- Vercel

不推荐第一版使用：

- Next.js
- 后端 API 服务
- 数据库
- 登录系统
- Redux / Zustand 等全局状态库
- Three.js
- Framer Motion
- UI 组件库

## 2. 为什么选择这个技术栈

### React

原因：

- 适合单页交互应用。
- 组件拆分清晰，便于 AI 辅助开发。
- 抽牌状态、输入状态、结果状态适合用 React state 管理。

### TypeScript

原因：

- 牌库、抽牌结果、关键词规则都适合定义类型。
- 可以减少 AI 修改代码时造成的数据字段错误。
- 后续扩展牌库时更安全。

### Vite

原因：

- 项目启动快，配置轻。
- 适合纯前端单页应用。
- 不需要 Next.js 的服务端渲染、路由和后端能力。

### CSS Modules + 全局 CSS Tokens

原因：

- `docs/02-design-spec.md` 已经定义了明确的颜色、间距、圆角和状态 token。
- CSS Modules 可以让组件样式局部化，避免全局样式互相污染。
- 不引入 UI 组件库，避免出现通用 SaaS 或 Bootstrap 默认味。
- 不使用 Tailwind 作为第一版主方案，避免复杂视觉被过长 class 串稀释。

### CSS 3D Transform

原因：

- MVP 只需要卡牌 3D 翻转，不需要完整 3D 场景。
- 使用 CSS `perspective`、`transform-style: preserve-3d`、`rotateY` 就能实现。
- 比 Three.js 更轻，更适合第一版。

### `html-to-image`

原因：

- MVP 要求生成结果截图。
- 浏览器没有稳定的原生 DOM 转图片 API。
- 使用轻量库可以避免手写复杂 Canvas 截图逻辑。

### Vercel

原因：

- 适合 Vite 静态站部署。
- GitHub push 后可自动部署。
- 第一版没有环境变量、后端服务或数据库，部署成本低。

## 3. 项目目录结构

建议目录：

```text
segfault-shrine/
├─ docs/
│  ├─ 01-prd.md
│  ├─ 02-design-spec.md
│  ├─ 03-tech-plan.md
│  ├─ 04-roadmap.md
│  ├─ 05-user-flow.md
│  └─ 06-design-links.md
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  └─ App.module.css
│  ├─ components/
│  │  ├─ Button/
│  │  │  ├─ Button.tsx
│  │  │  └─ Button.module.css
│  │  ├─ ErrorInput/
│  │  │  ├─ ErrorInput.tsx
│  │  │  └─ ErrorInput.module.css
│  │  ├─ Header/
│  │  │  ├─ Header.tsx
│  │  │  └─ Header.module.css
│  │  ├─ InterpretationPanel/
│  │  │  ├─ InterpretationPanel.tsx
│  │  │  └─ InterpretationPanel.module.css
│  │  ├─ ResultActions/
│  │  │  ├─ ResultActions.tsx
│  │  │  └─ ResultActions.module.css
│  │  ├─ TarotCard/
│  │  │  ├─ TarotCard.tsx
│  │  │  └─ TarotCard.module.css
│  │  └─ TarotSpread/
│  │     ├─ TarotSpread.tsx
│  │     └─ TarotSpread.module.css
│  ├─ data/
│  │  ├─ cards.ts
│  │  └─ keywordRules.ts
│  ├─ logic/
│  │  ├─ drawCards.ts
│  │  ├─ generateReading.ts
│  │  └─ formatResult.ts
│  ├─ styles/
│  │  ├─ globals.css
│  │  └─ tokens.css
│  ├─ types/
│  │  └─ tarot.ts
│  ├─ utils/
│  │  ├─ clipboard.ts
│  │  └─ screenshot.ts
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ .env.example
├─ .gitignore
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

目录原则：

- `data/` 只放牌库和关键词规则。
- `logic/` 放纯函数，方便测试和 AI 修改。
- `components/` 放 UI 组件。
- `styles/` 放全局 token 和基础样式。
- `utils/` 放浏览器能力封装，例如复制和截图。

## 4. 页面路由设计

MVP 只有一个路由：

```text
/
```

页面状态由前端 state 控制：

- `idle`：初始输入状态。
- `error`：空输入提示状态。
- `drawing`：抽牌中状态。
- `result`：抽牌结果状态。
- `screenshotError`：截图生成失败状态。

不做：

- `/login`
- `/cards`
- `/history`
- `/admin`
- `/api`

原因：

- MVP 是单页体验，不需要路由系统。
- 多页面会增加状态同步和设计复杂度。

## 5. 组件拆分方案

### `App`

职责：

- 管理应用主状态。
- 组合页面模块。
- 处理抽牌、重新抽牌、复制、截图等主流程。

### `Header`

职责：

- 展示 `Segfault Shrine` / `Segfault.Shrine` 标识。
- 展示短标语和小标签。

注意：

- Logo 视觉上可以使用 `Segfault.Shrine`。
- 文档和项目名仍统一叫 `Segfault Shrine`。

### `ErrorInput`

职责：

- 展示报错输入框。
- 处理输入变化。
- 展示空输入错误提示。
- 在抽牌中状态禁用或弱化。

### `Button`

职责：

- 提供主按钮、次要按钮、加载按钮的统一样式。
- 不做复杂按钮系统。

### `TarotSpread`

职责：

- 接收三张牌和当前状态。
- 控制卡背、加载占位、结果展示。
- 在移动端切换为单列或横向滑动布局。

### `TarotCard`

职责：

- 展示单张 Debug 塔罗牌。
- 处理正面、背面和 3D 翻牌视觉。
- 保证牌名、关键词、小字可读。

### `InterpretationPanel`

职责：

- 展示输入摘录。
- 展示三张牌组合解读。
- 展示 Debug 建议。

### `ResultActions`

职责：

- 展示 `重新抽牌`、`复制结果`、`生成截图`。
- 显示复制成功、截图失败等短状态。

## 6. 数据模型

### `TarotCard`

```ts
type TarotCard = {
  id: string;
  name: string;
  roman: string;
  symbol: string;
  subtitle: string;
  keywords: string[];
  bugCategory: BugCategory;
  tone: "oracle" | "data" | "panic";
  uprightMeaning: string;
  reversedMeaning?: string;
  debugAdvice: string;
  matchTerms: string[];
};
```

说明：

- `id` 用于稳定渲染和避免重复。
- `matchTerms` 用于输入关键词匹配。
- `bugCategory` 用于尽量让三张牌代表不同 Bug 线索。
- `tone` 控制卡牌强调色。

### `BugCategory`

```ts
type BugCategory =
  | "type"
  | "nullish"
  | "dependency"
  | "environment"
  | "cache"
  | "async"
  | "memory"
  | "logic"
  | "io"
  | "build"
  | "legacy"
  | "unknown";
```

### `DrawnCard`

```ts
type DrawnCard = {
  card: TarotCard;
  orientation: "upright" | "reversed";
};
```

### `DrawResult`

```ts
type DrawResult = {
  input: string;
  inputExcerpt: string;
  cards: DrawnCard[];
  reading: Reading;
  createdAt: number;
};
```

### `Reading`

```ts
type Reading = {
  title: string;
  summary: string;
  cardReadings: {
    cardId: string;
    text: string;
    advice: string;
  }[];
  verdict: string;
};
```

### `AppStatus`

```ts
type AppStatus =
  | "idle"
  | "error"
  | "drawing"
  | "result"
  | "screenshotError";
```

## 7. 状态管理方案

使用 React 内置状态即可。

建议状态：

```ts
const [input, setInput] = useState("");
const [status, setStatus] = useState<AppStatus>("idle");
const [result, setResult] = useState<DrawResult | null>(null);
const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle");
const [screenshotState, setScreenshotState] = useState<"idle" | "success" | "error">("idle");
```

不引入 Redux / Zustand：

- 状态集中在一个页面内。
- 没有跨页面共享数据。
- 没有服务端缓存。
- 使用全局状态库会增加学习成本和 AI 修改复杂度。

### 抽牌流程

1. 用户点击抽牌。
2. trim 输入。
3. 输入为空：设置 `status = "error"`。
4. 输入有效：设置 `status = "drawing"`。
5. 延迟一个短时间展示抽牌动画。
6. 调用 `drawCards(input, cards, keywordRules)`。
7. 调用 `generateReading(input, drawnCards)`。
8. 写入 `result`。
9. 设置 `status = "result"`。
10. 可选：滚动到卡牌和解读区域。

### 抽牌算法

第一版使用本地关键词加权抽牌：

1. 将输入转小写。
2. 根据 `matchTerms` 和 `keywordRules` 给每张牌计分。
3. 命中关键词的牌增加权重。
4. 没有任何命中时，所有牌权重相同。
5. 从牌库中不放回抽取三张。
6. 尽量避免三张牌属于同一 `bugCategory`。
7. 每张牌随机正位或逆位。

规则：

- 三张牌不能重复。
- 关键词只影响概率，不做真实代码分析。
- 输入永远不发送到外部服务。

## 8. API 设计

MVP 不需要后端 API。

原因：

- 牌库在本地。
- 解读由本地模板生成。
- 不需要登录。
- 不需要保存历史。
- 不需要 AI API。

项目中不创建 `/api` 目录。

未来如果要扩展 AI 解读，再单独设计 API，不提前预留复杂结构。

## 9. 数据库表设计

MVP 不需要数据库。

原因：

- 没有用户账号。
- 没有云端历史记录。
- 没有后台管理牌库。
- 分享截图在本地生成。

本地也不需要 `localStorage`：

- MVP 没有历史记录需求。
- 重新抽牌保留当前输入只需要 React state。

## 10. 认证方案

MVP 不需要认证。

原因：

- 所有功能公开可用。
- 不涉及用户隐私数据存储。
- 不涉及支付。
- 不涉及后台管理。

安全注意：

- 不创建 `.env.local`。
- 不提交任何真实密钥。
- `.env.example` 可以为空或只写说明。
- 用户输入只在浏览器本地处理。

## 11. 部署方案

推荐部署：

```text
GitHub -> Vercel -> Static Site
```

构建配置：

```text
Install command: npm install
Build command: npm run build
Output directory: dist
```

环境变量：

```text
None
```

部署原因：

- Vite 构建产物是静态文件。
- Vercel 可以直接托管。
- 不需要服务器、数据库或密钥配置。

部署前检查：

```powershell
npm run lint
npm run build
```

如果第一版没有测试框架，至少完成手动验收：

- 桌面端能输入、抽牌、复制、截图。
- 移动端能完成核心流程。
- 空输入错误提示正常。
- 生成截图失败时不清空结果。

## 12. 第一版开发顺序

### 任务 1：创建项目骨架

内容：

- 使用 Vite 创建 React + TypeScript 项目。
- 添加基础目录。
- 添加 `.gitignore`、`.env.example`、README。
- 添加全局 CSS reset 和 design tokens。

验收：

- `npm install` 成功。
- `npm run dev` 可启动。
- `npm run build` 通过。

### 任务 2：实现静态页面结构

内容：

- `Header`
- `ErrorInput`
- `TarotSpread`
- `InterpretationPanel`
- `ResultActions`

验收：

- 页面静态布局接近 Figma Make 原型。
- 桌面端首屏能看到标题、输入框、抽牌按钮。
- 不实现真实抽牌逻辑。

### 任务 3：实现 36 张牌库

内容：

- 创建 `cards.ts`。
- 定义 36 张 Debug 塔罗牌。
- 每张牌包含名称、关键词、分类、解释和建议。

验收：

- TypeScript 类型通过。
- 牌库数量为 36。
- 每张牌都有必要字段。

### 任务 4：实现抽牌逻辑

内容：

- 创建 `drawCards.ts`。
- 根据关键词加权抽牌。
- 无命中时随机抽牌。
- 保证三张牌不重复。

验收：

- 输入 `undefined`、`module not found`、`cache` 等关键词时，相关牌更容易出现。
- 任意输入都能抽出三张不同牌。

### 任务 5：实现解读生成

内容：

- 创建 `generateReading.ts`。
- 根据输入摘录和三张牌生成本地模板文案。
- 生成适合复制和截图的结果文本。

验收：

- 结果文案包含输入摘录、三张牌名和 Debug 建议。
- 不调用任何外部 API。

### 任务 6：实现交互状态

内容：

- 空输入错误。
- 抽牌中 loading。
- 3D 翻牌。
- 结果展示。
- 重新抽牌。

验收：

- 核心 happy path 完整。
- 输入为空时不抽牌。
- 抽牌中不能重复点击。

### 任务 7：实现复制和截图

内容：

- `clipboard.ts`
- `screenshot.ts`
- 结果区域 ref。
- 成功和失败状态提示。

验收：

- 复制结果文案成功。
- 生成截图成功。
- 截图失败不清空当前结果。

### 任务 8：移动端适配

内容：

- 单列布局。
- 卡牌纵向或横向滑动展示。
- 按钮全宽或易触达。
- 避免横向滚动。

验收：

- 390px 宽度下可以完成核心流程。
- 按钮文字不溢出。
- 卡牌文字可读。

### 任务 9：视觉打磨

内容：

- 对齐 `docs/02-design-spec.md`。
- 提高卡牌小字对比度。
- 调整结果态首屏信息密度。
- 添加克制的发光和翻牌动画。

验收：

- 页面不像通用 SaaS。
- 三张牌是视觉中心。
- 结果态能清楚看到牌和解读入口。

### 任务 10：上线前检查

内容：

- README 运行说明。
- lint / build。
- 手动测试。
- 提交并推送。

验收：

- 本地构建通过。
- GitHub 仓库干净。
- 可以部署到 Vercel。


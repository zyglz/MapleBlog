---
title: 在 Cloudflare Pages 上免费部署MapleBlog
description: 在Cloudflare Pages上免费部署MapleBlog 格式的常用语法与组件。
createdAt: 2026-01-11
updatedAt: 2026-01-11
author: Tidus
image: "https://i.postimg.cc/h4ZcmB4b/wang-zhan-da-jian-zai-Cloudflare-Pages-shang-mian-fei-bu-shu-Maple-Blog-tuya.webp"
categories:
  - 网站建设
tags:
  - 网站建设
draft: false
hideToc: false
---

# 在 Cloudflare Pages 上免费部署MapleBlog

MapleBlog 是一个基于 Astro 的静态博客生成器，非常适合在 Cloudflare Pages 上免费、快速地进行部署。以下是详细的步骤和配置说明。

<!--more-->

[![在 Cloudflare Pages 上免费部署MapleBlog.webp](https://i.postimg.cc/h4ZcmB4b/wang-zhan-da-jian-zai-Cloudflare-Pages-shang-mian-fei-bu-shu-Maple-Blog-tuya.webp)](https://postimg.cc/7bzFvj2f)

##  核心部署思路
1.  **获取代码**：Fork 或下载项目源码。
2.  **连接云端**：将代码仓库连接到 Cloudflare Pages。
3.  **配置构建**：告知 Cloudflare 如何构建项目。
4.  **设置变量**：配置必要的环境变量（如网站URL）。
5.  **部署上线**：完成部署并配置自定义域名等。

---

##  详细部署步骤

### 第一步：准备项目代码
你有两种方式准备代码：
- **推荐：Fork GitHub 仓库**
  1.  访问原项目 [GitHub 页面](https://github.com/maplezzzzzz/MapleBlog)。
  2.  点击右上角的 **“Fork”** 按钮，在你的 GitHub 账户中创建一个副本。
- **备用：直接下载源码**
  1.  在原项目页面，点击 “Code” 按钮，选择 “Download ZIP”。
  2.  解压下载的 ZIP 文件到本地。

### 第二步：在 Cloudflare 创建项目
1.  登录 [Cloudflare 控制台](https://dash.cloudflare.com/)。
2.  在侧边栏选择 **“Workers & Pages”**，然后进入 **“Pages”** 选项卡。
3.  点击 **“创建应用程序”** -> **“Pages”**。
4.  点击 **“连接到 Git”** (推荐，便于后续更新)。

### 第三步：连接仓库并配置构建设置
1.  **授权 Git 提供商** (如 GitHub) 并选择你 Fork 的 `MapleBlog` 仓库。
2.  在配置页面，填写以下关键信息：
    - **项目名称**：将用于生成 `.pages.dev` 的预览域名 (例如 `https://mapleblog.pages.dev`)。
    - **生产分支**：为 `main`。
    - **构建设置**：
        - **框架预设**：选择 `Astro` (Cloudflare 会自动填充部分配置)。
        - **构建命令**：`npm run build`
        - **构建输出目录**：`dist`
3.  **高级设置**：点击“变量和别名”开始配置环境变量。

### 第四步：配置环境变量（关键步骤）
这是让博客正确运行的关键。点击“添加变量”进行设置：

| 变量名 | 值 | 说明 |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | `https://你的项目名.pages.dev` | **必须**。你的网站完整访问地址，用于生成正确的链接。 |
| `NODE_VERSION` | `20` | **强烈建议**。指定 Node.js 版本，确保构建环境兼容。 |
| `PUBLIC_TWIKOO_ENV_ID` | `你的Twikoo环境ID` | **可选**。如果你已部署 Twikoo 评论服务，在此填入其地址。 |
| `PUBLIC_ENV` | `production` | **可选**。将环境标识为生产模式。 |

### 第五步：保存并部署
1.  滚动到底部，点击 **“保存并部署”**。
2.  Cloudflare 将开始自动拉取代码、安装依赖、执行构建。
3.  首次构建可能需要 **2-5 分钟**。完成后，即可通过提供的 `.pages.dev` 域名访问你的博客。

---

##  部署后配置

### 1. 绑定自定义域名（可选）
- 在 Pages 项目控制台，进入 **“自定义域”** 设置。
- 输入你的域名 (例如 `www.ttdd.top`)，并按照提示修改域名的 DNS 记录。
- 绑定后，访问更个性化，也便于 SEO。

### 2. 评论系统（Twikoo）处理方案
原项目评论系统默认配置可能依赖其他平台。在 Cloudflare 环境中，建议：
- **方案A：使用原服务**：在 Netlify/Vercel 上单独部署 Twikoo 后端，然后将得到的云函数地址填入上述 `PUBLIC_TWIKOO_ENV_ID` 变量。
- **方案B：在 Cloudflare部署**：目前官方 Cloudflare-Twikoo仓库出的版本为1.6.40，比博客1.6.44版本低，造成首页最新评论无法正常加载（我部署试过了）。

### 3. 内容更新与持续部署
- 由于连接了 Git，**后续更新内容（写新文章）或修改主题非常简单**：
  1.  在你的 Fork 仓库中更新 `src/content/` 下的 Markdown 文件或修改代码。
  2.  推送 (`git push`) 更改到 GitHub。
  3.  Cloudflare Pages 会自动侦测更改，触发一次全新的构建和部署。

---

## ⚠️ 注意事项与排错
- **构建失败**：最常见原因是 Node.js 版本不匹配。请确保在环境变量中正确设置了 `NODE_VERSION=20`。
- **页面样式或链接错误**：请务必检查 `PUBLIC_SITE_URL` 环境变量是否配置正确，且值与最终访问的域名完全一致 (以 `https://` 开头)。
- **本地测试**：在部署前，强烈建议在本地运行 `npm run build` 命令，确保项目可以顺利构建生成 `dist` 文件夹。

按照以上步骤，你应该能成功地将 MapleBlog 部署到 Cloudflare 
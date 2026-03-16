---
title: 在 Cloudflare Worker 上免费部署BitWarden密码管理器
description: 在 Cloudflare Worker 上免费部署BitWarden密码管理器。
createdAt: 2026-03-07
updatedAt: 2026-03-07
author: Tidus
image: "https://image.zyglz.com/file/zyglz/2026/1772857691237.jpg"
categories:
  - 网站运营
tags:
  - 网站建设
  - 项目应用
  - 折腾搭建
draft: false
hideToc: false
---

# 在 Cloudflare Worker 上免费部署BitWarden密码管理器

本文档详细介绍如何将 NodeWarden 部署到 Cloudflare Workers 上。


<!--more-->
---
## 与 Bitwarden 官方服务端能力对比

| 能力项 | Bitwarden | NodeWarden | 说明 |
|---|---|---|---|
| Web Vault（登录/笔记/卡片/身份） | ✅ | ✅ | 网页端密码库管理页面 |
| 文件夹 / 收藏 | ✅ | ✅ | 常用管理能力可用 |
| 全量同步 `/api/sync` | ✅ | ✅ | 已做兼容与性能优化 |
| 附件上传/下载 | ✅ | ✅ | Cloudflare R2 和 KV 二选一 |
| 导入导出功能 | ✅ | ✅ | 完整实现，含 Bitwarden 密码库+附件 ZIP 导入 |
| 网站图标代理 | ✅ | ✅ | 通过 `/icons/{hostname}/icon.png` |
| passkey、TOTP 字段 | ✅ | ✅ | 完全支持，无需高级版 |
| Send | ✅ | ✅ | Cloudflare R2 和 KV 二选一 |
| 多用户 | ✅ | ✅ | 完整的用户管理，邀请机制 |
| 组织/集合/成员权限 | ✅ | ❌ | 没必要实现 |
| 登录 2FA（TOTP/WebAuthn/Duo/Email） | ✅ | ⚠️ 部分支持 | 仅支持用户级 TOTP |
| SSO / SCIM / 企业目录 | ✅ | ❌ | 没必要实现 |
| 紧急访问 | ✅ | ❌ | 没必要实现 |
| 管理后台 / 计费订阅 | ✅ | ❌ | 纯免费 |
| 推送通知完整链路 | ✅ | ❌ | 没必要实现 |


## 网页部署


1. Fork 本仓库。若本项目对你有帮助，欢迎点个 Star。
2. 打开 [Workers](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create) ➜ `Continue with GitHub` ➜ 选择你 Fork 后的仓库（`NodeWarden`）➜ 下一步 ➜ （默认使用 R2 存储；若未开通，可切换为 KV，并将部署命令改为 `npm run deploy:kv`）➜ 部署 
3. 打开生成的链接（绑定自定义域名），按提示，添加“变量和机密”：JWT_SECRET

![免费使用cloudflare搭建BitWarden密码管理器1.png](https://image.zyglz.com/file/zyglz/2026/1772857696488.png)

4. 随后刷新网页,填好你的账号密码即可(首个用户即为系统管理员)

![免费使用cloudflare搭建BitWarden密码管理器.jpg](https://image.zyglz.com/file/zyglz/2026/1772857691237.jpg)

## 📢 技术福利

![微信公众号.png](https://image.zyglz.com/file/zyglz/2026/1773675187501.png)

## 💬 交流互动
*如果你在操作过程中遇到其他问题，欢迎在公众号留言交流。*

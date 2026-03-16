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

<div style="display: flex; align-items: center; border-radius: 12px; padding: 15px; margin: 20px 0;">
  <div style="margin-right: 20px;">
    <img src="https://www.zyglz.com/usr/uploads/WX_gongzhonghao.jpg" width="160" alt="公众号：资源管理站" style="display: block; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="flex: 1; line-height: 1.6;">
    <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">📌 扫码关注 · 获取更多资源</div>
    <div style="margin-bottom: 6px;"><strong>🔍 用微信搜一搜：</strong><strong style="background:#ffebee; color:#c62828; font-weight:bold; padding:2px 12px; border-radius:20px;">资源管理站</strong></div>
    <div style="margin-bottom: 6px;"><strong>💬 后台回复关键词，解锁精选资源包</strong></div>
    <div><strong>🚀 在这里，遇见你想要的每一份资源</div>
  </div>
</div>

## 💬 交流互动
*如果你在操作过程中遇到其他问题，欢迎在公众号留言交流。*

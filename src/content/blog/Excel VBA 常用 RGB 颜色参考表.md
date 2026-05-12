---
title: Excel VBA 常用 RGB 颜色参考表
description: 在Excel VBA设计中常用的 RGB 颜色值，按用途分类展示。
createdAt: 2026-05-12
updatedAt: 2026-05-12
author: Tidus
image: "https://image.zyglz.com/file/zyglz/2026/1778570286875.png"
categories:
  - 技术笔记
tags:
  - 编程开发
  - 程序应用
draft: false
hideToc: true
---

# Excel VBA 常用 RGB 颜色参考表

以下是在Excel VBA设计中常用的 RGB 颜色值，按用途分类：

![VBA颜色常量展示表.png](https://image.zyglz.com/file/zyglz/2026/1778570286875.png)

***

## 一、标题栏/主要区域颜色

| 颜色名称 | RGB 值             | 颜色代码        | 用途      |
| ---- | ----------------- | ----------- | ------- |
| 深蓝色  | RGB(0, 112, 192)  | `&H0C07000` | 主标题背景   |
| 深绿色  | RGB(0, 176, 80)   | `&H50B000`  | 成功/生成按钮 |
| 橙色   | RGB(255, 192, 0)  | `&H0C0FF`   | 警告/清空按钮 |
| 深红色  | RGB(255, 0, 0)    | `&HFF`      | 危险/删除按钮 |
| 紫色   | RGB(112, 48, 160) | `&HA03070`  | 特殊功能    |

***

## 二、背景色（浅色系）

| 颜色名称      | RGB 值              | 颜色代码       | 用途       |
| --------- | ------------------ | ---------- | -------- |
| 浅黄色       | RGB(255, 255, 200) | `&HC8FFFF` | 输入框背景    |
| 浅蓝色（爱丽丝蓝） | RGB(240, 248, 255) | `&HFFF8F0` | 复选框/区域背景 |
| 浅绿色       | RGB(220, 255, 220) | `&HDCFFDC` | 成功状态     |
| 浅粉色       | RGB(255, 240, 245) | `&HF5F0FF` | 提示状态     |
| 浅灰色       | RGB(240, 240, 240) | `&HF0F0F0` | 分割区域     |
| 浅青色       | RGB(224, 255, 255) | `&HFFFFE0` | 次要区域     |
| 浅橙色       | RGB(255, 245, 220) | `&HDCF5FF` | 警告区域     |

***

## 三、边框/分割线颜色

| 颜色名称 | RGB 值              | 颜色代码       | 用途    |
| ---- | ------------------ | ---------- | ----- |
| 浅灰色  | RGB(200, 200, 200) | `&HC8C8C8` | 表格内边框 |
| 中灰色  | RGB(150, 150, 150) | `&H969696` | 区域边框  |
| 深灰色  | RGB(100, 100, 100) | `&H646464` | 外边框   |
| 黑色   | RGB(0, 0, 0)       | `&H0`      | 强调边框  |

***

## 四、字体颜色

| 颜色名称 | RGB 值              | 颜色代码       | 用途       |
| ---- | ------------------ | ---------- | -------- |
| 黑色   | RGB(0, 0, 0)       | `&H0`      | 正文字体     |
| 深灰色  | RGB(80, 80, 80)    | `&H505050` | 次要文字     |
| 白色   | RGB(255, 255, 255) | `&HFFFFFF` | 深色背景上的文字 |
| 红色   | RGB(255, 0, 0)     | `&HFF`     | 错误/强调    |
| 蓝色   | RGB(0, 0, 255)     | `&HFF0000` | 链接/提示    |
| 绿色   | RGB(0, 128, 0)     | `&H8000`   | 正确状态     |
| 橙色   | RGB(255, 128, 0)   | `&H80FF`   | 警告       |

***

## 五、Excel 常用主题色

| 颜色名称 | RGB 值             | 颜色代码       | Excel 索引 |
| ---- | ----------------- | ---------- | -------- |
| 标准红色 | RGB(255, 0, 0)    | `&HFF`     | 3        |
| 标准橙色 | RGB(255, 192, 0)  | `&H0C0FF`  | 45       |
| 标准黄色 | RGB(255, 255, 0)  | `&HFFFF`   | 6        |
| 标准绿色 | RGB(0, 176, 80)   | `&H50B000` | 4        |
| 标准青色 | RGB(0, 176, 240)  | `&HF0B000` | 7        |
| 标准蓝色 | RGB(0, 112, 192)  | `&HC07000` | 5        |
| 标准紫色 | RGB(112, 48, 160) | `&HA03070` | 9        |

***

## 六、常用颜色常量（VBA 内置）

| 常量名       | 值        | RGB 等效           | 说明  |
| --------- | -------- | ---------------- | --- |
| vbBlack   | 0        | RGB(0,0,0)       | 黑色  |
| vbRed     | 255      | RGB(255,0,0)     | 红色  |
| vbGreen   | 65280    | RGB(0,255,0)     | 绿色  |
| vbYellow  | 65535    | RGB(255,255,0)   | 黄色  |
| vbBlue    | 16711680 | RGB(0,0,255)     | 蓝色  |
| vbCyan    | 16776960 | RGB(0,255,255)   | 青色  |
| vbMagenta | 16711935 | RGB(255,0,255)   | 洋红色 |
| vbWhite   | 16777215 | RGB(255,255,255) | 白色  |

***

## 七、推荐配色方案

### 方案一：教育风格（清新舒适）

```vba
Const COLOR_MAIN_TITLE = RGB(0, 112, 192)    ' 标题深蓝色
Const COLOR_SECTION_BG = RGB(240, 248, 255)  ' 区域背景浅蓝色
Const COLOR_INPUT_BG = RGB(255, 255, 200)    ' 输入框浅黄色
Const COLOR_BORDER = RGB(150, 150, 150)      ' 边框灰色
Const COLOR_BUTTON_GEN = RGB(0, 176, 80)     ' 生成按钮绿色
Const COLOR_BUTTON_CLEAR = RGB(255, 192, 0)  ' 清空按钮橙色
```

### 方案二：专业风格（商务简约）

```vba
Const COLOR_MAIN_TITLE = RGB(68, 68, 68)     ' 深灰色
Const COLOR_SECTION_BG = RGB(245, 245, 245)  ' 浅灰色
Const COLOR_INPUT_BG = RGB(255, 255, 255)    ' 纯白色
Const COLOR_BORDER = RGB(180, 180, 180)      ' 浅灰色边框
Const COLOR_BUTTON_GEN = RGB(51, 122, 183)   ' 蓝色
Const COLOR_BUTTON_CLEAR = RGB(240, 173, 78) ' 橙色
```

### 方案三：活泼风格（适合小学生）

```vba
Const COLOR_MAIN_TITLE = RGB(255, 128, 0)    ' 橙色标题
Const COLOR_SECTION_BG = RGB(255, 240, 205)  ' 奶油色
Const COLOR_INPUT_BG = RGB(220, 255, 220)    ' 浅绿色
Const COLOR_BORDER = RGB(255, 200, 150)      ' 浅橙色边框
Const COLOR_BUTTON_GEN = RGB(0, 176, 80)     ' 绿色
Const COLOR_BUTTON_CLEAR = RGB(255, 100, 100)'  ' 浅红色
```

## 八、完整颜色常量定义模板

将以下代码放在 VBA 模块的顶部：

```vba
'=====================================================
' 界面颜色常量（教育风格）
'=====================================================

' 标题颜色
Const COLOR_TITLE_BLUE As Long = 49279                ' RGB(0, 112, 192) 主标题深蓝色
Const COLOR_TITLE_DARK As Long = 4473924              ' RGB(68, 68, 68) 副标题深灰

' 背景颜色
Const COLOR_BG_LIGHT_BLUE As Long = 16777168          ' RGB(240, 248, 255) 区域背景浅蓝
Const COLOR_BG_LIGHT_YELLOW As Long = 13172735        ' RGB(255, 255, 200) 输入框背景浅黄
Const COLOR_BG_LIGHT_GRAY As Long = 15790320          ' RGB(240, 240, 240) 分割背景浅灰
Const COLOR_BG_WHITE As Long = 16777215               ' RGB(255, 255, 255) 纯白背景
Const COLOR_BG_GREEN As Long = 14474460               ' RGB(220, 255, 220) 成功状态浅绿

' 边框颜色
Const COLOR_BORDER_LIGHT As Long = 13421772           ' RGB(200, 200, 200) 内边框浅灰
Const COLOR_BORDER_MEDIUM As Long = 9868950           ' RGB(150, 150, 150) 区域边框中灰
Const COLOR_BORDER_DARK As Long = 6579300             ' RGB(100, 100, 100) 外边框深灰

' 按钮颜色
Const COLOR_BTN_GREEN As Long = 5296274               ' RGB(0, 176, 80) 生成按钮绿色
Const COLOR_BTN_ORANGE As Long = 12640575             ' RGB(255, 192, 0) 清空按钮橙色
Const COLOR_BTN_BLUE As Long = 49279                  ' RGB(0, 112, 192) 打印按钮蓝色
Const COLOR_BTN_RED As Long = 255                     ' RGB(255, 0, 0) 删除按钮红色

' 字体颜色
Const COLOR_FONT_BLACK As Long = 0                    ' RGB(0, 0, 0) 正文字体黑色
Const COLOR_FONT_DARK_GRAY As Long = 5263440          ' RGB(80, 80, 80) 次要文字深灰
Const COLOR_FONT_GRAY As Long = 8421504               ' RGB(128, 128, 128) 提示文字灰色
Const COLOR_FONT_WHITE As Long = 16777215             ' RGB(255, 255, 255) 深色背景白色字体
Const COLOR_FONT_RED As Long = 255                    ' RGB(255, 0, 0) 错误提示红色
Const COLOR_FONT_BLUE As Long = 16711680              ' RGB(0, 0, 255) 链接提示蓝色
```

##  技术福利

如果需要**==表格原文件==**的，可以关注公众号获取：

###  **关注微信公众号获取**

## 📢 技术福利

![微信公众号配图543.png](https://image.zyglz.com/file/zyglz/2026/1773752307269.png)

如果你需要以上资源，可以关注公众号获取：

### 🔑 后台回复关键词：**245**

## 💬 交流互动
*如果你有任何问题，欢迎在公众号留言交流。*

> 📝 **小贴士**：如果本文对你有帮助，欢迎分享给更多需要的朋友！你的支持是我持续创作的动力。

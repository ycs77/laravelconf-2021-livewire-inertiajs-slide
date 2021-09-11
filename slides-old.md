---
title: Livewire vs Inertia.js | 關於如何選擇全端框架這檔事
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
highlighter: shiki
---

# Livewire vs Inertia.js<br>關於如何選擇全端框架這檔事

LaravelConf 2021 講題 | by Lucas

眾所周知，Laravel 是一個優秀的 PHP 後端框架，但要如何和前端完美的銜接，這又是另一個問題。通常常見和前端溝通的方式是用 API，但如果僅僅是開發一個中小型的全端專案，似乎... 也太累了點 (汗)。

今天將和大家介紹2個 Laravel 的全端框架，模糊前後端界線的 Livewire，和建構全端 SPA 卻不用寫 API 的 Inertia.js，讓我們從不同的角度來認識建構全端應用的方式。

---

# 如何建構全端應用?

<!-- 架構圖 -->

以 Laravel & Vue.js 舉例：

* 開發 API (REST API、GraphQL)
* 管理 2 個 Git 專案 (SPA & API)
* 前端路由 (vue-router)
* 身分驗證 (JWT...)
* 狀態管理
* CORS

---
layout: center
class: text-center
---

# 建構全端應用很複雜

---

# 介紹 Livewire & Inertia.js

<div grid="~ cols-2 gap-4">
<div>

## Livewire
* 以後端 (Laravel) 為核心，使用 PHP & Blade 建構頁面
* 整合 Alpine.js

</div>

<div>

## Inertia.js
* 前後端完美銜接 (Laravel <=> Vue.js)

</div>
</div>

---

# 列表

<!--  -->

---

# 分頁

<!--  -->

---

# 編輯

<!--  -->

---

# 刪除

<!--  -->

---

# 上傳

<!--  -->

---

# 通知 (Session)

<!--  -->

---

# Livewire 功能

* 離線狀態
* Polling 輪詢
* ...

---

# Inertia.js 功能

* SSR
* ...

---

# Stack

## TALL
* Tailwind CSS
* Alpine.js
* Laravel
* Livewire

---

# Laravel Jetstream

<!--  -->

---

# 結論

|          | Livewire                    | Inertia                        |
| -------- | --------------------------- | ------------------------------ |
| 前端     | PHP、Alpine.js              | 現代前端框架 Vue 2/3、React... |
| 操作方式 | 現代前端應用的 Request 方式 | 傳統後端應用的 Request 方式    |

---
layout: center
class: text-center
---

# Q & A

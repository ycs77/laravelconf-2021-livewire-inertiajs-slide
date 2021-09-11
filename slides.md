---
theme: ycs77
title: Livewire vs Inertia.js | 關於如何選擇全端框架這檔事
highlighter: shiki
info: |
  ## Livewire vs Inertia.js<br>關於如何選擇全端框架這檔事

  **{Laravel x Vue}Conf Taiwan 2021**

  講者：Lucas Yang

  眾所周知，Laravel 是一個優秀的 PHP 後端框架，但要如何和前端完美的銜接，這又是另一個問題。通常常見和前端溝通的方式是用 API，但如果僅僅是開發一個中小型的全端專案，似乎... 也太累了點 (汗)。

  今天將和大家介紹2個 Laravel 的全端框架，模糊前後端界線的 **Livewire**，和建構全端 SPA 卻不用寫 API 的 **Inertia.js**，讓我們從不同的角度來認識建構全端應用的方式。
---

<h1 class="!font-light"><strong class="!text-[#fb70a9]">Livewire</strong> vs <strong class="!text-[#9553e9]">Inertia.js</strong></h1>
<h2 class="!text-5xl">關於如何選擇<YellowText bold>全端框架</YellowText>這檔事</h2>

<div class="abs-bl mx-14 my-10 flex gap-2">
  <img class="w-[160px] opacity-70" src="https://laravelconf.tw/_nuxt/img/logo.a62516f.svg" title="{Laravel x Vue}Conf Taiwan 2021" />
</div>

---
layout: presenter
---

---
layout: center
class: text-center
---

# 現代 Web 應用架構

<div class="min-w-2xl flex mt-16">
  <div class="flex-auto text-center">
    <fa-solid-server class="w-24 h-24 mx-auto" />
    <h2 class="mt-4"><YellowText bold>伺服器端</YellowText>渲染</h2>
    <div class="mt-1.5">(後端渲染)</div>
  </div>
  <div class="flex-auto text-center">
    <fa-solid-desktop class="w-24 h-24 mx-auto" />
    <h2 class="mt-4"><YellowText bold>用戶端</YellowText>渲染</h2>
    <div class="mt-1.5">(前端渲染)</div>
  </div>
</div>

---
layout: center
class: text-center
---

# 經典後端網站架構

<div class="min-w-2xl flex mt-16">
  <div class="flex-auto text-center">
    <fa-solid-code-branch class="w-16 h-16 mx-auto" />
    <h2 class="!text-2xl mt-4"><YellowText>路由</YellowText><span class="!text-base">(後端路由)</span></h2>
  </div>
  <div class="px-6 flex items-center text-4xl">+</div>
  <div class="flex-auto text-center">
    <fa-solid-database class="w-16 h-16 mx-auto" />
    <h2 class="!text-2xl mt-4"><YellowText>資料</YellowText><span class="!text-base">(ORM)</span></h2>
  </div>
  <div class="px-6 flex items-center text-4xl">+</div>
  <div class="flex-auto text-center">
    <fa-solid-desktop class="w-16 h-16 mx-auto" />
    <h2 class="!text-2xl mt-4"><YellowText>渲染</YellowText><span class="!text-base">(後端模板)</span></h2>
  </div>
  <div class="px-6 flex items-center text-4xl">=</div>
  <div class="flex-auto flex flex-col justify-center items-center">
    <h2 class="!text-3xl tracking-wider"><YellowText bold>後端應用</YellowText></h2>
    <div class="mt-2">(Laravel, Rails)</div>
  </div>
</div>

---
layout: center
class: text-center
---

# 「全端網站」的好朋友

<div class="min-w-2xl flex justify-evenly items-center mt-16">
  <div>
    <img class="h-16" src="/images/jquery-logo.svg">
  </div>
  <div>
    <img class="h-32" src="/images/bootstrap-logo.svg">
  </div>
</div>

---
layout: center
class: text-center
---

# SPA 時代來臨，網站前後端分離

<div class="min-w-2xl flex mt-16">
  <div class="flex-auto text-center">
    <fa-solid-code-branch class="w-16 h-16 mx-auto" />
    <h2 class="!text-2xl mt-4"><YellowText>路由</YellowText><span class="!text-base">(前端路由)</span></h2>
  </div>
  <div class="px-6 flex items-center text-4xl">+</div>
  <div class="flex-auto text-center">
    <fa-solid-database class="w-16 h-16 mx-auto" />
    <h2 class="!text-2xl mt-4"><YellowText>資料</YellowText><span class="!text-base">(API)</span></h2>
  </div>
  <div class="px-6 flex items-center text-4xl">+</div>
  <div class="flex-auto text-center">
    <fa-solid-desktop class="w-16 h-16 mx-auto" />
    <h2 class="!text-2xl mt-4"><YellowText>渲染</YellowText><span class="!text-base">(前端組件)</span></h2>
  </div>
  <div class="px-6 flex items-center text-4xl">=</div>
  <div class="flex-auto flex flex-col justify-center items-center">
    <h2 class="!text-3xl tracking-wider"><YellowText bold>前端應用</YellowText></h2>
    <div class="mt-2">(Vue.js, React, Angular)</div>
  </div>
</div>

---

# 以 <YellowText bold>Laravel</YellowText> & <YellowText bold>Vue</YellowText> 舉例，「全端」需包辦以下

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

# 全端：建立<YellowText bold>現代全端網站</YellowText>很複雜

---
layout: center
class: text-center
---

# Laravel 的全端解決方案

<div class="mt-16 flex justify-center space-x-12">
  <button class="px-12 py-3 bg-livewire text-white text-xl rounded focus:outline-none focus:ring-2 focus:ring-livewire focus:ring-offset-4 focus:ring-offset-indigo-900" @click="$slidev.nav.next()">
    Livewire
  </button>
  <button class="px-12 py-3 bg-inertia text-white text-xl rounded focus:outline-none focus:ring-2 focus:ring-inertia focus:ring-offset-4 focus:ring-offset-indigo-900" @click="$slidev.nav.go(16)">Inertia.js</button>
</div>

---
layout: center
---

<div class="text-center">
  <div class="inline-block p-3 bg-white rounded-lg mb-8">
    <img src="/images/livewire-logo.svg" />
  </div>
</div>

- <YellowText bold>Laravel 的全端框架</YellowText>
- 核心概念：組件
- 使用語言：PHP & Blade
- 資料輸入雙向綁定 (前後端使用 AJAX 溝通)
- SEO 友好

---
clicks: 3
---

# 計數器

<ExternalLink livewire />

<div class="grid grid-cols-2 gap-6">
<div>

### Livewire 組件 - *Counter.php*
```php {all|12-15|5|7-10} {at:0}
use Livewire\Component;

class Counter extends Component
{
    public $count = 0;

    public function increment()
    {
        $this->count++;
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
```

</div>

<div>

### Livewire 視圖 - *counter.blade.php*
```html {all|all|4|2} {at:0}
<div style="text-align: center">
    <button wire:click="increment">+</button>

    <h1>{{ $count }}</h1>
</div>
```

</div>
</div>

---

# 運作原理

<img class="bg-white max-h-sm rounded-md" src="/images/livewire-lifecycle-timeline.svg">

---
clicks: 3
---

# 雙向綁定

<ExternalLink livewire path="data-binding" />

<div class="grid grid-cols-2 gap-6">
<div>

```php {all|5|6|7} {at:0}
use Livewire\Component;

class DataBinding extends Component
{
    public $name = '';
    public $agree = false;
    public $languages = ['Laravel', 'Vue.js'];

    public function render()
    {
        return view('livewire.data-binding');
    }
}
```

</div>

<div>

```html {all|2,8|3-9|11-15} {at:0}
<div>
    <input type="text" wire:model="name">
    <input type="checkbox" wire:model="agree">我同意服務條款

    @if ($agree)
        <div>哈囉~ {{ strtoupper($name) }}</div>
    @else
        <div>{{ $name }} 請勾選同意服務條款</div>
    @endif

    <ul>
        @foreach ($languages as $language)
            <li>{{ $language }}</li>
        @endforeach
    </ul>
</div>
```

</div>
</div>

---
clicks: 2
---

# 即時搜尋

<ExternalLink livewire path="search" />

<div class="grid grid-cols-2 gap-6">
<div>

```php {all|6-10|15} {at:0}
use App\Models\Language;
use Livewire\Component;

class Search extends Component
{
    public $search = '';

    protected $queryString = [
        'search' => ['except' => ''],
    ];

    public function render()
    {
        return view('livewire.search', [
            'languages' => Language::where('name', 'LIKE', "{$this->search}%")->get(),
        ]);
    }
}
```

</div>

<div>

```html {all|2|4-8} {at:0}
<div>
    <input type="text" wire:model="search">

    <ul>
        @foreach ($languages as $language)
            <li>{{ $language->name }}</li>
        @endforeach
    </ul>
</div>
```

</div>
</div>

---
layout: center
class: text-center
---

# 用 <YellowText bold>PHP & Blade</YellowText> 寫出 <YellowText bold>JavaScript</YellowText> 的效果

---

# Blade vs Vue?

<div class="grid grid-cols-2 gap-8">
<div>

### 同時用 Blade 和 Vue 來組織視圖

```html
<div class="container">
    <create-item :data="@json($data)" />

    <ul>
        @foreach ($items as $item)
            <li>{{ $item->content }}</li>
        @endforeach
    </ul>
</div>
```

</div>
<div v-click>

### 視圖全權交給 Vue (View)

```html
<items-list :data="@json($page)" />
```

</div>
</div>

---
layout: center
class: text-center
---

<div class="min-w-2xl flex">
  <div class="flex-auto grid grid-cols-[1fr,80px,1fr] gap-y-12 text-center">
    <div>
      <fa-solid-code-branch class="w-16 h-16 mx-auto" />
      <h2 class="!text-2xl mt-3"><YellowText>路由</YellowText><span class="!text-base">(後端路由)</span></h2>
    </div>
    <div class="flex justify-center items-center text-4xl">+</div>
    <div>
      <fa-solid-database class="w-16 h-16 mx-auto" />
      <h2 class="!text-2xl mt-3"><YellowText>資料</YellowText><span class="!text-base">(ORM)</span></h2>
    </div>
    <div>
      <fa-solid-desktop class="w-16 h-16 mx-auto" />
      <h2 class="!text-2xl mt-3"><YellowText>渲染</YellowText><span class="!text-base">(前端組件)</span></h2>
    </div>
    <div class="flex justify-center items-center text-4xl">+</div>
    <div class="flex justify-center items-center">
      <img src="/images/inertia-logo.svg" />
    </div>
  </div>
  <div class="px-6 flex items-center text-4xl">=</div>
  <div class="flex-auto flex flex-col justify-center items-center space-y-1.5">
    <h2 class="!text-3xl tracking-wider"><YellowText bold>前端渲染</YellowText></h2>
    <div class="text-2xl">的</div>
    <h2 class="!text-3xl tracking-wider"><YellowText bold>後端應用</YellowText></h2>
  </div>
</div>


---
layout: center
clicks: 4
---

<div class="max-w-xl mx-auto">
<div class="text-center">
  <div class="inline-flex flex-col px-6 py-4 bg-gradient-to-r from-[#9553e9] to-[#9553e9] rounded-lg mb-8">
    <img src="/images/inertia-logo.svg" />
    <img class="mt-2" src="/images/inertia-logo-text.svg" />
  </div>
</div>
<v-clicks at="0">

- Inertia 是開發 <YellowText bold>經典後端應用</YellowText> <span class="text-sm text-indigo-300">(Laravel, Rails)</span> + <YellowText bold>前端視圖</YellowText> <span class="text-sm text-indigo-300">(Vue.js, React)</span> 的方法
- 後端框架可以使用<YellowText>除了視圖</YellowText>的所有功能，如 Router、Controller、Middleware、身分驗證、授權、Eloquent ORM…...等。
- 沒有 <YellowText>API</YellowText>、沒有<YellowText>前端路由</YellowText>、也沒有 <YellowText>SPA</YellowText> 應用的複雜性
- Inertia 定義了一組<YellowText bold>協議</YellowText> (規則)
- 提供多個實作 Inertia 的 <YellowText>前端框架套件</YellowText> 和 <YellowText>後端框架套件</YellowText>

</v-clicks>
</div>

---

# HTTP 請求

<div class="h-[400px] grid grid-cols-7">
  <div class="col-span-3 flex items-center text-3xl pl-12">
    <span class="bg-indigo-800 px-2 text-2xl font-bold rounded-md mr-3">GET</span>
    <YellowText bold>/events/80</YellowText>
  </div>
  <div class="col-span-2 flex justify-center items-center relative">
    <img class="w-48" src="/images/arrow-1.svg" />
    <div class="absolute left-[4rem] bottom-[3rem] text-cyan-400 font-normal">HTTP 請求</div>
  </div>
  <div class="col-span-2 flex flex-col justify-center items-center pr-8">
    <fa-solid-file-alt class="w-20 h-20" />
    <div class="mt-4 text-xl font-bold">HTML 響應</div>
  </div>
  <div class="col-span-3 flex items-center text-3xl pl-12">
    <span class="bg-indigo-800 px-2 text-2xl font-bold rounded-md mr-3">GET</span>
    <YellowText bold>/api/events/80</YellowText>
  </div>
  <div class="col-span-2 flex justify-center items-center relative">
    <img class="w-48" src="/images/arrow-1.svg" />
    <div class="absolute left-[4rem] bottom-[3rem] text-cyan-400 font-normal">XHR 請求</div>
  </div>
  <div class="col-span-2 flex flex-col justify-center items-center pr-8">
    <div class="text-[5rem] leading-[5rem] font-bold mb-4">{ }</div>
    <div class="mt-4 text-xl font-bold">JSON 響應</div>
  </div>
</div>

---

# HTTP 請求 (Inertia)

<div class="h-[400px] grid grid-cols-7 pt-10">
  <div class="col-span-3 flex items-center text-3xl pl-12">
    <span class="bg-indigo-800 px-2 text-2xl font-bold rounded-md mr-3">GET</span>
    <YellowText bold>/events/80</YellowText>
  </div>
  <div class="col-span-2 flex justify-center items-center relative">
    <img class="w-48" src="/images/arrow-2.svg" />
    <div class="absolute left-[4rem] top-[4rem] text-cyan-400 font-normal">HTTP 請求</div>
    <div class="absolute left-[2.5rem] bottom-[3.5rem] text-cyan-400 font-normal">Inertia 請求 (XHR)</div>
  </div>
  <div class="col-span-2 flex flex-col">
    <div class="flex-1 flex flex-col justify-center items-center pr-8">
      <fa-solid-file-alt class="w-20 h-20" />
      <div class="mt-4 text-xl font-bold">HTML 響應</div>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center pr-8">
      <img src="/images/inertia-logo.svg" />
      <div class="mt-4 text-xl font-bold mt-8">Inertia 響應</div>
    </div>
  </div>
</div>

---

# Inertia 運作方式

<div class="grid grid-cols-2">
<div>

### 瀏覽頁面

正常瀏覽頁面時，會回傳正常的 HTML 頁面，包含基本的 CSS 和 JS，還有用來啟動 SPA 應用的 &lt;div&gt; 根元素。

</div>
<div>
  <img src="" />
</div>
</div>


---

# Inertia 運作方式

---

# Inertia Page 物件

- component：前端組件名稱
- props：前端組件 props (資料)
- url：頁面 URL
- version：當前資產版本

---

# Inertia 支援的框架 (Adapters)

<div class="text-lg mt-8">

### <YellowText bold>Inertia 官方後端套件</YellowText>
- Laravel
- Rails

</div>
<div class="text-lg mt-6">

### <YellowText bold>Inertia 官方前端套件</YellowText>
- Vue.js 2/3
- React
- Svelte

</div>
<div class="mt-6">

[社區開發套件](https://inertiajs.com/community-adapters)

</div>

---

# Hello Inertia

<ExternalLink inertia />

---

# 運作原理

https://github.com/ycs77/laravel-without-api-and-inertiajs-30days/blob/main/docs/Day_02.md

---

# ...

---

# TALL Stack

Tailwind CSS + Alpine.js + Laravel + Livewire

---

# VILT Stack

Vue.js  +  Inertia.js  +  Laravel  +  Tailwind CSS

---

# Laravel Jetstream

...

---

# Livewire vs Inertia.js

|                 | <strong class="!text-livewire text-xl">Livewire</strong> | <strong class="!text-inertia text-xl">Inertia.js</strong> |
| --------------- | ------------------------------------------------------ | -------------------------------------------------------- |
| **視圖 (View)** | Blade、PHP、Alpine.js                                  | 前端框架 Vue、React...                                   |
| **框架**        | Laravel                                                | 支援 Inertia 的框架                                      |
| **SEO**         | <strong class="!text-green-400">易</strong>            | <strong class="!text-red-400">難</strong>                |
| **總結**        | 有點像 Vue 的 Laravel 全端框架                         | 前後端框架的膠水                                         |

---
layout: center
class: text-center
---

# Blade <fa-solid-arrow-right class="inline-block w-6 h-6 text-indigo-300" /> <strong class="!text-[#fb70a9]">Livewire</strong>

<div class="my-8"></div>

# Vue.js <fa-solid-arrow-right class="inline-block w-6 h-6 text-indigo-300" /> <strong class="!text-[#9553e9]">Inertia.js</strong>

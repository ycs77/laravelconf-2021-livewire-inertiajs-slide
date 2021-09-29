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
  <button class="px-12 py-3 bg-inertia text-white text-xl rounded focus:outline-none focus:ring-2 focus:ring-inertia focus:ring-offset-4 focus:ring-offset-indigo-900" @click="$slidev.nav.go(17)">Inertia.js</button>
</div>

---
layout: center
---

<div class="text-center">
  <div class="inline-block px-6 py-4 bg-white rounded-lg mb-8">
    <img src="/images/livewire-logo.svg" />
  </div>
</div>

- <YellowText bold>Laravel 的全端框架</YellowText>
- 核心概念：組件
- 使用語言：PHP & Blade
- 資料輸入雙向綁定 (前後端使用 AJAX 溝通)
- SEO 友好

---
clicks: 4
---

# 計數器

<ExternalLink livewire />

<div class="grid grid-cols-2 gap-x-6 gap-y-2">
<div class="text-gray-400 tracking-wide">Livewire 組件</div>
<div class="text-gray-400 tracking-wide">Livewire 視圖</div>

```php {all|1-4|18-21|11|13-16} {at:0}
// routes/web.php
use App\Http\Livewire\Counter;

Route::get('/', Counter::class);

// app/Http/Livewire/Counter.php
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

```html {all|all|all|5|3} {at:0}
<!-- resources/views/livewire/counter.blade.php -->
<div>
    <button wire:click="increment">+</button>

    <h1>{{ $count }}</h1>
</div>
```

</div>

---

# 運作原理

<img class="bg-white max-h-sm rounded-md" src="/images/livewire-lifecycle-timeline.svg">

---
clicks: 3
---

# 雙向綁定

<ExternalLink livewire path="data-binding" />

<div class="grid grid-cols-2 gap-x-6 gap-y-2">
<div class="text-gray-400 tracking-wide">Livewire 組件</div>
<div class="text-gray-400 tracking-wide">Livewire 視圖</div>

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

---

# Polling (輪詢)

<ExternalLink livewire path="polling" />

```html
<div wire:poll.1s>
    {{ now() }}
</div>
```

---
clicks: 2
---

# 即時搜尋

<ExternalLink livewire path="search" />

<div class="grid grid-cols-2 gap-x-6 gap-y-2">
<div class="text-gray-400 tracking-wide">Livewire 組件</div>
<div class="text-gray-400 tracking-wide">Livewire 視圖</div>

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

---

# Livewire 其他功能

- 上傳檔案
- 下載檔案
- 授權
- 分頁
- 載入狀態
- 離線狀態
- Loading 狀態

---
layout: center
class: text-center
---

# 用 <YellowText bold>PHP & Blade</YellowText> 寫出 <YellowText bold>JavaScript</YellowText> 的效果

---
clicks: 1
---

# Blade vs Vue?

<div class="grid grid-cols-[300px,1fr] gap-x-6 gap-y-2">
<v-clicks at="0" :every="2">

- 同時用 <YellowText bold>Blade</YellowText> 和 <YellowText bold>Vue</YellowText> 來組織視圖

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

- 視圖全權交給 <YellowText bold>Vue</YellowText> (View)

```html
<items-list :data="@json($page)" />
```

</v-clicks>
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
  <div class="inline-flex flex-col px-12 py-5 bg-gradient-to-r from-[#9553e9] to-[#6d74ed] rounded-lg mb-8">
    <img class="w-[150px]" src="/images/inertia-logo.svg" />
    <img class="w-[150px] mt-2" src="/images/inertia-logo-text.svg" />
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
    <span class="bg-indigo-800 px-2 text-lg font-bold rounded-md mr-3">GET</span>
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
    <span class="bg-indigo-800 px-2 text-lg font-bold rounded-md mr-3">GET</span>
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
    <span class="bg-indigo-800 px-2 text-lg font-bold rounded-md mr-3">GET</span>
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

# 瀏覽頁面

<div class="grid grid-cols-2 gap-12">
<div>

- 回傳 HTML 頁面
- 基本的 CSS 和 JS
- 用來啟動 SPA 應用的 **&lt;div&gt; 根元素**<br>
  (`data-page` 屬性中包含 <YellowText bold>Inertia Page 物件</YellowText>)

</div>
<div>
  <img src="/images/code-1.png" />
</div>
</div>

---

# Inertia 加載新頁面

<div class="grid grid-cols-2 gap-12">
<div class="flex flex-col justify-between">
<div>

- 點擊 &lt;inertia-link&gt; 組件，
- Inertia 會攔截點擊事件並發送一個 **XHR 請求**<br>
  並回傳 <YellowText bold>Inertia Page 物件</YellowText>
- 然後更新當前頁面的 **前端組件** 和 **瀏覽紀錄**

</div>
<div v-click class="p-4 border border-white rounded-lg">

### <YellowText bold>Inertia Page 物件</YellowText>

- **component**：前端組件名稱
- **props**：前端組件 props (資料)
- **url**：頁面 URL
- **version**：當前資產版本
  <div class="text-xs text-indigo-300">(在 Laravel 中會自動使用 `mix-manifest.json` 生成的 Hash 值作為 資產版本)</div>

</div>
</div>
<div>
  <img src="/images/code-2.png" />
</div>
</div>

---

# 發送 Inertia 請求

<div class="grid grid-cols-2 gap-4">

```js
import { Inertia } from '@inertiajs/inertia'

Inertia.visit(url, {
  method: 'get',
  data: {},
  replace: false,
  preserveState: false,
  preserveScroll: false,
  only: [],
  headers: {},
  errorBag: null,
  forceFormData: false,
  onCancelToken: cancelToken => {},
  onCancel: () => {},
  onBefore: visit => {},
  onStart: visit => {},
  onProgress: progress => {},
  onSuccess: page => {},
  onError: errors => {},
  onFinish: visit => {},
})
```

<div>

```js
import { Inertia } from '@inertiajs/inertia'

Inertia.get(url, data, options)
Inertia.post(url, data, options)
Inertia.put(url, data, options)
Inertia.patch(url, data, options)
Inertia.delete(url, options)
```

</div>
</div>

---

# Inertia Link

```js
import { Link } from '@inertiajs/inertia-vue3'

<Link href="/">首頁</Link>

// Method：POST / PUT / PATCH / DELETE
<Link href="/logout" method="post" as="button" type="button">登出</Link>
// 連結會渲染成
<button type="button">登出</button>

// post 資料
<Link href="/endpoint" method="post" :data="{ foo: bar }">Save</Link>

// 替換歷史紀錄
<Link href="/" replace>首頁</Link>

// 保持滾動條位置
<Link href="/" preserve-scroll>首頁</Link>

// Partial reloads (局部重載)
<Link href="/users?active=true" :only="['likes_count']">喜歡</Link>
```

---

# Inertia Adapters (支援的框架)

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
clicks: 2
---

# Hello Inertia

<ExternalLink inertia />

<div class="grid grid-cols-[130px,1fr,1fr] gap-x-4 gap-y-2">
<div></div>
<div class="text-gray-400 tracking-wider text-sm uppercase">路由</div>
<div class="text-gray-400 tracking-wider text-sm uppercase">Vue 組件</div>

<v-clicks at="0" :every="3">

- 渲染頁面

```php
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
// 或
Route::inertia('/', 'Home');
```

```vue
<!-- resources/js/pages/Home.vue -->
<template>
  <h1>首頁</h1>
</template>
```

- Prop 傳資料

```php {all|5} {at:1}
use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('About', [
        'name' => 'Lucas',
    ]);
});
```

```vue {all|4,10} {at:1}
<!-- resources/js/pages/About.vue -->
<template>
  <h1>關於</h1>
  <div>你好~ 我是 {{ name }}</div>
</template>

<script>
export default {
  props: {
    name: String,
  },
}
</script>
```

</v-clicks>
</div>

---

# Layout

```vue
<template>
  <div>...</div>
</template>

<script>
import Layout from '@/Layout.vue'

export default {
  layout: Layout,
  ...
}
</script>
```

---

# 會員登入

<ExternalLink inertia path="login" />

```php
use Inertia\Inertia;

class LoginController extends Controller
{
    public function loginView()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        // Auth::attempt()...
    }

    public function logout(Request $request)
    {
        // Auth::logout()...
    }
}
```

---

# 會員登入

<ExternalLink inertia path="login" />

<div class="grid grid-cols-2 gap-6">

```vue
<template>
  <h1>會員登入</h1>

  <form @submit.prevent="form.post('/login')">
    <div class="input-group">
      <label>E-mail：</label>
      <input type="text" v-model="form.email">
      <div v-if="form.errors.email" class="invalid">
        {{ form.errors.email }}
      </div>
    </div>

    <div class="input-group">
      <label>密碼：</label>
      <input type="password" v-model="form.password">
    </div>

    <button>送出</button>
  </form>
  ...
</template>
```

<div>

```vue
<script>
import { useForm } from '@inertiajs/inertia-vue3'

export default {
  // ...
  setup() {
    const form = useForm({
      email: '',
      password: '',
    })

    return { form }
  },
}
</script>
```

</div>
</div>

---
clicks: 1
---

# 留言板 - 留言列表

<ExternalLink inertia path="comments" />

跟資料庫拿資料

<div class="grid grid-cols-2 gap-6">

```php {all|6-13} {at:0}
class CommentController extends Controller
{
    public function index()
    {
        return Inertia::render('Comments', [
            'comments' => Comment::all()
                ->transform(fn (Comment $comment) => [
                    'id' => $comment->id,
                    'name' => $comment->name,
                    'content' => $comment->content,
                    'created_at' => $comment
                        ->created_at
                        ->format('Y/m/d H:i'),
                ]),
        ]);
    }
}
```

```vue {all|5-9,16} {at:0}
<template>
  <h1>留言</h1>
  ...
  <ul>
    <li v-for="comment in comments">
      <h2>姓名：{{ comment.name }}</h2>
      <div>{{ comment.created_at }}</div>
      <div>內容：{{ comment.content }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comments: Array,
  },
  // ...
}
</script>
```

</div>

---
clicks: 3
---

# 留言板 - 表單送出

<ExternalLink inertia path="comments" />

<div class="grid grid-cols-2 gap-6">

```vue {all|7,14|4,19|8-10,15-17} {at:0}
<template>
  <h1>留言</h1>

  <form @submit.prevent="storeComment">
    <div class="input-group">
      <label>姓名：</label>
      <input type="text" v-model="form.name">
      <div v-if="form.errors.name" class="invalid">
        {{ form.errors.name }}
      </div>
    </div>
    <div class="input-group">
      <label>留言：</label>
      <textarea v-model="form.content"></textarea>
      <div v-if="form.errors.content" class="invalid">
        {{ form.errors.content }}
      </div>
    </div>
    <button>送出</button>
  </form>
  ...
</template>
```

```vue {all|2,7-10|12-16|0} {at:0}
<script>
import { useForm } from '@inertiajs/inertia-vue3'

export default {
  // ...
  setup() {
    const form = useForm({
      name: '',
      content: '',
    })

    const storeComment = () => {
      form.post('/comments', {
        onSuccess: () => form.reset(),
      })
    }

    return { form, storeComment }
  },
}
</script>
```

</div>

---

# 留言板 - 表單送出

<ExternalLink inertia path="comments" />

```php

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'content' => 'required',
        ], [
            'name.required' => '請輸入姓名',
            'content.required' => '請輸入留言',
        ]);

        Comment::create($data);

        return back();
    }
}
```

---
layout: center
class: text-center
---

# 錯誤處理

<ExternalLink inertia />

<img class="h-[380px] rounded" src="/images/fail.jpg" />

---
layout: center
class: text-center
---

# Inertia Demo

<img class="h-[380px] rounded" src="https://raw.githubusercontent.com/inertiajs/pingcrm/99b88e/screenshot.png" />

[官方介紹](https://inertiajs.com/demo-application) | [Ping CRM](https://demo.inertiajs.com/) | [GitHub](https://github.com/inertiajs/pingcrm)

---

# SSR (服務端渲染) - 優化 SEO <span class="px-2 py-0.5 bg-yellow-700 text-yellow-300 text-base font-normal rounded align-middle">測試階段</span>

<v-clicks>

1. 發送請求進入後端框架 - <YellowText bold>Laravel</YellowText>
2. Inertia 將 **Page 物件** 發送給本地 SSR Server，<br>
   使用 Node.js 將當前頁面的 **前端組件** 渲染為 HTML - <YellowText bold>Node.js</YellowText>
3. 將 HTML 插入到響應中並回傳給用戶
4. SSR 模式下啟動前端框架 - <YellowText bold>vue-server-renderer</YellowText><br>
   (Vue、React、Svelte 都有處理 SSR 的工具)
5. SSR 渲染只會在進頁面時執行，之後就會以 SPA 模式運作

</v-clicks>

<div v-click>

[Ping CRM - SSR Demo](https://ssr-demo.inertiajs.com/)

</div>

---
layout: center
class: text-center
---

# TALL Stack

<div class="text-3xl">
<YellowText bold>T</YellowText>ailwind CSS + <YellowText bold>A</YellowText>lpine.js + <YellowText bold>L</YellowText>aravel + <YellowText bold>L</YellowText>ivewire
</div>

---
layout: center
class: text-center
---

# VILT Stack

<div class="text-3xl">
<YellowText bold>V</YellowText>ue.js  +  <YellowText bold>I</YellowText>nertia.js  +  <YellowText bold>L</YellowText>aravel  +  <YellowText bold>T</YellowText>ailwind CSS
</div>

---
layout: center
---

<div class="p-6 bg-white rounded shadow-indigo-600 mb-4">
  <img src="/images/jetstream-logo.svg" />
</div>

- **Livewire** or **Inertia**
- 會員登入/註冊
- E-mail 驗證
- 雙因素身分驗證
- 登入 Session 管理
- API token (Laravel Sanctum)
- 團隊功能

---

# Livewire vs Inertia.js

|                 | <strong class="!text-livewire text-xl">Livewire</strong> | <strong class="!text-inertia text-xl">Inertia.js</strong> |
| --------------- | -------------------------------------------------------- | --------------------------------------------------------- |
| **框架**        | Laravel                                                  | 支援 Inertia 的框架                                       |
| **視圖 (View)** | Blade、PHP、Alpine.js                                    | 前端框架 Vue、React...                                    |
| **SEO**         | <strong class="!text-green-400">易</strong>              | <strong class="!text-red-400">難</strong>                 |
| **總結**        | 用 PHP 寫出 JavaScript 的效果                    | 前後端框架的膠水                                          |

---
layout: center
class: text-center
---

# Blade <fa-solid-arrow-right class="inline-block w-6 h-6 text-indigo-300" /> <strong class="!text-[#fb70a9]">Livewire</strong>

<div class="my-8"></div>

# Vue.js <fa-solid-arrow-right class="inline-block w-6 h-6 text-indigo-300" /> <strong class="!text-[#9553e9]">Inertia.js</strong>

---

# 參考資料

- [Livewire 官網](https://laravel-livewire.com/)
- [Inertia.js 官網](https://inertiajs.com/)
- [Laravel Jetstream 官網](https://jetstream.laravel.com/)
- [TALL stack](https://tallstack.dev/)
- [VILT Stack](https://ejntaylor.com/vilt-stack-vue-inertia-laravel-tailwind/)
- [前端渲染的後端應用 - 用 Inertia.js 拉近 Laravel 和 Vue.js 的距離](https://events.laravel-dojo.com/events/8-php-也有-day-56)

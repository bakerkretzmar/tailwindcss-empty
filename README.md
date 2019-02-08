tailwindcss-empty
=================

[![tailwindcss-empty](https://img.shields.io/npm/v/tailwindcss-empty.svg?style=flat)](https://www.npmjs.com/package/tailwindcss-empty)

Dead simple Tailwind plugin that adds a variant for the [`:empty`](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) CSS pseudo-class.

Installation
------------

```bash
npm i tailwindcss-empty
```

Usage
-----

In your `tailwind.js`:

```js
  modules: {
    // The plugin only generates classes when you explicitly
    // register the 'empty' state variant for a module
    display: ['responsive', 'empty'],
    // ...
  },

  plugins: [
    require('tailwindcss-empty')(),
    // ...
  ]
```

In your HTML:

```html
<!-- This span will be displayed normally. -->
<span class="errors empty:hidden">Whoops!</span>

<!-- This one will be hidden. -->
<span class="errors empty:hidden"></span>
```

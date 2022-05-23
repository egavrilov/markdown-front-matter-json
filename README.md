## Markdown Front-matter to JS parser

The simplest *.md front-matter to JS object parser for Node

Takes input as a Node Buffer or String

```markdown
---
title: Hello
slug: home
---
<h1>Hello world!</h1>
```

and output it as a JS object:

```js
{
    data: {
        slug: "home",
        title: "Hello",
    },
    content: '<h1>Hello world!</h1>'
}
```

Installation

```bash
npm i md-front-matter
```
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
    frontmatter: {
        slug: "home",
        title: "Hello",
    },
    content: '<h1>Hello world!</h1>'
}
```
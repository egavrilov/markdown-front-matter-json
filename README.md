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

### Installation

```bash
npm i md-front-matter
```

### Usage

```js
import matter from 'md-front-matter';

const markdownContent = fs.readFileSync('./post.md', 'utf-8');
const markdownJSON = matter(markdownContent);
```

## Integration with NextJS

This package allows us to parse the frontmatter section and the content section from a content string.

Then we want to open up our index.js file and start importing the packages we will need.

```
import fs from 'fs';
import matter from 'md-front-matter';
import Image from 'next/image';
import Link from 'next/link';
```

Publishing:
`npm version patch`
`npm publish`
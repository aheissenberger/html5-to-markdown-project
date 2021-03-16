# Markado

Fast HTML to Markdown transformer with support for frontmatter which runs in the browser.

## Installation

**npm**

```sh
npm install markado
```

**Yarn**

```sh
yarn install markado
```

## Usage

**ES Modules / ES6**

```Javascript
import {html2markdown} from 'markado'

const html = '<h1>Hello World!</h1>'
const md = html2markdown(html)
process.stdout.write(md)
```

**UMD**

```Javascript
var {html2markdown} = require('markado')

var html = '<h1>Hello World!</h1>'
var md = html2markdown(html)
process.stdout.write(md)
```

## Options

Options can be passed as a second parameter:

```Javascript
const md = html2markdown(html, {removeElements:['head']})
```

| Option                 | Description                                                          | Values                      | Default                   |
| :--------------------- | :------------------------------------------------------------------- | :-------------------------- | :------------------------ |
| removeElements         | tag including children and conten is ignored                         | any tag, e.g. head, section | ['script','style','head'] |
| frontmatter [optional] | scrape values from tags and attributes and create a yaml frontmatter | {} [deactivated]            |

### frontmatter

```Javascript
const md = html2markdown(html, {frontmatter: {
    props: [source, title, description,lang],
    defaults: {
        source: 'https://www.website.test'
    }
}})
```

given the following website code:

```html
<html lang="en">
  <head>
    <title>Title | Website</title>
    <meta property="og:title" content="Title OG" />
    <meta name="twitter:title" content="Title Twitter" />
    <link rel="canonical" href="https://www.canonical.test" />
    <meta name="description" content="Description" />
  </head>
</html>
```

will result in

```
---
source: https://www.canonical.test
title: Title OG
description: Description
lang: en
---
```

**frontmatter:**

| Option              | Description                                                                  | Values                     | Default |
| :------------------ | :--------------------------------------------------------------------------- | :------------------------- | :------ |
| props               | the attributes used to create the frontmatter yaml                           | `string[]` - list of names | []      |
| defaults [optional] | default values for props. If not listed in `props`, the value is still used! |                            | {}      |

#### built in predefined parses for props

| property | parsed tags priority |
| --- | --- |
| lang | `html:lang` |
| title | `meta:og:title`, `meta:twitter:title`, `title`|
| description | `meta:og:description`, `meta:twitter:description`, `meta:description` |
| source | `link:rel:canonical` |
| `<any_name>` | `<meta name="<any_name>" content="<result>" />` |

### Roadmap

 - [ ] better support for nested markup - e.g. blockquote
 - [ ] api to extend render function
 - [ ] api to extend frontmatter parser
 - [ ] option to detect main content and strip unrelevant content blocks

### Contribution

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
1. Create your Feature Branch (git checkout -b feature/AmazingFeature)
1. Commit your Changes (git commit -m 'Add some AmazingFeature')
1. Push to the Branch (git push origin feature/AmazingFeature)
1. Open a Pull Request

### Built With

- [htmlparser2](https://github.com/fb55/htmlparser2)
- [microbundle](https://github.com/developit/microbundle)

### License

Distributed under the "bsd-2-clause" License. See [LICENSE.txt](LICENSE.txt) for more information.

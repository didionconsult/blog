---
title: "A Guide to Gatsby"
date: "2021-06-07"
description: "A concise reference guide to Gatsby"
tags: "Gatsby, reference"
---
----------------------------------

🎉 This is my `minimal` guide to using `Gatsby` as a blogging platform.  
This guide is based on this [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) from [Kyle Mathews](https://twitter.com/kylemathews) which I used for this blog.

When learning something new I write `guides` for `personal use`. They serve as my go-to reference.  They keep me from Googling repeatedly for answers.  So, I thought I would post them and share what has helped me in the past.

#### Plug-ins: (yours may be different 🤓)
------------------------------------------------------------------  
##### Gatsby-remark-prismjs
[gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/) - sets custom colors for your code blocks
- within your markdown files, the text you place inside backticks (```) is formatted according to your prism.js color/theme selections
- your default selections are located in your gatsby-config.js file

##### How to change the default prism.js color theme
- visit [prism.js](https://prismjs.com/plugins/inline-color/) and select your `theme`; i picked `tomorrow night`
- inside your gatsby-browser.js, import the following
```js
// Highlighting for code blocks
import "prismjs/themes/prism-tomorrow.css"
```
```js
// or select a different theme
import "prismjs/themes/prims-okaidia.css"
```

##### **H**ow to create a 🌈 custom color-theme for code blocks
  - create a `css` file using the `::selection` [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) to apply styles to elements which are highlighted 💡
  - or use this smart [theme generator](http://k88hudson.github.io/syntax-highlighting-theme-generator/www/) built by [k88hudson](https://github.com/k88hudson/syntax-highlighting-theme-generator)
  - then import the file into `gatsby-browser.js` as below
```js
// gatsby-browser.js
import "./src/prism-theme.css"
```

gatsby-plug-in-feed

##### Gatsby-source-filesystem
[gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)
    -  a plugin which creates `file nodes` from the files in your system.

gatsby-plugin-image    

##### Gatsby-plug-in-manifest
  - [gatsby-plug-in-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)

gatsby-remark-images
gatsby-remark-plug-in-linker-files
gatsby-remark-responsive-iframe
gatsby-remark-smartypants

##### Gatsby-transformer-remark
[gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) - a parser for the markdown files located inside the `content/blog folder`. it parses markdown into HTML for rendering using [remark](https://remark.js.org/). 


gatsby-plug-in-sharp  
gatsby-transformer-sharp   
gatsby-plugin-react-helmet  
gatsby-plugin-gatsby-cloud


note: added 2 spaces here after end of line

_____________________________________________________________

#### Gatsby Commands
| **Command**                 | **Use**                  |
|:--------------------------- | ------------------------:|
|gatsby build        |                     Builds project|
|gatsby develop            |    Starts development server|
|gatsby serve|Shows installed packages in current project|
|gatsby clean  |Wipe out the cache and public directories| 
|gatsby repl       |   creates a Node.js REPL (see below)|
----------------------------------------------------------


- Note: enter gatsby repl in your terminal and wait for the prompt, gatsby>

#### Gatsby REPL Commands
| **Command**                     | **Use**             |
|:--------------------------- |------------------------:|
|babelrc       |                                        |
|components       | Prints list of components in project|
|datapaths     |                                        |
|getNodes() |                prints a full list of nodes|
|nodes |                                                |
|pages |                                                |
|schema |                                               |
|siteConfig |                                           |
|staticQueries| an API that allows components to retrieve data via a GraphQL query|
----------------------------------------------------------


**babelrc**
```jsx
gatsby > babelrc
{
  stages: {
    develop: { plugins: [Array], presets: [Array], options: [Object] },
    'develop-html': { plugins: [Array], presets: [Array], options: [Object] },
    'build-html': { plugins: [Array], presets: [Array], options: [Object] },
    'build-javascript': { plugins: [Array], presets: [Array], options: [Object] }
  }
```

**components**
```jsx
gatsby > components
Map(5) {
  '/Users/amy/Desktop/-markdown-reference-master/src/templates/blog-post.js' => {
    componentPath: '/Users/amy/Desktop/-markdown-reference-master/src/templates/blog-post.js',
    componentChunkName: 'component---src-templates-blog-post-js',
    query: 'query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {\n' +
      '  site {\n' +
      '    siteMetadata {\n' +
      '      title\n' +
      '    }\n' +
      '  }\n' +
      '  markdownRemark(id: {eq: $id}) {\n' +
      '    id\n' +
      '    excerpt(pruneLength: 160)\n' +
      '    html\n' +
```

**datapaths**
undefined
```jsx

```
**nodes**
78,
    {
      internalComponentName: 
      path: 
      matchPath: 
      component: 
      componentChunkName: 
      isCreatedByStatefulCreatePages: 
      context: 
      pluginCreator___NODE: 
      pluginCreatorId: 
      children: 
      internal: 
      id: 
    }

**pages**
duplicate

**schema**
GraphQLSchema

**siteConfig**
lists the plug-ins utilized and duplicates what is on gatsby-config.js

**staticQueries**
prints a list of query keywords


#### Questions:
----------------------

##### What is a dangerouslySetInnerHTML
- React’s replacement for using `.innerHTML` in the `DOM`
- dangerous because it provides a source for a [Cross-site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) attacks


##### How to highlight a word in a sentence?
 1. data is `<mark style="background-color: rgba(255,228,225, .50)">not</mark>` fixed; note the default highlight color is yellow, here I changed it to a transparent rose color.
 2. use the backticks you would use to mark `inline-code` like so:
 ```jsx
`inline-code`
 ```

#### 🤔 Refreshers on key syntax:
------------------------------------

 ##### SSG vs. SSR
- Gatsby is a `Static Site Generator`
- static site generator is a software application that creates `HTML` pages from templates or `components` and a given content source
- Most static site generators accept `markdown`-formatted text files as a source.
- alternative to database driven cms's like wordpress, drupal; content stored in DB; server receives req; software retrieves data from DB, merges w/ template file; generates `HTML` page 
- [Create React App](https://github.com/facebook/create-react-app), [11ty] (https://www.11ty.dev/), [Next.js](https://nextjs.org/), [Jekyll](https://jekyllrb.com/) are SSG's (11ty & Jekyll do not need React)

##### slug
- A Slug is the unique identifying part of a web address, typically at the end of the `URL`.
- in Gatsby the `key: value` pair set up in the `frontmatter` aka header of the markdown file creates the `URL slug` for that page

##### frontmatter
- the text located between the two dashed lines in the header of your markdown file
```md
---
title: "A Rose in Brooklyn"
date: "2021-01-01"
description: "Here is why I wrote this tiny title."
---
```
- `frontmatter` is used to populate the metadata for site SEO

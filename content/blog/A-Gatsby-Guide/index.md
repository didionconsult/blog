---
title: "A Guide to Gatsby"
date: "2021-06-07"
description: "A concise reference guide to Gatsby plug-ins"
---
----------------------------------

🎉 This is my `minimal` guide to `Gatsby` plug-ins.  
I created a site using the [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) from [Kyle Mathews](https://twitter.com/kylemathews).  When referencing plug-ins in this post I am referencing the plug-ins available in the `gatsby-starter-blog`.  There are many more available in the [Starter Library](https://www.gatsbyjs.com/starters/?).

When learning something new I write `guides` for `personal use`. They serve as my go-to reference.  They keep me from Googling repeatedly for answers.   So, I thought I would post them here for reference.

#### Plug-ins: (yours may be different 🤓)
---------------------------------------------------------------

##### Code Blocks   
--------------------------------   
##### Gatsby-remark-prismjs  
- [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/) - sets custom colors for your code blocks  
- within your markdown files, the text you place inside backticks (```) is formatted according to your `prism.js` color/theme selections
- your default selections are located in your `gatsby-config.js` file

##### How to change the default prism.js color theme
- visit [prism.js](https://prismjs.com/plugins/inline-color/) and select your `theme`; i picked `tomorrow night`
- inside `gatsby-browser.js`, import the following
```JS
// Highlighting for code blocks
import "prismjs/themes/prism-tomorrow.css"
```
```JS
// or select a different theme
import "prismjs/themes/prims-okaidia.css"
```

##### How to create a 🌈 custom color-theme for code blocks
  - create a `css` file using the `::selection` [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) to apply styles to elements which are highlighted 💡
  ```css
  /* assign selections */
  code[class*="language-"]::selection
  ```
  ```css
  /* then target each selection by token */
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
  color: #af86fc;
}
  ```
  - or use this smart [theme generator](http://k88hudson.github.io/syntax-highlighting-theme-generator/www/) built by [k88hudson](https://github.com/k88hudson/syntax-highlighting-theme-generator)
  - then import the file into `gatsby-browser.js` as below
```js
// gatsby-browser.js
import "./src/prism-theme.css"
```




##### Files 📁
-------------------------------

##### Gatsby-source-filesystem  
- [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)
    -  a plugin which creates `file nodes` from the files in your system.

##### Gatsby-transformer-remark  
- [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) - a `parser` for the markdown files located inside the `content/blog folder`. it parses markdown into HTML for rendering using [remark](https://remark.js.org/)
- use [markdown-here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as a quick-reference for markdown syntax. 

##### Gatsby-remark-smartypants  
- [gatsby-remark-smartypants](https://www.gatsbyjs.com/plugins/gatsby-remark-smartypants/) - provides smart punctuation for markdown for the [typographically](https://www.typewolf.com/cheatsheet) inclined 
- uses the [retext-smarytpants](https://github.com/retextjs/retext-smartypants) plug-in
- provides smart quotes i.e. decides if a opening or closing quote is needed and adds a curly quote as opposed to straight.
- can convert two dashes to an [em dash](https://www.thepunctuationguide.com/em-dash.html) a hyphen-like character that can take the place of a comma or colon.
- can convert three dots ... to the `unicode` character for ellipses `(…)`
- can convert double backticks ```` into an opening double quote ``

##### Gatsby-remark-copy-linked-files  
- [gatsby-remark-copy-linked-files](https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files/?=Gatsby-remark-copy)  
- copies local files from markdown to the root or public directory
- the HTML page generated from the markdown file will point to root
- can set a custom `destinationDir` i.e. a specific path to override the default `contentHash/fileName.ext`



##### Images 📷  
-----------------------------      

##### Gatsby-plugin-image   
- [gatsby-plug-in-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=Gatsby-plug-in-image)       
produces images in multiple sizes and formats
- there are two image components, `Static Image` and `Gatsby Image`(for dynamic images perhaps sourced from a CMS)

##### Gatsby-remark-images    
- [gatsby-remark-images](https://www.gatsbyjs.com/plugins/gatsby-remark-images/?=Gatsby-plug-in)  
- Gatsby-remark-images is meant for `images` inserted in `markdown` files
- adds an elastic, dynamic container, `generates multiple sizes` and blurs placeholder images for `production` builds
- use the wrapperStyle option to add custom styles to the div wrapping the responsive image

##### Gatsby-plug-in-sharp 
- [gatsby-plug-in-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/?=Gatsby-plug-in-sharp)   
- a plug-in used by other plug-ins for image processing, re-sizing functions
- uses the [Sharp](https://github.com/lovell/sharp) image `node` module

##### Gatsby-transformer-sharp
- [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/?=Gatsby-tran) - creates `ImageSharp` nodes from the Sharp image node module above

##### Gatsby-remark-responsive-iframe  
- [Gatsby-remark-responsive-iframe](https://www.gatsbyjs.com/plugins/gatsby-remark-responsive-iframe/?=Gatsby-remark-respon)
- places i-frames in a responsive, elastic wrapper so they re-size proportionally 
- uses width and height values to calculate the aspect ratio of the object



##### Content 💻  
--------------------------------  

##### Gatsby-plug-in-manifest  
  - [gatsby-plug-in-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)
  - manages how your site appears when users add the site to their home screen on mobile browsers
  - provides a web manifest and icons for the phone
  - the web manifest is necessary to generate a [Progressive Web App (PWA)](https://en.wikipedia.org/wiki/Progressive_web_application)
  - gives the user the ability to "install" a website and use it as if it was a natively installed app. 
  - only [partial](https://caniuse.com/web-app-manifest) desktop browser support 

##### Gatsby-plug-in-feed     
[gatsby-plug-in-feed](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/?=gatsby-plug-in-feed) - creates an `RSS feed` or multiple feeds for the site; subscribers can use [Feedly](https://feedly.com/i/welcome) or RSS Feed Reader

##### Hosting  
----------------------------
##### Gatsby-plugin-gatsby-cloud     
- [gatsby-plug-in-gatsby-cloud](https://www.gatsbyjs.com/plugins/gatsby-plugin-gatsby-cloud/?=gatsby-plug-in-gatsby) 
- configures Headers and Redirects for Gatsby's edge hosting solution [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/)  
- adds a [special response header](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html), generates a `_headers.json` file and a `_redirects.json` file
- places them in the root i.e. public folder

##### React ⚛️ 
-------------------------------    
##### Gatsby-plugin-react-helmet    
- [React Helmet](https://github.com/nfl/react-helmet) sets the `title`, `description` and `meta` tags for the document `head` section
- helpful for site views and critical for SEO
- can throw errors when used with React hooks



____________________________________________________________

#### Gatsby Commands
| **Command**                 | **Use**                  |
|:--------------------------- | ------------------------:|
|gatsby build        |                     Builds project|
|gatsby clean  |Wipes out the cache and public directories|
|gatsby develop|Starts development server w/ hot re-loading|
|gatsby info           |displays env info about your site|
|gatsby new                     |create a new Gatsby site| 
|gatsby repl       |   Creates a Node.js REPL (see below)|
|gatsby serve|Shows installed packages in current project|
----------------------------------------------------------
```bash
// opens the site in your default browser
gatsby develop -open
```

- Note: enter gatsby repl in your terminal and wait for the prompt, `gatsby>`

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


#### 🤔 Questions I encountered:
----------------------

##### What is a dangerouslySetInnerHTML
- React’s replacement for using `.innerHTML` in the `DOM`
- dangerous because it provides a source for a [Cross-site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) attacks


##### How to highlight a word in a sentence?
 1. data is `<mark style="background-color: rgba(255,228,225, .50)">not</mark>` fixed; note the default highlight color is yellow, here I changed it to a transparent rose color.
 2. use the backticks you would use to mark `inline-code` like so:  
 

 ```md    
  inline-code
 ```


 ##### SSG     
- Gatsby is a `Static Site Generator`  
- a static site generator is a software application that creates `HTML` pages from `templates` or `components` and a given content source
- Most static site generators accept `markdown`formatted text files as a source.
- [Create React App](https://github.com/facebook/create-react-app)
- 11ty
- [Next.js](https://nextjs.org/)
- [Jekyll](https://jekyllrb.com/) are SSG's (note: 11ty & Jekyll do not need React)

##### slug  
How does Gatsby determine the URL slug for each blog entry?  
- in Gatsby the `key: value` pair set up in the `frontmatter` aka header of the markdown file creates the `URL slug` for that page

##### frontmatter  
What is frontmatter?  
- the text located between the two dashed lines in the header of your markdown file
```md
---
title: "A Rose in Brooklyn"
date: "2021-01-01"
description: "Here is why I wrote this tiny title."
---
```
- `frontmatter` is used to populate the metadata for site SEO



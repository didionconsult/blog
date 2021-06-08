### Gatsby Notes

## What is gatsby-remark-prismjs
- takes content in your md files surrounded by ``` backtacks and auto formats it via the settings you have installed for Prism.js

## What is gatsby-transformer-remark
- a parser for the md files in our content folder. it parses markdown into html for rendering. 

## What is gatsby-source-filesystem
-  the plugin creates File nodes from the files in our system.

## SSG
- Gatsby is a Static Site Generator
- static site generator is a software application that creates HTML pages from templates or components and a given content source
- Most static site generators accept Markdown-formatted text files as a source.
- alternative to database driven cms's like wordpress, drupal; content stored in DB; server receives req; software retrieves data from DB, merges w/ template file; generates html page 
- SSG's reduce latency from using DB
- create react app, 11ty, next.js, jekyll are SSG's (11ty & Jekyll don't need React)

## monorepo
- gatsby uses monorepo for its code

## slug
- A Slug is the unique identifying part of a web address, typically at the end of the URL.
- the key: value pair set up in the header of the markdown file creates the url slug for that page

## frontmatter
the text in md b/w the two dashed lines in the header of your md file. used to populate the metadata for the site

## dangerouslySetInnerHTML
- React’s replacement for using innerHTML in the browser DOM
- dangerous bc exposes site to XSS attack

FAQ's:
## metadata and Gatsby??

## how to highlight a word in a sentence?
 data is <mark style="background-color: rgba(255,228,225, .50)">not</mark> fixed

### Gatsby Commands
| Command                     | Use                      |
|:--------------------------- | ------------------------:|
|gatsby build        |                     Builds project|
|gatsby develop            |    Starts development server|
|gatsby serve|Shows installed packages in current project|
|gatsby clean  |Wipe out the cache and public directories| 
|gatsby repl       |   creates a Node.js REPL (see below)|


- Note: enter gatsby repl in your terminal and wait for the prompt, gatsby>

### Gatsby REPL Commands
| **Command**                     | **Use**                      |
|:--------------------------- |:------------------------:|
|babelrc       |                           |
|components        | Prints list of components in project|
|

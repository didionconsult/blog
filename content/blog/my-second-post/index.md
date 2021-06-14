---
title: NPM Commands
date: "2015-05-06T23:46:37.121Z"
description: "An NPM cheatsheet for quick reference 😊"
---
I have put together a short table of NPM commands to use as a quick reference guide.  These are the commands I found I used most often, perhaps forgot most often. I am a newish programmer so I have excluded more advanced commands. Send 📝 me any you feel are missing! 😊 

### NPM commands

| **Command**                 | **Use**                  |
|:--------------------------- | ------------------------:|
|npm i packageName            |Install                   |
|npm i packageName -D         |Shorthand -save -dev 1970 |
|npm init          |Generates a default package json file|
|npm init -y      | Same, y = yes, skips set-up questions|
|npm list   | Shows installed packages in current project|
|npm list -g   |        Lists globally installed packages|
|npm list -g --depth=0|Excludes dependencies in tree view| 
|npm outdated|     Lists outdated dependencies in project|
|npm run                      |     Lists scripts to run | 
|npm update packageName       |    Updates named package | 
|npm update all |Updates all packages in current project |                 
|npm un packageName  |Shorthand; Uninstalls named package|
|npm home packageName|Opens website of package in browser|
|npm view   | Lists all project dependencies w/ version #|
----------------------------------------------------------

🍓🍓🍓

### NPM Scripts
    note: a script must be set up in your package json to run these commands

| **Script command**          | **Use**                  |
|:--------------------------- | ------------------------:|
|npm start|Starts [http server](https://github.com/http-party/http-server)|
|Note: control + c            |         Stops http server|
|npm test                     |       Runs test w/ Mocha |
----------------------------------------------------------


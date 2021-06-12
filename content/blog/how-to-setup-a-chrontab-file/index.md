---
title: "How to Set-up a Chrontab file"
date: "2021-06-10"
description: "A short tutorial on creating cronjobs"
---

#### Setting up a cron job ⏰
------------------------------------------------
- open your terminal
- navigate to home using `cd~/` or `cd`
- this is `Users/Amy` for me
- type `crontab -e`
note: to check and see if you have a crontab file type `crontab -l`, navigate to that crontab file if you do, if you do not continue from step four
- [Vi](https://docs.cs.cf.ac.uk/notes/the-vi-editor/) is the default text editor for cron, if your unfamiliar with the [vi](http://commandlinemac.blogspot.com/2008/12/vim.html) editor use the simple commands below or 
- type or paste the crontab file 
- press `esc` then type `:wq` to save and exit


- use the [Crontab Generator](https://crontab-generator.org/)

Vi operates by shifting to different `modes`, for example:
- to begin **writing text** after opening the file hit `esc` and then `i`.
- to begin **deleting text** type `x`, then press the `delete` key
- to **save and exit** press `esc` then :wq
- to **exit without saving** press `esc` then :q!
 For each task you must shift to the correct mode before doing so.

##### Vi Commands
---------------------------------------------------------------------------
| **Command**          | **Use**                                      |
|:--------------------------- | -----------------------------------------:|
| i                                   | insert mode; insert characters|
| x          |delete mode; deletes one character at a time|
| dw |                                      deletes word after cursor|
| Esc | exit insert mode; stop writing text to the file to prepare to save and exit|
| :wq                                             | write to file and quit|
| :q!                    | quit without saving changes and exit|
-------------------------------------------------------------------------

Resources:  
[Cronitor](https://crontab.guru/every-5-minutes)    
[CoreNominal, How to Setup a Crontab file](https://corenominal.org/2016/05/12/howto-setup-a-crontab-file/)
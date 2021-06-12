---
title: "Using Bash: Commands, PATH and Alias"
date: "2021-06-09"
description: "Common commands, file navigation and PATH variables"
---

#### Bash Scripting 

Here is a quick reference table for common commands.  Commands can be used in both a `bash` or `zsh` Mac OS terminal. If a file is prefixed with `./` this means we are referencing a file in the current directory.



##### Bash Commands
---------------------------------------------------------------------------------
| **Command**                 | **Use**                                      |
|:--------------------------- | -----------------------------------------------:|
| cd <file-name>| to change directory; navigate into a folder**|
| cd .. | change directory one level up; navigate back to prev. file/folder|
| cd                                     | return to home directory/folder|
| cd -                                               | change to last directory|
| pwd      |to find out where you are; print working directory|
| ls               |prints list of files in the current directory/folder|
| ls-a                  | prints file list; includes hidden files/folders|
| ls -la            |shows dot files w/ permission settings for each file|
| mkdir <folder-name>            	                 |creates folder|
| touch  <file-name>                                         |    creates file|
| rm <file-name>                                               |  deletes file*|
| rm - r  <folder-name>                             | deletes directory |
| cp [old] [new]                               | copy one file to another |
| mv <file.txt folder-name/>               | moves file into folder|
| open <file-name>            | opens file in default application|
| clear                                                            | Clears terminal|
| app -version  |                | Logs version # of app to terminal| 
| cal                                          | 🍓     prints a small calendar|
------------------------------------------------------------------------- 
- *Note: for scripts that perform file actions you must cd into the file first then run your command
- **Note: the names directory and folder are inter-changeble
- / is your root directory/folder

#### Tilde
- The shell interprets the character `~` (tilde) at the start of a path to mean “the current user’s home directory”. For example, if Nia's home directory is `/Users/nia`, then `~/data` is equivalent to `/Users/nia/data`.
  
#### Setting up a .bash_profile (~/.zshrc for zsh) 
-----------------------------------------
1. Open new terminal
2. Enter `ls -a`
3. This prints a list of files in your home folder; look for a `.bash_profile` file; if one does not exist we will create one next.
4. to create the file enter `touch .bash_profile`
5. navigate into your new profile; type `nano ~/.bash_profile`
5. to add an `alias` or update your `PATH` see below.

#### Adding an alias to .bash_profile
-------------------------------
1. Open a new terminal
2. navigate into your `bash_profile`; type `nano ~/.bash_profile`
3. in the nano editor add an `alias` type `alias command='original-command'`  
- Examples:
```bash
alias pip='pip3'
alias c='clear'
alias commit='com'
```

[blondiebytes](https://www.youtube.com/channel/UC4DwZ2VXM2KWtzHjVk9M_xg) has a great video [tutorial](https://youtu.be/Ap5rfq93AY4) for visual learners.


#### PATH  
------------------------------
Files read by a new shell upon opening, listed in order:
- `/etc/profile` (exe automatically at login)
- `.bash_profile`
- `~.bash_login`
- `~.profile`
- `~/.bashrc`



##### Advanced Commands
---------------------------------------------------

| **Command**                 | **Use**                                      |
|:--------------------------- | -----------------------------------------------:|
| repl       |                      creates a Node.js REPL (see below)|
| grep - i | searches in files for text that matches a pattern; i is case insensitive|
| find | finds files with specific properties that match pattens|
|  *              | matches zero or more characters in a filename|
| ?                         | matches a single character in a filename|
| history                                     | displays recent commands|
| echo $HOME |                 displays path of home directory|
| echo $PATH |                                      displays current path|
| nano .bash_profile |navigate into nano; open ./bash_profile|
| source .bash_profile |                    sets new alias for profile|
| sort <file.txt>|  reads file; prints lines in alphabetical order|
| #!                      | shebang prefix; makes file an executable|
| bash <file-name>            | runs the commands saved in a file|
| which bash | prints where the bash interpreter is located prior to running a script | 
-------------------------------------------------------------------------------

Example script file:
```bash
#!/usr/bin/env bash
#comments begin with #
# first line is sheBang, makes file executable

echo Hello world! # => Hello world!
```

Resources   
[Bash Hackers Wiki](https://wiki.bash-hackers.org/)  



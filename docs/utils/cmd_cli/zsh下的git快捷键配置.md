# :green_book: zsh下的git快捷键配置
## :paperclip: 查看git某条命令的简写方式
```zsh
cat ~/.oh-my-zsh/plugins/git/git.plugin.zsh | grep status 

alias gsb='git status -sb'
alias gss='git status -s'
alias gst='git status'
```
## :paperclip: git add 
```zsh
alias ga='git add'
alias gaa='git add --all'
alias gapa='git add --patch'
alias gau='git add --update'
alias gav='git add --verbose'
```
## :paperclip: git commit
```zsh
alias gc='git commit -v'
alias gc!='git commit -v --amend'
alias gcn!='git commit -v --no-edit --amend'
alias gca='git commit -v -a'
alias gca!='git commit -v -a --amend'
alias gcan!='git commit -v -a --no-edit --amend'
alias gcans!='git commit -v -a -s --no-edit --amend'
alias gcam='git commit -a -m'
alias gcsm='git commit -s -m'
alias gcmsg='git commit -m'
alias gcs='git commit -S'
```
## :paperclip: git merge
```zsh
alias gbnm='git branch --no-merged'
alias gm='git merge'
alias gmom='git merge origin/$(git_main_branch)'
alias gmt='git mergetool --no-prompt'
alias gmtvim='git mergetool --no-prompt --tool=vimdiff'
alias gmum='git merge upstream/$(git_main_branch)'
alias gma='git merge --abort'
```
## :paperclip: git pull
```zsh
alias ggpull='git pull origin "$(git_current_branch)"'
alias gl='git pull'
alias gup='git pull --rebase'
alias gupv='git pull --rebase -v'
alias gupa='git pull --rebase --autostash'
alias gupav='git pull --rebase --autostash -v'
alias glum='git pull upstream $(git_main_branch)'
```
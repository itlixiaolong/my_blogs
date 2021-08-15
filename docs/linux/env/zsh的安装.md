# :open_book: zsh的安装


## :running_woman:1.首先安装nvm
>命令行运行
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

```
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
[传送门](https://github.com/nvm-sh/nvm/blob/master/README.md)

## :running_woman:2.首先安装node
>命令行运行
```sh 
Example:
  nvm install 8.0.0                     Install a specific version number
  nvm use 8.0                           Use the latest available 8.0.x release
  nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
  nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell
```
命令详情: 终端运行`nvm`

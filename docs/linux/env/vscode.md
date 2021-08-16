# :green_book: code-server的安装

## :paintbrush:1.首先安装nvm
>命令行运行
```sh
curl -fsSL https://code-server.dev/install.sh | sh -s -- --dry-run

```
[传送门](https://github.com/cdr/code-server)

## :paintbrush:2.安装完成后,显示
```sh
➜  ~ curl -fsSL https://code-server.dev/install.sh | sh -s -- --dry-run

CentOS Linux 8 (Core)
Installing v3.11.1 of the amd64 rpm package from GitHub.

+ mkdir -p ~/.cache/code-server
+ curl -#fL -o ~/.cache/code-server/code-server-3.11.1-amd64.rpm.incomplete -C - https://github.com/cdr/code-server/releases/download/v3.11.1/code-server-3.11.1-amd64.rpm
+ mv ~/.cache/code-server/code-server-3.11.1-amd64.rpm.incomplete ~/.cache/code-server/code-server-3.11.1-amd64.rpm
+ rpm -i ~/.cache/code-server/code-server-3.11.1-amd64.rpm

rpm package has been installed.

To have systemd start code-server now and restart on boot:
  sudo systemctl enable --now code-server@$USER
Or, if you don't want/need a background service you can run:
  code-server
```
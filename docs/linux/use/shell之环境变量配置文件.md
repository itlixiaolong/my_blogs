# :green_book: shell之环境变量配置文件
## :paperclip: 1.配置文件的存放地址
- `/etc/profile`

- `/etc/profile.d/` 目录

- `/etc/bashrc`

- `~/.bash_profile`
 
- `~/.bashrc`

/etc开头的配置对所有用户生效

~/开头的配置只对当前用户生效

## :paperclip: 2.配置文件的加载顺序:
1.当使用 [su - 用户名] 登录时,配置文件的加载顺序如下
```sh
/etc/profile

~/.bash_profile

~/.bashrc

 /etc/bashrc
```
1.当使用[ su  用户名 ]登录时,配置文件的加载顺序如下

注:==此种登录方式配置文件会加载不全==
```sh
~/.bashrc

 /etc/bashrc
```

## :paperclip: 3.PATH环境变量量以及常⽤用快捷键 
- `echo $PATH`查看当前环境变量量
- `export PATH=$PATH:/home/ubuntu/` 临时设置环境变量量，当前会话有效
- `~/.bashrc`⽂文件最末添加命令设置环境变量量，然后重启shell，永久有效 
- 对于不不常⽤用的命令，⽬目录+命令来执⾏
- tab可以补全命令
- `whereis` 查找命令所在⽬目录
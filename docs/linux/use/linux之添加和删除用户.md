# :green_book: linux之添加和删除用户

## :paintbrush: 用户 
>Linux系统是⼀一个多⽤用户多任务的分时操作系统，任何⼀一个要使⽤用系统资源的⽤用户， 都必须⾸首先向系统管理理员申请⼀一个账号，然后以这个账号的身份进⼊入系统。

##### Linux⽤用户分三⼤大类: 
- root⽤用户:超级⽤用户，可以⽤用来登录，操作系统任何⽂文件和命令，拥有最⾼高权
限
- 虚拟⽤用户:不不具有登录能⼒，系统本身拥有，不不是后来添加的，但是系统运⾏行行 不不可缺的
- 普通⽤用户:有登录能⼒，权限受到限制

##### 添加⽤用户时候，系统会⾃自动

- 在/etc/passwd⽂文件添加⼀一⾏行行⽤用户记录
- 在/home⽬目录下创建新⽤用户⽬目录
```bash
# 添加一个用户lixiaolong,并指定用户数据在/home/lixiaolong
$ sudo useradd -d /home/lixiaolong -m lixiaolong
# 给新增用户设置一个密码
$ sudo passwd mengning
# 查看当前的用户
$ ls /home/
# 删除一个用户
$ sudo userdel -r mengning
# 查看当前的登录用户
whoami
# 查看当前登录用户所属的组
groups
```
## :paintbrush: 用户组
- 每个⽤户都有⼀个⽤户组，系统可以对⼀个⽤户组中的所有⽤户进⾏
集中管理。不同Linux系统对⽤户组的规定有所不同，如Linux下的⽤
户属于与它同名的⽤户组，这个⽤户组在创建⽤户时同时创建。

- ⽤户组的管理涉及⽤户组的添加groupadd、删除groupdel和修改
groupmod。组的增加、删除和修改实际上就是对/etc/group⽂件的更
新

- 与⽤户和⽤户组相关的信息都存放在⼀些系统⽂件中，这些⽂件包括/
etc/passwd(存放用户信息), /etc/shadow(存放加密的口令[用户密码]), /etc/group(存放用户的组信息)等。

- 每个⽤户都在/etc/passwd⽂件中有⼀个对应的记录⾏——⽤户名:⼝
令:⽤户标识号:组标识号:注释性描述:主⽬录:登录Shell
-  加密后的⽤户⼝令字存放到/etc/shadow⽂件

- “组标识号”字段记录的是⽤户所属的⽤户组，对应着/etc/group⽂件中
的⼀条记录。

##### 修改所属的⽤户或组
>修改文件的所属用户
```bash
chown username filename
```
>修改文件所属的组
```bash
chgrp groupname filename
```
>修好文件所属的用户和组
```bash
chown username.groupname filename
```
>chown 和 chgrp 都有⼀个 -R 选项，该选项可以⽤来告诉它们递归地
将所属权和组改变应⽤到整个⽬录树中

```bash
chown -R ubuntu /home/ubuntu
```
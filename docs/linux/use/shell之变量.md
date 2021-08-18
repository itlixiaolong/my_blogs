# :green_book: shell之变量

## :paperclip: shell脚本编写规范
1.一条命令只做一件事

2.为了组合命令和多次执行,使用脚本文件来保存需要执行的命令

3.赋予该文件的执行权限(`chmod u+rx fileName`)

## :paperclip: shell脚本的运行

1.在bash下开启一个子进程运行代码(bash运行,执行完不影响当前目录)

- `.bash ./fileName.sh`  (不需要为文件赋值可执行权限也可以运行)

- `./fileName.sh` (必须为文件赋值可执行权限才可以运行)

2.在当前进程运行代码 (source运行,都不需要为文件赋予执行权限,执行完可能不会影响当前目录)

- `source ./fileName.sh`

- `. fileName.sh`


## :paperclip: shell脚本编写的变量

##### 1.变量的命名
- 字母数字下划线,不能用数字开头
- 见名知义

##### 2.变量的定义
```sh
test1=124 //注意=左右不能有空格

```
> 为变量赋值的过程称为变量替换
 1. 变量名=变量值
 ```sh
 test=123
 ```
 2. 使用let为变量赋值
 ```sh
 let test=123+10
 ```
 3. 将命令赋值给变量
 ```sh
 l=ls
 ```
 4. 将命令结果赋值给变量,使用$()或者``包裹表达式
 
 ```sh
 ls_result=$(ls /etc)
 
 ls_result=`ls /etc`
 
 ```
 5. 变量值中有空格等特殊字符可以包裹着在""或者''中
 ```sh
[root@VM_0_15_centos ~]# test=hello world
-bash: world: command not found
[root@VM_0_15_centos ~]# echo $test

[root@VM_0_15_centos ~]# test2='hello world'
[root@VM_0_15_centos ~]# echo $test2 
hello world

 ```
#### 3.变量的使用
```sh
echo $test1 //注意使用时变量要加$
```
#### 4.内置变量
- 以大写命名
 
##### 1.环境变量---所有shell共享的变量,可以使用env 和 set查看所有变量,使用echo $[变量名] 查看单个变量
```sh
env |more

MANPATH=/root/.nvm/versions/node/v13.7.0/share/man:/usr/local/share/man:/usr/share/man
NVM_IOJS_ORG_VERSION_LISTING=https://iojs.org/dist/index.tab
XDG_SESSION_ID=14679
HOSTNAME=VM_0_15_centos
TERM=vt100
SHELL=/bin/bash
HISTSIZE=3000
SSH_CLIENT=119.28.22.215 36030 22
NVM_PATH=/root/.nvm/versions/node/v13.7.0/lib/node
SSH_TTY=/dev/pts/1
NVM_DIR=/root/.nvm
USER=root
...
```
> 环境变量中比较重要的两个变量
- 1.PATH ---控制着linux寻找命令的地址
```sh
echo $PATH

/root/.nvm/versions/node/v13.7.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin

```
想要让某条命令全局可用
```sh
//比如我们在/root下自定义1.sh,我们想在任意位置使用1.sh而不是bash /root/1.sh 我们可以这样

PATH=$PATH:/root
    
```
注意:==修改PATH只在当前shell和其子shell生效,想让所有新开的shell生效,需要修高.bashrc文件,将修改保存,并运行 source .bashrc==

- 2.USER和UID---存储着当前用户和用户id
```sh
[root@VM_0_15_centos ~]#echo $USER
root
[root@VM_0_15_centos ~]#echo $UID
0
```
- 3.PS1 ---控制着shell的样式,可以自定义shell的输出信息和颜色

```sh
echo $PS1

'[\u@\h \W]\$ ' //意思就是：[当前用户的账号名称@主机名的第一个名字 工作目录的最后一层目录名]#
```

> ###### 1.PS1的常用参数以及含义:

字符 |含义
---|---
\d |代表日期，格式为weekday month date，例如："Mon Aug 1"
\H | 完整的主机名称
\h | 仅取主机名中的第一个名字
t  | 显示时间为24小时格式，如：HH：MM：SS
\T | 显示时间为12小时格式
\A | 显示时间为24小时格式：HH：MM
\u | 当前用户的账号名称
\v | BASH的版本信息
\w | 完整的工作目录名称
\W | 利用basename取得工作目录名称，只显示最后一个目录名
\# | 下达的第几个命令
\$ | 提示字符，如果是root用户，提示符为 # ，普通用户则为 $

> ###### 2.颜色设置参数

在PS1中设置字符颜色的格式为：
```sh
\e[F;Bm........\e[0m
```
其中“F“为字体颜色，编号为30-37
“B”为背景颜色，编号为40-47,
\e[0m作为颜色设定的结束。

颜色对照表：

　F | B|颜色
---|---|---
30 | 40 | 黑色
31 | 41 |红色
32 | 42 |绿色
33 | 43 |黄色
34 | 44 |蓝色
35 | 45 |紫红色
36 | 46 |青蓝色
37 | 47 |白色
只需将对应数字套入设置格式中即可。比如要设置命令行的格式为
```sh
绿字黑底(\e[32;40m)，显示当前用户的账号名称(\u)、主机的第一个名字(\h)、完整的当前工作目录名称(\w)、24小时格式时间(\t)，
```
可以直接在命令行键入如下命令：
```sh
PS1='[\[\e[32;40m\]\u@\h \w \t]$ \[\e[0m\]'
```
经过多次测试后,最终确定了一个适合我自己的格式:

```sh
PS1="\[\e[37;40m\][\[\e[32;40m\]\u\[\e[37;40m\]@\h \[\e[36;40m\]\w\[\e[0m\]]\\$ "
```
> ###### 3.修改.bashrc文件,永久保存命令行样式.

　　上面的设置的作用域只有当前终端的登陆有效，关闭终端或退出登录即刻失效。要想永久性的保存设置，需要修改.bashrc配置文件。

键入命令：
```sh
cd /root
ls -a　　
<!--找到.bashrc-->
vim .bashrc
<!--在末尾加入-->
PS1="\[\e[37;40m\][\[\e[32;40m\]\u\[\e[37;40m\]@\h \[\e[36;40m\]\w\[\e[0m\]]\\$ "
<!--保存退出-->
source .bashrc
```
##### 2.预定义变量
- 1.$? ---存储上次命令运行的结果,是否出错,值为0|>0,0代表没有错误,非0代表有错,在shell编程中很有用
```sh
[root@VM_0_15_centos ~]#ls /root
.....
[root@VM_0_15_centos ~]#echo $?
0
[root@VM_0_15_centos ~]#ls /xx
ls: cannot access /xx: No such file or directory
[root@VM_0_15_centos ~]#echo $?
2
```
- 1.$0 ---存储当前进程的名称
```sh
[root@VM_0_15_centos ~]#echo $0
-bash
```
- 1.$$ ---存储当前进程的pid
```sh
[root@VM_0_15_centos ~]#echo $$
30289

```
##### 2.位置变量
- 存储执行脚本命令时传入的参数,以$1,$2,$3,...,${10},...${n}

- 获取传入参数的个数 $#
```sh
//1.sh

#!/bin/bash
#demo
echo $1
echo $2

//bash
./1.sh 1 2
//1
//2
//此时如果执行1.sh 1,只有一个参数这时程序可能会出错
重新修改1.sh
// 1.sh new
#!/bin/bash
#demo
pos1=$1
pos2=${2-_} //如果第二个参数不传我们就使用_作为默认值

```
## :paperclip: shell脚本中的数组
#### 1.数组的定义
```sh
ips=(10.0.0.1 10.0.0.2 10.0.0.3)
```
#### 2.显示数组中所有的元素 @或者*
```sh
[root@VM_0_15_centos ~]# echo ${ips[@]}
10.0.0.1 10.0.0.2 10.0.0.3

[root@VM_0_15_centos ~]# echo ${ips[*]}
10.0.0.1 10.0.0.2 10.0.0.3

```
#### 3.显示数组中某一个元素
```sh
echo ${ips[index]}
```
#### 4.显示数组的长度
```sh
echo ${#ips[@]}
echo ${#ips[*]}
```
### shell中的转义和引用
> 特殊字符

- 一个字符不仅有字面意义,还有元意

符号|意义
---|---
# | 注释
; | 分号(连接两条命令)
\ | 转义符号
"和'| 引号
### shell中的运算符
#### 1.赋值运算符
- =赋值运算符,用于算数和字符串赋值
- 使用unset 取消变量的赋值
- =还可以作为测试操作符

#### 2.算数运算符
> 基本运算符

运算符|含义
---|---
=|加法
-|减法
*|乘法
/|除法
**|乘方
%|取余
-使用expr进行运算(只支持整数的运算)
```sh
test=`expr 4+5`
echo $test
//9
```

#### 3.数字常量
> 数字常量的使用方法
- let 变量名=变量值
- 变量值使用以0开头的八进制
- 变量值使用以0x开头的十六进制
```sh
a=2
let a++
let a+=2
let a=a+2
```

#### 4.双圆括号
> 双圆括号是let命令的简写
- ((a=10))
- ((a++))
- echo ((10+20))
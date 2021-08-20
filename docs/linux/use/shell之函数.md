# :green_book: shell之函数

# shell函数分为自定义函数和系统函数
> 函数的定义

函数是包含着重复命令的集合
## :paperclip: 1.自定义函数
- 函数的定义
```sh
function fun_name(){
    命令
}

//其中function关键字可以省略

```
-如果不想函数内的变量影响函数外,可以在变量名前加上local
```sh
 cdls () {
     loacl result=cd /var //result只在函数内有效
 }
```
-函数参数的获取 $1 $2 ... $n
- 函数的执行
```sh
fun_name
```
- 实例
```sh
checkPid () {

local i

for i in $*; do

    [ -d "/proc/$i" ] && return 0
    
done

return 1
    
}
```
## :paperclip: 2.系统函数
- 系统自建了函数库,可以在脚本中引用,位置在 `/etc/init.d/functions`可使用 
```sh
source /etc/init.d/functions 或者 . /etc/init.d/functions
```
导入使用
- 自建函数库 使用source 导入函数
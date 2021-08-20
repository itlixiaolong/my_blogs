# :green_book: shell之循环

# for循环和while循环
## :paperclip: 1.for循环
```sh
for 参数 in 列表
do 执行的命令
done 封闭这个循环

<!--C语言风格的for循环-->
for((变量初始值;循环判断条件;变量变化))
do 执行命令
done 封闭这个循环
```
> 循环的列表产生的方式
- 使用$()或者``方式运行命令,将命令的结果作为列表使用
- 使用{变量1 变量2 ...}列表中也可以是多个变量,每个变量用空格分隔
- 对文本处理,要使用文本查看命令取出文本内容(默认逐行处理,如果文本中出现空格会被当做多行处理)

```sh
//将当前目录下下的所有*.txt文件改为*.tc
 for i in `ls *.txt`
> do 
> mv $i `basename $i .txt`.tc
> done

//将当前目录下下的所有app.jst的文件内容逐行输出
 for i in `cat app.js`
> do 
> echo $i
> done

for ((i=0;i<=10;i++))
> do 
> echo $i
> done
```
## :paperclip: 2.while循环
```sh
while test 测试是否成立
do
  命令
done

//例子
aa=1
while [ $aa -lt 10 ]; do ((aa++)); echo $aa; done
```
## :paperclip: 3.until循环
until循环与while循环相反,循环测试为假时,执行循环,为真时循环停止
```sh
//例子
aa=10
while [ $aa -lt 1]; do ((aa--)); echo $aa; done
```
## :paperclip: 4.需求实例
1.获取用户调用脚本时时的参数,如果用户输入了help参数,输出help help
```sh
for pos in $*

do
   if [ $pos = help ]
       then
           echo $pos $pos;
   fi
done

//使用while实现相同的功能

while [ $# -ge 1 ]
do
        if [ $1 = help ]; then
                echo $1 $1
        fi
        shift //将第一个参数删除掉和js中的shift类似
done
```
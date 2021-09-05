# :green_book: linux基本命令操作

## :paperclip: 1.grep "some string" file

<1> .grep命令在每个文件中搜索模式。它还会寻找由换行符分隔的模式，并且grep打印与模式匹配的每一行。

```
grep "react" index.js //在index.js中查找react字符串
grep -i "React" index.js //在index.js中查找react字符串，忽略大小写

```
<2>.统计文件或者文本中包含匹配字符串的行数 -c
```
grep -c "react" index.js //在index.js中查找react字符串出现的行数

```
<3>.查找文件里头内容不是vhost的字符
```
grep -v "react" index.js //在index.js中查找不是react的字符

```
<4>.在多级目录中对文本进行递归搜索
```
grep vue . -r -n  //在当前目录下搜索包含vue的文件

```
<5>.在nginx.conf下查找mox字符出现的后4行
```
grep -A 4 mox nginx.conf 
grep -A 4 'vue' main.js 

```
<6>.在nginx.conf下查找mox字符出现的前4行
```
grep -B 4 mox nginx.conf  

```
<7>.在nginx.conf下查找php字符出现的前后4行
```
grep -C 4 mox nginx.conf 

```
## :paperclip: 2. cat
cat命令具有与文本文件有关的三个相关功能：

- 显示它们
- 合并副本
- 创造新的文件

```
cat index.js //读取index.js中的内容
cat index.js > test.js //把index.js的内容复制到test.js中
```
## :paperclip: 3. echo
echo用于向终端输出文本
```
echo "test text"

```
## :paperclip: 3. touch
touch用于创建新的空文件
```
touch text.js

```
### 以下是cat和touch之间的主要区别：

- cat 用于创建包含内容的文件。
- touch 创建一个没有任何内容或空文件的文件。请记住，使用touch命令创建的文件为空。当用户在创建文件时没有要存储的数据时，此命令很有用。


## :paperclip: 4. tail someFile

tail命令读取文件并输出文件的最后部分（尾巴）

```
tail text.js

```
## :paperclip: 5. find path -name filename

使用find命令可以快速查找文件或目录。当您正在处理包含数百个文件和多个目录的大型项目时，此功能非常有用
```
find . -name text.js //在当前目录下查找text.js
find . -name "*.js" //在当前目录下查找所有的js文件

```
## :paperclip: 6. mv somefile /to/some/other/path
mv命令将文件或目录从一个位置移动到另一个位置。mv命令支持移动单个文件，多个文件和目录

```
mv index.js ../utils  //把当前目录下的index.js移动到上一级的utils目录下
```

## :paperclip: 7. ln [-s] 真正要打开的文件地址 存放快捷方式的地址

```
<!--为/etc/hosts文件创建一个软链接到~/hosts目录下,这时执行cd ~/hosts实际就会打开 cd /etc/hosts-->
ln -s /etc/hosts ~/hosts 
```
## :paperclip: 8. ls [-a|d|l]  要查看目录
- -a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)
- -d ：仅列出目录本身，而不是列出目录内的文件数据(常用)
- -l ：长数据串列出，包含文件的属性与权限等等数据；(常用)
- -h ：文件大小达到M级别后,以M为单位进行显示
- -r : 逆序显示
- -t : 按时间顺序显示


```
<!--查看home目录下的所有文件-->
ls -a ~ 
<!--查看home目录下的所有文件,包含文件的属性与权限等等数据-->
ls -l ~  
<!--查看home目录下的所有文件只包括文件夹-->
ls -d ~  
<!--也可以组合使用-->
ls -al ~  
```

## :paperclip: 9. pwd [-P]  显示目前所在的目录
- -P ：显示出确实的路径，而非使用连结 (link) 路径


```
<!--单纯显示出目前的工作目录-->
[root@www ~]# pwd
/root   
<!--实例显示出实际的工作目录，而非连结档本身的目录名而已-->
[root@www ~]# cd /var/mail   <==注意，/var/mail是一个连结档
[root@www mail]# pwd
/var/mail         <==列出目前的工作目录
[root@www mail]# pwd -P
/var/spool/mail   <==怎么回事？有没有加 -P 差很多～
[root@www mail]# ls -ld /var/mail
lrwxrwxrwx 1 root root 10 Sep  4 17:54 /var/mail -> spool/mail
<!--看到这里应该知道为啥了吧？因为 /var/mail 是连结档，连结到 /var/spool/mail -->
<!--所以，加上 pwd -P 的选项后，会不以连结档的数据显示，而是显示正确的完整路径啊！ -->

```
## :paperclip:10.获取某个目录下文件的个数
- 如果只是想得到当前目录下（不包括子目录）的相关文件时用
```
ls -l | grep "^-" | wc -l 
```
 或者
 ```
find ./ -maxdepth 1 -type f | wc -l  
```
其中-maxdepth 1用于指定一层

- 如果想得到当前目录下，包括子目录中的相关文件时用
```
find ./ -type f | wc -l

```
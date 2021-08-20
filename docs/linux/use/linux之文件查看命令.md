# :green_book: linux之文件查看命令
## :paperclip: 1.cat 将文件内容输出到终端,适用于文件内容不多的情况
```
cat 1.txt

```
## :paperclip: 2.head [-n] 要查看的文件地址 n为从头部起查看的行数

将文件内容的前10行输出到终端,适用于文件内容较多的情况
```
head 1.txt

```
## :paperclip: 3.tail [-n] 要查看的文件地址  n为从尾部起查看的行数
 将文件内容的后10行输出到终端,适用于文件内容较多的情况,可以添加 -f 参数,同步更新文件的变化,查看网络日志时比较有用
```
tail -f 1.txt

```
## :paperclip: 4.wc [-l] 要统计的文件 统计文件内容信息 
- -l 表示统计文件的行数
```
wc -l 1.txt

```
## :paperclip: 5.more 
[传送门]:(https://www.cnblogs.com/aijianshi/p/5750911.html)

## :paperclip:  6.less 
[传送门]:(https://www.cnblogs.com/aijianshi/p/5750911.html)
# :green_book: linux之文件查找命令

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220114115934.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220114143382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220113840530.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020022011405441.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

## :paintbrush: 语法: find [路径] [选项] [操作]
> 选项

参数|意义|例子|---|---|
---|---|---|---|---
-name |  按文件名查找| find /etc -name '*.conf'|
-iname |  按文件名查找,忽略大小写| find /etc -name '*.conf'
-user   |按文件属主进行查询|find . -user root
-group  |按文件属组进行查询|find . -group root
-type| 按照文件类型查找| find . -type [下面的文件类型]
--|f|文件|find . -type f |查找当前目录下所有的文件
--|d|目录
--|c|字符设备文件
--|b|块设备文件
--|l|链接文件
--|p|管道文件
-size| 按照文件大小查找| find . -size [n]单位| c-字节 k-kb m-兆
--|-n|大小小于n的文件| find /etc -size -1000c|查找etc下文件大小小于1000字节的文件
--|+n|大小大于n的文件| find /etc -size +1m|查找etc下文件大小大于1M的文件
-perm  | 按文件权限查找|find . -perm 644
-prune | 排除某些查找目录|find . -path ./test -prune -o -type f|查找当前目录,但是排除test目录之后所有的文件
mtime  |按文件修改时间进行查询(单位是天)|find /etc -mtime [n]|
--|-n|n天以内修改的文件| find /etc -mtime -2 -name '*.conf'|查找etc目录下2天以内修改的,并且以conf结尾的文件
--|+n|n天以外修改的文件|find /etc -mtime +10 -name '*.conf'|查找etc目录下10天以前修改的,并且以conf结尾的文件
--|n|n天修改的文件|
mmin  |按文件修改时间进行查询(单位是分)|find /etc -mmin [n]|
--|-n|n天以内修改的文件| find /etc -mmin -2 -name '*.conf'|查找etc目录下2分钟以内修改的,并且以conf结尾的文件
--|+n|n天以外修改的文件|find /etc -mmin +10 -name '*.conf'|查找etc目录下10分钟以前修改的,并且以conf结尾的文件
--|n|n天修改的文件|
-mindepth n|从n级子目录开始搜索|find /etc -mindepth 3 -name 'index.js'|从etc目录的3级子目录开始查找index.js
-maxdepth n|最多搜索到n-1级子目录|find /etc -maxdepth 3 -name 'index.js'|最多搜索etc目录的2级子目录查找index.js
## :paintbrush: 操作

|参数|意义|
---|---|---
-exec command {} \; |对查找到的文件进行操作|
find /etc -name '*.conf' -size +10k -type f -exec rm -rf {} \; |找到etc下以conf为后缀的,大小大于10kb的文件(非目录)进行删除
find /var/log  '*log' -mtime +7 -exec rm -rf {} \; |找到 /var/log目录下修改时间在7天以上的以log结尾的文件删除
find /etc -name '*.conf' -size +10k -type f -exec cp {} /root/test \; |找到etc下以conf为后缀的,大小大于10kb的文件(非目录)把它复制到/root/test 目录下
-ok command {} \ |和exec一样,只是会提醒用户相关的操作
> 整个查找条件中可以加上逻辑运算符

运算符|意义|例子|--
---|---|---|---
-a|与|find . -user  test -a -size -300c|查找当前目录下属主是test并且大小小于300字节的文件(-a一般会省略)
-o|或|find . -type f -a \\( -user test -o -name '*.conf' \\)|查找当前目录下属主是test或者文件后缀是.conf的文件
-not \| !|非| find . -type f -not -user test|查找当前目录下属主不是test的文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220105358973.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
#### 如果不希望定时任务结束后才能查到,可以使用updatedb马上更新
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220110735612.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
#### 默认会返回查找到的所有二进制文件,包括可执行的二进制文件,man帮助文件,和源文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220111229979.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
```
[root@VM_0_15_centos ~]# whereis mysql

mysql: /usr/bin/mysql /usr/lib64/mysql /usr/share/mysql /usr/share/man/man1/mysql.1.gz

[root@VM_0_15_centos ~]# whereis -b mysql

mysql: /usr/bin/mysql /usr/lib64/mysql /usr/share/mysql

[root@VM_0_15_centos ~]# whereis -m  mysql

mysql: /usr/share/man/man1/mysql.1.gz

[root@VM_0_15_centos ~]# whereis -s  mysql

mysql:[root@VM_0_15_centos ~]# 
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220113023331.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220113112501.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
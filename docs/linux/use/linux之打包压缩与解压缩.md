# :green_book: linux之打包压缩与解压缩

## :paintbrush: 1. 打包命令 tar [-(c|x)f] 
 - -c 生成一个新的包
 - -z 使用gzip对打完的包进行压缩[压缩率低,快]
 - -j 使用bzip2对打完的包进行压缩[压缩率高,慢]
 - -v ：压缩的过程中显示⽂件！这个常⽤，但不建议⽤在背景执⾏过程！
 - -N ：⽐后⾯接的⽇期(yyyy/mm/dd)还要新的才会被打包进新建的⽂件中！
 - --exclude FILE：在压缩的过程中，不要将 FILE 打进包中去！
 - -t：查看内容
 - -r：向压缩归档文件末尾追加文件
 - -u：更新原压缩包中的文件
 - -x 解包
 - -f 以文件形式存在
 注:常见的文件后缀 .tar .tar.gz .tar.gzip .tgz .tar.bzip2 .tar.bz2 .tbz2
 
1.tar -c[z|j]f 生成的打完包地址 打包的目标文件
```
//把 etc目录打包成dist.tar 存放到/tmp目录中
tar cf /tmp/dist.tar /etc 
```
2.tar -[z|j]xf 要解压的压缩包地址 -C 解完包的文件存放位置 (在什么目录下解压,解完的文件就放到哪个目录里)
```
//把 etc目录打包成dist.tar 解压到当前目录
tar -xf /tmp/dist.tar
```
node压缩包地址: https://nodejs.org/dist/v12.14.1/node-v12.14.1.tar.gz
```
tar -cf FileName.tar DirName：这条命令是将DirName的文件夹打成一个名为FileName.tar的包。-c是表示产生新的包，-f指定包的文件名；
 
 
tar -cf FileName.tar *.jpg：这条命令是将所有.jpg的文件打成一个名为FileName.tar的包；
 
tar -rf FileName.tar *.gif：这条命令是将所有.gif的文件增加到FileName.tar的包里面去。-r是表示增加文件的意思；
 
tar -uf FileName.tar logo.gif：这条命令是更新原来tar包FileName.tar中logo.gif文件，-u是表示更新文件的意思；
 
tar -tf FileName.tar：这条命令是列出FileName.tar包中所有文件，-t是列出文件的意思；
 
tar -xf FileName.tar：这条命令是解出FileName.tar包中所有文件，-x是解开的意思。
```

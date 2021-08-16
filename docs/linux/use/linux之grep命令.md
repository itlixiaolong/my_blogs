# :green_book: linux之grep命令

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220121313208.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020022012135797.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
不常用的参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220121720107.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

```sh
//1.txt 内容
i love python
I LOVE PYTHON

[root@VM_0_15_centos ~]# grep python 1.txt
i love python

[root@VM_0_15_centos ~]# grep python -i 1.txt
i love python
I LOVE PYTHON

[root@VM_0_15_centos ~]# grep python -v 1.txt
I LOVE PYTHON

[root@VM_0_15_centos ~]# grep python -n 1.txt
1:i love python
[root@VM_0_15_centos ~]# 

[root@VM_0_15_centos ~]# grep -E  'python|PYTHON'  1.txt  
i love python
I LOVE PYTHON

root@VM_0_15_centos ~]# grep -r python . 
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220143623246.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)



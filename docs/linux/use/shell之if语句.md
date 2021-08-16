# :green_book: shell之if语句

### if条件判断语句
## :paintbrush: 1.if-then语句的基本用法
```sh
if[测试条件是否成立] 或者 命令返回值是否为0
then 执行相应的命令
fi 结束

[root@VM_0_15_centos ~]# if [[ 5 > 3 ]]; then echo "大于"; fi
大于

[root@VM_0_15_centos ~]# if pwd;
> then
>   echo "pwd命令执行成功";
> fi
/root
pwd命令执行成功
```
## :paintbrush: 2.if-then-else语句的基本用法
```sh
if[测试条件是否成立]
then 执行相应的命令
else 测试条件不成立执行相应的命令
fi 结束

[root@VM_0_15_centos ~]# if [[ 5 > 13 ]]; then echo "大于";else echo "小于等于" fi
小于等于

[root@VM_0_15_centos ~]# if pwd2;
> then
>   echo "pwd2命令执行成功";
> esle
>   echo "pwd2命令执行失败";
> fi
-bash: pwd2: command not found
0
```

## :paintbrush: 3.if-elif-else语句的基本用法
```sh
if [测试条件是否成立]
then 执行相应的命令
elif [测试条件成立]
then 执行相应的命令
else 测试条件不成立执行相应的命令
fi 结束


if [ $USER=root ];then
    echo "root";
elif [ $USER=user1 ];then
    echo "user1"
esle
    echo "other";
fi

```
## :paintbrush: if条件判断语句的嵌套
```sh
if [测试条件是否成立]
    if [测试条件是否成立]
    then 执行相应的命令
    elif [测试条件成立]
    then 执行相应的命令
    else 测试条件不成立执行相应的命令
    fi 结束
elif [测试条件成立]
then 执行相应的命令
else 测试条件不成立执行相应的命令
fi 结束
```
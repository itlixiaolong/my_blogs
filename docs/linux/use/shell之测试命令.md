# :green_book: shell之测试命令
# 测试命令test
## :paperclip: 1.test命令用于检查文件或者比较值
## :paperclip: 2.test可以用于以下测试
- 文件测试
- 整数比较测试
- 字符串测试
## :paperclip: 3.test测试语句可以简化为[]符号
## :paperclip: 4.[]还有扩展写法[[]],支持&& || ! < >
```sh
test -f /etc/password
echo $?
//0
test -f /etc/password2
echo $?
//1
[-d /etc]
echo $?
//0
[ 5 gt 4]
echo $?
//0
[[ 5 > 4 ]]
echo $?
//0
[[ "Aa" = "Aa" ]]
echo $?
//0
```

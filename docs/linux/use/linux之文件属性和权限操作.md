# :green_book: linux之文件属性和权限操作
## :paperclip: 当使用ll 或者 ls -l时
```bash
drwxr-xr-x  10 admin  staff   320B Jan 26 23:43 teach
```
>输出解释

drwxr-xr-x|  10| admin|  staff|   320B| Jan 26 23:43| teach
---|---|---|---|---|---|---
文件类型和文件的操作权限| 硬链接的个数(一般文件为1,目录是所有文件的个数总和)|所属用户|所属组|文件大小|创建日期|文件名



## :paperclip: Linux的权限只有rwx三种：
- r(Read，读取)：对⽂件⽽⾔，具有读取⽂件内容的权限；对⽬录来说，具有浏览⽬录的权限。
- w(Write,写⼊)：对⽂件⽽⾔，具有新增,修改,删除⽂件内容的权限；对⽬录来说，具有新建，删
除，修改，移动⽬录内⽂件的权限。
- x(eXecute，执⾏)：对⽂件⽽⾔，具有执⾏⽂件的权限；对⽬录了来说该⽤户具有进⼊⽬录的
权限。

> 例如d rwx rwx rwx，

d|rwx|rwx|rwx
---|---|---|---
⽂件类型|当前User的操作权限|当前用户所属组Group的操作权限|其他用户的操作权限Others
• ⽂件类型除了“-”普通⽂件外，“d”⽬录、“l”符号链接、“c”字符专⻔设备⽂件、“b”块专⻔设备⽂
件、“p”先进先出、“s”套接字

## :paperclip: 修改文件的权限
- 使用rwx修改

> chmod [ugo][=+-][rwx] filename
- 使用三个⼋进制数表示⽂件权限
> chmod 777 filename 相当于 chmod ugo=rwx filename


权限组合 | 对应的八进制数值
---|---
rwx | 7
rw- | 6
r-x | 5
r-- | 4
-wx | 3
-w- | 2
--x | 1
--- | 0


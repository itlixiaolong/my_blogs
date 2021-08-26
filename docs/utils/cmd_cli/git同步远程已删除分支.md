# :green_book: git同步远程已删除分支

## :paperclip: 1.使用 ```git branch -a```可以查看本地分支和远程分支情况 
![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTc5NDczLzIwMTgwNi85Nzk0NzMtMjAxODA2MTExMTMyMzkzNjYtMTY1ODk1MTY5OC5wbmc?x-oss-process=image/format,png#pic_center)

远程分支（红色部分）删除后，发现本地并没有同步过来

## :paperclip:2.查看本地分支和追踪情况：

```
git remote show origin
```
![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTc5NDczLzIwMTgwNi85Nzk0NzMtMjAxODA2MTExMTMwNDAzMDUtMTU5MzcxMDAwNC5wbmc?x-oss-process=image/format,png#pic_center)
可以发现红框中的分支是远程分支已被删除的分支，根据提示可以使用 ```git remote prune origin```来同步删除这些分支。
## :paperclip: 3.运行 
```
git remote prune origin
```

![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTc5NDczLzIwMTgwNi85Nzk0NzMtMjAxODA2MTExMTMyMDE2NjItNDI0MDYwNTc2LnBuZw?x-oss-process=image/format,png#pic_center)
再次查看分支情况：

![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTc5NDczLzIwMTgwNi85Nzk0NzMtMjAxODA2MTExMTMyMjc4MDEtNjY3NjY2NjU3LnBuZw?x-oss-process=image/format,png#pic_center)
发现红色部分的远程分支已经同步，远程删除的分支，本地也已经不见了。

## :paperclip: 4.删除本地多余分支

```
git branch -D feature/chatfix（分支名）
```
![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTc5NDczLzIwMTgwNi85Nzk0NzMtMjAxODA2MTExMTM2NTMzNDItMTQxODgwNDU0OC5wbmc?x-oss-process=image/format,png#pic_center)
本地多余分支已删除
# :green_book: shell之case语句

## :paperclip: case语句和select语句可以构成分支
```sh
case "$变量名" in
    "情况1" )
    命令...;;
     "情况2" )
    命令...;;
     "情况3" )
    命令...;;
     "情况4" )
    命令...;;
     * )   # *代表相当于js中的default
    命令...;;
esac

#例子
case "$1" in
   "start")
        echo start....
        ;;
   "stop")
        echo stop...
        ;;
      "*")
case "$1" in
   "start"|"START")
        echo start....
        ;;
   "stop"|"STOP")
        echo stop...
        ;;
       *)
        echo 'no this command'
        ;;
esac
```
# :green_book: linux上安装jenkins

## :paperclip: 1. 安装docker
> 使用一键脚本安装
```sh
curl -sSL https://get.daocloud.io/docker | sh
```
[相关链接](https://www.runoob.com/docker/centos-docker-install.html)

## :paperclip: 2. 使用docker安装jenkins

```sh
# 官网配置
docker run \
  -u root \
  --rm \
  -d \
  -p 8086:8086 \
  -p 50001:50001 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
```
```sh
# 建议配置
docker run \
  -u root \
  -d \
  -p 9000:8080 \
  -p 50000:50000 \
  --name jenkins \
  -v $HOME/jenkins:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
```
[相关链接](https://www.jenkins.io/zh/doc/book/installing/)
> 其中--name 可以在下次启动doker时采用
```sh
docker exec -it jenkins bash

docker stop\start\restart jenkins

```
## :paperclip: 3.启动jenkins并做好相关配置
>1.在浏览器地址栏输入 你的服务器公网ip:8080,打开Unlock Jenkins(解锁jenkins的页面)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e89e4338b8946cc8f61be8a83483579.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)


>2.运行` docker ps -a` 获取jenkinsci/blueocean的containerID
![在这里插入图片描述](https://img-blog.csdnimg.cn/8f84cf9b31b04021bdfc4d8de5192c8c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)


> 运行`docker logs 上面获取的blueocean的containerID `
![在这里插入图片描述](https://img-blog.csdnimg.cn/df2d8860779c428e9ec9380209f7e34e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

## :paperclip: 4.后面的步骤参考
[jenkins官方教程](https://www.jenkins.io/zh/doc/tutorials/build-a-node-js-and-react-app-with-npm/#setup-wizard)

## :paperclip: 5.参考资料
- [使用jenkins一键打包发布vue项目](https://www.cnblogs.com/guojikun/p/14749634.html)

- [Jenkins & Gitee 实现持续集成CI/CD工具【免费、推荐】](https://blog.csdn.net/zy1281539626/article/details/115180811)

- [使用jenkins自动化打包部署Vue项目，详细教程](https://www.jianshu.com/p/1d07b986ab2c)

- [windows上使用jenkins自动化打包部署Vue项目，详细教程](https://blog.csdn.net/cxx619/article/details/92833024)


(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{371:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux上安装jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux上安装jenkins"}},[s._v("#")]),s._v(" 📗 linux上安装jenkins")]),s._v(" "),a("h2",{attrs:{id:"_1-安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装docker"}},[s._v("#")]),s._v(" 📎 1. 安装docker")]),s._v(" "),a("blockquote",[a("p",[s._v("使用一键脚本安装")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSL")]),s._v(" https://get.daocloud.io/docker "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关链接"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_2-使用docker安装jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用docker安装jenkins"}},[s._v("#")]),s._v(" 📎 2. 使用docker安装jenkins")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官网配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v(":8086 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50001")]),s._v(":50001 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" jenkins-data:/var/jenkins_home "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/run/docker.sock:/var/run/docker.sock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  jenkinsci/blueocean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建议配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":8080 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" jenkins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/jenkins:/var/jenkins_home "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/run/docker.sock:/var/run/docker.sock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  jenkinsci/blueocean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.jenkins.io/zh/doc/book/installing/",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关链接"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("其中--name 可以在下次启动doker时采用")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" jenkins "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("restart jenkins\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3-启动jenkins并做好相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动jenkins并做好相关配置"}},[s._v("#")]),s._v(" 📎 3.启动jenkins并做好相关配置")]),s._v(" "),a("blockquote",[a("p",[s._v("1.在浏览器地址栏输入 你的服务器公网ip:8080,打开Unlock Jenkins(解锁jenkins的页面)\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/6e89e4338b8946cc8f61be8a83483579.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),s._v(" "),a("blockquote",[a("p",[s._v("2.运行"),a("code",[s._v("docker ps -a")]),s._v(" 获取jenkinsci/blueocean的containerID\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/8f84cf9b31b04021bdfc4d8de5192c8c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),s._v(" "),a("blockquote",[a("p",[s._v("运行"),a("code",[s._v("docker logs 上面获取的blueocean的containerID")]),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/df2d8860779c428e9ec9380209f7e34e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),s._v(" "),a("h2",{attrs:{id:"_4-后面的步骤参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-后面的步骤参考"}},[s._v("#")]),s._v(" 📎 4.后面的步骤参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jenkins.io/zh/doc/tutorials/build-a-node-js-and-react-app-with-npm/#setup-wizard",target:"_blank",rel:"noopener noreferrer"}},[s._v("jenkins官方教程"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_5-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-参考资料"}},[s._v("#")]),s._v(" 📎 5.参考资料")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/guojikun/p/14749634.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用jenkins一键打包发布vue项目"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/zy1281539626/article/details/115180811",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins & Gitee 实现持续集成CI/CD工具【免费、推荐】"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/1d07b986ab2c",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用jenkins自动化打包部署Vue项目，详细教程"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/cxx619/article/details/92833024",target:"_blank",rel:"noopener noreferrer"}},[s._v("windows上使用jenkins自动化打包部署Vue项目，详细教程"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
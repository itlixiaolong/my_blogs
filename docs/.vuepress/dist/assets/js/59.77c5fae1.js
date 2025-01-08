(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{383:function(s,a,e){"use strict";e.r(a);var t=e(17),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux基本命令操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux基本命令操作"}},[s._v("#")]),s._v(" 📗 linux基本命令操作")]),s._v(" "),a("h2",{attrs:{id:"_1-grep-some-string-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-grep-some-string-file"}},[s._v("#")]),s._v(' 📎 1.grep "some string" file')]),s._v(" "),a("p",[s._v("<1> .grep命令在每个文件中搜索模式。它还会寻找由换行符分隔的模式，并且grep打印与模式匹配的每一行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('grep "react" index.js //在index.js中查找react字符串\ngrep -i "React" index.js //在index.js中查找react字符串，忽略大小写\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("<2>.统计文件或者文本中包含匹配字符串的行数 -c")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('grep -c "react" index.js //在index.js中查找react字符串出现的行数\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("<3>.查找文件里头内容不是vhost的字符")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('grep -v "react" index.js //在index.js中查找不是react的字符\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("<4>.在多级目录中对文本进行递归搜索")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grep vue . -r -n  //在当前目录下搜索包含vue的文件\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("<5>.在nginx.conf下查找mox字符出现的后4行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grep -A 4 mox nginx.conf \ngrep -A 4 'vue' main.js \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("<6>.在nginx.conf下查找mox字符出现的前4行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grep -B 4 mox nginx.conf  \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("<7>.在nginx.conf下查找php字符出现的前后4行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grep -C 4 mox nginx.conf \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-cat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-cat"}},[s._v("#")]),s._v(" 📎 2. cat")]),s._v(" "),a("p",[s._v("cat命令具有与文本文件有关的三个相关功能：")]),s._v(" "),a("ul",[a("li",[s._v("显示它们")]),s._v(" "),a("li",[s._v("合并副本")]),s._v(" "),a("li",[s._v("创造新的文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat index.js //读取index.js中的内容\ncat index.js > test.js //把index.js的内容复制到test.js中\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3-echo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-echo"}},[s._v("#")]),s._v(" 📎 3. echo")]),s._v(" "),a("p",[s._v("echo用于向终端输出文本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('echo "test text"\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3-touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-touch"}},[s._v("#")]),s._v(" 📎 3. touch")]),s._v(" "),a("p",[s._v("touch用于创建新的空文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("touch text.js\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"以下是cat和touch之间的主要区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以下是cat和touch之间的主要区别"}},[s._v("#")]),s._v(" 以下是cat和touch之间的主要区别：")]),s._v(" "),a("ul",[a("li",[s._v("cat 用于创建包含内容的文件。")]),s._v(" "),a("li",[s._v("touch 创建一个没有任何内容或空文件的文件。请记住，使用touch命令创建的文件为空。当用户在创建文件时没有要存储的数据时，此命令很有用。")])]),s._v(" "),a("h2",{attrs:{id:"_4-tail-somefile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-tail-somefile"}},[s._v("#")]),s._v(" 📎 4. tail someFile")]),s._v(" "),a("p",[s._v("tail命令读取文件并输出文件的最后部分（尾巴）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tail text.js\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_5-find-path-name-filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-find-path-name-filename"}},[s._v("#")]),s._v(" 📎 5. find path -name filename")]),s._v(" "),a("p",[s._v("使用find命令可以快速查找文件或目录。当您正在处理包含数百个文件和多个目录的大型项目时，此功能非常有用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('find . -name text.js //在当前目录下查找text.js\nfind . -name "*.js" //在当前目录下查找所有的js文件\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_6-mv-somefile-to-some-other-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-mv-somefile-to-some-other-path"}},[s._v("#")]),s._v(" 📎 6. mv somefile /to/some/other/path")]),s._v(" "),a("p",[s._v("mv命令将文件或目录从一个位置移动到另一个位置。mv命令支持移动单个文件，多个文件和目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mv index.js ../utils  //把当前目录下的index.js移动到上一级的utils目录下\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7-ln-s-真正要打开的文件地址-存放快捷方式的地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-ln-s-真正要打开的文件地址-存放快捷方式的地址"}},[s._v("#")]),s._v(" 📎 7. ln [-s] 真正要打开的文件地址 存放快捷方式的地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!--为/etc/hosts文件创建一个软链接到~/hosts目录下,这时执行cd ~/hosts实际就会打开 cd /etc/hosts--\x3e\nln -s /etc/hosts ~/hosts \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_8-ls-a-d-l-要查看目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-ls-a-d-l-要查看目录"}},[s._v("#")]),s._v(" 📎 8. ls [-a|d|l]  要查看目录")]),s._v(" "),a("ul",[a("li",[s._v("-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)")]),s._v(" "),a("li",[s._v("-d ：仅列出目录本身，而不是列出目录内的文件数据(常用)")]),s._v(" "),a("li",[s._v("-l ：长数据串列出，包含文件的属性与权限等等数据；(常用)")]),s._v(" "),a("li",[s._v("-h ：文件大小达到M级别后,以M为单位进行显示")]),s._v(" "),a("li",[s._v("-r : 逆序显示")]),s._v(" "),a("li",[s._v("-t : 按时间顺序显示")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!--查看home目录下的所有文件--\x3e\nls -a ~ \n\x3c!--查看home目录下的所有文件,包含文件的属性与权限等等数据--\x3e\nls -l ~  \n\x3c!--查看home目录下的所有文件只包括文件夹--\x3e\nls -d ~  \n\x3c!--也可以组合使用--\x3e\nls -al ~  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_9-pwd-p-显示目前所在的目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-pwd-p-显示目前所在的目录"}},[s._v("#")]),s._v(" 📎 9. pwd [-P]  显示目前所在的目录")]),s._v(" "),a("ul",[a("li",[s._v("-P ：显示出确实的路径，而非使用连结 (link) 路径")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!--单纯显示出目前的工作目录--\x3e\n[root@www ~]# pwd\n/root   \n\x3c!--实例显示出实际的工作目录，而非连结档本身的目录名而已--\x3e\n[root@www ~]# cd /var/mail   <==注意，/var/mail是一个连结档\n[root@www mail]# pwd\n/var/mail         <==列出目前的工作目录\n[root@www mail]# pwd -P\n/var/spool/mail   <==怎么回事？有没有加 -P 差很多～\n[root@www mail]# ls -ld /var/mail\nlrwxrwxrwx 1 root root 10 Sep  4 17:54 /var/mail -> spool/mail\n\x3c!--看到这里应该知道为啥了吧？因为 /var/mail 是连结档，连结到 /var/spool/mail --\x3e\n\x3c!--所以，加上 pwd -P 的选项后，会不以连结档的数据显示，而是显示正确的完整路径啊！ --\x3e\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_10-获取某个目录下文件的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-获取某个目录下文件的个数"}},[s._v("#")]),s._v(" 📎10.获取某个目录下文件的个数")]),s._v(" "),a("ul",[a("li",[s._v("如果只是想得到当前目录下（不包括子目录）的相关文件时用")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ls -l | grep "^-" | wc -l \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("find ./ -maxdepth 1 -type f | wc -l  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中-maxdepth 1用于指定一层")]),s._v(" "),a("ul",[a("li",[s._v("如果想得到当前目录下，包括子目录中的相关文件时用")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("find ./ -type f | wc -l\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
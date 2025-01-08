(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{382:function(s,a,n){"use strict";n.r(a);var t=n(17),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux之添加和删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux之添加和删除用户"}},[s._v("#")]),s._v(" 📗 linux之添加和删除用户")]),s._v(" "),a("h2",{attrs:{id:"用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[s._v("#")]),s._v(" 📎 用户")]),s._v(" "),a("blockquote",[a("p",[s._v("Linux系统是⼀一个多⽤用户多任务的分时操作系统，任何⼀一个要使⽤用系统资源的⽤用户， 都必须⾸首先向系统管理理员申请⼀一个账号，然后以这个账号的身份进⼊入系统。")])]),s._v(" "),a("h5",{attrs:{id:"linux用用户分三大大类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux用用户分三大大类"}},[s._v("#")]),s._v(" Linux⽤用户分三⼤大类:")]),s._v(" "),a("ul",[a("li",[s._v("root⽤用户:超级⽤用户，可以⽤用来登录，操作系统任何⽂文件和命令，拥有最⾼高权\n限")]),s._v(" "),a("li",[s._v("虚拟⽤用户:不不具有登录能⼒，系统本身拥有，不不是后来添加的，但是系统运⾏行行 不不可缺的")]),s._v(" "),a("li",[s._v("普通⽤用户:有登录能⼒，权限受到限制")])]),s._v(" "),a("h5",{attrs:{id:"添加用用户时候-系统会自自动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加用用户时候-系统会自自动"}},[s._v("#")]),s._v(" 添加⽤用户时候，系统会⾃自动")]),s._v(" "),a("ul",[a("li",[s._v("在/etc/passwd⽂文件添加⼀一⾏行行⽤用户记录")]),s._v(" "),a("li",[s._v("在/home⽬目录下创建新⽤用户⽬目录")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加一个用户lixiaolong,并指定用户数据在/home/lixiaolong")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" /home/lixiaolong "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" lixiaolong\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给新增用户设置一个密码")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" mengning\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前的用户")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /home/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个用户")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" mengning\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前的登录用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前登录用户所属的组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户组"}},[s._v("#")]),s._v(" 📎 用户组")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("每个⽤户都有⼀个⽤户组，系统可以对⼀个⽤户组中的所有⽤户进⾏\n集中管理。不同Linux系统对⽤户组的规定有所不同，如Linux下的⽤\n户属于与它同名的⽤户组，这个⽤户组在创建⽤户时同时创建。")])]),s._v(" "),a("li",[a("p",[s._v("⽤户组的管理涉及⽤户组的添加groupadd、删除groupdel和修改\ngroupmod。组的增加、删除和修改实际上就是对/etc/group⽂件的更\n新")])]),s._v(" "),a("li",[a("p",[s._v("与⽤户和⽤户组相关的信息都存放在⼀些系统⽂件中，这些⽂件包括/\netc/passwd(存放用户信息), /etc/shadow(存放加密的口令[用户密码]), /etc/group(存放用户的组信息)等。")])]),s._v(" "),a("li",[a("p",[s._v("每个⽤户都在/etc/passwd⽂件中有⼀个对应的记录⾏——⽤户名:⼝\n令:⽤户标识号:组标识号:注释性描述:主⽬录:登录Shell")])]),s._v(" "),a("li",[a("p",[s._v("加密后的⽤户⼝令字存放到/etc/shadow⽂件")])]),s._v(" "),a("li",[a("p",[s._v("“组标识号”字段记录的是⽤户所属的⽤户组，对应着/etc/group⽂件中\n的⼀条记录。")])])]),s._v(" "),a("h5",{attrs:{id:"修改所属的用户或组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改所属的用户或组"}},[s._v("#")]),s._v(" 修改所属的⽤户或组")]),s._v(" "),a("blockquote",[a("p",[s._v("修改文件的所属用户")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" username filename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("修改文件所属的组")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" groupname filename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("修好文件所属的用户和组")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" username.groupname filename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("chown 和 chgrp 都有⼀个 -R 选项，该选项可以⽤来告诉它们递归地\n将所属权和组改变应⽤到整个⽬录树中")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" ubuntu /home/ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
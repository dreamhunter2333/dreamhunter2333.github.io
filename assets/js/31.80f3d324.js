(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{485:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"使用http代理时-git克隆仓库报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用http代理时-git克隆仓库报错"}},[t._v("#")]),t._v(" 使用http代理时，git克隆仓库报错")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("fatal: unable to access ‘https://github.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/‘: OpenSSL SSL_connect: SSL_ERROR_SYSCALL "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" connection to github.com:443\n")])])]),a("h2",{attrs:{id:"忽略ssl认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忽略ssl认证"}},[t._v("#")]),t._v(" 忽略SSL认证")]),t._v(" "),a("ul",[a("li",[t._v("env命令设置GIT_SSL_NO_VERIFY环境变量为”ture”，并同时调用正常的git的clone命令，即在git里输入：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT_SSL_NO_VERIFY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://host_name/git/project.git\n")])])]),a("ul",[a("li",[t._v("一行使用")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT_SSL_NO_VERIFY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://host_name/git/project.git\n")])])]),a("ul",[a("li",[t._v('在clone完毕的仓库中将http.sslVerify设置为"false"：')])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config http.sslVerify "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
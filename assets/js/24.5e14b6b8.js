(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{478:function(s,t,a){"use strict";a.r(t);var e=a(5),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"code-server在线编辑器-in-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-server在线编辑器-in-docker"}},[s._v("#")]),s._v(" code-server在线编辑器 in docker")]),s._v(" "),a("h3",{attrs:{id:"从-ubuntu18-构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-ubuntu18-构建镜像"}},[s._v("#")]),s._v(" 从 ubuntu18 构建镜像")]),s._v(" "),a("blockquote",[a("p",[s._v("编写Dockerfile")])]),s._v(" "),a("div",{staticClass:"language-Dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu:latest")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" author=dreamhunter2333")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用阿里源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" sed -i s/archive.ubuntu.com/mirrors.aliyun.com/g /etc/apt/sources.list && "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    sed -i s/security.ubuntu.com/mirrors.aliyun.com/g /etc/apt/sources.list")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update -y && apt-get upgrade -y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get install -y locales")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" locale-gen zh_CN")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" locale-gen zh_CN.utf8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" update-locale LANG=zh_CN.UTF-8 LC_ALL=zh_CN.UTF-8 LANGUAGE=zh_CN.UTF-8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update -y && apt-get upgrade -y")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" LANG zh_CN.UTF-8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" LANGUAGE zh_CN.UTF-8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" LC_ALL zh_CN.UTF-8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get install sudo vim curl zsh wget nano psmisc -y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update -y && apt-get upgrade -y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get install python3 python3-pip screenfetch git -y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update -y && apt-get upgrade -y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" SHELL=/bin/zsh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" sh -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')]),s._v(" -y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update -y && apt-get upgrade -y")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /opt/odoo")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build image")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" Dockerfile "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" code_server:1.0 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("h3",{attrs:{id:"docker-compose-启动-code-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-启动-code-server"}},[s._v("#")]),s._v(" docker-compose 启动 code-server")]),s._v(" "),a("p",[s._v("编写 "),a("code",[s._v("docker-compose.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code_server\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4000:4000"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:8080"')]),s._v("\n")])])]),a("p",[s._v("启动 "),a("code",[s._v("docker-compose")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" docker-compose.yml up\n")])])]),a("h3",{attrs:{id:"访问-localhost-8080"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-localhost-8080"}},[s._v("#")]),s._v(" 访问 localhost:8080")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/code-server/code_server.jpg",alt:"code-server"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);
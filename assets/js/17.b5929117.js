(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{573:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"docker安装使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装使用"}},[s._v("#")]),s._v(" docker安装使用")]),s._v(" "),t("h3",{attrs:{id:"安装-构建开发镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-构建开发镜像"}},[s._v("#")]),s._v(" 安装,构建开发镜像")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# windows下载安装即可")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac")]),s._v("\nbrew cask "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建开发镜像")]),s._v("\ndocker build -f Dockerfile -t demo:1.0 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),t("h3",{attrs:{id:"windows要创建localvolume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows要创建localvolume"}},[s._v("#")]),s._v(" Windows要创建localvolume")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows 需要创建 local volume")]),s._v("\ndocker volume create --name demo-volume -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])])]),t("h3",{attrs:{id:"启动-停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-停止"}},[s._v("#")]),s._v(" 启动 停止")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\ndocker-compose -f docker-compose.yaml up\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\ndocker-compose -f docker-compose.yaml down\n")])])]),t("h3",{attrs:{id:"docker查看镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker查看镜像"}},[s._v("#")]),s._v(" docker查看镜像")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker images\n\ndocker image list\n")])])]),t("h3",{attrs:{id:"docker查看容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker查看容器"}},[s._v("#")]),s._v(" docker查看容器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器")]),s._v("\ndocker start "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ONTAINER ID"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\ndocker stop "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ONTAINER ID"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器终端")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ONTAINER ID"')]),s._v(" /bin/bash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# volume")]),s._v("\ndocker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{567:function(t,a,s){"use strict";s.r(a);var n=s(5),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("开源地址 "),s("a",{attrs:{href:"https://github.com/dreamhunter2333/iqiyi_danmu",target:"_blank",rel:"noopener noreferrer"}},[t._v("iqiyi_danmu"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("ul",[s("li",[t._v("一种压缩格式 "),s("a",{attrs:{href:"https://github.com/google/brotli",target:"_blank",rel:"noopener noreferrer"}},[t._v("brotli"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("序列化工具 "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("protobuf"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"开工"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开工"}},[t._v("#")]),t._v(" 开工")]),t._v(" "),s("p",[t._v("最近看了热播剧《猎罪图鉴》，打开网页版爱奇艺播放，F12")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgs/iqiyi-danmu/F12.png",alt:"F12"}})]),t._v(" "),s("p",[t._v("可以看到弹幕的请求是这样的 "),s("code",[t._v("https://cmts.iqiyi.com/bullet/67/00/6265416625426700_60_2_3795ee87.br")])]),t._v(" "),s("p",[t._v("查看 "),s("code",[t._v("initiator")]),t._v(" 分析 js 可知，数据为 "),s("code",[t._v("brotli")]),t._v(" 压缩格式，解压后使用 "),s("code",[t._v("protobuf")]),t._v(" 反序列化")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgs/iqiyi-danmu/initiator.png",alt:"initiator"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgs/iqiyi-danmu/br2Object.png",alt:"br2Object"}})]),t._v(" "),s("p",[t._v("然后我们可以看到 "),s("code",[t._v("Danmu")]),t._v(" 对象的 "),s("code",[t._v("protobuf")]),t._v(" 构造")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgs/iqiyi-danmu/proto-danmu.png",alt:"proto-danmu"}})]),t._v(" "),s("h2",{attrs:{id:"开始解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始解析"}},[t._v("#")]),t._v(" 开始解析")]),t._v(" "),s("p",[t._v("为了简单，选用 python 进行解析，下载之前的 br 链接的文件")]),t._v(" "),s("h3",{attrs:{id:"安装-brotli-库-进行解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-brotli-库-进行解压"}},[t._v("#")]),t._v(" 安装 "),s("code",[t._v("brotli")]),t._v(" 库 进行解压")]),t._v(" "),s("p",[t._v("新建 "),s("code",[t._v("main.py")]),t._v(" 编写解压代码")]),t._v(" "),s("p",[t._v("解压后是 protobuf 的二进制格式，我们无法直接读取")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" brotli\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6265416625426700_60_2_3795ee87.br"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    out "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" brotli"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decompress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytearray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"编写-proto-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-proto-文件"}},[t._v("#")]),t._v(" 编写 proto 文件")]),t._v(" "),s("p",[t._v("我们只需要添加弹幕相关的字段，新建 "),s("code",[t._v("danmu.proto")]),t._v(" 如下")]),t._v(" "),s("div",{staticClass:"language-proto extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('syntax = "proto2";\npackage danmu;\n\nmessage BulletInfo {\n    optional string content = 2; // becomes awesomeField\n}\n\nmessage Entry {\n    repeated BulletInfo bulletInfo = 2; // becomes awesomeField\n}\n\nmessage Danmu {\n    repeated Entry entry = 6; // becomes awesomeField\n}\n')])])]),s("h3",{attrs:{id:"解析弹幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析弹幕"}},[t._v("#")]),t._v(" 解析弹幕")]),t._v(" "),s("p",[t._v("终端运行下面的命令，转换为 "),s("code",[t._v("Python")]),t._v(" 代码文件 "),s("code",[t._v("danmu_pb2.py")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("protoc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--python_out")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(". *.proto\n")])])]),s("p",[t._v("然后我们修改下之前的 "),s("code",[t._v("main.py")]),t._v(", 现在就可以输出弹幕内容啦")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" brotli\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" danmu_pb2\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6265416625426700_60_2_3795ee87.br"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    out "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" brotli"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decompress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytearray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    danmu "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" danmu_pb2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Danmu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    danmu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParseFromString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        bulletInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" entry "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" danmu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entry\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" bulletInfo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bulletInfo\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"制作词云图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#制作词云图"}},[t._v("#")]),t._v(" 制作词云图")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("wc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WordCloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    background_color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("background_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    max_words"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("max_words"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    stopwords"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("STOPWORDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    font_path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("font_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("height\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("generate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("danmu_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("outpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/imgs/iqiyi-danmu/wordcloud.jpg",alt:"wordcloud"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);
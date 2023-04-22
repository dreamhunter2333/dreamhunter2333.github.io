(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{508:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"install-termux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-termux"}},[t._v("#")]),t._v(" Install termux")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/termux/termux-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("termux-app github"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://f-droid.org/en/packages/com.termux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("termux-app f-droid"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"install-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install dependencies")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update termux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" upgrade "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install ssh server")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openssh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start ssh")]),t._v("\nsshd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# modify passwd and connect from client")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install dependencies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" neofetch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" proot "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" proot-distro\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install ohmyzsh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-fsSL")]),t._v(" https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install and login ubuntu")]),t._v("\nproot-distro "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ubuntu\nproot-distro login ubuntu\n")])])]),a("h2",{attrs:{id:"install-dependencies-in-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies-in-ubuntu"}},[t._v("#")]),t._v(" Install dependencies in ubuntu")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update termux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" upgrade "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install dependencies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" neofetch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install ohmyzsh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-fsSL")]),t._v(" https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install xfce4 xrdp")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xorg xfce4 xrdp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libexo-1-0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# modify port of xrdp")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/port=3389/port=33389/g'")]),t._v(" /etc/xrdp/xrdp.ini\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" xfce4-session "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ~/.xsession\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" xrdp restart\n")])])]),a("h2",{attrs:{id:"connect-with-microsoft-remote-desktop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-with-microsoft-remote-desktop"}},[t._v("#")]),t._v(" connect with Microsoft Remote Desktop")]),t._v(" "),a("p",[a("img",{attrs:{src:"/pic/install-ubuntu-with-xrdp-in-termux/mstsc.png",alt:"mstsc"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);
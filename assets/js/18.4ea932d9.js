(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{732:function(t,a,s){"use strict";s.r(a);var n=s(39),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"install-ansible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-ansible"}},[t._v("#")]),t._v(" Install Ansible")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python3 -m venv ./venv\n./venv/bin/python3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ansible\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("/venv/bin:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\nansible-inventory -i inventory.yaml --list\nansible virtualmachines -m "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" -i inventory.yaml\n")])])]),s("h2",{attrs:{id:"create-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-files"}},[t._v("#")]),t._v(" create files")]),t._v(" "),s("p",[t._v("目录结构如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("roles\n├── common\n│   └── tasks\n│       └── main.yaml\n└── nginx\n    ├── files\n    │   ├── conf.d\n    │   │   ├── forbidden.conf\n    │   │   ├── jdk8-api.dev.conf\n    │   │   └── status.conf\n    │   └── docker-compose.yml\n    └── tasks\n        └── main.yaml\nsite.yaml\ninventory.yaml\n")])])]),s("h3",{attrs:{id:"inventory-yaml-填写-vm-分组信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inventory-yaml-填写-vm-分组信息"}},[t._v("#")]),t._v(" inventory.yaml 填写 vm 分组信息")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tool_vms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ansible_host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ip/hostname\n")])])]),s("h3",{attrs:{id:"site-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-yaml"}},[t._v("#")]),t._v(" site.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy to tool nodes\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tool_vms\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("roles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" nginx\n")])])]),s("h3",{attrs:{id:"roles-编写具体步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roles-编写具体步骤"}},[t._v("#")]),t._v(" roles 编写具体步骤")]),t._v(" "),s("p",[t._v("files 放用到的文件，tasks 放具体的任务")]),t._v(" "),s("p",[t._v("common/tasks/main.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apt install python3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pip\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" python3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pip\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" present\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update_cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yes\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("become")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pip install docker docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ansible.builtin.pip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" docker\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Create docker network\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("community.docker.docker_network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx_net\n")])])]),s("p",[t._v("nginx/tasks/main.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Set variables"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("set_fact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/projects/nginx"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Create Folder\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ path }}"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" directory\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" copy Docker Compose and nginx conf files\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" files/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ path }}/{{ item }}"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" conf.d/\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose.yml\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Docker Compose down\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("community.docker.docker_compose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("project_src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ path }}"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absent\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Docker Compose up\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("community.docker.docker_compose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("project_src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ path }}"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" present\n")])])]),s("h2",{attrs:{id:"deploy-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-website"}},[t._v("#")]),t._v(" deploy website")]),t._v(" "),s("p",[t._v("开始部署，冲冲冲")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ansible-playbook -i inventory.yaml site.yaml\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
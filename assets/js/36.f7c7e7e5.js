(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{750:function(t,a,s){"use strict";s.r(a);var n=s(39),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"针对-intel-核显"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针对-intel-核显"}},[t._v("#")]),t._v(" 针对 intel 核显")]),t._v(" "),s("h3",{attrs:{id:"为什么要驱动-fn-亮度快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要驱动-fn-亮度快捷键"}},[t._v("#")]),t._v(" 为什么要驱动 Fn 亮度快捷键")]),t._v(" "),s("ul",[s("li",[t._v("fn+功能键直接调节亮度")])]),t._v(" "),s("h3",{attrs:{id:"hotpatch-fn-样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hotpatch-fn-样例"}},[t._v("#")]),t._v(" hotpatch Fn 样例")]),t._v(" "),s("ul",[s("li",[t._v("我的 "),s("code",[t._v("hotpatch")]),t._v(" Fn 样例")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/dreamhunter2333/Shinalon_YAO_7000_efi/blob/efi/EFI/CLOVER/ACPI/patched/SSDT-Fn.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-Fn.dsl"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"dsdt-ssdt-如何提取-反编译-请看这篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dsdt-ssdt-如何提取-反编译-请看这篇"}},[t._v("#")]),t._v(" DSDT/SSDT 如何提取 反编译 请看这篇")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://jcstaff.club/2019/03/31/DSDT-SSDT-%E7%94%B5%E9%87%8F%E6%98%BE%E7%A4%BA/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DSDT提取"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"在-dsdt-中查找亮度调节方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-dsdt-中查找亮度调节方法"}},[t._v("#")]),t._v(" 在 DSDT 中查找亮度调节方法")]),t._v(" "),s("ul",[s("li",[t._v("类似下面的方法\n含有这两句的\nNotify (^^^GFX0.DD1F, 0x87)\nNotify (^^^GFX0.DD1F, 0x86)")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("            Method "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_Q14, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", NotSerialized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // _Qxx: EC Query\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                P8XH "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Zero, 0x14"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意此行")]),t._v("\n                Notify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("^^^GFX0.DD1F, 0x87"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            Method "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_Q15, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", NotSerialized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // _Qxx: EC Query\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                P8XH "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Zero, 0x15"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意此行")]),t._v("\n                Notify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("^^^GFX0.DD1F, 0x86"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"找到之后就可以开始制作-hotpatch-了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找到之后就可以开始制作-hotpatch-了"}},[t._v("#")]),t._v(" 找到之后就可以开始制作 hotpatch 了")]),t._v(" "),s("ul",[s("li",[t._v("新建"),s("code",[t._v("ssdt-fn.dsl")])]),t._v(" "),s("li",[t._v("将里面的"),s("code",[t._v("_Q14")]),t._v(" "),s("code",[t._v("_Q15")]),t._v(" 改为你在上面查到的名字")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("DefinitionBlock "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SSDT"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hack"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fnkey"')]),t._v(", 0x00000000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    External "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SB_.PCI0, DeviceObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    External "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SB_.PCI0.LPCB, DeviceObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    External "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SB_.PCI0.LPCB.EC0_, DeviceObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    External "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SB_.PCI0.LPCB.PS2K, DeviceObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    External "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ATKP, IntObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    Method "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SB.PCI0.LPCB.EC0._Q14, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", NotSerialized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // _Qxx: EC Query, "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("xx")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0x00-0xFF\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Notify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_SB.PCI0.LPCB.PS2K, 0x0405"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Notify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_SB.PCI0.LPCB.PS2K, 0x20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // Reserved\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    Method "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SB.PCI0.LPCB.EC0._Q15, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", NotSerialized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // _Qxx: EC Query, "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("xx")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0x00-0xFF\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Notify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_SB.PCI0.LPCB.PS2K, 0x0406"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Notify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_SB.PCI0.LPCB.PS2K, 0x10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // Reserved\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"编译为-ssdt-fn-aml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译为-ssdt-fn-aml"}},[t._v("#")]),t._v(" 编译为 ssdt-fn.aml")]),t._v(" "),s("ul",[s("li",[t._v("放入 "),s("code",[t._v("EFI/CLOVER/ACPI/patched/")]),t._v(" 下")]),t._v(" "),s("li",[t._v("重启 不出意外 你的快捷键就能用了")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{631:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"odoo-profile-性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odoo-profile-性能测试"}},[t._v("#")]),t._v(" Odoo @profile 性能测试")]),t._v(" "),a("h3",{attrs:{id:"odoo-rst-文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odoo-rst-文档"}},[t._v("#")]),t._v(" odoo rst 文档")]),t._v(" "),a("p",[t._v("Another profiler can be used to log statistics on a method:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" odoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profiler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" profile\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@profile")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mymethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("p",[t._v("The statistics will be displayed into the logs once the method to be analysed is\ncompletely reviewed.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-03-28 06:18:23,196 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22878")]),t._v(" INFO openerp odoo.tools.profiler:\n    calls     queries   ms\n    project.task ------------------------ /home/odoo/src/odoo/addons/project/models/project.py, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("638")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02")]),t._v("          @profile\n                                      @api.model\n                                      def create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self, vals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n                                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# context: no_log, because subtype already handle this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("              context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self.env.context, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("mail_create_nolog")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("True"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n                                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for default stage")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vals.get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and not context.get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default_project_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n                                              context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default_project_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vals.get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# user_id change: update date_assign")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vals.get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n                                              vals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date_assign'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fields.Datetime.now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stage change: Update date_end if folded stage")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vals.get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stage_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n                                              vals.update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self.update_date_end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stage_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("108")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("631.8")]),t._v("             task "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" super"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Task, self.with_context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(".create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" task\n\n    Total:\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("108")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("631.85")]),t._v("\n")])])]),a("h3",{attrs:{id:"profile-用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profile-用法"}},[t._v("#")]),t._v(" @profile 用法")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引入 profile")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" odoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profiler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" profile\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加装饰器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model_create_multi")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@profile")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vals_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-- 输出结果 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-10-30 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":41:29,185 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6884")]),t._v(" INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1029")]),t._v(" odoo.tools.profiler:\ncalls     queries   ms\nres.users --------------------------- /opt/odoo/./core/odoo/addons/base/models/res_users.py, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("474")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02")]),t._v("          @api.model_create_multi\n                                  @profile\n                                  def create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self, vals_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("313.6")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" super"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Users, self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vals_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.04")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" users:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.17")]),t._v("                  user.partner_id.write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'company_id'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" user.company_id.id, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" user.active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v("\n\nTotal:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("58")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("322.84")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
if(!self.define){let s,o={};const e=(e,l)=>(e=new URL(e+".js",l).href,o[e]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=o,document.head.appendChild(s)}else s=e,importScripts(e),o()})).then((()=>{let s=o[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let r={};const a=s=>e(s,i),t={module:{uri:i},exports:r,require:a};o[i]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(n(...s),r)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"db002066ac31efae3ba45f2d1d886b3b"},{url:"assets/app.aecoPbHw.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.D3pq0LMl.js",revision:null},{url:"assets/chunks/framework.q8cpVy6V.js",revision:null},{url:"assets/chunks/giscus-BNK3dBIH.B_EkeIy7.js",revision:null},{url:"assets/chunks/theme.D4uNK_C4.js",revision:null},{url:"assets/chunks/virtual_pwa-register.DvtJE4Me.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.BjafZXvz.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/index.md.DPmA0Pp_.js",revision:null},{url:"assets/index.md.DPmA0Pp_.lean.js",revision:null},{url:"assets/pages_about.md.CxZQ5v-Y.js",revision:null},{url:"assets/pages_about.md.CxZQ5v-Y.lean.js",revision:null},{url:"assets/pages_archives.md.BHzaG7aT.js",revision:null},{url:"assets/pages_archives.md.BHzaG7aT.lean.js",revision:null},{url:"assets/pages_category.md.CsanzUIm.js",revision:null},{url:"assets/pages_category.md.CsanzUIm.lean.js",revision:null},{url:"assets/pages_tags.md.PnMSkC32.js",revision:null},{url:"assets/pages_tags.md.PnMSkC32.lean.js",revision:null},{url:"assets/posts_algorithm_traversing-binary-tree.md.T8H8GYV1.js",revision:null},{url:"assets/posts_algorithm_traversing-binary-tree.md.T8H8GYV1.lean.js",revision:null},{url:"assets/posts_crawler_bypass-website-call-backend-api.md.DcWh54nG.js",revision:null},{url:"assets/posts_crawler_bypass-website-call-backend-api.md.DcWh54nG.lean.js",revision:null},{url:"assets/posts_database_SQL-constraints.md.RZyiX3uG.js",revision:null},{url:"assets/posts_database_SQL-constraints.md.RZyiX3uG.lean.js",revision:null},{url:"assets/posts_database_SQL-keyword-order.md.R6IH4X5E.js",revision:null},{url:"assets/posts_database_SQL-keyword-order.md.R6IH4X5E.lean.js",revision:null},{url:"assets/posts_database_SQL-NULL-Func.md.B9xwjKjw.js",revision:null},{url:"assets/posts_database_SQL-NULL-Func.md.B9xwjKjw.lean.js",revision:null},{url:"assets/posts_database_SQL-statement.md.Cwz8A257.js",revision:null},{url:"assets/posts_database_SQL-statement.md.Cwz8A257.lean.js",revision:null},{url:"assets/posts_database_why-redis-fast.md.BBnd2y2Z.js",revision:null},{url:"assets/posts_database_why-redis-fast.md.BBnd2y2Z.lean.js",revision:null},{url:"assets/posts_devops_ansible-deploy-docker-compose-service.md.Mw2XI79B.js",revision:null},{url:"assets/posts_devops_ansible-deploy-docker-compose-service.md.Mw2XI79B.lean.js",revision:null},{url:"assets/posts_docker_docker-compose-hosts.md.B8N3HkI7.js",revision:null},{url:"assets/posts_docker_docker-compose-hosts.md.B8N3HkI7.lean.js",revision:null},{url:"assets/posts_docker_docker-host.md.dm-w5pOB.js",revision:null},{url:"assets/posts_docker_docker-host.md.dm-w5pOB.lean.js",revision:null},{url:"assets/posts_docker_docker-install-use.md.aF0BPP2W.js",revision:null},{url:"assets/posts_docker_docker-install-use.md.aF0BPP2W.lean.js",revision:null},{url:"assets/posts_docker_Docker-rm.md.D8NWhK_4.js",revision:null},{url:"assets/posts_docker_Docker-rm.md.D8NWhK_4.lean.js",revision:null},{url:"assets/posts_docker_run-code-server-in-docker.md.DTO0YVg9.js",revision:null},{url:"assets/posts_docker_run-code-server-in-docker.md.DTO0YVg9.lean.js",revision:null},{url:"assets/posts_frontend_intall-and-use-yarn.md.CbCj-78s.js",revision:null},{url:"assets/posts_frontend_intall-and-use-yarn.md.CbCj-78s.lean.js",revision:null},{url:"assets/posts_frontend_rust-wasm.md.CKi6FxUX.js",revision:null},{url:"assets/posts_frontend_rust-wasm.md.CKi6FxUX.lean.js",revision:null},{url:"assets/posts_frontend_vue-init-project.md.4057bJ3Y.js",revision:null},{url:"assets/posts_frontend_vue-init-project.md.4057bJ3Y.lean.js",revision:null},{url:"assets/posts_frontend_vuepress-blog.md.lUmgCLT0.js",revision:null},{url:"assets/posts_frontend_vuepress-blog.md.lUmgCLT0.lean.js",revision:null},{url:"assets/posts_frontend_web-vscode.md.nJXWaBs-.js",revision:null},{url:"assets/posts_frontend_web-vscode.md.nJXWaBs-.lean.js",revision:null},{url:"assets/posts_git_Count-Lines-by-git-log.md.Bdb3BqjE.js",revision:null},{url:"assets/posts_git_Count-Lines-by-git-log.md.Bdb3BqjE.lean.js",revision:null},{url:"assets/posts_git_Git_ignore_SSL.md.MnFU3Cal.js",revision:null},{url:"assets/posts_git_Git_ignore_SSL.md.MnFU3Cal.lean.js",revision:null},{url:"assets/posts_git_git-commit-amend-date.md.BB5bCQ4l.js",revision:null},{url:"assets/posts_git_git-commit-amend-date.md.BB5bCQ4l.lean.js",revision:null},{url:"assets/posts_git_git-default-editor.md.BlHIS20V.js",revision:null},{url:"assets/posts_git_git-default-editor.md.BlHIS20V.lean.js",revision:null},{url:"assets/posts_git_Git-ignore-file-permission-changes.md.BiRwWK-y.js",revision:null},{url:"assets/posts_git_Git-ignore-file-permission-changes.md.BiRwWK-y.lean.js",revision:null},{url:"assets/posts_git_use-multi-access-token.md._TrAED1L.js",revision:null},{url:"assets/posts_git_use-multi-access-token.md._TrAED1L.lean.js",revision:null},{url:"assets/posts_hackintosh_DSDT-SSDT-battery.md._gfimDoM.js",revision:null},{url:"assets/posts_hackintosh_DSDT-SSDT-battery.md._gfimDoM.lean.js",revision:null},{url:"assets/posts_hackintosh_hotpatch-fn-brightness.md.CMlDPhN4.js",revision:null},{url:"assets/posts_hackintosh_hotpatch-fn-brightness.md.CMlDPhN4.lean.js",revision:null},{url:"assets/posts_hackintosh_ShinalonYAO7000-hackintosh.md.BfnwgX6x.js",revision:null},{url:"assets/posts_hackintosh_ShinalonYAO7000-hackintosh.md.BfnwgX6x.lean.js",revision:null},{url:"assets/posts_http_https-shakehand.md.BHtASmPO.js",revision:null},{url:"assets/posts_http_https-shakehand.md.BHtASmPO.lean.js",revision:null},{url:"assets/posts_java_idea-remote-debug.md.ZNe7qmjC.js",revision:null},{url:"assets/posts_java_idea-remote-debug.md.ZNe7qmjC.lean.js",revision:null},{url:"assets/posts_java_java-http-proxy.md.BMffJxN5.js",revision:null},{url:"assets/posts_java_java-http-proxy.md.BMffJxN5.lean.js",revision:null},{url:"assets/posts_java_java-JacksonUtil.md.BgaEzR1A.js",revision:null},{url:"assets/posts_java_java-JacksonUtil.md.BgaEzR1A.lean.js",revision:null},{url:"assets/posts_java_java-Pinyin4jUtil.md.NX_l68pH.js",revision:null},{url:"assets/posts_java_java-Pinyin4jUtil.md.NX_l68pH.lean.js",revision:null},{url:"assets/posts_java_java-spring-MyBatis-Annotation.md.DIRETT1g.js",revision:null},{url:"assets/posts_java_java-spring-MyBatis-Annotation.md.DIRETT1g.lean.js",revision:null},{url:"assets/posts_java_java-Tetris.md.C5S3rO3w.js",revision:null},{url:"assets/posts_java_java-Tetris.md.C5S3rO3w.lean.js",revision:null},{url:"assets/posts_java_spring-boot-webflux-cors.md.jlhxIye5.js",revision:null},{url:"assets/posts_java_spring-boot-webflux-cors.md.jlhxIye5.lean.js",revision:null},{url:"assets/posts_java_spring-RedisTemplate.md.BpjnthZA.js",revision:null},{url:"assets/posts_java_spring-RedisTemplate.md.BpjnthZA.lean.js",revision:null},{url:"assets/posts_java_springboot-disable-autoconfig.md.CLRi7hZU.js",revision:null},{url:"assets/posts_java_springboot-disable-autoconfig.md.CLRi7hZU.lean.js",revision:null},{url:"assets/posts_java_springboot-schedule-task.md.BmxyDdnI.js",revision:null},{url:"assets/posts_java_springboot-schedule-task.md.BmxyDdnI.lean.js",revision:null},{url:"assets/posts_java_springboot-swagger-ui-custom-config.md.BNsspZ_4.js",revision:null},{url:"assets/posts_java_springboot-swagger-ui-custom-config.md.BNsspZ_4.lean.js",revision:null},{url:"assets/posts_java_TOTP.md.DqT6YgRB.js",revision:null},{url:"assets/posts_java_TOTP.md.DqT6YgRB.lean.js",revision:null},{url:"assets/posts_linux_docker-nginx-acme-trojan-go.md.BkOqZBrh.js",revision:null},{url:"assets/posts_linux_docker-nginx-acme-trojan-go.md.BkOqZBrh.lean.js",revision:null},{url:"assets/posts_linux_install-ubuntu-with-xrdp-in-termux.md.B1NPTCsC.js",revision:null},{url:"assets/posts_linux_install-ubuntu-with-xrdp-in-termux.md.B1NPTCsC.lean.js",revision:null},{url:"assets/posts_linux_linux-chm2html.md.BLXkioR7.js",revision:null},{url:"assets/posts_linux_linux-chm2html.md.BLXkioR7.lean.js",revision:null},{url:"assets/posts_linux_linux-ecs.md.DcN4tQDH.js",revision:null},{url:"assets/posts_linux_linux-ecs.md.DcN4tQDH.lean.js",revision:null},{url:"assets/posts_linux_Linux-ssr.md.BcDyscJr.js",revision:null},{url:"assets/posts_linux_Linux-ssr.md.BcDyscJr.lean.js",revision:null},{url:"assets/posts_linux_mkcert.md.CdiM8lIJ.js",revision:null},{url:"assets/posts_linux_mkcert.md.CdiM8lIJ.lean.js",revision:null},{url:"assets/posts_linux_nginx-Access-Control-Allow-Origin.md.D7mvPXHW.js",revision:null},{url:"assets/posts_linux_nginx-Access-Control-Allow-Origin.md.D7mvPXHW.lean.js",revision:null},{url:"assets/posts_linux_nginx-upstream.md.CHKOX5wE.js",revision:null},{url:"assets/posts_linux_nginx-upstream.md.CHKOX5wE.lean.js",revision:null},{url:"assets/posts_linux_offline-install-oh-my-zsh.md.B5ie4tsY.js",revision:null},{url:"assets/posts_linux_offline-install-oh-my-zsh.md.B5ie4tsY.lean.js",revision:null},{url:"assets/posts_linux_ubuntu-switch-sources.md.BNqhGbmx.js",revision:null},{url:"assets/posts_linux_ubuntu-switch-sources.md.BNqhGbmx.lean.js",revision:null},{url:"assets/posts_linux_Windows10-using-vscode-run-odoo12-in-wsl.md.BJ0Frgf0.js",revision:null},{url:"assets/posts_linux_Windows10-using-vscode-run-odoo12-in-wsl.md.BJ0Frgf0.lean.js",revision:null},{url:"assets/posts_linux_wsl-linux-custom-install.md.BBpZYNDA.js",revision:null},{url:"assets/posts_linux_wsl-linux-custom-install.md.BBpZYNDA.lean.js",revision:null},{url:"assets/posts_linux_wsl2-and-docker-compact-vdisk.md.BUjOGtCg.js",revision:null},{url:"assets/posts_linux_wsl2-and-docker-compact-vdisk.md.BUjOGtCg.lean.js",revision:null},{url:"assets/posts_linux_wsl2-install.md.BfwmDSRp.js",revision:null},{url:"assets/posts_linux_wsl2-install.md.BfwmDSRp.lean.js",revision:null},{url:"assets/posts_linux_wsl2-use-winip.md.CEktiMDv.js",revision:null},{url:"assets/posts_linux_wsl2-use-winip.md.CEktiMDv.lean.js",revision:null},{url:"assets/posts_linux_xampp-building-a-website.md.CJR4CpBw.js",revision:null},{url:"assets/posts_linux_xampp-building-a-website.md.CJR4CpBw.lean.js",revision:null},{url:"assets/posts_macos_android-emulator.md.DXyfq7r5.js",revision:null},{url:"assets/posts_macos_android-emulator.md.DXyfq7r5.lean.js",revision:null},{url:"assets/posts_macos_Brew-cask-install-software.md.YBg-MICv.js",revision:null},{url:"assets/posts_macos_Brew-cask-install-software.md.YBg-MICv.lean.js",revision:null},{url:"assets/posts_micropython_esp32-cam.md.BYW5GATM.js",revision:null},{url:"assets/posts_micropython_esp32-cam.md.BYW5GATM.lean.js",revision:null},{url:"assets/posts_mq_ensure-not-repeatedly-consumed.md.1afuUyXx.js",revision:null},{url:"assets/posts_mq_ensure-not-repeatedly-consumed.md.1afuUyXx.lean.js",revision:null},{url:"assets/posts_mq_ensure-order-of-mq.md.DyHOpFI7.js",revision:null},{url:"assets/posts_mq_ensure-order-of-mq.md.DyHOpFI7.lean.js",revision:null},{url:"assets/posts_mq_high-availability-of-mq.md.DlGk9yU9.js",revision:null},{url:"assets/posts_mq_high-availability-of-mq.md.DlGk9yU9.lean.js",revision:null},{url:"assets/posts_mq_mq-problems.md.n1TY8Y_i.js",revision:null},{url:"assets/posts_mq_mq-problems.md.n1TY8Y_i.lean.js",revision:null},{url:"assets/posts_mq_why-mq.md.BM-XEpFS.js",revision:null},{url:"assets/posts_mq_why-mq.md.BM-XEpFS.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-api-decorators.md.Dkx_XY67.js",revision:null},{url:"assets/posts_odoo_Odoo-api-decorators.md.Dkx_XY67.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-api-onchange.md.gQXq3xqu.js",revision:null},{url:"assets/posts_odoo_Odoo-api-onchange.md.gQXq3xqu.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-building-a-new-model.md.D2dhGwTl.js",revision:null},{url:"assets/posts_odoo_Odoo-building-a-new-model.md.D2dhGwTl.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Challenge.md.CyjuVzjb.js",revision:null},{url:"assets/posts_odoo_Odoo-Challenge.md.CyjuVzjb.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-class-Many2many.md.DXXbKf72.js",revision:null},{url:"assets/posts_odoo_Odoo-class-Many2many.md.DXXbKf72.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-class-o-row.md.D4_2PwS6.js",revision:null},{url:"assets/posts_odoo_Odoo-class-o-row.md.D4_2PwS6.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-context.md.CQeFmEOk.js",revision:null},{url:"assets/posts_odoo_Odoo-context.md.CQeFmEOk.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-requests.md.Dkx2UvdU.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-requests.md.Dkx2UvdU.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-Website.md.BFO_4iDS.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-Website.md.BFO_4iDS.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-domain-in.md.DlvyrO-N.js",revision:null},{url:"assets/posts_odoo_Odoo-domain-in.md.DlvyrO-N.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Domain.md.C_DnSgkR.js",revision:null},{url:"assets/posts_odoo_Odoo-Domain.md.C_DnSgkR.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-external-api.md.BnC-ISvr.js",revision:null},{url:"assets/posts_odoo_Odoo-external-api.md.BnC-ISvr.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-fields.md.B2hFM_VO.js",revision:null},{url:"assets/posts_odoo_Odoo-fields.md.B2hFM_VO.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Form-add-button-statusbar.md.Blj7x1Y5.js",revision:null},{url:"assets/posts_odoo_Odoo-Form-add-button-statusbar.md.Blj7x1Y5.lean.js",revision:null},{url:"assets/posts_odoo_odoo-func-env-context.md.BlQN8JrB.js",revision:null},{url:"assets/posts_odoo_odoo-func-env-context.md.BlQN8JrB.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-inherit-inherits-delegate.md.COLcDrwj.js",revision:null},{url:"assets/posts_odoo_Odoo-inherit-inherits-delegate.md.COLcDrwj.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-actions-server.md.3b8bejAl.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-actions-server.md.3b8bejAl.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-cron.md.BLcOdZRF.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-cron.md.BLcOdZRF.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-rule.md.CanoZL-A.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-rule.md.CanoZL-A.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-sequence.md.B5PnoIDU.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-sequence.md.B5PnoIDU.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-mail-message.md.FfZYfxG6.js",revision:null},{url:"assets/posts_odoo_Odoo-mail-message.md.FfZYfxG6.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-many2one-hide-create.md.CDdyHFkI.js",revision:null},{url:"assets/posts_odoo_Odoo-many2one-hide-create.md.CDdyHFkI.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Many2one-three-level-domain.md.Brjmi6ht.js",revision:null},{url:"assets/posts_odoo_Odoo-Many2one-three-level-domain.md.Brjmi6ht.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-model-inherit-xpath.md.DSezFar_.js",revision:null},{url:"assets/posts_odoo_Odoo-model-inherit-xpath.md.DSezFar_.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-models-AbstractModel.md.tsngdw8q.js",revision:null},{url:"assets/posts_odoo_Odoo-models-AbstractModel.md.tsngdw8q.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-odoo13-searchpanel.md.DOxZ4yOM.js",revision:null},{url:"assets/posts_odoo_Odoo-odoo13-searchpanel.md.DOxZ4yOM.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-one2many-many2many-write-rule.md.BSETgYEg.js",revision:null},{url:"assets/posts_odoo_Odoo-one2many-many2many-write-rule.md.BSETgYEg.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Order.md.Bh_PVNFR.js",revision:null},{url:"assets/posts_odoo_Odoo-Order.md.Bh_PVNFR.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-profile.md.BMS-xIRu.js",revision:null},{url:"assets/posts_odoo_Odoo-profile.md.BMS-xIRu.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-search-view.md.-LJ71E1Q.js",revision:null},{url:"assets/posts_odoo_Odoo-search-view.md.-LJ71E1Q.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Settings.md.CKBQoIq6.js",revision:null},{url:"assets/posts_odoo_Odoo-Settings.md.CKBQoIq6.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Translation.md.D8Nls_n7.js",revision:null},{url:"assets/posts_odoo_Odoo-Translation.md.D8Nls_n7.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-group-col-colspan.md.DsNV4Fep.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-group-col-colspan.md.DsNV4Fep.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-invisible.md.C3Oc3Lxr.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-invisible.md.C3Oc3Lxr.lean.js",revision:null},{url:"assets/posts_odoo_Run-odoo-in-docker-code-server.md.C45ZoFAo.js",revision:null},{url:"assets/posts_odoo_Run-odoo-in-docker-code-server.md.C45ZoFAo.lean.js",revision:null},{url:"assets/posts_odoo_Run-Odoo-in-Windows-WSL.md.Bw2kqFsi.js",revision:null},{url:"assets/posts_odoo_Run-Odoo-in-Windows-WSL.md.Bw2kqFsi.lean.js",revision:null},{url:"assets/posts_other_aria2-replace-thunder.md.BmPRUnIE.js",revision:null},{url:"assets/posts_other_aria2-replace-thunder.md.BmPRUnIE.lean.js",revision:null},{url:"assets/posts_other_hexo-live2d.md.CtWyFyU1.js",revision:null},{url:"assets/posts_other_hexo-live2d.md.CtWyFyU1.lean.js",revision:null},{url:"assets/posts_other_Install-font-source-code-pro.md.DMkbiINl.js",revision:null},{url:"assets/posts_other_Install-font-source-code-pro.md.DMkbiINl.lean.js",revision:null},{url:"assets/posts_other_iqiyi-danmu-convert.md.Bqfl0-Yp.js",revision:null},{url:"assets/posts_other_iqiyi-danmu-convert.md.Bqfl0-Yp.lean.js",revision:null},{url:"assets/posts_other_mipad2-win10-block-keys.md.DumPE3sP.js",revision:null},{url:"assets/posts_other_mipad2-win10-block-keys.md.DumPE3sP.lean.js",revision:null},{url:"assets/posts_python_asyncio-run-in-executor.md.D-hGA_gd.js",revision:null},{url:"assets/posts_python_asyncio-run-in-executor.md.D-hGA_gd.lean.js",revision:null},{url:"assets/posts_python_deadlock.md.DLp6P6iJ.js",revision:null},{url:"assets/posts_python_deadlock.md.DLp6P6iJ.lean.js",revision:null},{url:"assets/posts_python_locust.md.f9MxJZCc.js",revision:null},{url:"assets/posts_python_locust.md.f9MxJZCc.lean.js",revision:null},{url:"assets/posts_python_normal-errors.md.60aFRICY.js",revision:null},{url:"assets/posts_python_normal-errors.md.60aFRICY.lean.js",revision:null},{url:"assets/posts_python_python-bitwise-operation.md.BLcSkYSI.js",revision:null},{url:"assets/posts_python_python-bitwise-operation.md.BLcSkYSI.lean.js",revision:null},{url:"assets/posts_python_python-class-self-and-cls.md.BmU-47Mn.js",revision:null},{url:"assets/posts_python_python-class-self-and-cls.md.BmU-47Mn.lean.js",revision:null},{url:"assets/posts_python_python-dynamic-import.md.Y_E39y2a.js",revision:null},{url:"assets/posts_python_python-dynamic-import.md.Y_E39y2a.lean.js",revision:null},{url:"assets/posts_python_Python-locals.md.S9vdhQsS.js",revision:null},{url:"assets/posts_python_Python-locals.md.S9vdhQsS.lean.js",revision:null},{url:"assets/posts_python_python-metaclass.md.BV-YVXK0.js",revision:null},{url:"assets/posts_python_python-metaclass.md.BV-YVXK0.lean.js",revision:null},{url:"assets/posts_python_Python-sorted.md.CFJ7r1Fe.js",revision:null},{url:"assets/posts_python_Python-sorted.md.CFJ7r1Fe.lean.js",revision:null},{url:"assets/posts_python_Python3-mro-class.md.BODb-3Ry.js",revision:null},{url:"assets/posts_python_Python3-mro-class.md.BODb-3Ry.lean.js",revision:null},{url:"assets/posts_python_timeit-Measure-execution-time.md.BUFt-M4y.js",revision:null},{url:"assets/posts_python_timeit-Measure-execution-time.md.BUFt-M4y.lean.js",revision:null},{url:"assets/posts_python_whats-new-in-python3-8.md.BKb-VYSB.js",revision:null},{url:"assets/posts_python_whats-new-in-python3-8.md.BKb-VYSB.lean.js",revision:null},{url:"assets/posts_redis_fast-redis-zset.md.19AoIOnx.js",revision:null},{url:"assets/posts_redis_fast-redis-zset.md.19AoIOnx.lean.js",revision:null},{url:"assets/posts_router_iwpriv-DisConnectSta.md.CrjzoWbt.js",revision:null},{url:"assets/posts_router_iwpriv-DisConnectSta.md.CrjzoWbt.lean.js",revision:null},{url:"assets/posts_router_set-dmz-and-UPnP.md.DFVMiPD_.js",revision:null},{url:"assets/posts_router_set-dmz-and-UPnP.md.DFVMiPD_.lean.js",revision:null},{url:"assets/posts_router_wake-on-lan.md.DJzCD5OO.js",revision:null},{url:"assets/posts_router_wake-on-lan.md.DJzCD5OO.lean.js",revision:null},{url:"assets/public_readme.md.BAUPQlkg.js",revision:null},{url:"assets/public_readme.md.BAUPQlkg.lean.js",revision:null},{url:"assets/style.BJOKw3ht.css",revision:null},{url:"baidu_verify_fRZdpw7Mia.html",revision:"f4435c90711139a759564155c19df653"},{url:"google8beda02b5c39281f.html",revision:"796a76c93ca61203b46a48dca1923bc3"},{url:"googleb01def48009a5ef6.html",revision:"96834484da21f2a4897751f1eafea7a4"},{url:"imgs/avatar.png",revision:"71c1628ddfaedf527139c32ea0341636"},{url:"imgs/chatgpt_reverse_proxy/overview.png",revision:"c1beb34a5c635f2d737c72029d3d66fa"},{url:"imgs/dsdt1.png",revision:"7f79b3f3353c990cbd8fe51adebe7401"},{url:"imgs/favicon.ico",revision:"7f969f62ee272a3be19966806fff4ad5"},{url:"imgs/iqiyi-danmu/br2Object.png",revision:"5e3d5b1cb507abdd9d98e4f9fbb9ea8e"},{url:"imgs/iqiyi-danmu/F12.png",revision:"cd304d64992637523c12350749524c2e"},{url:"imgs/iqiyi-danmu/initiator.png",revision:"a548841731ac03611a3d3914793d6563"},{url:"imgs/iqiyi-danmu/proto-danmu.png",revision:"05f4b9bc01a75d903724286ef2a355a8"},{url:"imgs/java/idea-remote-debug.png",revision:"5d7256b759624d90c8ffcc5c73a81ed9"},{url:"imgs/micropython/esp32-cam.png",revision:"50db592381ddf7c8ad95e551bee15a1c"},{url:"imgs/odoo-challenge/odoo-challenge-1.png",revision:"f6a482c738adf73d2b223be2fcfb1a64"},{url:"imgs/odoo-challenge/odoo-challenge-10.png",revision:"48440c3270efe9532678d3bd93170464"},{url:"imgs/odoo-challenge/odoo-challenge-11.png",revision:"c245cc6e2928899e2aa79b72147b3dac"},{url:"imgs/odoo-challenge/odoo-challenge-2.png",revision:"72968b41667460b97c3f88add76dfcf6"},{url:"imgs/odoo-challenge/odoo-challenge-3.png",revision:"421f7b3e262810edab16ba5cd3085e6b"},{url:"imgs/odoo-challenge/odoo-challenge-4.png",revision:"21a4ae788c82ff2fcf09cf7bccc2dc83"},{url:"imgs/odoo-challenge/odoo-challenge-5.png",revision:"611213339284819498299463822790ee"},{url:"imgs/odoo-challenge/odoo-challenge-6.png",revision:"82333b755c944d544088f8f52b40fe68"},{url:"imgs/odoo-challenge/odoo-challenge-7-1.png",revision:"23b96621af3afaea1ee89d891f6a4010"},{url:"imgs/odoo-challenge/odoo-challenge-7-2.png",revision:"ece14408813dd41dba54d5496b11fd67"},{url:"imgs/odoo-challenge/odoo-challenge-8.png",revision:"55a6c597c69a128f44229e4d23180926"},{url:"imgs/odoo-challenge/odoo-challenge-9.png",revision:"e2b3e64d1a3277a56a50b5b9a6379506"},{url:"imgs/odoo-challenge/odoo-challenge-end.png",revision:"9244308d50dfa6b1fa4db9624312c448"},{url:"imgs/odoo-model/class_o_row.png",revision:"ad47195c7fe0e3546abd7f320de0280d"},{url:"imgs/odoo-model/manifest.png",revision:"9819bc935e67d58a3303f77e68928214"},{url:"imgs/odoo-model/models.png",revision:"39cb44d6be08ae17a99b6bad54bad802"},{url:"imgs/odoo-model/newmodel.png",revision:"d347c3afa0bf3b2bee0775c5751955c5"},{url:"imgs/odoo-model/viewmenu.png",revision:"7d933b1fc60ee61ca606e69ffb8a800f"},{url:"imgs/odoo/odoo_action_server.png",revision:"097056b89e6219308812be8cf894e7e3"},{url:"imgs/odoo/odoo_class_many2many_2.png",revision:"ed426ef9a5ced8711bcff1a7d9ba1cb5"},{url:"imgs/odoo/odoo_class_many2many.png",revision:"c83c80eb0b554733a2bc0e91b8808643"},{url:"imgs/router/dmz.png",revision:"a85d59740c8d20c6a89db2019e006677"},{url:"imgs/router/ssh.png",revision:"7e95709d83748e216ba02a8978767722"},{url:"imgs/router/UPnP.png",revision:"c2081f0f2d6025a72f079aae44c030b8"},{url:"imgs/router/wake-on-lan.png",revision:"8eca2e0989cc7a7f8e6bbb799fb78e53"},{url:"imgs/source-code-pro/source-code-pro.png",revision:"e5c117d37cacbd2b93dc1f1802e04626"},{url:"imgs/wsl/wsl1.png",revision:"2e5106e13f5d3bb5065663e118a29ba8"},{url:"imgs/wsl/wsl2.png",revision:"b7bcba3c40f48cca07a7b617b6d8a514"},{url:"imgs/wsl/wsl3.png",revision:"5f9b2fb0e251ec5212aff830f983674f"},{url:"imgs/wsl/wsl4.png",revision:"0110500b48c2053ddb50ef5a24c573a7"},{url:"imgs/xampp.png",revision:"4672d13ff1caee692e4d1dbb9fab0b44"},{url:"index.html",revision:"1d302fba55ccfb8e90e0bf641618301a"},{url:"pages/about.html",revision:"785679c7186731c7eb7e3a8de014c0f5"},{url:"pages/archives.html",revision:"decd6aeb6be4e8345a6d4f8cbe2a9d6e"},{url:"pages/category.html",revision:"1a3106a6d5da1ee6fea456a0aa903cf1"},{url:"pages/tags.html",revision:"0a65c4bfa241afe803933ee25502ace8"},{url:"pic/1.png",revision:"ad603101525b868282394bf980678776"},{url:"pic/2.png",revision:"774fac77a3f4ad8538f3c25baedb3b6b"},{url:"pic/3.png",revision:"32ed578df513016702cc2ff9d17910c7"},{url:"pic/4.png",revision:"ceb3595c95403eaf24a53533cee88313"},{url:"pic/5.png",revision:"3bc965b815aea84b61011518f12fdbe7"},{url:"pic/6.png",revision:"ccbf1d12c6bf57d3f956e52f7f6de821"},{url:"pic/7.png",revision:"d11de7a35d0097b39653fcee4646018d"},{url:"pic/8.png",revision:"c7fd371c899f85c64e7ef763d1da158f"},{url:"pic/9.png",revision:"b251b7cc04dbdf9a2304d8f9e8f2108b"},{url:"pic/install-ubuntu-with-xrdp-in-termux/mstsc.png",revision:"fc7d8bf6cb0683ba931434c430217c65"},{url:"posts/algorithm/traversing-binary-tree.html",revision:"5e538beb3edef625be04b09cb14e0f56"},{url:"posts/crawler/bypass-website-call-backend-api.html",revision:"662fd125c0df74234e41644c76fdbba2"},{url:"posts/database/SQL-constraints.html",revision:"2191c7217a3a7da9e48f61b447cb1239"},{url:"posts/database/SQL-keyword-order.html",revision:"75281c1f4ce20dac6bac11d2567e4704"},{url:"posts/database/SQL-NULL-Func.html",revision:"a503979f5afa637a1689e57e911fa09d"},{url:"posts/database/SQL-statement.html",revision:"3edde5d75a6bbd466681c38e664fd64a"},{url:"posts/database/why-redis-fast.html",revision:"6a9509477240ad93935f8d10c82637d3"},{url:"posts/devops/ansible-deploy-docker-compose-service.html",revision:"46a5ea2c7a6d2edef056d95de36bcd71"},{url:"posts/docker/docker-compose-hosts.html",revision:"44745e09bca8f5f9be9ce434603a11c4"},{url:"posts/docker/docker-host.html",revision:"74c4e47cfd2e4bc7cafe137f3ade719e"},{url:"posts/docker/docker-install-use.html",revision:"d0c22b73c64f2340ff1c6788f157765f"},{url:"posts/docker/Docker-rm.html",revision:"9e1a7f34bad79a1bfb03e9942b93611c"},{url:"posts/docker/run-code-server-in-docker.html",revision:"7025ef83ef318c233b5adc52cc17417c"},{url:"posts/frontend/intall-and-use-yarn.html",revision:"308f449b3c25e55464dc8f4045a04289"},{url:"posts/frontend/rust-wasm.html",revision:"0bedcde033828bc8051edf6e16e33d57"},{url:"posts/frontend/vue-init-project.html",revision:"89e822885e3b2c39f9baaafc05614e47"},{url:"posts/frontend/vuepress-blog.html",revision:"4ab17889072b86cff178a8f9a746059b"},{url:"posts/frontend/web-vscode.html",revision:"b344e066c81c41eca8bd6d65864df20d"},{url:"posts/git/Count-Lines-by-git-log.html",revision:"c09917acbd2c8f43f575aad5a3f0fdb2"},{url:"posts/git/Git_ignore_SSL.html",revision:"1bdc25b08e9b3ca67596725f6868443f"},{url:"posts/git/git-commit-amend-date.html",revision:"30eec7f6439b04a09bc749dd0d15bf97"},{url:"posts/git/git-default-editor.html",revision:"75fdacd96334ed3b5eafd0e54a3dc182"},{url:"posts/git/Git-ignore-file-permission-changes.html",revision:"b3b90d8368b8ce040116fc47fb372fae"},{url:"posts/git/use-multi-access-token.html",revision:"ac1d6b60e44b2ac94df2d861be6319d2"},{url:"posts/hackintosh/DSDT-SSDT-battery.html",revision:"87352e0e3158650651f5a8af878bb747"},{url:"posts/hackintosh/hotpatch-fn-brightness.html",revision:"ce6be0d4903b94dfc9b2dd132033f959"},{url:"posts/hackintosh/ShinalonYAO7000-hackintosh.html",revision:"93e20c2cebe3252e58ab8636a901b5bb"},{url:"posts/http/https-shakehand.html",revision:"4bc580efb55682ed14949abcb4a280f6"},{url:"posts/java/idea-remote-debug.html",revision:"94e6f10a0fb61cda7e74af103f3385db"},{url:"posts/java/java-http-proxy.html",revision:"cfd9ce17b315873e4f707988373d8a05"},{url:"posts/java/java-JacksonUtil.html",revision:"b5a8a2de3c1129eda71c9f496b2d227b"},{url:"posts/java/java-Pinyin4jUtil.html",revision:"6a8ddc172d7c5b3375a0ba162112ce87"},{url:"posts/java/java-spring-MyBatis-Annotation.html",revision:"a1e6d2b2f80c219e8eedf55b71f888be"},{url:"posts/java/java-Tetris.html",revision:"ecf7beb8a6acb998e3468bf8b755d344"},{url:"posts/java/spring-boot-webflux-cors.html",revision:"dca20ec5260d82b2bf66fa68ec16b4eb"},{url:"posts/java/spring-RedisTemplate.html",revision:"8860bcf0a2739d555da658d281955a5c"},{url:"posts/java/springboot-disable-autoconfig.html",revision:"3d9b7cdb3fd6a84830fd8e5b770e7d11"},{url:"posts/java/springboot-schedule-task.html",revision:"16b3181acbf5ca996d68a0bd7ca3f1aa"},{url:"posts/java/springboot-swagger-ui-custom-config.html",revision:"f4f0a64b221bb8bd07da21bb8e34cec5"},{url:"posts/java/TOTP.html",revision:"412a41f9d8d3a7ed27e470fe1296ce80"},{url:"posts/linux/docker-nginx-acme-trojan-go.html",revision:"29925d5cb9e529ae06af9260714e71d1"},{url:"posts/linux/install-ubuntu-with-xrdp-in-termux.html",revision:"fd0d79b4bb5221391f2efb20c48a44ae"},{url:"posts/linux/linux-chm2html.html",revision:"eeef916509221948709a2362545d7654"},{url:"posts/linux/linux-ecs.html",revision:"b4c4f9a3c2a840fc20ecea352fd4267c"},{url:"posts/linux/Linux-ssr.html",revision:"bef5abf3dd53bf6ef87a700170e8fd70"},{url:"posts/linux/mkcert.html",revision:"57bd7b39ab461b3a7e270bc679680dea"},{url:"posts/linux/nginx-Access-Control-Allow-Origin.html",revision:"89dcaed693214415bc67032ddfa0d3d4"},{url:"posts/linux/nginx-upstream.html",revision:"229854acea2f7a2bedadef281ba11219"},{url:"posts/linux/offline-install-oh-my-zsh.html",revision:"7c7d2b7702becb5647896edaefaf88d6"},{url:"posts/linux/ubuntu-switch-sources.html",revision:"269be909e03d7ff30e0c06097e82a9cb"},{url:"posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",revision:"bcd5b6faf86327266b57718d872c57b8"},{url:"posts/linux/wsl-linux-custom-install.html",revision:"8f7931bcfa0980e1f848692ce4d4f59f"},{url:"posts/linux/wsl2-and-docker-compact-vdisk.html",revision:"de6cb91a3fc8c656106493dba962a5e1"},{url:"posts/linux/wsl2-install.html",revision:"290860764b28ed70ba5af755b5c1c315"},{url:"posts/linux/wsl2-use-winip.html",revision:"149e3ed9bcf8fc1c827ea22423a33a32"},{url:"posts/linux/xampp-building-a-website.html",revision:"fc1e024b7c575954e51292900a7299c7"},{url:"posts/macos/android-emulator.html",revision:"50ce3444cfe022e37e7b3a88a9a7a1bc"},{url:"posts/macos/Brew-cask-install-software.html",revision:"936590358f7b889e0876d9121f74327f"},{url:"posts/micropython/esp32-cam.html",revision:"7882334b02c06c2008d2309c94c75919"},{url:"posts/mq/ensure-not-repeatedly-consumed.html",revision:"2818afddfb61a765b7a8fa0250884ce7"},{url:"posts/mq/ensure-order-of-mq.html",revision:"c5c133c87712782742f954a2b35e179d"},{url:"posts/mq/high-availability-of-mq.html",revision:"74492767fe5956a2c197469eca00fc71"},{url:"posts/mq/mq-problems.html",revision:"8b2e7e92cb6b70253a451ef4c58fb7d6"},{url:"posts/mq/why-mq.html",revision:"436240649e9492c6c5762847042769e2"},{url:"posts/odoo/Odoo-api-decorators.html",revision:"4b4bd559239e12b6dc8e32137cd7c4dd"},{url:"posts/odoo/Odoo-api-onchange.html",revision:"3350978b547c27641e58cd9a5d019af6"},{url:"posts/odoo/Odoo-building-a-new-model.html",revision:"ca9a415d268cf8689698fb92e7fe4817"},{url:"posts/odoo/Odoo-Challenge.html",revision:"ddc60c386442bd3bb1f8689908782165"},{url:"posts/odoo/Odoo-class-Many2many.html",revision:"6eb2259926ac8e68d58263af4ceffbc0"},{url:"posts/odoo/Odoo-class-o-row.html",revision:"402ca76b24c54ad724e8b922cfca8ebc"},{url:"posts/odoo/Odoo-context.html",revision:"39cefb0ad3e079b9c383df1a7d341e2a"},{url:"posts/odoo/Odoo-Controllers-requests.html",revision:"398bc9a290f0f2cd51545c344a70bb87"},{url:"posts/odoo/Odoo-Controllers-Website.html",revision:"2152f38b98d7d58ea8724c7343b91ea6"},{url:"posts/odoo/Odoo-domain-in.html",revision:"e10ddafb4d187be184ef6fe71d710d57"},{url:"posts/odoo/Odoo-Domain.html",revision:"2da4b4513094572f1d4f9e753a9e93b3"},{url:"posts/odoo/Odoo-external-api.html",revision:"84be94b2f7d2c3279b8e4da83da34fb6"},{url:"posts/odoo/Odoo-fields.html",revision:"379746bc605c87965b2143e773303d8b"},{url:"posts/odoo/Odoo-Form-add-button-statusbar.html",revision:"1b3eabd159fc97eb7f212cefb3c3b63f"},{url:"posts/odoo/odoo-func-env-context.html",revision:"d3f358d3d25f676089477b3d29055e30"},{url:"posts/odoo/Odoo-inherit-inherits-delegate.html",revision:"b3b87264ab648527bed26a71f76f526f"},{url:"posts/odoo/Odoo-ir-actions-server.html",revision:"2ecf35cfdc720ae24c6b478b77fbbb9e"},{url:"posts/odoo/Odoo-ir-cron.html",revision:"ee2c8d1918b58b4778173d1028e43843"},{url:"posts/odoo/Odoo-ir-rule.html",revision:"a93a3913497e50342d1a35507bdac907"},{url:"posts/odoo/Odoo-ir-sequence.html",revision:"ead9a01844d9265a511e438f7af6f06e"},{url:"posts/odoo/Odoo-mail-message.html",revision:"8d4dace794ba82ef6cab857dd8c60788"},{url:"posts/odoo/Odoo-many2one-hide-create.html",revision:"368c4b3bc703770d7005fb3f6069fae3"},{url:"posts/odoo/Odoo-Many2one-three-level-domain.html",revision:"f71b4da710618f95b333af9138e92af8"},{url:"posts/odoo/Odoo-model-inherit-xpath.html",revision:"203d4f3050b96396381298bcefe538b4"},{url:"posts/odoo/Odoo-models-AbstractModel.html",revision:"942f95b07e7317d810ce5cda0760be0f"},{url:"posts/odoo/Odoo-odoo13-searchpanel.html",revision:"d6592ea30c4bcba22a047254bd1ffe92"},{url:"posts/odoo/Odoo-one2many-many2many-write-rule.html",revision:"69f0e1a24fecaf89ab7b6b20187d74bb"},{url:"posts/odoo/Odoo-Order.html",revision:"95c28acfeab1b3535e1d6c62048c9860"},{url:"posts/odoo/Odoo-profile.html",revision:"b4a11f1aca0ac185fd750ee759449d80"},{url:"posts/odoo/Odoo-search-view.html",revision:"ac87820260ec443e370fb7841fb8353f"},{url:"posts/odoo/Odoo-Settings.html",revision:"345e267fc374b06b02b8ade04c249252"},{url:"posts/odoo/Odoo-Translation.html",revision:"2a54e1f46d81420b922267f18749c013"},{url:"posts/odoo/Odoo-xml-group-col-colspan.html",revision:"8e40ed398c57f762b7d2e6bcb0351c00"},{url:"posts/odoo/Odoo-xml-invisible.html",revision:"e7f52af59824f30f7a11dd97e9449c92"},{url:"posts/odoo/Run-odoo-in-docker-code-server.html",revision:"123d09d2e1ebb11c62d97a226658b636"},{url:"posts/odoo/Run-Odoo-in-Windows-WSL.html",revision:"1b7f1c1f83549defec4f65694ffa31d5"},{url:"posts/other/aria2-replace-thunder.html",revision:"aac2576f7a3da3f8d7497e7c831fa1a7"},{url:"posts/other/hexo-live2d.html",revision:"ee243b9ee3383fd6a8e140e2471e72a6"},{url:"posts/other/Install-font-source-code-pro.html",revision:"b6ebe867697ff1e19a27798e0fae5e64"},{url:"posts/other/iqiyi-danmu-convert.html",revision:"c308f1ea0aab7fde3cf66b842514c9dd"},{url:"posts/other/mipad2-win10-block-keys.html",revision:"dad017062152ffce1484db0fb699dec9"},{url:"posts/python/asyncio-run-in-executor.html",revision:"5abb2414800f5629d092cbb6833f8424"},{url:"posts/python/deadlock.html",revision:"c13727be716bf01750aa29a3f7160f2b"},{url:"posts/python/locust.html",revision:"cbf95bb80ed24ba8141e1c265edeae91"},{url:"posts/python/normal-errors.html",revision:"7a8494edbffa7aba64c5d3fe9f03cf18"},{url:"posts/python/python-bitwise-operation.html",revision:"a27bc7add0e0e0ee9ecccc5440960446"},{url:"posts/python/python-class-self-and-cls.html",revision:"5c625d1cb28efb62001818319481a24f"},{url:"posts/python/python-dynamic-import.html",revision:"66cbbfdaf758d736189f82b9085dc60a"},{url:"posts/python/Python-locals.html",revision:"e72f647f16e07b4c4beb39b37e176389"},{url:"posts/python/python-metaclass.html",revision:"adb7e34c4e5a9fdda73565ec81b96f9c"},{url:"posts/python/Python-sorted.html",revision:"ed5145bcdba0227aabe963358c5a374f"},{url:"posts/python/Python3-mro-class.html",revision:"747c669a14e9e3624c0244cb83d25a94"},{url:"posts/python/timeit-Measure-execution-time.html",revision:"46b4a6ab8a7717372a01bb612d25f927"},{url:"posts/python/whats-new-in-python3-8.html",revision:"0e7782f479feb9e67f2d1dc70b12033f"},{url:"posts/redis/fast-redis-zset.html",revision:"a985d5bf5307ad127b4968157c783aaa"},{url:"posts/router/iwpriv-DisConnectSta.html",revision:"a7a42ec3b414ee637bd63ced9dae8af8"},{url:"posts/router/set-dmz-and-UPnP.html",revision:"bd30801a6676b9f7a15406ab310b7936"},{url:"posts/router/wake-on-lan.html",revision:"497ffde199a8c85af107d04ff8a8332b"},{url:"public/readme.html",revision:"db9004289609b4dec5197a43dbfa4b43"},{url:"imgs/avatar.png",revision:"71c1628ddfaedf527139c32ea0341636"},{url:"manifest.webmanifest",revision:"ed7c9102aa977508512bd35714a48860"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),self.__WB_DISABLE_DEV_LOGS=!0}));

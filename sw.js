if(!self.define){let s,o={};const e=(e,l)=>(e=new URL(e+".js",l).href,o[e]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=o,document.head.appendChild(s)}else s=e,importScripts(e),o()})).then((()=>{let s=o[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let r={};const a=s=>e(s,i),t={module:{uri:i},exports:r,require:a};o[i]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(n(...s),r)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"24e0a2e5dce5f918c51288e1a8b14180"},{url:"assets/app.C7Aqbvyd.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.cr0_ST74.js",revision:null},{url:"assets/chunks/framework.q8cpVy6V.js",revision:null},{url:"assets/chunks/giscus-BNK3dBIH.B_EkeIy7.js",revision:null},{url:"assets/chunks/theme.CyihDJas.js",revision:null},{url:"assets/chunks/virtual_pwa-register.DvtJE4Me.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.DvmBBI6Z.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/index.md.DYN4LzJp.js",revision:null},{url:"assets/index.md.DYN4LzJp.lean.js",revision:null},{url:"assets/pages_about.md.Be78kqF5.js",revision:null},{url:"assets/pages_about.md.Be78kqF5.lean.js",revision:null},{url:"assets/pages_archives.md.Dh6YcNCo.js",revision:null},{url:"assets/pages_archives.md.Dh6YcNCo.lean.js",revision:null},{url:"assets/pages_category.md.C7c3MS8S.js",revision:null},{url:"assets/pages_category.md.C7c3MS8S.lean.js",revision:null},{url:"assets/pages_tags.md.CdMi_Lu6.js",revision:null},{url:"assets/pages_tags.md.CdMi_Lu6.lean.js",revision:null},{url:"assets/posts_algorithm_traversing-binary-tree.md.B9wYyvBA.js",revision:null},{url:"assets/posts_algorithm_traversing-binary-tree.md.B9wYyvBA.lean.js",revision:null},{url:"assets/posts_crawler_bypass-website-call-backend-api.md.D59AiMtR.js",revision:null},{url:"assets/posts_crawler_bypass-website-call-backend-api.md.D59AiMtR.lean.js",revision:null},{url:"assets/posts_database_SQL-constraints.md.Bf83W0S3.js",revision:null},{url:"assets/posts_database_SQL-constraints.md.Bf83W0S3.lean.js",revision:null},{url:"assets/posts_database_SQL-keyword-order.md.CfvDyqQK.js",revision:null},{url:"assets/posts_database_SQL-keyword-order.md.CfvDyqQK.lean.js",revision:null},{url:"assets/posts_database_SQL-NULL-Func.md.BlEXUX5M.js",revision:null},{url:"assets/posts_database_SQL-NULL-Func.md.BlEXUX5M.lean.js",revision:null},{url:"assets/posts_database_SQL-statement.md.Bqkknm1A.js",revision:null},{url:"assets/posts_database_SQL-statement.md.Bqkknm1A.lean.js",revision:null},{url:"assets/posts_database_why-redis-fast.md.BXWgryQb.js",revision:null},{url:"assets/posts_database_why-redis-fast.md.BXWgryQb.lean.js",revision:null},{url:"assets/posts_devops_ansible-deploy-docker-compose-service.md.tlxvtk9G.js",revision:null},{url:"assets/posts_devops_ansible-deploy-docker-compose-service.md.tlxvtk9G.lean.js",revision:null},{url:"assets/posts_docker_docker-compose-hosts.md.CV89BHe2.js",revision:null},{url:"assets/posts_docker_docker-compose-hosts.md.CV89BHe2.lean.js",revision:null},{url:"assets/posts_docker_docker-host.md.CioCdy9k.js",revision:null},{url:"assets/posts_docker_docker-host.md.CioCdy9k.lean.js",revision:null},{url:"assets/posts_docker_docker-install-use.md.BabWEyaT.js",revision:null},{url:"assets/posts_docker_docker-install-use.md.BabWEyaT.lean.js",revision:null},{url:"assets/posts_docker_Docker-rm.md.B_pegNqP.js",revision:null},{url:"assets/posts_docker_Docker-rm.md.B_pegNqP.lean.js",revision:null},{url:"assets/posts_docker_run-code-server-in-docker.md.DJc_igwe.js",revision:null},{url:"assets/posts_docker_run-code-server-in-docker.md.DJc_igwe.lean.js",revision:null},{url:"assets/posts_frontend_intall-and-use-yarn.md.C-b7NRP3.js",revision:null},{url:"assets/posts_frontend_intall-and-use-yarn.md.C-b7NRP3.lean.js",revision:null},{url:"assets/posts_frontend_rust-wasm.md.DtOjBKey.js",revision:null},{url:"assets/posts_frontend_rust-wasm.md.DtOjBKey.lean.js",revision:null},{url:"assets/posts_frontend_vue-init-project.md.CVLJt2Nk.js",revision:null},{url:"assets/posts_frontend_vue-init-project.md.CVLJt2Nk.lean.js",revision:null},{url:"assets/posts_frontend_vuepress-blog.md.DSfOdv9y.js",revision:null},{url:"assets/posts_frontend_vuepress-blog.md.DSfOdv9y.lean.js",revision:null},{url:"assets/posts_frontend_web-vscode.md.DAiMksz1.js",revision:null},{url:"assets/posts_frontend_web-vscode.md.DAiMksz1.lean.js",revision:null},{url:"assets/posts_git_Count-Lines-by-git-log.md.K4rOfr_W.js",revision:null},{url:"assets/posts_git_Count-Lines-by-git-log.md.K4rOfr_W.lean.js",revision:null},{url:"assets/posts_git_Git_ignore_SSL.md.C7ImQrQu.js",revision:null},{url:"assets/posts_git_Git_ignore_SSL.md.C7ImQrQu.lean.js",revision:null},{url:"assets/posts_git_git-commit-amend-date.md.OKEscd4e.js",revision:null},{url:"assets/posts_git_git-commit-amend-date.md.OKEscd4e.lean.js",revision:null},{url:"assets/posts_git_git-default-editor.md.CVhpDgjb.js",revision:null},{url:"assets/posts_git_git-default-editor.md.CVhpDgjb.lean.js",revision:null},{url:"assets/posts_git_Git-ignore-file-permission-changes.md.DKE4LnZx.js",revision:null},{url:"assets/posts_git_Git-ignore-file-permission-changes.md.DKE4LnZx.lean.js",revision:null},{url:"assets/posts_git_use-multi-access-token.md.Cmk2y6pf.js",revision:null},{url:"assets/posts_git_use-multi-access-token.md.Cmk2y6pf.lean.js",revision:null},{url:"assets/posts_hackintosh_DSDT-SSDT-battery.md.CDkHKNqc.js",revision:null},{url:"assets/posts_hackintosh_DSDT-SSDT-battery.md.CDkHKNqc.lean.js",revision:null},{url:"assets/posts_hackintosh_hotpatch-fn-brightness.md.D1FHzn62.js",revision:null},{url:"assets/posts_hackintosh_hotpatch-fn-brightness.md.D1FHzn62.lean.js",revision:null},{url:"assets/posts_hackintosh_ShinalonYAO7000-hackintosh.md.CNmTwzti.js",revision:null},{url:"assets/posts_hackintosh_ShinalonYAO7000-hackintosh.md.CNmTwzti.lean.js",revision:null},{url:"assets/posts_http_https-shakehand.md.CAtuGZpG.js",revision:null},{url:"assets/posts_http_https-shakehand.md.CAtuGZpG.lean.js",revision:null},{url:"assets/posts_java_idea-remote-debug.md._f6t6eH-.js",revision:null},{url:"assets/posts_java_idea-remote-debug.md._f6t6eH-.lean.js",revision:null},{url:"assets/posts_java_java-http-proxy.md.C4DsAkT4.js",revision:null},{url:"assets/posts_java_java-http-proxy.md.C4DsAkT4.lean.js",revision:null},{url:"assets/posts_java_java-JacksonUtil.md.D8mB0bnW.js",revision:null},{url:"assets/posts_java_java-JacksonUtil.md.D8mB0bnW.lean.js",revision:null},{url:"assets/posts_java_java-Pinyin4jUtil.md.DX693hEa.js",revision:null},{url:"assets/posts_java_java-Pinyin4jUtil.md.DX693hEa.lean.js",revision:null},{url:"assets/posts_java_java-spring-MyBatis-Annotation.md.BuDKLLzN.js",revision:null},{url:"assets/posts_java_java-spring-MyBatis-Annotation.md.BuDKLLzN.lean.js",revision:null},{url:"assets/posts_java_java-Tetris.md.D9gJ-cwV.js",revision:null},{url:"assets/posts_java_java-Tetris.md.D9gJ-cwV.lean.js",revision:null},{url:"assets/posts_java_spring-boot-webflux-cors.md.lAHUpQlH.js",revision:null},{url:"assets/posts_java_spring-boot-webflux-cors.md.lAHUpQlH.lean.js",revision:null},{url:"assets/posts_java_spring-RedisTemplate.md.NomBGWYe.js",revision:null},{url:"assets/posts_java_spring-RedisTemplate.md.NomBGWYe.lean.js",revision:null},{url:"assets/posts_java_springboot-disable-autoconfig.md.CbrcEpWh.js",revision:null},{url:"assets/posts_java_springboot-disable-autoconfig.md.CbrcEpWh.lean.js",revision:null},{url:"assets/posts_java_springboot-schedule-task.md.0Q2yUXPj.js",revision:null},{url:"assets/posts_java_springboot-schedule-task.md.0Q2yUXPj.lean.js",revision:null},{url:"assets/posts_java_springboot-swagger-ui-custom-config.md.DMeO9Zp5.js",revision:null},{url:"assets/posts_java_springboot-swagger-ui-custom-config.md.DMeO9Zp5.lean.js",revision:null},{url:"assets/posts_java_TOTP.md.GOujA_-A.js",revision:null},{url:"assets/posts_java_TOTP.md.GOujA_-A.lean.js",revision:null},{url:"assets/posts_linux_docker-nginx-acme-trojan-go.md.Cau2PkAK.js",revision:null},{url:"assets/posts_linux_docker-nginx-acme-trojan-go.md.Cau2PkAK.lean.js",revision:null},{url:"assets/posts_linux_install-ubuntu-with-xrdp-in-termux.md.DDm6YL6d.js",revision:null},{url:"assets/posts_linux_install-ubuntu-with-xrdp-in-termux.md.DDm6YL6d.lean.js",revision:null},{url:"assets/posts_linux_linux-chm2html.md.Cd-3vVDr.js",revision:null},{url:"assets/posts_linux_linux-chm2html.md.Cd-3vVDr.lean.js",revision:null},{url:"assets/posts_linux_linux-ecs.md.JfZM_45y.js",revision:null},{url:"assets/posts_linux_linux-ecs.md.JfZM_45y.lean.js",revision:null},{url:"assets/posts_linux_Linux-ssr.md.B58zf8ig.js",revision:null},{url:"assets/posts_linux_Linux-ssr.md.B58zf8ig.lean.js",revision:null},{url:"assets/posts_linux_mkcert.md.UZ-4DGTT.js",revision:null},{url:"assets/posts_linux_mkcert.md.UZ-4DGTT.lean.js",revision:null},{url:"assets/posts_linux_nginx-Access-Control-Allow-Origin.md.B1KdiwBH.js",revision:null},{url:"assets/posts_linux_nginx-Access-Control-Allow-Origin.md.B1KdiwBH.lean.js",revision:null},{url:"assets/posts_linux_nginx-upstream.md.CRoHOd15.js",revision:null},{url:"assets/posts_linux_nginx-upstream.md.CRoHOd15.lean.js",revision:null},{url:"assets/posts_linux_offline-install-oh-my-zsh.md.DNiVWRl5.js",revision:null},{url:"assets/posts_linux_offline-install-oh-my-zsh.md.DNiVWRl5.lean.js",revision:null},{url:"assets/posts_linux_ubuntu-switch-sources.md.Bdb4Kro7.js",revision:null},{url:"assets/posts_linux_ubuntu-switch-sources.md.Bdb4Kro7.lean.js",revision:null},{url:"assets/posts_linux_Windows10-using-vscode-run-odoo12-in-wsl.md.BI7o79gq.js",revision:null},{url:"assets/posts_linux_Windows10-using-vscode-run-odoo12-in-wsl.md.BI7o79gq.lean.js",revision:null},{url:"assets/posts_linux_wsl-linux-custom-install.md.C2DkEWXP.js",revision:null},{url:"assets/posts_linux_wsl-linux-custom-install.md.C2DkEWXP.lean.js",revision:null},{url:"assets/posts_linux_wsl2-and-docker-compact-vdisk.md.CEd9ag4S.js",revision:null},{url:"assets/posts_linux_wsl2-and-docker-compact-vdisk.md.CEd9ag4S.lean.js",revision:null},{url:"assets/posts_linux_wsl2-install.md.DU0Y0P5w.js",revision:null},{url:"assets/posts_linux_wsl2-install.md.DU0Y0P5w.lean.js",revision:null},{url:"assets/posts_linux_wsl2-use-winip.md.DmmLD8Ss.js",revision:null},{url:"assets/posts_linux_wsl2-use-winip.md.DmmLD8Ss.lean.js",revision:null},{url:"assets/posts_linux_xampp-building-a-website.md.CZMtFxCK.js",revision:null},{url:"assets/posts_linux_xampp-building-a-website.md.CZMtFxCK.lean.js",revision:null},{url:"assets/posts_macos_android-emulator.md.C97VLMlF.js",revision:null},{url:"assets/posts_macos_android-emulator.md.C97VLMlF.lean.js",revision:null},{url:"assets/posts_macos_Brew-cask-install-software.md.5xXXnBO8.js",revision:null},{url:"assets/posts_macos_Brew-cask-install-software.md.5xXXnBO8.lean.js",revision:null},{url:"assets/posts_micropython_esp32-cam.md.Bg1IgSdf.js",revision:null},{url:"assets/posts_micropython_esp32-cam.md.Bg1IgSdf.lean.js",revision:null},{url:"assets/posts_mq_ensure-not-repeatedly-consumed.md.B33v0Tc3.js",revision:null},{url:"assets/posts_mq_ensure-not-repeatedly-consumed.md.B33v0Tc3.lean.js",revision:null},{url:"assets/posts_mq_ensure-order-of-mq.md.D9HmDBrE.js",revision:null},{url:"assets/posts_mq_ensure-order-of-mq.md.D9HmDBrE.lean.js",revision:null},{url:"assets/posts_mq_high-availability-of-mq.md.BEWkVG79.js",revision:null},{url:"assets/posts_mq_high-availability-of-mq.md.BEWkVG79.lean.js",revision:null},{url:"assets/posts_mq_mq-problems.md.CA0akOwq.js",revision:null},{url:"assets/posts_mq_mq-problems.md.CA0akOwq.lean.js",revision:null},{url:"assets/posts_mq_why-mq.md.BUFsa3Ht.js",revision:null},{url:"assets/posts_mq_why-mq.md.BUFsa3Ht.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-api-decorators.md.BEwWqy_Z.js",revision:null},{url:"assets/posts_odoo_Odoo-api-decorators.md.BEwWqy_Z.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-api-onchange.md.D-JThM8g.js",revision:null},{url:"assets/posts_odoo_Odoo-api-onchange.md.D-JThM8g.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-building-a-new-model.md.BTILAX0u.js",revision:null},{url:"assets/posts_odoo_Odoo-building-a-new-model.md.BTILAX0u.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Challenge.md.QokJghDN.js",revision:null},{url:"assets/posts_odoo_Odoo-Challenge.md.QokJghDN.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-class-Many2many.md.DOga7z6-.js",revision:null},{url:"assets/posts_odoo_Odoo-class-Many2many.md.DOga7z6-.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-class-o-row.md.K2ive8cx.js",revision:null},{url:"assets/posts_odoo_Odoo-class-o-row.md.K2ive8cx.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-context.md.CYr_WFnK.js",revision:null},{url:"assets/posts_odoo_Odoo-context.md.CYr_WFnK.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-requests.md.Cbu-1cdJ.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-requests.md.Cbu-1cdJ.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-Website.md.CEOq_iLE.js",revision:null},{url:"assets/posts_odoo_Odoo-Controllers-Website.md.CEOq_iLE.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-domain-in.md.CbYoOm0Q.js",revision:null},{url:"assets/posts_odoo_Odoo-domain-in.md.CbYoOm0Q.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Domain.md.nGzfbtB_.js",revision:null},{url:"assets/posts_odoo_Odoo-Domain.md.nGzfbtB_.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-external-api.md.CgoGM4uj.js",revision:null},{url:"assets/posts_odoo_Odoo-external-api.md.CgoGM4uj.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-fields.md.eL5YW0nJ.js",revision:null},{url:"assets/posts_odoo_Odoo-fields.md.eL5YW0nJ.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Form-add-button-statusbar.md.DloAciyn.js",revision:null},{url:"assets/posts_odoo_Odoo-Form-add-button-statusbar.md.DloAciyn.lean.js",revision:null},{url:"assets/posts_odoo_odoo-func-env-context.md.Ctaq7Fxw.js",revision:null},{url:"assets/posts_odoo_odoo-func-env-context.md.Ctaq7Fxw.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-inherit-inherits-delegate.md.Bg9QsZeb.js",revision:null},{url:"assets/posts_odoo_Odoo-inherit-inherits-delegate.md.Bg9QsZeb.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-actions-server.md.D5WvPSez.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-actions-server.md.D5WvPSez.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-cron.md.aIHhYT38.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-cron.md.aIHhYT38.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-rule.md.BlAkK8Fo.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-rule.md.BlAkK8Fo.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-sequence.md.CbzcJqMY.js",revision:null},{url:"assets/posts_odoo_Odoo-ir-sequence.md.CbzcJqMY.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-mail-message.md.DF61rmrN.js",revision:null},{url:"assets/posts_odoo_Odoo-mail-message.md.DF61rmrN.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-many2one-hide-create.md.C3QDkE-e.js",revision:null},{url:"assets/posts_odoo_Odoo-many2one-hide-create.md.C3QDkE-e.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Many2one-three-level-domain.md.9kbfQzQf.js",revision:null},{url:"assets/posts_odoo_Odoo-Many2one-three-level-domain.md.9kbfQzQf.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-model-inherit-xpath.md.B_8Q1rwI.js",revision:null},{url:"assets/posts_odoo_Odoo-model-inherit-xpath.md.B_8Q1rwI.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-models-AbstractModel.md.D5sLldor.js",revision:null},{url:"assets/posts_odoo_Odoo-models-AbstractModel.md.D5sLldor.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-odoo13-searchpanel.md.BvZRBaBA.js",revision:null},{url:"assets/posts_odoo_Odoo-odoo13-searchpanel.md.BvZRBaBA.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-one2many-many2many-write-rule.md.CaNkZmeP.js",revision:null},{url:"assets/posts_odoo_Odoo-one2many-many2many-write-rule.md.CaNkZmeP.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Order.md.CWVz3Ctp.js",revision:null},{url:"assets/posts_odoo_Odoo-Order.md.CWVz3Ctp.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-profile.md.B6WjeNm_.js",revision:null},{url:"assets/posts_odoo_Odoo-profile.md.B6WjeNm_.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-search-view.md.CXIiu9z9.js",revision:null},{url:"assets/posts_odoo_Odoo-search-view.md.CXIiu9z9.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Settings.md.BnKLxIpO.js",revision:null},{url:"assets/posts_odoo_Odoo-Settings.md.BnKLxIpO.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-Translation.md.BGjo-aJG.js",revision:null},{url:"assets/posts_odoo_Odoo-Translation.md.BGjo-aJG.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-group-col-colspan.md.DRdOYoqX.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-group-col-colspan.md.DRdOYoqX.lean.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-invisible.md.Dca1cd3V.js",revision:null},{url:"assets/posts_odoo_Odoo-xml-invisible.md.Dca1cd3V.lean.js",revision:null},{url:"assets/posts_odoo_Run-odoo-in-docker-code-server.md.D2qHiGsH.js",revision:null},{url:"assets/posts_odoo_Run-odoo-in-docker-code-server.md.D2qHiGsH.lean.js",revision:null},{url:"assets/posts_odoo_Run-Odoo-in-Windows-WSL.md.Ds0FSj6n.js",revision:null},{url:"assets/posts_odoo_Run-Odoo-in-Windows-WSL.md.Ds0FSj6n.lean.js",revision:null},{url:"assets/posts_other_aria2-replace-thunder.md.D3-e0ZeE.js",revision:null},{url:"assets/posts_other_aria2-replace-thunder.md.D3-e0ZeE.lean.js",revision:null},{url:"assets/posts_other_hexo-live2d.md.D40NHgGG.js",revision:null},{url:"assets/posts_other_hexo-live2d.md.D40NHgGG.lean.js",revision:null},{url:"assets/posts_other_Install-font-source-code-pro.md.D9zVNGKi.js",revision:null},{url:"assets/posts_other_Install-font-source-code-pro.md.D9zVNGKi.lean.js",revision:null},{url:"assets/posts_other_iqiyi-danmu-convert.md.BoJ9eDWr.js",revision:null},{url:"assets/posts_other_iqiyi-danmu-convert.md.BoJ9eDWr.lean.js",revision:null},{url:"assets/posts_other_mipad2-win10-block-keys.md.DK3Iy0ld.js",revision:null},{url:"assets/posts_other_mipad2-win10-block-keys.md.DK3Iy0ld.lean.js",revision:null},{url:"assets/posts_python_asyncio-run-in-executor.md.CT0QySCa.js",revision:null},{url:"assets/posts_python_asyncio-run-in-executor.md.CT0QySCa.lean.js",revision:null},{url:"assets/posts_python_deadlock.md.BqaznVeW.js",revision:null},{url:"assets/posts_python_deadlock.md.BqaznVeW.lean.js",revision:null},{url:"assets/posts_python_locust.md.9YTmqWn0.js",revision:null},{url:"assets/posts_python_locust.md.9YTmqWn0.lean.js",revision:null},{url:"assets/posts_python_normal-errors.md.D1Be73x-.js",revision:null},{url:"assets/posts_python_normal-errors.md.D1Be73x-.lean.js",revision:null},{url:"assets/posts_python_python-bitwise-operation.md.D3TkTCtI.js",revision:null},{url:"assets/posts_python_python-bitwise-operation.md.D3TkTCtI.lean.js",revision:null},{url:"assets/posts_python_python-class-self-and-cls.md.VwFg8FPw.js",revision:null},{url:"assets/posts_python_python-class-self-and-cls.md.VwFg8FPw.lean.js",revision:null},{url:"assets/posts_python_python-dynamic-import.md.BkG0Zw4B.js",revision:null},{url:"assets/posts_python_python-dynamic-import.md.BkG0Zw4B.lean.js",revision:null},{url:"assets/posts_python_Python-locals.md.CrcfPvT8.js",revision:null},{url:"assets/posts_python_Python-locals.md.CrcfPvT8.lean.js",revision:null},{url:"assets/posts_python_python-metaclass.md.CJP7Wx-c.js",revision:null},{url:"assets/posts_python_python-metaclass.md.CJP7Wx-c.lean.js",revision:null},{url:"assets/posts_python_Python-sorted.md.OLOi0g57.js",revision:null},{url:"assets/posts_python_Python-sorted.md.OLOi0g57.lean.js",revision:null},{url:"assets/posts_python_Python3-mro-class.md.DGWlDapd.js",revision:null},{url:"assets/posts_python_Python3-mro-class.md.DGWlDapd.lean.js",revision:null},{url:"assets/posts_python_timeit-Measure-execution-time.md.Dmjx_7xn.js",revision:null},{url:"assets/posts_python_timeit-Measure-execution-time.md.Dmjx_7xn.lean.js",revision:null},{url:"assets/posts_python_whats-new-in-python3-8.md.D2-ham6p.js",revision:null},{url:"assets/posts_python_whats-new-in-python3-8.md.D2-ham6p.lean.js",revision:null},{url:"assets/posts_redis_fast-redis-zset.md.DPwYBx2e.js",revision:null},{url:"assets/posts_redis_fast-redis-zset.md.DPwYBx2e.lean.js",revision:null},{url:"assets/posts_router_iwpriv-DisConnectSta.md.kPpDlKUt.js",revision:null},{url:"assets/posts_router_iwpriv-DisConnectSta.md.kPpDlKUt.lean.js",revision:null},{url:"assets/posts_router_set-dmz-and-UPnP.md.CRuAqyVT.js",revision:null},{url:"assets/posts_router_set-dmz-and-UPnP.md.CRuAqyVT.lean.js",revision:null},{url:"assets/posts_router_wake-on-lan.md.oFn0yDez.js",revision:null},{url:"assets/posts_router_wake-on-lan.md.oFn0yDez.lean.js",revision:null},{url:"assets/public_readme.md.C-vb8kHX.js",revision:null},{url:"assets/public_readme.md.C-vb8kHX.lean.js",revision:null},{url:"assets/style.DCb6_May.css",revision:null},{url:"baidu_verify_fRZdpw7Mia.html",revision:"f4435c90711139a759564155c19df653"},{url:"google8beda02b5c39281f.html",revision:"796a76c93ca61203b46a48dca1923bc3"},{url:"googleb01def48009a5ef6.html",revision:"96834484da21f2a4897751f1eafea7a4"},{url:"imgs/avatar.png",revision:"71c1628ddfaedf527139c32ea0341636"},{url:"imgs/chatgpt_reverse_proxy/overview.png",revision:"c1beb34a5c635f2d737c72029d3d66fa"},{url:"imgs/dsdt1.png",revision:"7f79b3f3353c990cbd8fe51adebe7401"},{url:"imgs/favicon.ico",revision:"7f969f62ee272a3be19966806fff4ad5"},{url:"imgs/iqiyi-danmu/br2Object.png",revision:"5e3d5b1cb507abdd9d98e4f9fbb9ea8e"},{url:"imgs/iqiyi-danmu/F12.png",revision:"cd304d64992637523c12350749524c2e"},{url:"imgs/iqiyi-danmu/initiator.png",revision:"a548841731ac03611a3d3914793d6563"},{url:"imgs/iqiyi-danmu/proto-danmu.png",revision:"05f4b9bc01a75d903724286ef2a355a8"},{url:"imgs/java/idea-remote-debug.png",revision:"5d7256b759624d90c8ffcc5c73a81ed9"},{url:"imgs/micropython/esp32-cam.png",revision:"50db592381ddf7c8ad95e551bee15a1c"},{url:"imgs/odoo-challenge/odoo-challenge-1.png",revision:"f6a482c738adf73d2b223be2fcfb1a64"},{url:"imgs/odoo-challenge/odoo-challenge-10.png",revision:"48440c3270efe9532678d3bd93170464"},{url:"imgs/odoo-challenge/odoo-challenge-11.png",revision:"c245cc6e2928899e2aa79b72147b3dac"},{url:"imgs/odoo-challenge/odoo-challenge-2.png",revision:"72968b41667460b97c3f88add76dfcf6"},{url:"imgs/odoo-challenge/odoo-challenge-3.png",revision:"421f7b3e262810edab16ba5cd3085e6b"},{url:"imgs/odoo-challenge/odoo-challenge-4.png",revision:"21a4ae788c82ff2fcf09cf7bccc2dc83"},{url:"imgs/odoo-challenge/odoo-challenge-5.png",revision:"611213339284819498299463822790ee"},{url:"imgs/odoo-challenge/odoo-challenge-6.png",revision:"82333b755c944d544088f8f52b40fe68"},{url:"imgs/odoo-challenge/odoo-challenge-7-1.png",revision:"23b96621af3afaea1ee89d891f6a4010"},{url:"imgs/odoo-challenge/odoo-challenge-7-2.png",revision:"ece14408813dd41dba54d5496b11fd67"},{url:"imgs/odoo-challenge/odoo-challenge-8.png",revision:"55a6c597c69a128f44229e4d23180926"},{url:"imgs/odoo-challenge/odoo-challenge-9.png",revision:"e2b3e64d1a3277a56a50b5b9a6379506"},{url:"imgs/odoo-challenge/odoo-challenge-end.png",revision:"9244308d50dfa6b1fa4db9624312c448"},{url:"imgs/odoo-model/class_o_row.png",revision:"ad47195c7fe0e3546abd7f320de0280d"},{url:"imgs/odoo-model/manifest.png",revision:"9819bc935e67d58a3303f77e68928214"},{url:"imgs/odoo-model/models.png",revision:"39cb44d6be08ae17a99b6bad54bad802"},{url:"imgs/odoo-model/newmodel.png",revision:"d347c3afa0bf3b2bee0775c5751955c5"},{url:"imgs/odoo-model/viewmenu.png",revision:"7d933b1fc60ee61ca606e69ffb8a800f"},{url:"imgs/odoo/odoo_action_server.png",revision:"097056b89e6219308812be8cf894e7e3"},{url:"imgs/odoo/odoo_class_many2many_2.png",revision:"ed426ef9a5ced8711bcff1a7d9ba1cb5"},{url:"imgs/odoo/odoo_class_many2many.png",revision:"c83c80eb0b554733a2bc0e91b8808643"},{url:"imgs/router/dmz.png",revision:"a85d59740c8d20c6a89db2019e006677"},{url:"imgs/router/ssh.png",revision:"7e95709d83748e216ba02a8978767722"},{url:"imgs/router/UPnP.png",revision:"c2081f0f2d6025a72f079aae44c030b8"},{url:"imgs/router/wake-on-lan.png",revision:"8eca2e0989cc7a7f8e6bbb799fb78e53"},{url:"imgs/source-code-pro/source-code-pro.png",revision:"e5c117d37cacbd2b93dc1f1802e04626"},{url:"imgs/wsl/wsl1.png",revision:"2e5106e13f5d3bb5065663e118a29ba8"},{url:"imgs/wsl/wsl2.png",revision:"b7bcba3c40f48cca07a7b617b6d8a514"},{url:"imgs/wsl/wsl3.png",revision:"5f9b2fb0e251ec5212aff830f983674f"},{url:"imgs/wsl/wsl4.png",revision:"0110500b48c2053ddb50ef5a24c573a7"},{url:"imgs/xampp.png",revision:"4672d13ff1caee692e4d1dbb9fab0b44"},{url:"index.html",revision:"d419932ba8dfa85a4e9729ea560bdbd8"},{url:"pages/about.html",revision:"2c61a2192ea3418ef1a44e9c3487336f"},{url:"pages/archives.html",revision:"16b086a5d5e7ae7d9b3b9a70c40f3c7e"},{url:"pages/category.html",revision:"1b314cd05e1a9570b74c192e728aefd1"},{url:"pages/tags.html",revision:"84b08bf5bb618fd4e7dc7b4973c6468f"},{url:"pic/1.png",revision:"ad603101525b868282394bf980678776"},{url:"pic/2.png",revision:"774fac77a3f4ad8538f3c25baedb3b6b"},{url:"pic/3.png",revision:"32ed578df513016702cc2ff9d17910c7"},{url:"pic/4.png",revision:"ceb3595c95403eaf24a53533cee88313"},{url:"pic/5.png",revision:"3bc965b815aea84b61011518f12fdbe7"},{url:"pic/6.png",revision:"ccbf1d12c6bf57d3f956e52f7f6de821"},{url:"pic/7.png",revision:"d11de7a35d0097b39653fcee4646018d"},{url:"pic/8.png",revision:"c7fd371c899f85c64e7ef763d1da158f"},{url:"pic/9.png",revision:"b251b7cc04dbdf9a2304d8f9e8f2108b"},{url:"pic/install-ubuntu-with-xrdp-in-termux/mstsc.png",revision:"fc7d8bf6cb0683ba931434c430217c65"},{url:"posts/algorithm/traversing-binary-tree.html",revision:"7501502e678154d2561edbc1ad253066"},{url:"posts/crawler/bypass-website-call-backend-api.html",revision:"17dd8ae381581fa0db25bf08dae502f9"},{url:"posts/database/SQL-constraints.html",revision:"234e8d917b5fca973d2a4ef0ae7c4d79"},{url:"posts/database/SQL-keyword-order.html",revision:"d2af5af5c31a206bf0a95af2afc599fe"},{url:"posts/database/SQL-NULL-Func.html",revision:"99761c21704cecd2ff077d4b4af46343"},{url:"posts/database/SQL-statement.html",revision:"c6ac5139d2dd80a7ac4a66d81e5b9d14"},{url:"posts/database/why-redis-fast.html",revision:"569db165be0f81f4aa6ca96d194a5a65"},{url:"posts/devops/ansible-deploy-docker-compose-service.html",revision:"cc36390fc5a413d1577f90cbf920f8c2"},{url:"posts/docker/docker-compose-hosts.html",revision:"7dc833841600be808064d6f2252091a5"},{url:"posts/docker/docker-host.html",revision:"f4c7be23615f48825880c0b44c015b44"},{url:"posts/docker/docker-install-use.html",revision:"216eb47e43b3106f9c362e086b333c9a"},{url:"posts/docker/Docker-rm.html",revision:"af8c30d6e8000b57756193eba0dea0e5"},{url:"posts/docker/run-code-server-in-docker.html",revision:"e22ea042b8259a3f519e5f7496f8d390"},{url:"posts/frontend/intall-and-use-yarn.html",revision:"20a4f328c7ab65f2491632a954bd91e7"},{url:"posts/frontend/rust-wasm.html",revision:"b25ce08bad2251920fdaacd46a3a4222"},{url:"posts/frontend/vue-init-project.html",revision:"e3a975d8dc3bc74ce0beac7b6f836a14"},{url:"posts/frontend/vuepress-blog.html",revision:"3236f427429f096eaf9db6c773145e6f"},{url:"posts/frontend/web-vscode.html",revision:"d81af826f238e1c5af4785a8662c10a7"},{url:"posts/git/Count-Lines-by-git-log.html",revision:"a085b2be1fa70201e25eb8381cde7742"},{url:"posts/git/Git_ignore_SSL.html",revision:"ffc95003ed79d864c85b2b485ebb3240"},{url:"posts/git/git-commit-amend-date.html",revision:"6e48c86ab39e71ff3fb36b23a23cffa6"},{url:"posts/git/git-default-editor.html",revision:"78608601c0abba5bb7bb1c7f5dd69119"},{url:"posts/git/Git-ignore-file-permission-changes.html",revision:"3636dd4d2ff430bbe9b28d9157b421b2"},{url:"posts/git/use-multi-access-token.html",revision:"7aed14267b41eb48600b3c1945cfbd8f"},{url:"posts/hackintosh/DSDT-SSDT-battery.html",revision:"f3b4dff7554c69159a61196ead20b42e"},{url:"posts/hackintosh/hotpatch-fn-brightness.html",revision:"b4854beee3da8fc5568f85cb4b02b0cf"},{url:"posts/hackintosh/ShinalonYAO7000-hackintosh.html",revision:"dba8c94dc9bb129dcb381c884f8085e0"},{url:"posts/http/https-shakehand.html",revision:"a9cda587e662849e9af93364b587034f"},{url:"posts/java/idea-remote-debug.html",revision:"7659de0ff0b4563917bde3d8f4776528"},{url:"posts/java/java-http-proxy.html",revision:"a828f216eed9d8d04b71a52f70eafbd9"},{url:"posts/java/java-JacksonUtil.html",revision:"03623575fb4292dea5d9c85447b45291"},{url:"posts/java/java-Pinyin4jUtil.html",revision:"59f981d4b0bf4293ba4a5a8d72bf2dac"},{url:"posts/java/java-spring-MyBatis-Annotation.html",revision:"140a24833a09268165b8e243c64c7b0b"},{url:"posts/java/java-Tetris.html",revision:"68815cf27289a323fc39e9fa8f5404af"},{url:"posts/java/spring-boot-webflux-cors.html",revision:"82fc8664d35b271e98970592cf7d837d"},{url:"posts/java/spring-RedisTemplate.html",revision:"2f5da8ea01c3fa5950ae06ac4f3b7c9a"},{url:"posts/java/springboot-disable-autoconfig.html",revision:"f88be0c5ef3ee07bc15e9b1e0e4f0ab7"},{url:"posts/java/springboot-schedule-task.html",revision:"e1dc3cc80fe2c6b11be0205980c7d070"},{url:"posts/java/springboot-swagger-ui-custom-config.html",revision:"3114eeb69157d9044d1944e24aecdfd1"},{url:"posts/java/TOTP.html",revision:"ce0beaa31aff27269176de5544d9779a"},{url:"posts/linux/docker-nginx-acme-trojan-go.html",revision:"c5af905ded408737804cdb6f05b747f0"},{url:"posts/linux/install-ubuntu-with-xrdp-in-termux.html",revision:"c45f2f22bc87d60ebb3a165c9c28904c"},{url:"posts/linux/linux-chm2html.html",revision:"8da36e2dbe34af0aac08f8a686673e06"},{url:"posts/linux/linux-ecs.html",revision:"e0e68ae23138dbce047a85f0f65fee0e"},{url:"posts/linux/Linux-ssr.html",revision:"b3761a331c267cd0eaea10a5265a89df"},{url:"posts/linux/mkcert.html",revision:"d0e5ee04e0620f59f9814149e48867e3"},{url:"posts/linux/nginx-Access-Control-Allow-Origin.html",revision:"901c492463b36e075fad4018db42fd5e"},{url:"posts/linux/nginx-upstream.html",revision:"50ab9002d09c0497b8f3bc3c78e68234"},{url:"posts/linux/offline-install-oh-my-zsh.html",revision:"f960f4b8c93b38d2f44e943f4379671e"},{url:"posts/linux/ubuntu-switch-sources.html",revision:"ef2aa57a1b2708a3b6542217e1b0bd63"},{url:"posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",revision:"00eb9ef8a494238b51677b4d42a1cafb"},{url:"posts/linux/wsl-linux-custom-install.html",revision:"a846d9a3a81dcfb2116659ccfa054be7"},{url:"posts/linux/wsl2-and-docker-compact-vdisk.html",revision:"6707c36393cd8bd245c2d61a3fefaf06"},{url:"posts/linux/wsl2-install.html",revision:"7aab183165e4088f4d4ef7bfbc12cebc"},{url:"posts/linux/wsl2-use-winip.html",revision:"a7792dc23c3488aad0e87febd6717f5e"},{url:"posts/linux/xampp-building-a-website.html",revision:"4667201c74a37dc338abc4ceb1e6c11d"},{url:"posts/macos/android-emulator.html",revision:"25b9521ff151a2d0cdf3d2a88a5b0511"},{url:"posts/macos/Brew-cask-install-software.html",revision:"666dbd33560b0ffa6fae07837e1a70c0"},{url:"posts/micropython/esp32-cam.html",revision:"259cd5b4244c055d96a0d9af005890a6"},{url:"posts/mq/ensure-not-repeatedly-consumed.html",revision:"8b856d29d0e199141f400fe53f08b92e"},{url:"posts/mq/ensure-order-of-mq.html",revision:"9cc915c0aa96834b915736f9f10c5508"},{url:"posts/mq/high-availability-of-mq.html",revision:"87894850346f9d97540679523bc2f67f"},{url:"posts/mq/mq-problems.html",revision:"720d8d004cf58c1edfc50ee7d008b86a"},{url:"posts/mq/why-mq.html",revision:"591867851c4621e27c05419678d36590"},{url:"posts/odoo/Odoo-api-decorators.html",revision:"4633d62247801e6fd807130fba955518"},{url:"posts/odoo/Odoo-api-onchange.html",revision:"c5c7b5ffe9437dc08ff7ee58e6f5a651"},{url:"posts/odoo/Odoo-building-a-new-model.html",revision:"f256139b8061895181c8ffaacdbc0e85"},{url:"posts/odoo/Odoo-Challenge.html",revision:"d02540a99352f32080b764a7cc71b41c"},{url:"posts/odoo/Odoo-class-Many2many.html",revision:"e70af05f15c5990879e01a1e25374edb"},{url:"posts/odoo/Odoo-class-o-row.html",revision:"10bb1f8ab5106a59aa512dabb332755f"},{url:"posts/odoo/Odoo-context.html",revision:"14fe704a02add067b8e357e24763401a"},{url:"posts/odoo/Odoo-Controllers-requests.html",revision:"124cb1e49dc54d9610da15449c6cdade"},{url:"posts/odoo/Odoo-Controllers-Website.html",revision:"50190564ade2922ea942266e3bfc42b9"},{url:"posts/odoo/Odoo-domain-in.html",revision:"757fceb6a3eb78dfcad26424c991aef9"},{url:"posts/odoo/Odoo-Domain.html",revision:"8e2588cbfeb840007106a2e203e658d6"},{url:"posts/odoo/Odoo-external-api.html",revision:"6c5e8972256d9a97391d1936920d52db"},{url:"posts/odoo/Odoo-fields.html",revision:"3997d2723dae938969dfd53c5fc6f511"},{url:"posts/odoo/Odoo-Form-add-button-statusbar.html",revision:"be61eede063614d3561a2a3cc4e89ee2"},{url:"posts/odoo/odoo-func-env-context.html",revision:"cef3f30e49a66266fe2841ae7c8b3329"},{url:"posts/odoo/Odoo-inherit-inherits-delegate.html",revision:"190c5ce249474ea8f22938528e4f9be3"},{url:"posts/odoo/Odoo-ir-actions-server.html",revision:"4012553dfc71f37287da5c614c9ba377"},{url:"posts/odoo/Odoo-ir-cron.html",revision:"9e4cedb0082c93ddab43d7e5da496077"},{url:"posts/odoo/Odoo-ir-rule.html",revision:"5d478bff91400632efc4f146f2f553b7"},{url:"posts/odoo/Odoo-ir-sequence.html",revision:"feec545fd4db6db5535d970354382439"},{url:"posts/odoo/Odoo-mail-message.html",revision:"4ae970ae009f03d47c652eedf8bcb124"},{url:"posts/odoo/Odoo-many2one-hide-create.html",revision:"964c836c043a0ff49a7de1a624056440"},{url:"posts/odoo/Odoo-Many2one-three-level-domain.html",revision:"04413b33f4000e6f84ff7950cb80fbfa"},{url:"posts/odoo/Odoo-model-inherit-xpath.html",revision:"a042bcbb860c2ce0a1eafee4f86cf57d"},{url:"posts/odoo/Odoo-models-AbstractModel.html",revision:"7bd43dc3d80613b41f01f06d10447770"},{url:"posts/odoo/Odoo-odoo13-searchpanel.html",revision:"3163c0d05820de434026bf694d6b7d24"},{url:"posts/odoo/Odoo-one2many-many2many-write-rule.html",revision:"7471768d9e31718d54c645c1ffd3b8a2"},{url:"posts/odoo/Odoo-Order.html",revision:"ee59d8d7d95b8aef5c1994c4758d2087"},{url:"posts/odoo/Odoo-profile.html",revision:"16efe8729385c828f4d44d28197b644a"},{url:"posts/odoo/Odoo-search-view.html",revision:"7b3df4d524cd7cd8fd211443063ab111"},{url:"posts/odoo/Odoo-Settings.html",revision:"22b8644e47709481a845cfcdd5640c18"},{url:"posts/odoo/Odoo-Translation.html",revision:"4996110aac86afe77fdf9c3163003f6a"},{url:"posts/odoo/Odoo-xml-group-col-colspan.html",revision:"52a3c37a5a91874ad432201bb32870dc"},{url:"posts/odoo/Odoo-xml-invisible.html",revision:"c3c73670a8929438ad33b4696fb47356"},{url:"posts/odoo/Run-odoo-in-docker-code-server.html",revision:"53c54aa8255d31a34e7c581dd42d638c"},{url:"posts/odoo/Run-Odoo-in-Windows-WSL.html",revision:"1256b2901e3871613be94669d1ffcc46"},{url:"posts/other/aria2-replace-thunder.html",revision:"b72771e826410833be779f18e7cc4cef"},{url:"posts/other/hexo-live2d.html",revision:"a7c5dedb0a57a07711200f1eabe8bdc9"},{url:"posts/other/Install-font-source-code-pro.html",revision:"bd2aa50c5d37348372913a7c73344f74"},{url:"posts/other/iqiyi-danmu-convert.html",revision:"1fced452239ab597b494b2eda93453e7"},{url:"posts/other/mipad2-win10-block-keys.html",revision:"dd4447de380011d79c5e3268a58f13a6"},{url:"posts/python/asyncio-run-in-executor.html",revision:"6cd1039796822aa85b26e72c93bd2269"},{url:"posts/python/deadlock.html",revision:"113fbfe0f16d93f930bd01432d4e3e9c"},{url:"posts/python/locust.html",revision:"51ecdc323bf87143792820c75aa0afb0"},{url:"posts/python/normal-errors.html",revision:"0059e0167b8a463057d3c9625c8a1084"},{url:"posts/python/python-bitwise-operation.html",revision:"d5cd5f9df50a0038ea3ecab55b7eb26f"},{url:"posts/python/python-class-self-and-cls.html",revision:"532161e7183d12b93c5071319af6cc17"},{url:"posts/python/python-dynamic-import.html",revision:"47b0b5810bd6af5d2a13f5794224af1b"},{url:"posts/python/Python-locals.html",revision:"ebbc5372c317d89c192641b23f6b8622"},{url:"posts/python/python-metaclass.html",revision:"30f094ecd71426cf428b648d4c7ed66c"},{url:"posts/python/Python-sorted.html",revision:"7dd306736e8e6e4a1bfb19ba10f08749"},{url:"posts/python/Python3-mro-class.html",revision:"f51e19d5c884a55cb0be5b56b6fa3dcb"},{url:"posts/python/timeit-Measure-execution-time.html",revision:"47bcc297e7544150105e1ab70873bc2c"},{url:"posts/python/whats-new-in-python3-8.html",revision:"9af5f2230af2c4246205d8991ee082ac"},{url:"posts/redis/fast-redis-zset.html",revision:"e3769cc4e3cc56ebc2650e37387d8a07"},{url:"posts/router/iwpriv-DisConnectSta.html",revision:"10b8473bbea2b55d0521a9e379476e34"},{url:"posts/router/set-dmz-and-UPnP.html",revision:"60f0edc3afb762c3520b525a08041105"},{url:"posts/router/wake-on-lan.html",revision:"3b97e998cd3e7e4cc57906c790cf5485"},{url:"public/readme.html",revision:"0728c77822ce11d7bd3063f45c7a6df4"},{url:"imgs/avatar.png",revision:"71c1628ddfaedf527139c32ea0341636"},{url:"manifest.webmanifest",revision:"ed7c9102aa977508512bd35714a48860"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),self.__WB_DISABLE_DEV_LOGS=!0}));

// ==UserScript==
// @name         Github跳转到gitpod编辑页面
// @namespace    https://github.com/kitety/jump-to-gitpod
// @homepage     https://github.com/kitety/jump-to-gitpod
// @version      0.0.1
// @description  Github跳转到gitpod编辑页面的脚本，Github仓库页面显示一个按钮，跳转到gitpod的编辑页面
// @author       Kitety
// @icon         https://github.com/favicon.ico
// @match        *://github.com/*
// @run-at       document-end
// @require      https://unpkg.com/jquery@3.5.1/dist/jquery.js
// @license      GPL
// ==/UserScript==    
(function (w) {
        var $ul = $("ul.pagehead-actions");
        var href = window.location.href.replace("github.com", "gitpod.io#github.com");
        if (!$ul.length) return;
        var $li = $(
          '<li><a href="' +
            href +
            '" class="btn btn-sm tooltipped tooltipped-s" target="_blank" rel="noopener noreferrer"  aria-label="跳转到Gitpod" > 跳转到Gitpod</a> </li> '
        );
        $ul.append($li);
      })();

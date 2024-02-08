// ==UserScript==
// @name         Redirect to new.reddit.com
// @version      3
// @description  A userscript to restore the previous UI of Reddit by automatically redirecting to new.reddit.com
// @author       GyDavid22
// @match        *://www.reddit.com/*
// @match        *://reddit.com/*
// @exclude      *://new.reddit.com/*
// @grant        none
// @downloadURL  https://github.com/GyDavid22/Redirect-to-new.reddit.com/raw/main/reddit.user.js
// @run-at document-start
// ==/UserScript==

(function () {
    'use strict';
    let currentUrl = window.location.href;
    let location = currentUrl.indexOf('reddit.com/');
    if (!(window.location.search.includes('?rdt=45218') || window.location.pathname == '/media')) {
        window.location.href = `https://new.${currentUrl.slice(location)}`;
    }
})();

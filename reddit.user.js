// ==UserScript==
// @name         Redirect to new.reddit.com
// @version      1
// @description  A userscript to restore the previous UI of Reddit by automatically redirecting to new.reddit.com
// @author       GyDavid22
// @match        *://www.reddit.com/*
// @match        *://reddit.com/*
// @match        *://old.reddit.com/*
// @exclude      *://new.reddit.com/*
// @grant        none
// @downloadURL  https://github.com/GyDavid22/Redirect-to-new.reddit.com/releases/latest/download/reddit.user.js
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    let currentUrl = window.location.href;
    let location = currentUrl.indexOf('reddit.com/');
    window.location.href = `https://new.${currentUrl.slice(location)}`;
})();

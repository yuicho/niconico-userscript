// ==UserScript==
// @name         Eraser of likes counter
// @namespace    https://yuicho.net
// @version      0.1
// @description  I hate counter of likes.
// @author       Yuicho
// @match        https://www.nicovideo.jp/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/yuicho/niconico-userscript/main/eraser_of_likes_counter.user.js
// ==/UserScript==

(function() {
    'use strict';
    
    $('.count.like').hide();
})();

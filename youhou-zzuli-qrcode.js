// ==UserScript==
// @name         ZZULI登录二维码展示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在页面显示二维码
// @author       Shi Yi
// @match        https://kys.zzuli.edu.cn/cas/login
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var qrCodeCanvas = document.getElementById('qrLogin').getElementsByTagName('canvas')[0];
    var qrCodeImage = qrCodeCanvas.toDataURL();

    var qrCodeDiv = document.createElement('div');
    qrCodeDiv.style.position = 'fixed';
    qrCodeDiv.style.top = '10px';
    qrCodeDiv.style.right = '10px';
    qrCodeDiv.style.width = '128px';
    qrCodeDiv.style.height = '128px';
    qrCodeDiv.style.backgroundImage = 'url(' + qrCodeImage + ')';
    qrCodeDiv.style.backgroundSize = 'cover';

    document.body.appendChild(qrCodeDiv);
})();

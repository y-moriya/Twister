// ==UserScript==
// @name        Final Cutter
// @namespace   http://www.gunjobiyori.com/
// @author      euro_s
// @version     1.0
// @description ねじれ天国の語尾削除スクリプト（簡易版）です。
// @match       http://nejiten.halfmoon.jp/index.cgi?vid=16032*
// @grant       none
// @copyright   2019 Yu MORIYA
// ==/UserScript==

(function() {
    'use strict';

    const GOBI = /モイ/g

	let mes = document.querySelectorAll('[class$=body1]');
	for (let i = 0; i < mes.length; i++) {
        let msg = mes[i].innerText;
        mes[i].innerHTML = mes[i].innerHTML.replace(GOBI, '');
    }
})();
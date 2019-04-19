// ==UserScript==
// @name        Literature
// @namespace   http://www.gunjobiyori.com/
// @version     0.0.1
// @description ねじれ天国の文学対策スクリプトです。
// @match       http://nejiten.halfmoon.jp/index.cgi*
// @copyright   2019 Yu MORIYA
// ==/UserScript==

(function(){
	const MAX_LENGTH = 200;
	const OPEN_MES = 'この発言は省略されています。続きを読むにはこちらをクリックしてください。';
	const CLOSE_MES = '省略する';
	
	function createOpenDiv(mes_num) {
		div = document.createElement('div');
		a = document.createElement('a')
		a.id = 'open' + mes_num;
		a.innerText = OPEN_MES;
		div.append(a);
		return div;
	}

	function createCloseDiv(mes_num) {
		div = document.createElement('div');
		a = document.createElement('a')
		a.id = 'close' + mes_num;
		a.innerText = CLOSE_MES;
		div.append(a);
		return div;
	}

	mes = document.querySelectorAll('[class$=body1]');
	for (i = 0; i < mes.length; i++) {
		if (MAX_LENGTH < mes[i].innerText.length) {
			var openDiv = document.createElement('div')
			

			var orig = mes[i].innerText;
			mes[i].append
		} 
	}
})();
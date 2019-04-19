// ==UserScript==
// @name        Literature
// @namespace   http://www.gunjobiyori.com/
// @version     0.1.0
// @description ねじれ天国の文学対策スクリプトです。
// @match       http://nejiten.halfmoon.jp/index.cgi*
// @copyright   2019 Yu MORIYA
// ==/UserScript==

(function(){
	const MAX_LENGTH = 200;
	const OPEN_MES = 'この発言は省略されています。続きを読むにはこちらをクリックしてください。';
	const CLOSE_MES = '省略する';

	function createOpenDiv(mes_num) {
		let div = document.createElement('div');
        div.style.color = 'blue';
		let a = document.createElement('a')
		a.id = 'open' + mes_num;
		a.innerText = OPEN_MES;
		div.append(a);
		return div;
	}

	function createCloseDiv(mes_num) {
		let div = document.createElement('div');
        div.style.color = 'blue';
		let a = document.createElement('a')
		a.id = 'close' + mes_num;
		a.innerText = CLOSE_MES;
		div.append(a);
		return div;
	}

	function createMsgDiv(msg, id) {
		let div = document.createElement('div');
		div.id = id;
		div.innerText = msg;

		return div;
	}

	let mes = document.querySelectorAll('[class$=body1]');
	for (let i = 0; i < mes.length; i++) {
		if (MAX_LENGTH < mes[i].innerText.length) {
			let msg = mes[i].innerText;
			let shortmsg = msg.slice(0, MAX_LENGTH) + '...';
			mes[i].innerText = '';

			// 長文を退避
			let msgdiv = createMsgDiv(msg, 'msg' + i);
			let closeDiv = createCloseDiv(i);
			msgdiv.append(closeDiv);
			msgdiv.style.display = 'none';

			// 短縮文を作成
			let shortmsgdiv = createMsgDiv(shortmsg, 'shortmsg' + i);
			let openDiv = createOpenDiv(i);
			shortmsgdiv.append(openDiv);

			// 追記
			mes[i].append(shortmsgdiv);
			mes[i].append(msgdiv);

		}
	}
})();
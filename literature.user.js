// ==UserScript==
// @name        Block Literature
// @namespace   http://www.gunjobiyori.com/
// @version     1.0.1
// @description ねじれ天国の文学対策スクリプトです。
// @match       http://nejiten.halfmoon.jp/*
// @copyright   2019 Yu MORIYA
// ==/UserScript==

(function(){
	// MAX_LENGTHの値を変更することで短縮する文字数の判定を変更できます。
	const MAX_LENGTH = 800;

	// 表示変更リンクのテキスト
	const OPEN_MES = '▼全文表示';
	const CLOSE_MES = '▲短縮表示';

	function createOpenDiv(mes_num) {
		let div = document.createElement('div');
        div.style.color = 'blue';
		let a = document.createElement('a')
		a.id = 'open' + mes_num;
		a.innerText = OPEN_MES;
		a.style.cursor = 'pointer';
		div.append(a);
		return div;
	}

	function createCloseDiv(mes_num) {
		let div = document.createElement('div');
        div.style.color = 'blue';
		let a = document.createElement('a')
		a.id = 'close' + mes_num;
		a.innerText = CLOSE_MES;
		a.style.cursor = 'pointer';
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
			let shortmsg = msg.slice(0, MAX_LENGTH) + "...\n\n";
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

			// クリック時に開閉を呼ぶようにイベントリスナ設定
			closeDiv.addEventListener('click', function() {
				toggle(i, true);
			});
			openDiv.addEventListener('click', function() {
				toggle(i, false);
			});

			// 追記
			mes[i].append(shortmsgdiv);
			mes[i].append(msgdiv);

		}
	}

	function toggle(i, isOpenend) {
		const msgdivid = 'msg' + i;
		const shortmsgdivid = 'shortmsg' + i;
		let msgdiv = document.getElementById(msgdivid);
		let shortmsgdiv = document.getElementById(shortmsgdivid);

		if (isOpenend) {
			// 全文表示から短縮表示に切り替える
			msgdiv.style.display = 'none';
			shortmsgdiv.style.display = 'inline';

			// 短縮時に発言が詰まってしまうので元発言のトップにスクロール
			shortmsgdiv.scrollIntoView(true);
		} else {
			// 短縮表示から全文表示に切り替える
			shortmsgdiv.style.display = 'none';
			msgdiv.style.display = 'inline';
		}
	}
})();
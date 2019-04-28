// ==UserScript==
// @name        Get single log link
// @namespace   http://www.gunjobiyori.com/
// @author      euro_s
// @version     0.1.0
// @description ねじれ天国の特定の発言へのリンクを付与するスクリプトです。発言の時刻がリンクになります。
// @match       http://nejiten.halfmoon.jp/*
// @copyright   2019 Yu MORIYA
// ==/UserScript==

(function(){
	const URL = 'http://nejiten.halfmoon.jp/index.cgi?'
	const day = document.querySelector('.today').innerHTML.match(/\d+/)[0];
	const params = new URLSearchParams(window.location.search);
	const vid = params.get('vid');
	let messages = document.getElementsByClassName('message');

	for (let i = 0; i < messages.length; i++) {
		let anchor = messages[i].querySelector('tbody > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1)');
		let anc = anchor.name;
		let time = messages[i].querySelector('tbody > tr:nth-child(1) > td:nth-child(2) > span.time');
		let a = document.createElement('a');
		a.href = URL + 'vid=' + vid + '&log=anc&date=' + day + '&num=' + anc;
		a.style.fontSize = '100%';
		time.parentNode.insertBefore(a, time);
		a.appendChild(time);
	}
})();
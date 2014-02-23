// ==UserScript==
// @name        Twister
// @namespace   http://www.gunjobiyori.com/
// @version     0.1
// @description ねじれ天国向け便利ツール群です。
// @match       http://nejiten.wkeya.com/index.cgi*
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @copyright   2014+ Yu MORIYA
// ==/UserScript==

(function main($) {
	var uri = GM_info.script.matches[0].replace('*', '');
	var docs = GM_getValue('docs');
	if (docs == null) {
		var docsUri = uri + '?cmd=doc';
		alert('loading...');
		$.get(docsUri)
			.done(function(data) {
				alert('done.')
				docs = data;
				GM_setValue('docs', docs);
				main($);
			});
	} else {
		alert('loaded.');
		//GM_deleteValue('docs');
	}

})(jQuery); 
// ==UserScript==
// @name        Twister
// @namespace   http://www.gunjobiyori.com/
// @version     0.1
// @description ねじれ天国向け便利ツール群です。
// @match       http://nejiten.wkeya.com/index.cgi*
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @copyright   2014+ Yu MORIYA
// ==/UserScript==

(function twister($) {
	var uri = GM_info.script.matches[0].replace('*', '');
	
	var raw = GM_getValue('docs_raw');
	if (raw == null) {
		var docsUri = uri + '?cmd=doc';
		alert('説明書をロードします。しばらくお待ちください。');
		$.get(docsUri)
			.done(function(data) {
				raw = data;
				GM_setValue('docs_raw', raw);
				alert('ロードが完了しました。')
				twister($);
				return;
			});
	} else {
		showVersion();
		parseDocs(raw);
		var s = GM_getValue('docs');
		s.forEach(function(e) {
			//alert(e);
		});
	}
	
	function showVersion() {
		var sName = GM_info.script.name;
		var version = GM_info.script.version;
		var verHtml = $('<div>using ' + sName + ' ver. ' + version + '</div>')
						.css('text-align', 'right')
						.click(function() {
				 			alert('説明書を再取得します。');
				 			GM_deleteValue('docs_raw');
				 			$(this).remove();
				 			twister($);
				 		});
		$('body').prepend(verHtml);
	}
	
	function parseDocs(raw) {
		var skills = [];
		$(raw)
			.find('a.large_doc')
			.filter(function() { return this.name.match(/^[0-9]+$/);})
			.each(function() {
				var obj = $(this);
				var n = obj.text();
				var p = obj.parent();
				p.find('a').remove();
				p = $(p.html().replace(/<table(\n|.)+/, ''));
				var d = $.trim(p.text());
				var html = "<div><h3>" + n + "</h3><p>" + d + "</p></div>";
				skills.push(html);
			});
		GM_setValue('docs', skills);
	}

})(jQuery); 
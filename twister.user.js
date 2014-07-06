// ==UserScript==
// @name        Twister
// @namespace   http://www.gunjobiyori.com/
// @version     0.3.0
// @description ねじれ天国向け便利ツール群です。
// @match       http://nejiten.wkeya.com/index.cgi*
// @require     http://code.jquery.com/jquery-2.1.0.js
// @require     http://raw.github.com/urin/jquery.balloon.js/master/jquery.balloon.js
// @copyright   2014+ Yu MORIYA
// ==/UserScript==

(function twister($) {
	var uri = "http://nejiten.wkeya.com/index.cgi";
	var raw = GM_getValue('docs_raw');
	if (raw == null) {
		loadDocs(uri);
	} else {
		if (location.href.match('vid')) {
			showVersion();
			setDescription();
		}
	}
	
	function setDescription() {
		$('a')
			.filter(function() { if (this.href.match('cmd=doc')) { return this }})
			.each(function() {
				var sNum = 0;
				var content = '役職が見つかりませんでした。';
				if (this.href.match(/cmd=doc\#([0-9]+)/)) {
					content = GM_getValue('docs_' + RegExp.$1);
				}
				$(this).balloon({
					contents: content,
					position: "bottom right",
					css: {
						maxWidth: '520px'
					}
				});
			});
	}
	
	function loadDocs(uri) {
		var docsUri = uri + '?cmd=doc';
		alert('説明書をロードします。しばらくお待ちください。（初回のみ）');
		$.get(docsUri)
			.done(function(data) {
				raw = data;
				GM_setValue('docs_raw', raw);
				parseDocs(raw);
				alert('ロードが完了しました。')
				twister($);
				return;
			});
	}
	
	function showVersion() {
		var sName = GM_info.script.name;
		var version = GM_info.script.version;
		var reloadHtml = $('<div><a href="#">cache reload</a></div>')
						.css('text-align', 'right')
						.click(function() {
				 			alert('説明書を再取得します。');
				 			GM_deleteValue('docs_raw');
				 			$(this).parent().remove();
				 			twister($);
				 		});
		var verHtml = $('<div><div>using ' + sName + ' ver. ' + version + '</div></div>')
						.css('text-align', 'right')
						.append(reloadHtml);
		$('body').prepend(verHtml);
	}
	
	function parseDocs(raw) {
		var i = 0;
		$(raw)
			.find('a.large_doc')
			.filter(function() { return this.name.match(/^[0-9]+$/);})
			.each(function() {
				var obj = $(this);
				var n = obj.text();
				var p = obj.parent().parent();
				p.find('a').remove();
				p = $(p.html().replace(/<table(\n|.)+/, ''));
				var d = $.trim(p.text().replace(/\n/g, "<br>"));
				var html = "<div><h3>" + n + "</h3><p style=\"font-size: small;\">" + d + "</p></div>";
				GM_setValue('docs_'+i, html);
				i++;
			});
	}

})(jQuery); 

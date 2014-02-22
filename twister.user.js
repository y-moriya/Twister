// ==UserScript==
// @name        Twister
// @namespace   http://www.gunjobiyori.com/
// @version     0.1
// @description ねじれ天国向け便利ツール群です。
// @match       http://nejiten.wkeya.com/index.cgi*
// @require     http://code.jquery.com/jquery-1.8.2.js
// @copyright   2014+ Yu MORIYA
// ==/UserScript==

(function() {

	var docs = GM_getValue('docs');
	if (docs == null) {
		
	}

    function GM_getValue(key , defaultValue)
    {
      var value = window.localStorage.getItem(key);
      if (value != null) {
        return eval(value);
      } else {
        return defaultValue || null;
      }
    }

    function GM_setValue(key , value)
    {
      window.localStorage.setItem(key , value);
    }


})(); 
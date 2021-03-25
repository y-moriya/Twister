(function() {
  // BLK_MAX_LENGTH 以上の文字数を短縮表示する
  BLK_MAX_LENGTH = 800;

  const url = window.location.href;
  if (!url.match(/nejiten\.halfmoon\.jp\/index\.cgi\?vid=/)) {
    return;
  }

  blockLiterature();
  adjustSearchBox();
  removeSidebar();
  confirmExit();

  // 文学ブロッカー
  function blockLiterature() {
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
      if (BLK_MAX_LENGTH < mes[i].innerText.length) {
        let msg = mes[i].innerText;
        let shortMsg = msg.slice(0, BLK_MAX_LENGTH) + "...\n\n";
        mes[i].innerText = '';

        // 長文を退避
        let msgDiv = createMsgDiv(msg, 'msg' + i);
        let closeDiv = createCloseDiv(i);
        msgDiv.append(closeDiv);
        msgDiv.style.display = 'none';

        // 短縮文を作成
        let shortMsgDiv = createMsgDiv(shortMsg, 'shortMsg' + i);
        let openDiv = createOpenDiv(i);
        shortMsgDiv.append(openDiv);

        // クリック時に開閉を呼ぶようにイベントリスナ設定
        closeDiv.addEventListener('click', function() {
          toggle(i, true);
        });
        openDiv.addEventListener('click', function() {
          toggle(i, false);
        });

        // 追記
        mes[i].append(shortMsgDiv);
        mes[i].append(msgDiv);

      }
    }

    function toggle(i, isOpened) {
      const msgDivId = 'msg' + i;
      const shortMsgDivId = 'shortMsg' + i;
      let msgDiv = document.getElementById(msgDivId);
      let shortMsgDiv = document.getElementById(shortMsgDivId);

      if (isOpened) {
        // 全文表示から短縮表示に切り替える
        msgDiv.style.display = 'none';
        shortMsgDiv.style.display = 'inline';

        // 短縮時に発言が詰まってしまうので元発言のトップにスクロール
        shortMsgDiv.scrollIntoView(true);
      } else {
        // 短縮表示から全文表示に切り替える
        shortMsgDiv.style.display = 'none';
        msgDiv.style.display = 'inline';
      }
    }
  }

  // 検索窓幅調整
  function adjustSearchBox() {
    var target = document.querySelector('input#cse-search-box');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            target.style.width = "auto";
        });
    });

    var config = { attributes: true, childList: true, characterData: true }
    observer.observe(target, config);
  }

  // 左リスト削除
  function removeSidebar() {
    var side = document.querySelector('#side');
    var side2 = document.querySelector('#side2');
    var sides = document.createElement('div');
    sides.id = 'sides';
    sides.style.display = 'none';
    sides.appendChild(side);
    sides.appendChild(side2);
    var btn = document.createElement('span');
    var btnMsg = document.createTextNode('リスト・検索窓を開く▼');
    btn.id = 'btn';
    btn.classList.add('hope_toggle');
    btn.appendChild(btnMsg);
    btn.onclick = () => {
      if (sides.style.display === 'none') {
        btn.innerText = btn.innerText.replace('開く▼', '閉じる▲');
        sides.style.display = 'block';
      } else {
        btn.innerText = btn.innerText.replace('閉じる▲', '開く▼');
        sides.style.display = 'none';
      }
    }
    var content = document.querySelector('#content');
    content.appendChild(btn);
    content.appendChild(sides);
  
    document.querySelector('body > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(1)').style.display = 'none';
    document.querySelector('#main > td:nth-child(1)').style.display = 'none';
    document.querySelector('body > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(1)').style.display = 'none';
    document.querySelector('body > table > tbody > tr > td > table').style.width = 'auto';
    
    // 発言フォームのフォントサイズ変更（フォーカス時にズームされないようにする）
    let textAreas = document.querySelectorAll('textarea');
    (Array.from(textAreas)).forEach((ta) => { ta.style.fontSize = '24px' });
  }

  // 村を出るボタンに確認ダイアログ追加
  function confirmExit() {
    var exit = document.querySelector('input[value="村を出る"]');
    if (exit) {
      var form = exit.closest('form');
      form.onsubmit = () => {
        if (window.confirm('村を出ますか？')) {
          return true;
        } else {
          return false;
        }
      };
    }
  }
})();
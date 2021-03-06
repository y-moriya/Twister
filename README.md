Twister
=========

ねじれ天国( http://nejiten.halfmoon.jp/index.cgi )用のユーザースクリプト群です。

## 今あるもの

- 文学ブロッカー Block Literature
- 単独発言リンク取得 Get single log link
- 語尾削除 Final Cutter

インストール
---------

FireFox なら GreaseMonkey を、

Google Chrome なら TamperMonkey をインストール後、以下から使いたいスクリプトをインストールしてください。

- 文学ブロッカー [literature.user.js](https://github.com/y-moriya/Twister/raw/master/literature.user.js)

- 単独発言リンク取得 [getsingleloglink.user.js](https://github.com/y-moriya/Twister/raw/master/getsingleloglink.user.js)

- 語尾削除 [finalcutter.user.js](https://github.com/y-moriya/Twister/raw/master/finalcutter.user.js)

IE は 窓 から投げ捨ててください。

## 文学ブロッカー Block Literature

機能
---------

ねじれ天国にたまに投下される文学作品のような長文発言を短縮表示します。

<img src="https://github.com/y-moriya/Twister/raw/master/img/literature.jpg" width="400">

使い方
---------

インストールすれば自動的に文学発言が短縮表示されます。

注意書き
--------
- [参考URL](http://nejiten.halfmoon.jp/index.cgi?vid=15085&type=watch&date=8) こちらのログで文学発言が短縮表示されていればインストールに成功しています。
- 文学認定された発言は大声やAA発言が解除されてしまう不具合があります。
- ソースコードの MAX_LENGTH の値を任意の数字に変更すると文学の判定文字数を変更できます。デフォルトは 800 になっています。
- ねじれ天国サーバーからの取得を制限しているわけではないので、通信量は変わりません。
- 遺言には対応していません……（こんなのあるのかよ）

## 単独発言リンク取得 Get single log link

機能
---------

ねじれ天国の特定の発言のみ表示するリンクを発言の時刻に付与します。

<img src="https://github.com/y-moriya/Twister/raw/master/img/getsingleloglink.jpg" width="800">

使い方
---------

各発言の時刻が単独発言リンクになります。

特定の発言のみをSNS等で共有したいときに使えます。

## 語尾削除 Final Cutter

機能
---------

ねじれ天国の発言から語尾を削除します（簡易版）。

使い方
---------

インストールすると文章中の「モイ」が削除されます。

License
---------

The MIT License

Copyright (c) 2019 Yu MORIYA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

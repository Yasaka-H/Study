// p.328 List6-31

document.addEventListener('DOMContentLoaded', function () {
    var books = [
        { title: 'book1', price: 3200 },
        { title: 'book2', price: 2680 },
        { title: 'hondayo', price: 2000 }
    ];

    var frag = document.createDocumentFragment();

    // 配列booksの内容を順番に<li>要素に整形
    for(var i = 0, len = books.length; i < len; i++) {
        var b = books[i];
        var li = document.createElement('li');

        var text = document.createTextNode(b.title + ':' + b.price + 'yen');

        li.appendChild(text);
        frag.appendChild(li);
    }

    // <li>要素をまとめて文書ツリーに追加
    // ここ1箇所でしか文書ツリーが更新されないからオーバーヘッドが最小限になって嬉しい。
    document.getElementById('list').appendChild(frag);
}, false);
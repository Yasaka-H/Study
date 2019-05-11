document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function(){
        var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url='
            + encodeURIComponent(document.getElementById('url').value);

        var scr = document.createElement('script');
        scr.scr = url;
        document.getElementsByTagName('body').item(0).appendChild(scr);
    }, false);

    function show(data) {
        // ここからごちゃごちゃ書いてあるのでめんどくさくなった
    }


}, false);
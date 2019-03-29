// p.339 List6-36

document.addEventListener('DOMContentLoaded', function () {
    var elem = document.getElementById('elem');
    var elem2 = document.getElementById('elem2');

    // マウスポインターが乗ったタイミングで背景色を変更
    elem.addEventListener('mouseover', function() {
        this.className = 'highlight';
    }, false);

    // マウスポインターが外れたタイミングで背景色を戻す
    elem.addEventListener('mouseout', function() {
        this.className = '';
    }, false);

    elem2.addEventListener('click', function() {
        this.className = (this.className === 'highlight' ? '' : 'highlight');
    }, false);

}, false);
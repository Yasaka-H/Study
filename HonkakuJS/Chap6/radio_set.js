document.addEventListener('DOMContentLoaded', function() {

    // 指定されたラジオボタンの値を設定
    var setRadioValue = function(name, value) {
        var elems = document.getElementsByName(name);

        // ラジオボタンを走査し、値の等しいものを検出
        for(var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);

            // 引数valueと等しい値を持つ項目を選択状態に
            if (elem.value === value) {
                elem.checked = true;
                // ラジオボックスは単一項目にチェックが付いていればいいので、1箇所チェックがtrueになったらそこでループを終えた方が効率がいい
                break;
            }
        }
    };

    // ラジオボタンの初期値を『餃子』にする
    setRadioValue('food','餃子');
}, false);
// 2.5秒ごとに羊が一匹ずつ増えていくような感じにしたい

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("SheepCount").innerHTML = "ひつじが0ひき";
    var SC = 0; // 羊の数
    var countUp = window.setInterval(
    function() {
        SC++;
        document.getElementById("SheepCount").innerHTML = "ひつじが" + SC + "匹";

        var sheep = document.createElement("img");
        sheep.src = 'HonkakuJS/SelfDemo/SheepCounter/sheep.png';
        sheep.alt = 'Hitsuji';
        document.getElementById("sheepArray").appendChild(sheep);

        if(SC === 450) {
            clearInterval(countUp);
            alert("まだ寝ないの？");
        }
    }, 2500);
}, false);

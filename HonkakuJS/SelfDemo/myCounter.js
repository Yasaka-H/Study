document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("counter").addEventListener('click', function() {
        var counter = document.getElementById("counter");
        counter = 0;
        document.getElementById("counter").textContent = counter;
    }, false);
}, false);
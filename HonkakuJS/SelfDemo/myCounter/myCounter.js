document.addEventListener('DOMContentLoaded', function () {
    var counter = document.getElementById("counter");
    counter.value = 0;
    document.getElementById("counter").addEventListener('click', function() {
        counter.value++;
        document.getElementById("counter").textContent = counter.value;
    }, false);
}, false);
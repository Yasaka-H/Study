new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        scroll: 0
    },
    mounted: function() {
        this.scroll = 100
    }
})
var app = new Vue({
    el: '#app',
    data: {
        task: 'task',
        list: []
    },
    methods: {
        doAdd: function() {
            var max = this.list.reduce(function(a, b) {
                return a.id > b.id ? a.id : b.id
            }, 0)
            this.list.push({
                id: max + 1,
                task: this.task
            })
        },
        doRemove: function(index) {
            this.list.splice(index, 1)
        }
    }
})
Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}\<' +
    'button v-on:click="doAttack">Attack!</button></li>',
    props: { id: Number, name: String, hp: Number }, // 受け取りのデータ型の指定
    methods: {
        doAttack: function() {
            this.$emit('attack', this.id)
        }

    }
})

new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'suraimu', hp: 100},
            { id: 2, name: 'goburin', hp: 200},
            { id: 3, name: 'dragon', hp: 500}
        ]
    },
    methods: {
        handleAttack: function(id) {
            var item = this.list.find(function(el) {
                return el.id === id
            })

            if (item !== undefined && item.hp > 0) item.hp -= 10
        }
    }
})
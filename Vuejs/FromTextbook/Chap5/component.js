Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}\<button v-on:click="doAttack"></button></li>',
    props: ['name', 'hp'],
    methods: {
        doAttack: function() {
            this.hp -= 10
        }
        // hpプロパティは親コンポーネントから借りているだけなので、
        // 子コンポーネント側で勝手に書き換えることはできない。エラー
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
    }
})
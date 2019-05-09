<template>
  <div>
      {{ word }}
      <el-button type="primary" v-on:click="displayHello">Primary</el-button>
  </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    props: {
    msg: String
    },
    data(){
        return {
            word: this.msg
        }
    },
    methods: {
        displayHello() {
            this.word = 'hello'
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

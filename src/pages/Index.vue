<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <button @click="getNewMessage()">Get New Message</button>
    <hello-world></hello-world>
    <div class="wrapper">
      <div class="author">Eason Wang</div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {sayHello} from '../utils/example'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Index',

  components: {
    HelloWorld
  },

  computed: mapState({
    message: state => state.example.message
  }),

  methods: mapActions('example', [
    'getNewMessage'
  ]),

  created () {
    let arr = [...[1,2,3], ...[4]]
    console.log(arr)
    sayHello()
    this.$store.dispatch('example/initMessage')
  }
}
</script>

<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
.wrapper {
  .author {
    text-align: center
  }
}
</style>

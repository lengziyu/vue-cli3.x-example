<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue cli 3.x and Vant UI"/>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning" @click="showDialog()">警告按钮</van-button>
    <van-button type="danger" @click="linkTest()">测试数据</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button, Cell, Dialog } from 'vant';

export default {
  name: 'home',
  components: {
    HelloWorld,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [Dialog.name]: Dialog
  },
  methods: {
    showDialog() {
      Dialog.alert({
        message: 'Vue cli 3.x and Vant UI!'
      }).then(() => {
        // on close
      });
    },
    linkTest() {
      this.$router.push('/test')
    }
  }
}
</script>

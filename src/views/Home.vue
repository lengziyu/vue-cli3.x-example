<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue cli 3.x and Vant UI"/>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning" @click="clickShowDialog()">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
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
    clickShowDialog() {
      Dialog.alert({
        message: '一呼百应是B2C的公司，致力于成为商家服务领域里最被信任的引领者'
      }).then(() => {
        // on close
      });
    }
  }
}
</script>

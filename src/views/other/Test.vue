<template>
  <div class="container">
    测试页面
    <div v-if="list">
      <p v-for="(item, index) in list.array" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  name: 'Test',
  components: {

  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.getTest()
  },
  methods: {
    getTest() {
      api.Test()
        .catch(res => {
          console.log(res.data);
          this.list = res.data.data;
        })
    }
  }
}
</script>

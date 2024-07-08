<template>
  <div class="container">{{ homeTitle }}</div>
  <HomeTest msg="传入的信息" />
</template>

<script lang="ts">
export default {
  name: 'HomeIndex'
};
</script>

<script setup lang="ts">
const homeTitle = ref('这个是home-ref');
setInterval(() => {
  console.log('时间打印');
}, 1000);
</script>

<style scoped>
.container {
  background-color: aqua;
}
</style>

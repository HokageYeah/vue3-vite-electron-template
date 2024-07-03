<template>
  <div>{{ homeTitle }}</div>
  <HomeTest msg="传入的信息" />
</template>

<script lang="ts">
export default {
  name: 'HomeIndex'
};
</script>

<script setup lang="ts">
const homeTitle = ref('这个是home-ref');
</script>

<style scoped lang="scss"></style>

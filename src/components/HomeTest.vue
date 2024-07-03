<template>
  <div>我是一个home-test组件</div>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ msg: string }>(), {
  msg: ''
});
defineOptions({ name: 'HomeTest' });
</script>

<style scoped lang="scss"></style>

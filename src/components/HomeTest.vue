<template>
  <div class="test-bg">
    <div>我是一个home-test组件</div>
    <div>{{ msg }}{{ count }}</div>
    <button @click="addCount">test组件新增</button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ msg: string }>(), {
  msg: ''
});
defineOptions({ name: 'HomeTest' });
// 自定导入pinia store
const { increment, count } = useStore('counter');
const addCount = () => {
  increment();
};
</script>

<style scoped lang="scss">
.test-bg {
  background-color: aqua;
}
</style>

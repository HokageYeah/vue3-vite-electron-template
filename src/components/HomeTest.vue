<template>
  <div class="test-bg">
    <div>我是一个home-test组件</div>
    <div>{{ msg }}{{ count }}</div>
    <button @click="addCount">test组件新增</button>
    <button @click="handleClickIpc">点击往electron进程传递事件</button>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron';

withDefaults(defineProps<{ msg: string }>(), {
  msg: ''
});
defineOptions({ name: 'HomeTest' });
// 自定导入pinia store
const { increment, count } = useStore('counter');
const addCount = () => {
  increment();
};
const handleClickIpc = () => {
  ipcRenderer.send('openFlyCar', '我是hometest触发的点击，传递给主ipc进程');
};
onMounted(() => {
  ipcRenderer.on('message', (event, message) => {
    console.log(`主进程传递过来消息名称为：message---消息：${message}`);
  });

  ipcRenderer.on('flyCarResponse', (event, message) => {
    console.log(`主进程传递过来消息名称为：flyCarResponse---消息：${message}`);
  });
});
</script>

<style scoped lang="scss">
.test-bg {
  background-color: aqua;
}
</style>

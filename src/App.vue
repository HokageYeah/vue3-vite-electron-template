<template>
  <el-container class="container">
    <el-aside class="container-left">
      <div class="sidebar-logo-container">
        <img src="/favicon.png" class="sidebar-logo" />
        <h1 class="sidebar-title">桌面程序</h1>
      </div>
      <div class="has-logo">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            :unique-opened="true"
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            default-active="/home"
            :default-openeds="['/home']"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Notebook /></el-icon>
                <span>Home主页一级菜单</span>
              </template>
              <RouterLink to="/home">
                <el-menu-item index="/home">Home主页二级</el-menu-item>
              </RouterLink>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-main class="container-right"><RouterView /> </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped lang="scss">
.tac {
  & .has-logo {
    height: 1000px;
    background-color: #304156;
  }
  & .sidebar-logo-container {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 50px;
    background: #2b2f3a;
    line-height: 50px;
    text-align: center;
    & .sidebar-logo {
      margin-right: 12px;
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }
    & .sidebar-title {
      display: inline-block;
      margin: 0;
      background: #2b2f3a;
      line-height: 50px;
      vertical-align: middle;
      font-weight: 600;
      font-size: 18px;
      color: #fff;
    }
  }
}
.container {
  &-left {
    width: 210px;
    & .has-logo {
      position: fixed;
      left: 0;
      top: 50px;
      bottom: 0;
      width: 210px;
      background-color: #304156;
      .scrollbar-wrapper .el-menu {
        border-right: 0 solid red;
      }
    }
    & .sidebar-logo-container {
      overflow: hidden;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      width: 210px;
      height: 50px;
      background: #2b2f3a;
      line-height: 50px;
      text-align: center;
      & .sidebar-logo {
        margin-right: 12px;
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      & .sidebar-title {
        display: inline-block;
        margin: 0;
        background: #2b2f3a;
        line-height: 50px;
        vertical-align: middle;
        font-weight: 600;
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>

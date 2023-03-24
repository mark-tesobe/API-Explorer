<script setup lang="ts">
import HeaderNav from './components/HeaderNav.vue'
import SearchNav from './components/SearchNav.vue'
</script>

<template>
  <div class="common-layout" style="height: inherit">
    <el-container style="height: 100%">
      <el-header class="header">
        <!--Header-->
        <HeaderNav />
      </el-header>
      <el-container>
        <el-aside width="15%">
          <!--Left-->
          <SearchNav />
        </el-aside>
        <el-container>
          <el-main><RouterView /></el-main>
        </el-container>
        <el-aside width="35%">
          <!--Right -->
          Right
          <RouterView name="preview" />
        </el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped></style>

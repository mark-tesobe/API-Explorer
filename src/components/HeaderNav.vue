<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<template>
  <img alt="OBP logo" class="logo" src="@/assets/logo2x-1.png" />
  <nav>
    <RouterLink class="routerLink" to="/">Portal Home</RouterLink>
    <RouterLink class="routerLink" to="/api">API Explorer</RouterLink>
    <RouterLink class="routerLink" to="/">Glossary</RouterLink>
    <RouterLink class="routerLink" to="/">API Manager</RouterLink>
    <span class="el-dropdown-link">
      <RouterLink class="routerLink" to="/">More</RouterLink>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <span class="el-dropdown-link">
      <RouterLink class="routerLink" to="/">Spaces</RouterLink>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <RouterLink class="routerLink" to="/login">Login</RouterLink>
  </nav>
</template>

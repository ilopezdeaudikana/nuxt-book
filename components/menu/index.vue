<template>
  <nav class='nav'>
    <template v-for="(item, index) in menuItems" :key="item?.key">
      <NuxtLink :to="`/${item.key}`">{{ item.label }}</NuxtLink>
    </template>
  </nav>

</template>

<script setup lang="ts">
const menuItems = [
  {
    key: 'projects',
    label: 'Projects',
  },
  {
    key: '',
    label: 'Companies',
  },
  {
    key: 'contact',
    label: 'Contact',
  }
]
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  width: 30rem;
  align-items: center;
  gap: 1rem;
}
</style>

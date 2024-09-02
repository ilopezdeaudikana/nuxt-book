<template>
  <ProjectList :projects />
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/projects')

const { projects } = data.value

</script>
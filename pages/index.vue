<template>
  <CompanyList :companies />
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/companies')
const { companies } = data.value
</script>
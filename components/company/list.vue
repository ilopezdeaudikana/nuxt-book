<template>
  <section class="companies">
    <template v-for="(company, index) in companies" :key="company?.id">
      <CompanyListRow v-if="company" :company />
    </template>
  </section>
</template>
<script setup lang="ts">
import type { Company } from '@/types/company/company.ts'

const props = withDefaults(defineProps<{ companies: Company[] }>(), {
  companies: () => []
})

</script>

<style lang="scss" scoped>
.companies {
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

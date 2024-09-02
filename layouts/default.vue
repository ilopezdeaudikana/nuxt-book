<template>
  <div>
    <Menu />
    <slot />
    <ModalsContainer />
  </div>
</template>
<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'

</script>
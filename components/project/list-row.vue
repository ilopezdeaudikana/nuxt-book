<template>
  <div class="project">
    <div class="panel panel-default">
      <header class="panel-heading">
        <h2 class="panel-title teaser">{{ project.title }}</h2>
      </header>
      <div class="panel-body">
        <div class="flush">
          <NuxtLink :href="`/projects/${project.id}`">
            <NuxtImg :alt="project.title" :src="`/images/${project.teaser}`" :width="320" :height="230"
              class="img-thumbnail" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Project } from '@/types/project/project.ts'

defineProps<{ project: Project }>()

</script>
<style lang="scss" scoped>
.project {
  margin: 20px;
  &.standalone {
    display: grid;
    margin: 20px auto;
    width: 90%;
  }
  .panel {
    p {
      margin-right: 1%;
      span {
        font-weight: 500;
      }
    }
    .panel-title {
      &.teaser {
        padding-left: 1em;
        margin: 0;
      }
    }
  }
}
</style>
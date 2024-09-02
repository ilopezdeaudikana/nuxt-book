<template>
  <div :key=id class='panel panel-default'>
    <header class='panel-heading'>
      <template v-for="(image, index) of teaser" :key="index">
        <NuxtLink v-if="url[index]" class="link" :to="url[index]" target='_blank'>
          <NuxtImg :alt="title" class="image" :src="`/images/${image}`" />
        </NuxtLink>
        <div v-else class="link">
          <NuxtImg :alt="title" class="image" :src="`/images/${image}`" />
        </div>
      </template>
    </header>
    <div class='panel-body'>
      <p>{{ period }}</p>
      <p>
        <span>Job title: </span>
        {{ job }}
      </p>
      <p>
        <span>Tasks: </span>
        {{ description }}
      </p>
      <p>
        <span>Stack: </span>
        {{ technologies }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Company } from '@/types/company/company.ts'

const props = defineProps<{ company: Company }>()

const {
  id,
  teaser,
  title,
  period,
  job,
  description,
  technologies,
  url,
} = props.company ?? {}

</script>

<style lang="scss" scoped>
.panel {
  box-shadow: 1px 1px 0 rgb(190, 190, 190);
  width: 28.5%;
  max-width: 312.25px;
  margin: 1%;
  padding: 1%;
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-clip: padding-box;
  outline: 0;

  .panel-heading {
    margin-top: 0;
    padding: 0;

    .link {
      width: 100%;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      border: 1px solid #ccbfbf;
      border-radius: 4px;

      &:hover {
        opacity: 0.8;
      }

      .image {
        max-width: calc(100% - 6px);
        max-height: calc(100% - 6px);
        object-fit: cover;
      }
    }
  }

  .panel-body {
    overflow-y: auto;
    margin-top: 10px;
  }
}


@media (max-width: 992px) {
  .companies {
    .panel {
      width: 43.5%;
    }
  }
}

@media (max-width: 600px) {
  .companies {
    .panel {
      width: 90%;
    }
  }
}
</style>
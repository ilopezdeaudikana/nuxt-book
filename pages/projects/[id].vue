<template>
  <section class="project standalone">
    <div v-if="!project">Loading projects...</div>

    <div v-else class="panel panel-default">
      <header class="panel-heading">
        <h1 class="panel-title">{{ project.title }}</h1>
        <p>
          <span>Stack</span>: {{ project.technologies }}
        </p>
      </header>

      <div class="panel-body">
        <template v-for="(img, index) of project.images?.split(',')" :key="project.id">
          <div class="flush" @click="() => showModal(img, project)">
            <NuxtImg :src="`/images/mini/${img}`" :alt="project.title" :width="320" :height="230" />
          </div>
        </template>
      </div>
      <VueFinalModal 
        v-model="isModalVisible"
        :title="modalTitle"
        class="modal"
        content-class="modalContent"
      >
        <NuxtImg :src="`/images/${modalImage}`" :alt="title" :width="552" :height="368" />
      </VueFinalModal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useModal, VueFinalModal } from 'vue-final-modal'
import type { Project } from '@/types/project/project.ts'

defineProps<{ project: Project }>()
const isModalVisible = ref(false)
const modalImage = ref('')
const modalTitle = ref('')
const route = useRoute()

const { data } = await useFetch(`/api/projects/${route.params.id}`)

const { project } = data.value


const showModal = (image: string, project: Project) => {
  modalImage.value = image
  modalTitle.value = project.title
  isModalVisible.value = true
}

const handleCancel = () => {
  modalImage.value = ''
  isModalVisible.value = false
}
</script>

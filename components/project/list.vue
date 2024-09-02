  <template>
    <section class="projects">
      <template v-for="(project, index) in projects" :key="project?.id">
          <ProjectListRow v-if="project" :project />
      </template>
    </section>
  </template>

<script setup lang="ts">
import type { Project } from '@/types/project/project.ts'

withDefaults(defineProps<{ projects: Project[] }>(), {
  projects: () => []
})

</script>

<style lang="scss" scoped>
.projects {
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
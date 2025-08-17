<template>
  <section class="bg-black">
    <div class="w-full projectsContainer columnAlignCenter">
      <ProjectCard v-for="(project, index) in filteredProjects" :key="index" :project="project" />
    </div>
  </section>
</template>

<script>
import { projects } from "~/shared/projects";

export default {
  data() {
    return {
      projects: projects,
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => project.feature);
    }
  },
};
</script>

<style>
.projectsContainer {
  gap: 5rem;
}

@media (width >=660px) {
  .projectsContainer {
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 3.5rem;
    row-gap: 0;
    padding-bottom: 5rem;
  }
}

@media (width >=992px) {
  .projectsContainer {
    justify-content: space-between;
    row-gap: 0;
  }
}

@media (width >=1440px) {
  .projectsContainer {
    padding-bottom: 8rem;
  }
}
</style>
<template>
    <section :id="id">
        <div>
            <h2 v-if="title != 'Campañas'" class="subtitle text-center">{{ title }}</h2>
            <div class="w-full projectsContainer columnAlignCenter">
                <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    projects: {
        type: Array,
        required: true
    }
});
</script>

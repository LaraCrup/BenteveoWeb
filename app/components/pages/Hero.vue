<template>
    <section class="heroContainer">
        <video autoplay muted loop playsinline class="bgVideo">
            <source :src="`/videos/${heroVideo}.mp4`" type="video/mp4">
        </video>
        <div class="hero heroPages column">
            <div class="column">
                <h1 :data-text="title">
                    {{ title }}
                </h1>
                <p>{{ description }}</p>
            </div>
            <DefaultSocialMedia />
            <DefaultScroll />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        heroVideo: {
            type: String,
        }
    }
}
</script>
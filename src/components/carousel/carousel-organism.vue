<script>
export default {
    name: "carousel-organism",
    props: {
        imageList: {
            type: Array,
            default: [
                "src/assets/images/Hotel-Front-3.jpeg",
                "src/assets/images/Boutique-Hotel-Lobby-4.jpeg",
                "src/assets/images/Boutique-Hotel-Rooms-4.jpeg",
            ]
        },
    }
}
</script>

<template>
    <div>
        <BCarousel controls>
            <BCarouselSlide v-for="image in imageList" :img-src="image" />
        </BCarousel>
    </div>
</template>

<style scoped>

</style>

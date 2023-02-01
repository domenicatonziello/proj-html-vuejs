<script>
export default {
    name: 'ImageSquare',
    props: {
        img: String,
    },
    computed: {
        imageUrl() {
            const url = new URL(`../../assets/images/${this.img}`, import.meta.url);
            return url.href;
        }
    }
}
</script>


<template>
    <figure>
        <img class='img-fluid' :src="imageUrl" :alt="imageUrl">
    </figure>
</template>


<style scoped lang="scss">
figure {
    margin: 0;
    padding: 1px 5px;
    height: calc(100% / 4);
    width: calc(100% / 4);

    img {
        border-radius: 5px;
    }
}
</style>
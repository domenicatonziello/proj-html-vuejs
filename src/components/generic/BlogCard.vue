<script>
export default {
    name: 'BlogCard',
    props: {
        blog: Object
    },
    computed: {
        // get image url
        imageUrl() {
            const url = new URL(`../../assets/images/${this.blog.img}`, import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <div class="card-blog">
        <figure>
            <img class="img-fluid" :src="imageUrl" :alt="blog.text">
        </figure>
        <div class="info">
            <p class="mb-0">{{ blog.date }} &middot;{{ blog.from }}</p>
            <h4> &middot; {{ blog.text }}</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-blog {
    box-shadow: 0px 0px 20px lightgrey;
    width: 33%;
    height: 350px;
    position: relative;
    border-radius: 10px;
}

figure {
    width: 100%;
    height: 350px;

    img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.info {
    padding: 20px 10px;
    box-shadow: 0px 5px 30px lightgrey;
    border-radius: 10px;
    background-color: white;
    height: 100px;
    position: absolute;
    bottom: -40px;
    right: 20px;
    left: 20px;

}
</style>
<script>
export default {
    name: 'BlackBar',
    props: { text: String }
}
</script>


<template>
    <div class="blackbar d-flex justify-content-between align-items-center px-5">
        <div class="number">
            <p class="m-0"> {{ text }} </p>
        </div>
        <div class="social">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-pinterest" />
        </div>
    </div>
</template>


<style scoped lang="scss">
@use '../assets/scss/colors' as *;

.blackbar {
    color: rgba(255, 255, 255, 0.863);
    background-color: $darkgrey;

    p {
        font-size: 12px;
    }

    .social>* {
        margin-left: 20px;
    }
}
</style>
<script>
import ButtonVue from '../components/generic/Button.vue';
export default {
    name: 'AppMain',
    components: { ButtonVue },
}
</script>


<template>
    <!-- experience -->
    <section id="experience" class="d-flex align-items-center">
        <div class="text-card">
            <h4 class="text-green"> 17 years of experience </h4>
            <h2> We are a Web Design <span class="text-aqua"> Agency </span> </h2>
            <div class="separator"></div>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Brookmarksgrove right at the coast of the Semantics, a large
                language ocean. Separated they lived in Bookmarksgrove.
            </p>
            <button-vue label="Read More"></button-vue>
            <div>
                <p>Facebook - Instagram - Youtube - Twitter </p>
                <div class="pages">
                    <div v-for="n in 3">0{{ n }}</div>
                </div>
            </div>
        </div>
        <figure>
            <img src="../assets/images/Group-36-2x.png" class="img-fluid" alt="img">
        </figure>
    </section>
    <!-- website design -->
    <section id="website-design"></section>
    <!-- missions -->
    <section id="missions"></section>
    <!-- project -->
    <section id="project"></section>
    <!-- testimonials -->
    <section id="testimonials"></section>
    <!-- blog -->
    <section id="blog"></section>
    <!-- userExperience -->
    <section id="userExperience"></section>
</template>

<style scoped lang="scss">
// Experience -----------------------------------------------------------
#experience {
    height: 450px;
    background-color: rgb(250, 250, 250);
    // background-color: gray;
    padding-left: 100px;

    .text-card {
        flex-basis: 50%
    }

    figure {
        width: 70%;
        height: 100%;
        margin: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
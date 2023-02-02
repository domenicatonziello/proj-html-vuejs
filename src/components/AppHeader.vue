<script>
import ButtonVue from './generic/Button.vue';
import BlackBar from './BlackBar.vue';
export default {
    name: 'AppHeader',
    props: {
        informations: Array,
    },
    components: { ButtonVue, BlackBar }
}
</script>


<template>
    <header>
        <!-- header-top -->
        <black-bar text="(001)88451234 88455438"></black-bar>
        <!-- navbar -->
        <div class="navbar px-5 d-flex justify-content-between align-items-center">
            <div id="logo" class="col-3">
                <a href="#">
                    <img src="../assets/images/cropped-Group-39-2x.png" alt="Phlox-Business-Logo">
                </a>
            </div>
            <div class="menu col-6">
                <ul class="d-flex justify-content-between ">
                    <li v-for="info in informations"> <a href="#"> {{ info }} </a></li>
                </ul>
            </div>
            <div class="shop col-3 text-end">
                <button-vue label="purchase" background="primary" class="m-3"></button-vue>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-s" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 140px;
    background-color: white;

    // BLACKBAR
    .blackbar {
        height: 40px;
    }

    // navbar
    .navbar {
        height: 100px;

        img {
            max-width: 50%;
        }

        ul {
            list-style-type: none;
            margin: 0;

            li {
                a {
                    text-transform: uppercase;
                }
            }
        }
    }
}
</style>
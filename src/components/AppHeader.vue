<script>
import ButtonVue from './generic/Button.vue';
export default {
    name: 'AppHeader',
    props: {
        informations: Array,
    },
    components: { ButtonVue }
}
</script>


<template>
    <header>
        <!-- header-top -->
        <div class="header-top d-flex justify-content-between align-items-center px-5">
            <div class="number">
                <p class="m-0"> (001)88451234 88455438 </p>
            </div>
            <div class="social">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-pinterest" />
            </div>
        </div>
        <!-- navbar -->
        <div class="navbar px-5 d-flex justify-content-between align-items-center">
            <div id="logo" class="col-3">
                <a href="#">
                    <img src="../assets/images/cropped-Group-39-2x.png" alt="Phlox-Business-Logo">
                </a>
            </div>
            <div class="menu col-6">
                <ul class="d-flex justify-content-between ">
                    <li v-for="info in informations"> <a href="#">{{ info }}</a> </li>
                </ul>
            </div>
            <div class="shop col-3 text-end">
                <button-vue label="purchase"></button-vue>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-green" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 140px;
    background-color: white;

    // header-top
    .header-top {
        height: 40px;
        color: white;
        background-color: #3B3B3B;

        .social>* {
            margin-left: 20px;
        }
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
                    text-decoration: none;
                    color: black;
                    text-transform: uppercase;
                }
            }
        }

        .shop button {
            background-image: linear-gradient(45deg, rgb(152, 225, 94), rgb(0, 217, 166));
        }

        .text-green {
            color: rgb(0, 217, 166);
        }
    }
}
</style>
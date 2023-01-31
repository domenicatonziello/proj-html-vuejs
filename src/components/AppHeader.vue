<script>
export default {
    name: 'AppHeader',
    props: {
        informations: Array,
    }
}
</script>


<template>
    <header>
        <!-- header-top -->
        <div class="header-top d-flex justify-content-between align-items-center px-5">
            <div class="number">
                <p> (001)88451234 88455438 </p>
            </div>
            <div class="social">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-pinterest" />
            </div>
        </div>
        <!-- navbar -->
        <div class="navbar row d-flex justify-content-between align-items-center">
            <div id="logo" class="col-3">
                <img src="../assets/images/cropped-Group-39-2x.png" alt="Phlox-Business-Logo">
            </div>
            <div class="menu col-6">
                <ul class="d-flex justify-content-between ">
                    <li v-for="info in informations"> <a href="#">{{ info }}</a> </li>
                </ul>
            </div>
            <div class="shop col-3">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 140px;
    background-color: white;
    border: 1px dashed black;

    .header-top {
        height: 40px;
        color: white;
        background-color: #3B3B3B;

        .social>* {
            margin-left: 20px;
        }
    }

    .navbar {
        height: 100px;
        padding: 5px 15px;

        img {
            max-width: 50%;
        }

        ul {
            list-style-type: none;

            li {
                a {
                    text-decoration: none;
                    color: black;
                    text-transform: uppercase;
                }
            }
        }
    }
}
</style>
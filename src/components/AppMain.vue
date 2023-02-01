<script>
import { images } from '../assets/data';
import ImageSquare from './generic/ImageSquare.vue';
import ButtonVue from './generic/Button.vue';
import InfoCard from './generic/InfoCard.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            images
        }
    },
    props: {
        cards: Array,
    },
    components: { ButtonVue, InfoCard, ImageSquare },
}
</script>


<template>
    <!-- experience -->
    <section id="experience" class="d-flex align-items-center">
        <div class="col-left">
            <h4 class="text-green"> 17 years of experience </h4>
            <h2> We Are a Web Design <span class="text-aqua"> Agency </span> </h2>
            <div class="d-flex my-5">
                <div class="separator small"></div>
                <div class="separator large"></div>
            </div>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Brookmarksgrove right at the coast of the Semantics, a large
                language ocean. Separated they lived in Bookmarksgrove.
            </p>
            <button-vue label="Read More" class="btn-black my-3"></button-vue>
            <div class="d-flex justify-content-between align-items-center my-3">
                <p class="h6 text-uppercase m-0">Facebook - Instagram - Youtube - Twitter </p>
                <div class="pages d-flex">
                    <div v-for="n in 3" class="mx-2"> <a href="#">0{{ n }} </a>
                    </div>
                </div>
            </div>
        </div>
        <figure>
            <img src="../assets/images/Group-36-2x.png" class="img-fluid" alt="img">
        </figure>
    </section>
    <!-- website design -->
    <section id="website-design" class="d-flex align-items-center">
        <div class="col-left">
            <h2>
                We are here to make your <span class="text-aqua"> website</span> look more
                <span class="text-aqua"> elegant </span> and stylish!
            </h2>
            <div class="d-flex my-5">
                <div class="separator small"></div>
                <div class="separator large"></div>
            </div>
            <button-vue label="view all" class="btn-green"></button-vue>
        </div>
        <div class="col-right">
            <info-card v-for="card in cards" :card="card"></info-card>
        </div>
    </section>
    <!-- missions -->
    <section id="missions" class="d-flex align-items-center">
        <div class="col-left">
            <figure>
                <img src="../assets/images/busy-architect-PYVKWM4-1024x872.jpg" alt="busy-architect">
                <div class="overlay"></div>
            </figure>
            <div class="photo img-top">
                <img src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" class="img-fluid"
                    alt="busyness-woman">
            </div>
            <div class="photo img-bottom">
                <img src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" class="img-fluid"
                    alt="busyness-woman">
            </div>
        </div>
        <div class="col-right">
            <h2> learn more about our <span class="text-aqua"> missions </span></h2>
            <div class="d-flex my-5">
                <div class="separator small"></div>
                <div class="separator large"></div>
            </div>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Brookmarksgrove right at the coast of the Semantics, a large
                language ocean. Separated they lived in Bookmarksgrove.
            </p>
            <button-vue label="read more" class="btn-green my-2"></button-vue>
        </div>
    </section>
    <!-- project -->
    <section id="project" class="">
        <!-- project-top -->
        <div class="d-flex align-items-end">
            <div class="col-left">
                <div class="d-flex my-5">
                    <div class="separator small"></div>
                    <div class="separator large"></div>
                </div>
                <h2> Our recent web designs & some examples of past projects </h2>
                <div class="d-flex my-5">
                    <div class="separator small"></div>
                    <div class="separator large"></div>
                </div>
            </div>
            <div class="col-right">
                <p class="my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro rem illum blanditiis vero
                    voluptates? Deserunt eaque, porro repellendus excepturi sapiente, velit itaque odio autem, ab
                    provident
                    eligendi praesentium voluptate.
                </p>
            </div>
        </div>
        <!-- project-center -->
        <div class="square-container">
            <image-square v-for="image in images" @key="image" :img="image"></image-square>
        </div>
        <!-- project-bottom -->
        <div class="text-center my-5">
            <button-vue label="read more" class="btn-green"></button-vue>
        </div>
    </section>
    <!-- testimonials -->
    <section id="testimonials">
        <div class="overlay">
            <!-- icon -->
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error a illum voluptates necessitatibus, ad aut
                vel quo impedit, doloribus possimus optio delectus saepe non ducimus et tempora aspernatur laborum
                reprehenderit.</p>
            <!-- <figure>
                <img class="img-fluid" src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg"
                    alt="business-woman">
                <figcaption>
                    <p>Lissa Dublin</p>
                    <p>Client</p>
                </figcaption>
            </figure> -->
        </div>
    </section>
    <!-- blog -->
    <section id="blog"></section>
    <!-- userExperience -->
    <section id="userExperience"></section>
</template>

<style scoped lang="scss">
// Experience -----------------------------------------------------------
#experience {
    height: 600px;
    background-color: rgb(250, 250, 250);
    padding-left: 80px;

    h4 {
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 15px;
    }

    h2 {
        font-size: 50px;
    }

    .col-left {
        flex-basis: 50%;
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

    .pages {
        background-color: rgb(61, 61, 61);
        padding: 10px;
        border-radius: 20px;

        a {
            color: rgba(211, 211, 211, 0.719);
            text-decoration: none;
        }
    }
}

// WEBSITE DESIGN -------------------------------------------------------
#website-design {
    min-height: 400px;
    padding: 100px 0;
    background-color: white;

    .col-left {
        flex-basis: 40%;
        padding: 20px;

        h2 {
            font-size: 50px;
        }
    }

    .col-right {
        flex-basis: 60%;
        display: flex;
        flex-wrap: wrap;
    }
}

// MISSIONS -------------------------------------------------------------
#missions {
    min-height: 600px;
    background-color: rgb(249, 249, 249);
    padding: 100px 0;

    .col-left {
        flex-basis: 50%;
        position: relative;

        figure {
            position: relative;
            width: 500px;
            height: 400px;

            img {
                object-fit: cover;
                border-radius: 0 30px 30px 0;
                width: 100%;
                height: 100%;
            }

            .overlay {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border-radius: 0 30px 30px 0;
                background-image: linear-gradient(45deg, rgba(153, 225, 94, 0.795), rgba(0, 217, 166, 0.795));
            }
        }

        .photo {
            width: 500px;
            height: 400px;
            position: absolute;

            img {
                width: 100%;
                height: 50%;
                box-shadow: 0px 10px 25px gray;
                object-fit: cover;
            }
        }

        .img-top {
            top: 60px;
            left: 60px;

            img {
                object-position: 100% 0;
                border-radius: 30px 30px 0 0;
            }
        }

        .img-bottom {
            top: 260px;
            left: 40px;

            img {
                object-position: 0 100%;
                border-radius: 0 0 30px 30px;
            }
        }
    }

    .col-right {
        padding: 50px;
        flex-basis: 50%;

        h2 {
            font-size: 45px;
        }
    }
}

// PROJECT --------------------------------------------------------------
#project {
    min-height: 600px;
    background-color: white;
    padding: 100px 0px;

    .col-left {
        flex-basis: 40%;
        padding: 10px;

        h2 {
            font-size: 40px;
        }
    }

    .col-right {
        flex-basis: 60%;
        padding: 10px;
    }

    .square-container {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 80px;
    }
}

// TESTIMONIALS ---------------------------------------------------------
#testimonials {
    height: 700px;
    background-image: url('../assets/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    position: relative;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000000B3;
        color: white;
        line-height: 700px;
        vertical-align: middle;
    }
}
</style>
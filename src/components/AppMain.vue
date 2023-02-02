<script>
import { images, blogElenc, logos } from '../assets/data';
import EmailForm from './generic/EmailForm.vue';
import FormCard from './generic/FormCard.vue';
import BlogCard from './generic/BlogCard.vue';
import ImageSquare from './generic/ImageSquare.vue';
import ButtonVue from './generic/Button.vue';
import InfoCard from './generic/InfoCard.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            images,
            blogElenc,
            logos
        }
    },
    methods: {
        getUrl(image) {
            const url = new URL(`../assets/images/${image}`, import.meta.url);
            return url.href;
        }
    },
    props: {
        cards: Array,
    },
    components: { ButtonVue, InfoCard, ImageSquare, BlogCard, FormCard, EmailForm },
}
</script>


<template>
    <!-- experience -->
    <section id="experience" class="d-flex align-items-center">
        <div class="col-left">
            <h4 class="text-s"> 17 years of experience </h4>
            <h2> We Are a Web Design <span class="text-p"> Agency </span> </h2>
            <div class="d-flex my-5">
                <div class="separator small"></div>
                <div class="separator large"></div>
            </div>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Brookmarksgrove right at the coast of the Semantics, a large
                language ocean. Separated they lived in Bookmarksgrove.
            </p>
            <button-vue label="Read More" background="black" class="my-3"></button-vue>
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
                We are here to make your <span class="text-p"> website</span> look more
                <span class="text-p"> elegant </span> and stylish!
            </h2>
            <div class="d-flex my-5">
                <div class="separator small"></div>
                <div class="separator large"></div>
            </div>
            <button-vue label="view all" background="primary"></button-vue>
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
            <h2> learn more about our <span class="text-p"> missions </span></h2>
            <div class="d-flex my-5">
                <div class="separator small"></div>
                <div class="separator large"></div>
            </div>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Brookmarksgrove right at the coast of the Semantics, a large
                language ocean. Separated they lived in Bookmarksgrove.
            </p>
            <button-vue label="read more" background="primary" class="my-2"></button-vue>
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
            <button-vue label="read more" background="primary"></button-vue>
        </div>
    </section>
    <!-- testimonials -->
    <section id="testimonials">
        <div class="overlay">
            <div class="w-50 text-center">
                <font-awesome-icon icon="fa-solid fa-quote-left" />
                <p class="mb-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error a illum voluptates necessitatibus,
                    ad
                    aut
                    vel quo impedit, doloribus possimus optio delectus saepe non ducimus et tempora aspernatur laborum
                    reprehenderit.
                </p>
                <figure>
                    <img class="img-fluid" src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg"
                        alt="business-woman">
                </figure>
                <p class="text-p mb-1 text-uppercase">Lissa Dublin</p>
                <p>Client</p>
            </div>
        </div>
    </section>
    <!-- blog -->
    <section id="blog">
        <h2 class="mb-4">Latest News & Our Blog</h2>
        <div class="d-flex justify-content-center my-5">
            <div class="separator small"></div>
            <div class="separator large"></div>
        </div>
        <div class="card-container">
            <!-- card -->
            <blog-card v-for="blog in blogElenc" @key="blog.text" :blog="blog"></blog-card>
        </div>
        <button-vue label="view all post" background="black"></button-vue>
    </section>
    <!-- userExperience -->
    <section id="user-experience">
        <div class="d-flex justify-content-around">
            <!-- form -->
            <form-card color="black" question="Are You Ready?" text="Start a New Project">
                <email-form color="gray"></email-form>
            </form-card>
            <!-- form -->
            <form-card color="primary" question="What Are You Waiting For?" text="Let's Talk About Work">
                <button-vue label="start now" background="black"></button-vue>
            </form-card>
        </div>
        <div class="d-flex justify-content-around align-items-center my-5">
            <figure v-for="logo in logos" @key="logo">
                <img :src="getUrl(logo)" :alt="logo">
            </figure>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/colors' as *;

// Experience -----------------------------------------------------------
#experience {
    height: 600px;
    background-color: $lightwhite;
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
        background-color: $lightgrey;
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
    background-color: $white;

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
    background-color: $lightwhite;
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
                background-image: linear-gradient(45deg, $secondary-color-transparent, $primary-color-transparent);
            }
        }

        .photo {
            width: 500px;
            height: 400px;
            position: absolute;

            img {
                width: 100%;
                height: 50%;
                box-shadow: 0px 10px 25px $gray;
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
    background-color: $white;
    padding: 100px 0px;

    .col-left {
        flex-basis: 40%;
        padding: 10px;

        h2 {
            font-size: 45px;
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
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            font-size: 50px;
            margin-bottom: 30px;
            color: $primary-color;
        }

        figure {
            width: 100px;
            height: 100px;
            margin: 40px auto;

            img {
                border: 3px solid $white;
                border-radius: 50%;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

// BLOG -----------------------------------------------------------------
#blog {
    min-height: 500px;
    padding: 150px 10px;
    text-align: center;

    .card-container {
        min-height: 450px;
        display: flex;
        gap: 30px;
    }
}

// USER-EXPERIENCE ------------------------------------------------------
#user-experience {
    height: 400px;
    background-color: $lightwhite;
    padding: 0 10px;
}
</style>
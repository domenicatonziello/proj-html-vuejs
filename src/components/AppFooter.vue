<script>
import { links, contacts } from '../assets/data';
import BlackBar from './BlackBar.vue';
export default {
    name: 'AppFooter',
    data() {
        return {
            links,
            contacts
        }
    },
    components: { BlackBar }
}
</script>


<template>
    <!-- footer-top -->
    <div class="footer-top">
        <div class="logo">
            <img src="../assets/images/cropped-Group-39-2x.png" class="img-fluid mb-2" alt="logo">
            <p>
                While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of
                the impenetrable foliage of my trees. While the lovely valley teem with vapour around me.
            </p>
        </div>
        <div class="links">
            <ul>
                <li>
                    <h4> Quick Links </h4>
                </li>
                <li>
                    <div class="d-flex my-3">
                        <div class="separator small"></div>
                        <div class="separator large"></div>
                    </div>
                </li>
                <li v-for="link in links" @key="link"> <a href="#"> {{ link }}</a></li>
            </ul>
        </div>
        <div class="contacts">
            <ul>
                <li>
                    <h4> Contact </h4>
                </li>
                <li>
                    <div class="d-flex my-3">
                        <div class="separator small"></div>
                        <div class="separator large"></div>
                    </div>
                </li>
                <li v-for="contact in contacts" @key="contact"> {{ contact }}</li>
            </ul>
        </div>
        <div class="location">
            <h4>Location On Map</h4>
            <div class="d-flex my-3">
                <div class="separator small"></div>
                <div class="separator large"></div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03615096054!2d-74.30934065865212!3d40.69753994932665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1675351987050!5m2!1sit!2sit"
                width="250" height="150" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    <!-- footer-bottom -->
    <black-bar text="2020 PHILOX BUSINESS THEME"></black-bar>
</template>

<style scoped lang="scss">
@use '../assets/scss/colors' as *;

.footer-top {
    height: 350px;
    background-color: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>div {
        flex-basis: 25%;
        height: 200px;
        padding: 30px;
    }

    .contacts li {
        margin-bottom: 10px;
    }

    .links a {
        text-decoration: none;
        color: black;
    }
}

.blackbar {
    height: 80px;
}
</style>
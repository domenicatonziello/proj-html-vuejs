<script>
export default {
    name: 'FormCard',
    props: {
        color: String,
        question: String,
        text: String
    }
}
</script>


<template>
    <div class="form-card" :class="`bg-${color}`">
        <p>{{ question }}</p>
        <h3>{{ text }}</h3>
        <slot></slot>
    </div>
</template>


<style scoped lang="scss">
.form-card {
    width: 45%;
    height: 250px;
    padding: 50px;
    border-radius: 20px;
    text-align: center;
    color: white;
    box-shadow: 5px 5px 5px gray;

    p {
        color: rgba(255, 255, 255, 0.829);
    }

    h3 {
        margin-bottom: 40px;
    }
}
</style>
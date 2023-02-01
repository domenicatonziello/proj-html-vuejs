<script>
export default {
    name: 'InfoCard',
    props: {
        card: Object
    }
}
</script>


<template>
    <div class="infocard">
        <font-awesome-icon :icon="'fa-solid' + ' ' + card.icon"> </font-awesome-icon>
        <h4> {{ card.title }}</h4>
        <p> {{ card.text }} </p>
    </div>
</template>


<style scoped lang="scss">
.infocard {
    padding: 35px;
    margin: 20px;
    width: 350px;
    height: 250px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 30px lightgray;

    svg {
        font-size: 30px;
        margin-bottom: 10px;
    }
}
</style>
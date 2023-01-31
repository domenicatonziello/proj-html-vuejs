<script>
export default {
    name: 'Button',
    props: {
        label: String,
    }
}
</script>


<template>
    <button type="button"> {{ label }}</button>
</template>


<style scoped lang="scss">
button {
    margin: 15px;
    padding: 13px 30px;
    border-radius: 20px;
    border: 1px solid transparent;
    text-transform: uppercase;
    color: white;
    font-size: 11px;
    box-shadow: 5px 2px 15px lightgray;
}
</style>
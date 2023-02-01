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
    padding: 13px 30px;
    border-radius: 20px;
    border: 1px solid transparent;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.952);
    font-size: 11px;
}
</style>
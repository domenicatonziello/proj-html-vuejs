<script>
export default {
    name: 'EmailForm',
    props: {
        color: String,
    }
}
</script>


<template>
    <div class="email-form" :class="`bg-${color}`">
        <input type="email" placeholder="Enter Your Email Address">
        <button type="button"> SUBMIT </button>
    </div>
</template>

<style scoped lang="scss">
.email-form {
    height: 45px;
    padding: 10px 15px;
    border-radius: 10px;
    color: grey;
    display: flex;
    justify-content: space-between;

    input {
        background-color: transparent;
        border: none;

        &:focus-visible {
            outline: 0px;
        }
    }

    button {
        background-color: transparent;
        border: none;
        color: grey;
    }
}
</style>
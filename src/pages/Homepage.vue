<template>
    <div>
        <h1>FruityCountries</h1>
        <div class="mt-2">{{ text }}</div>
        <b-form-input v-model="text" placeholder="Please enter the name of a country"></b-form-input>
    </div>
</template>

<script>
    export default {
        name: 'Homepage',
        data() {
            return {
                text: ''
            }
        }
    }
</script>

<style scoped>
    *{
        text-align: center;
    }

</style>
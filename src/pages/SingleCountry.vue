<template>
    <div>
        {{ $route.params.country }}
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SingleCountry',
        mounted(){
            axios
                .get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`)
                .then(response => {
                    console.log(response.data)
                    this.countries = response.data})
                .catch(error => console.log(error))
        }
    }
</script>

<style>

</style>
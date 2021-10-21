<template>
    <div>
        {{ $route.params.country }}
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SingleCountry',
        data() {
            return {
                country: []
            }
        },
        mounted(){
            axios
                .get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`)
                .then(response => {
                    console.log(response.data)
                    this.country = response.data[0]})
                .catch(error => console.log(error))
        }
    }
</script>

<style>

</style>
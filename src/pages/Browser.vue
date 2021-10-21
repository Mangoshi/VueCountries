<template>
    <div>
        <Country 
            v-for="country in countries"
            :key="country.ccn3"
            :country="country" />
    </div>
</template>

<script>
    import axios from 'axios'
    import Country from '@/components/Country'

    export default {
        name: 'Browser',
        components: {
            Country
        },
        data() {
            return {
                countries: []
            }
        },
        mounted() {
            axios
                .get('https://restcountries.com/v3.1/all')
                .then(response => {
                    console.log(response.data)
                    this.countries = response.data})
                .catch(error => console.log(error))
        }
    }
</script>

<style>

</style>
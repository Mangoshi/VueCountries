<template>
    <div>
        <b-container fluid>
            <b-row cols-sm="2" cols-md="3" cols-lg="4">
                <Country 
                    v-for="country in countries"
                    :key="country.ccn3"
                    :country="country" />
            </b-row>
        </b-container>
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
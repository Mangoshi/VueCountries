<template>
    <div class="bod">
        <div class="centered">
            <h1 v-if="text">{{ text }}</h1>
            <h1 v-else>Fruity Countries</h1>
            <b-form-input v-model="text" v-on:keyup.enter="searchCountry()" placeholder="Please enter the name of a country"></b-form-input>
        </div>
        <b-container fluid>
            <b-row cols-sm="2" cols-md="3" cols-lg="4">
                <Country 
                    v-for="country in countries"
                    :key="country.ccn3"
                    :country="country" 
                />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Country from '@/components/Country'

    export default {
        name: 'Homepage',
        components: {
            Country
        },
        data() {
            return {
                text: '',
                countries: []
            }
        },
        methods: {
            async searchCountry() {
                // Displaying error message if search term was empty
                if(!this.text) {
                    alert("Please enter a search term!")
                    return
                }
                // Defining requests as constants
                const firstRequest = axios.get(`https://restcountries.com/v3.1/name/${this.text}`)
                const secondRequest = axios.get(`https://restcountries.com/v3.1/subregion/${this.text}`)
                const thirdRequest = axios.get(`https://restcountries.com/v3.1/currency/${this.text}`)
                // Using Promise.allSettled instead of Promise.all so that some requests can fail
                Promise.allSettled([firstRequest,secondRequest,thirdRequest])
                // Using axios.spread to "spread" the requests out into an array
                .then(axios.spread((...responses) => {
                    // Defining responses as constants
                    const firstResponse = responses[0]
                    const secondResponse = responses[1]
                    const thirdResponse = responses[2]
                    // Logging each response
                    console.log("First Response: ",firstResponse)
                    console.log("Second Response: ",secondResponse)
                    console.log("Third Response: ",thirdResponse)
                    // Looping through the responses in the array 
                    responses.forEach(response => {
                        // Checking to see if the status of a response came back as fulfilled
                        if(response.status == "fulfilled"){
                            // If it was, log it and assign this.countries the value of its data array
                            console.log("Fulfilled Response: ", response.value.data)
                            this.countries = response.value.data
                        }
                    });
                    // If all responses return with a status of "rejected", display an alert message and clear the search box
                    if(responses[0].status == "rejected" && responses[1].status == "rejected" && responses[2].status == "rejected"){
                        alert("No results... Try again!")
                        this.text = ""
                    }
                }))
                .catch(errors => {
                    console.log('Errors detected: ', errors)
                })
            }
        }
    }
</script>

<style scoped>
    *{
        text-align: center;
    }
    h1{
        font-family: "Permanent Marker";
        margin-bottom: 1em;
    }
    .bod{
        height: 75vh;
        display: grid;
    }
    .centered{
        margin: auto;
    }
</style>
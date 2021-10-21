<template>
    <div class="bod">
        <div class="centered">
            <h1 v-if="text">{{ text }}</h1>
            <h1 v-else>Fruity Countries</h1>
            <b-form-input v-model="text" v-on:keyup.enter="searchCountry()" placeholder="Please enter the name of a country"></b-form-input>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Homepage',
        data() {
            return {
                text: ''
            }
        },
        methods: {
            searchCountry() {
                if(!this.text) {
                    alert("Please enter a search term!")
                    return
                }
                axios
                    .get(`https://restcountries.com/v3.1/name/${this.text}`)
                    .then((response) => {
                        console.log(response.data)
                        this.country = [response.data]
                    })
                    .catch(error => console.log(error))
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
<template>
    <b-container fluid>
        <b-row cols="2" class="m-2">
            <b-col cols="4">
                <b-card 
                    class="country" 
                    header-tag="header" 
                    footer-tag="footer"
                    no-body
                >
                    <template #header>
                        <!-- If there is a flag emoji available -->
                        <h5 class="mb-0" v-if="country.flag">
                            <router-link class="c_link" :to="{name: 'single_country', params: {country: country.name.official}}">{{country.flag + " " + country.name.common + " / " + country.altSpellings[1] }}</router-link>
                        </h5>
                        <!-- If there is not a flag emoji available -->
                        <h5 class="mb-0" v-else>
                            <router-link class="c_link" :to="{name: 'single_country', params: {country: country.name.official}}">&#127937; {{country.name.common }}</router-link>
                        </h5>
                    </template>
                    <b-card-body class="p-0">
                        <b-list-group flush>
                            <b-list-group-item class="c_capital" variant="warning" :href="'https://www.google.com/maps/place/'+country.capital"><b>Capital: </b>{{ country.capital[0] }}</b-list-group-item>
                            <b-list-group-item class="c_region"><b>Region: </b>{{ country.region }}</b-list-group-item>
                            <b-list-group-item class="c_subregion"><b>Subregion: </b>{{ country.subregion }}</b-list-group-item>
                            <b-list-group-item class="c_timezone"><b>Timezone: </b>{{ country.timezones[0] }}</b-list-group-item>
                            <b-list-group-item class="c_population"><b>Population: </b>{{ popFormat() }}</b-list-group-item>
                            <b-list-group-item class="c_currency"><b>Currencies: </b>{{ currencyKey(country.currencies) }}</b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <template #footer>
                        
                    </template>
                </b-card>
            </b-col>
            <b-col cols="8">
                <b-card>
                    <div class="iframe-rwd">
                        <iframe scrolling="no" allowfullscreen="yes" loading="lazy" :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyAfD6KkQQ2eE5q5gt7lTqZBEhRZuh1FOUQ&q=${country.name.common}`"></iframe>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Viewer',
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
        },
        methods: {
            popFormat(){
                return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            currencyKey(obj){
                var currencyStringified = JSON.stringify(obj)
                var secondCurrency = currencyStringified.split('"')[11]
                var currencyReturned
                
                if(secondCurrency){
                    currencyReturned = currencyStringified.split('"')[1] + ", " + currencyStringified.split('"')[11]
                } else {
                    currencyReturned = currencyStringified.split('"')[1]
                }
                return currencyReturned
            },
            pluralCheck(obj){
                var currencyStringified = JSON.stringify(obj)
                var secondCurrency = currencyStringified.split('"')[11]
                var pluralSingular
                if(secondCurrency){
                    pluralSingular = "Currencies:"
                } else {
                    pluralSingular = "Currency:"
                }
                return pluralSingular
            }
        }
    }
</script>

<style>
    .iframe-rwd  {
        position: relative;
        padding-bottom: 65.25%;
        padding-top: 30px;
        height: 0;
        overflow: hidden;
    }
    .iframe-rwd iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
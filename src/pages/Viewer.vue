<template>
    <b-container fluid>
        <b-row cols="2" class="m-2">
            <b-col cols="4">
                <b-card 
                    class="country" 
                    header-tag="header" 
                    footer-tag="footer"
                    no-body
                    :img-src='photo'
                    img-alt="Image"
                    img-top
                >
                    <template #header>
                        <!-- If there is a flag emoji available -->
                        <h5 class="mb-0" v-if="country.flag">
                            {{ country.flag + " " + country.name.common}} 
                            <span v-if="country.altSpellings[1]">{{" / " + country.altSpellings[1]}}</span>
                            <span v-else></span>
                        </h5>
                        <!-- If there is not a flag emoji available -->
                        <h5 class="mb-0" v-else>
                            &#127937; {{ country.name.common + " / " + country.altSpellings[1] }}
                        </h5>
                    </template>
                    <b-card-body class="p-0">
                        <b-list-group flush>
                            <b-list-group-item class="c_capital" variant="warning" :href="'https://www.google.com/maps/place/'+country.capital"><b>Capital: </b>{{ country.capital[0] }}</b-list-group-item>
                            <b-list-group-item class="c_region"><b>Region: </b>{{ country.region }}</b-list-group-item>
                            <b-list-group-item class="c_subregion"><b>Subregion: </b>{{ country.subregion }}</b-list-group-item>
                            <b-list-group-item class="c_population"><b>Population: </b>{{ popFormat() }}</b-list-group-item>
                            <b-list-group-item class="c_bordering"><b>Borders: </b>{{ bordering.toString() }}</b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <template #footer>
                        <b-row cols="2">
                            <b-col class="c_timezone">&#8986; {{ country.timezones[0] }}</b-col>
                            <b-col class="c_currency">&#128176; {{ currencyKey(country.currencies) }}</b-col>
                        </b-row>
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
                country: [],
                photo: [],
                bordering: []
            }
        },
        mounted(){
            axios
                .get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`)
                .then(response => {
                    console.log("Countries data: ", response.data[0])
                    this.country = response.data[0]
                    })
                .catch(error => console.log("RESTcountries error: ", error))
                
            const PEXELS_URL = `https://api.pexels.com/v1/search?query=${this.$route.params.country}&per_page=1&orientation=landscape`
            const PEXELS_TOKEN = '563492ad6f91700001000001660dc6de6e62494da4a3601ccfc6ecc3'

            axios
                .get(PEXELS_URL, { headers: {"Authorization" : `Bearer ${PEXELS_TOKEN}`} })
                .then(pexels => {
                    console.log("Pexels data: ", pexels)
                    this.photo = pexels.data.photos[0].src.medium})
                .catch(error => console.log("Pexels error: ", error))

            var countryBorders = this.$route.params.borders
            axios
                .get(`https://restcountries.com/v3.1/alpha?codes=${countryBorders.toString()}`)
                .then(response => {
                    console.log("Borders data: ", response.data)
                    var bordersArray = response.data
                    var borderNames = []
                    bordersArray.forEach(border => {
                        borderNames.push(" " + border.name.common)
                    })
                    console.log("Bordering country names: ", borderNames)
                    this.bordering = borderNames
                    })
                .catch(error => console.log("RESTcountries (country code endpoint) error: ", error))
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
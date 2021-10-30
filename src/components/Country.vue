<template>
    <div>
        <b-col>
            <b-card 
                class="country m-2" 
                header-tag="header" 
                footer-tag="footer"
                no-body
            >
                <template #header>
                    <!-- If there is a flag emoji available -->
                    <h5 class="mb-0" v-if="country.flag">
                        <router-link class="c_link" :to="{name: 'single_country', params: {country: country.name.common}}">{{country.flag + " " + country.name.common }}</router-link>
                    </h5>
                    <!-- If there is not a flag emoji available -->
                    <h5 class="mb-0" v-else>
                        <router-link class="c_link" :to="{name: 'single_country', params: {country: country.name.common}}">&#127937; {{country.name.common }}</router-link>
                    </h5>
                </template>
                <b-card-body class="p-0">
                    <b-list-group flush>
                        <b-list-group-item class="c_capital" variant="warning" :href="'https://www.google.com/maps/place/'+country.capital"><b>Capital: </b>{{ country.capital[0] }}</b-list-group-item>
                        <b-list-group-item class="c_region"><b>Region: </b>{{ country.region }}</b-list-group-item>
                        <b-list-group-item class="c_subregion"><b>Subregion: </b>{{ country.subregion }}</b-list-group-item>
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
    </div>
</template>

<script>
    export default {
        name: 'Country',
        props: {
            country: Object
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
    .c_link{
        text-decoration: none;
    }
</style>
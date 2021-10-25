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
                        <router-link class="c_link" :to="{name: 'single_country', params: {country: country.name.official}}">{{country.flag + " " + country.name.common }}</router-link>
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
                        <b-list-group-item class="c_population"><b>Population: </b>{{ country.population }}</b-list-group-item>
                    </b-list-group>
                </b-card-body>
                <template #footer>
                    
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
        }
    }
</script>

<style>
    .c_link{
        text-decoration: none;
    }
</style>
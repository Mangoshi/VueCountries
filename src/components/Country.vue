<template>
    <div>
        <div class="country">
            <span class="c_flag">{{ country.flag }}</span>
            <a class="c_name"><router-link :to="{name: 'single_country', params: {country: country.name.official}}">{{ country.name.common }}</router-link></a> 
            <p class="c_capital"><b>Capital: </b>{{ country.capital[0] }}</p>
            <hr>
        </div>
        
        
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
    .country{
        margin: 1em;
    }
    .c_flag{
        margin: 5px;
        font-size: 3em;
    }
    .c_name{
        font-size: 2em;
    }
    .c_capital{
        font-size: 1.5em;
    }
</style>
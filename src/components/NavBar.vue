<template>
    <div id="nav">
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'all_countries'}">All</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
    #nav{
        padding: 1rem;
        text-align: center;
        background-color: #333;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.5em;
    }
    #nav a{
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active{
        color: aqua;
    }
</style>
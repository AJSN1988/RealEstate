<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<!--
    Root app component
-->

<script>
export default {
    name: "app"
};
</script>

<!--
    Common app styles
-->

<style lang="scss">
body,
html {
    margin: 0;
    background-color: #e0dcdc;
}

#app {
    @font-face {
        font-family: "Roboto sans-serif";
        src: url("../assets/fonts/Roboto-Light.ttf");
    }
    font-family: "Roboto";

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

h4 {
    font-size: 15px;
    text-transform: uppercase;
    margin: 10px 0;
    font-weight: 500;
}

h5 {
    font-size: 13px;
    text-transform: uppercase;
    margin: 10px 0;
    font-weight: 500;
}

.fake {
    height: 1000px;
    background-color: grey;
}

.VueCarousel-navigation-button {
    color: white !important;
    font-size: 20px;
}
.VueCarousel-navigation-prev {
    color: black !important;
    left: 25px !important;
    top: 120px !important;
    font-size: 40px;
    &:focus {
        outline: none !important;
    }
}
.VueCarousel-navigation-next {
    color: black !important;
    right: 25px !important;
    top: 120px !important;
    font-size: 40px;
    &:focus {
        outline: none !important;
    }
}

@media screen and (max-width: 1200px) {
    .VueCarousel-navigation-next,
    .VueCarousel-navigation-prev {
        top: 45% !important;
        font-size: 50px !important;
    }
}

@media screen and (max-width: 900px) {
    .VueCarousel-navigation {
        display: none !important;
    }
}
</style>

<template>
    <div id="home">
        <div class="loading-wrapper" :class="{showed : showLoadingPage}">
            <page-loading></page-loading>
        </div>
        <div class="home-page-wrapper" :class="{hidden : hideHomePage}">
            <navbar></navbar>
            <div class="main-background" id="top">
                <div class="main-wrapper">
                    <main-plate :bestDeals="bestDealsObjects"></main-plate>
                    <obj-filter :objects="filtredObjects"></obj-filter>
                    <last-objects :objects="lastAddingObjects"></last-objects>
                    <agents :agents="companyAgents"></agents>
                    <types :objects="objectTypes"></types>
                </div>
            </div>
            <about></about>
            <contacts></contacts>
            <app-bottom></app-bottom>
        </div>
    </div>
</template>

<!--
    Root app component
-->

<script>
import Axios from "axios";

import Navbar from "./Navbar";
import MainPlate from "./MainPlate";
import Filter from "./Filter";
import LastObjects from "./LastObjects";
import Agents from "./Agents";
import Types from "./Types";
import About from "./About";
import Contacts from "./Contacts";
import AppBottom from "./AppBottom";
import PageLoading from "./PageLoading";

export default {
    name: "home",
    created: function() {
        window.addEventListener("scroll", this.handleScroll);
    },
    mounted: function() {
        this.sectionPositions.forEach(section => {
            let el = document.getElementById(section.name);
            section.position = el.offsetTop;
        });
        // Load all resources
        this.loadHomePageRes();
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.handleScroll);
        this.$store.commit("changeMainPageSection", "top");
    },
    data() {
        return {
            hideHomePage: true,
            showLoadingPage: true,
            bestDealsObjects: [],
            filtredObjects: [],
            lastAddingObjects: [],
            companyAgents: [],
            objectTypes: {
                flats: [],
                apartments: [],
                houses: [],
                dacha: [],
                commercial: []
            },
            sectionPositions: [
                { name: "top", position: 0 },
                { name: "filter", position: 0 },
                { name: "lastObject", position: 0 },
                { name: "agents", position: 0 },
                { name: "about", position: 0 },
                { name: "contacts", position: 0 }
            ]
        };
    },
    methods: {
        handleScroll(e) {
            let offset = window.pageYOffset;

            let top = "top";
            this.sectionPositions.forEach((section, index) => {
                if (offset >= section.position) {
                    top = section.name;
                }
            });
            this.$store.commit("changeMainPageSection", top);
        },
        homePageIsHide() {
            return true ? this.$store.state.loadError : false;
        },
        loadHomePageRes() {
            let bestDealsPromise = Axios.get(
                "http://localhost:3000/deals/"
            ).then(response => {
                this.bestDealsObjects = response.data;
            });

            let filtredObjectsPromise = Axios.get(
                "http://localhost:3000/objects?objType=Квартиры&dealType=Купить"
            ).then(response => {
                this.filtredObjects = response.data;
            });

            let lastObjects = Axios.get(
                "http://localhost:3000/objects?_sort=id&&_order=desc&_start=0&_limit=6"
            ).then(response => {
                this.lastAddingObjects = response.data;
            });

            let companyAgents = Axios.get("http://localhost:3000/agents").then(
                response => {
                    this.companyAgents = response.data;
                }
            );

            let typeFlats = Axios.get(
                "http://localhost:3000/objects?objType=Квартиры"
            ).then(response => {
                this.objectTypes.flats = response.data;
            });

            let typeAparts = Axios.get(
                "http://localhost:3000/objects?objType=Апартаменты"
            ).then(response => {
                this.objectTypes.apartments = response.data;
            });

            let typeHouses = Axios.get(
                "http://localhost:3000/objects?objType=Загородные%20дома"
            ).then(response => {
                this.objectTypes.houses = response.data;
            });

            let typeDacha = Axios.get(
                "http://localhost:3000/objects?objType=Дачные%20дома"
            ).then(response => {
                this.objectTypes.dacha = response.data;
            });

            let typeCommercial = Axios.get(
                "http://localhost:3000/objects?objType=Коммерческая%20недвижимость"
            ).then(response => {
                this.objectTypes.commercial = response.data;
            });

            Promise.all([
                bestDealsPromise,
                filtredObjectsPromise,
                lastObjects,
                typeFlats,
                typeAparts,
                typeHouses,
                typeDacha,
                typeCommercial
            ])
                .then(response => {
                    this.hideHomePage = this.showLoadingPage = false;
                })
                .catch(error => {
                    console.error("Get error form loading resources");
                    this.$store.commit("changeLoadError", true);
                    this.$store.commit("changeLoadErrorText", error);
                    this.hideHomePage = this.showLoadingPage = true;
                });
        }
    },
    components: {
        PageLoading: PageLoading,
        Navbar: Navbar,
        MainPlate: MainPlate,
        ObjFilter: Filter,
        LastObjects: LastObjects,
        Agents: Agents,
        Types: Types,
        About: About,
        Contacts: Contacts,
        AppBottom: AppBottom
    }
};
</script>

<!--
    Common app styles
-->

<style lang="scss">
.main-background {
    background: url(../assets/img/main-background.png) no-repeat center;
    background-size: cover;
    .main-wrapper {
        background-color: #e0e0e0ed;
    }
}

.loading-wrapper {
    display: none;
}

.showed {
    display: block !important;
}

.hidden {
    position: fixed;
}
</style>

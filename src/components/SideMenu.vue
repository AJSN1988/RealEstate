<!--
    Side menu
-->

<template>
    <div class="side-menu">
        <div class="header">
            <img class="logo" src="../assets/img/dark-logo.png" alt="Logo" width="110" height="65">
            <hr>
            <div
                class="annotation"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam blanditiis ut, iusto quis voluptatem tempora ea commodi ab id. Vitae.</div>
        </div>
        <ul class="links-list">
            <li v-for="link in links" :key="link.id">
                <a v-if="link.link == section" class="active">{{link.label}}</a>
                <a v-else v-on:click="goRoute(link.id, $event)">{{link.label}}</a>
            </li>
        </ul>
        <div class="find-form">
            <label for="findInput" v-if="!findError">Поиск по приложению</label>
            <label for="findInput" v-if="findError == true" class="error-label">Ничего не найдено</label>
            <input type="text" id="findInput">
            <button @click="findOnPage">Поиск</button>
        </div>
    </div>
</template>

<!--
    Side menu component
-->

<script>
import Axios from "axios";

export default {
    name: "side-menu",
    data() {
        return {
            activeLink: 0,
            findError: false
        };
    },
    props: {
        links: Array
    },
    computed: {
        section() {
            return this.$store.state.mainPageSection;
        }
    },
    methods: {
        goRoute(id, e) {
            let obj = this.$props.links[id];
            this.$store.commit("changeMainPageSection", obj.link);

            if (obj.type == "link") {
                document.querySelector(`#${obj.link}`).scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                // if (obj.url) {
                //     // Test func
                //     Axios.get(obj.url).then(response => {
                //         this.$router.push({
                //             name: obj.linkName,
                //             params: { objects: response.data }
                //         });
                //     });
                // } else {
                //     this.$router.push({
                //         name: obj.linkName
                //     });
                // }
            }
            this.activeLink = id;
        },
        findOnPage() {
            this.findError = !this.findError;
        }
    }
};
</script>

<!--
    Side bar styles
-->

<style lang="scss" scoped>
.side-menu {
    width: 300px;
    font-family: sans-serif;
    position: fixed;
    height: 100%;
    z-index: 2;
    background-color: #d1d1d1e3;
    top: 0;
    hr {
        height: 2px;
        background-color: black;
        margin: 0 30px;
    }
    .annotation {
        margin: 20px 30px 0;
        text-align: left;
        font-size: 12px;
    }
}
.logo {
    padding: 20px;
}
.links-list {
    margin: 15px 0;
    text-align: left;
    padding-left: 30px;
    text-transform: uppercase;
    li {
        display: inherit;
        margin: 0;
        padding: 10px 0;
        a {
            font-size: 15px;
            color: black;
            text-decoration-line: none;
            font-family: sans-serif;
            &:hover {
                border-bottom: 2px solid black;
                cursor: pointer;
            }
        }
        .active {
            color: #28c128;
            &:hover {
                cursor: default;
                border-bottom: none;
            }
        }
    }
}
.find-form {
    text-align: left;
    padding-left: 30px;
    label {
        font-size: 12px;
    }
    .error-label {
        color: #d80000;
    }
    input {
        font-size: 13px;
        outline: none;
        margin-top: 5px;
        background: none;
        border: 1px solid black;
        padding: 7px 10px;
        width: 150px;
    }
    button {
        padding: 9px 10px;
        text-transform: uppercase;
        font-size: 12px;
        background-color: #28c128cf;
        color: white;
        outline: none;
        border: none;
        &:hover {
            cursor: pointer;
            background-color: #0a0a0aab;
        }
    }
}

// Adaptive

@media screen and (max-width: 500px) {
    .links-list {
        a {
            font-size: 13px !important;
        }
    }
    .logo {
        padding: 10px !important;
        width: 80px !important;
        height: 55px !important;
    }
    .find-form {
        input {
            width: 100px !important;
        }
    }
}
</style>

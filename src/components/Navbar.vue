<!--
    Top navbar template
-->
<template>
    <section id="nav">
        <transition name="navbar-fade">
            <div class="top-navbar">
                <div class="menu-btn" v-bind:class="{offset: menuVisible}">
                    <button v-on:click="menuToggle">
                        <img :src="menuLogo" alt="Menu-icon" width="25" height="25">
                        <span>{{menuText}}</span>
                    </button>
                </div>
            </div>
        </transition>
        <transition name="slide-menu">
            <side-menu v-if="menuVisible" v-bind:links="links" v-bind:activeLink="activeLink"></side-menu>
        </transition>
    </section>
</template>

<!--
    Top navbar template
-->

<script>
import SideMenu from "./SideMenu.vue";
import OpenMenu from "../assets/img/menu-white.png";
import CloseMenu from "../assets/img/close-white.png";

export default {
    name: "top-navbar",
    data() {
        return {
            menuVisible: false,
            menuText: "Меню",
            menuLogo: OpenMenu,
            links: [
                {
                    id: 0,
                    label: "Главная",
                    link: "top",
                    type: "link"
                },
                {
                    id: 1,
                    label: "Поиск недвижимости",
                    link: "filter",
                    type: "link"
                    // linkName: "Objects",
                    // type: "route",
                    // url: "http://localhost:3000/objects"
                },
                {
                    id: 2,
                    label: "Свежие предложения",
                    link: "lastObject",
                    type: "link"
                    // linkName: "Objects",
                    // type: "route",
                    // url:
                    //     "http://localhost:3000/objects?_sort=id&&_order=desc&_start=0&_limit=6"
                },
                // { id: 3, label: "Наши агенты", link: "agents", type: "link" },
                {
                    id: 3,
                    label: "О нашем агенстве",
                    link: "about",
                    type: "link"
                },
                {
                    id: 4,
                    label: "Контактная информация",
                    link: "contacts",
                    type: "link"
                }
            ],
            activeLink: 0
        };
    },
    components: {
        SideMenu: SideMenu
    },
    methods: {
        menuToggle() {
            this.menuVisible = !this.menuVisible;
            if (this.menuVisible) {
                (this.menuText = "Закрыть"), (this.menuLogo = CloseMenu);
            } else {
                (this.menuText = "Меню"), (this.menuLogo = OpenMenu);
            }
        }
    }
};
</script>

<!--
    Styles
-->

<style lang="scss" scoped>
.top-navbar {
    position: absolute;
    // flex-direction: row;
    // justify-content: space-between;
}

.menu-btn {
    position: fixed;
    z-index: 2;
    button {
        background-color: #28c128cf;
        color: white;
        outline: none;
        padding: 15px 20px;
        text-transform: uppercase;
        font-size: 15px;
        border: none;
    }
    span {
        vertical-align: super;
        padding-left: 5px;
    }
    &:hover {
        cursor: pointer;
    }
}

// Animation

.menu-btn {
    padding-left: 0;
    transition: 0.8s;
}

.offset {
    padding-left: 300px;
    transition: 0.4s;
}

// Navbar

// .navbar-fade-anter-active,
// .navbar-fade-leave-active {
//     transition: 0.1s;
//     // transform: translateX(1000px);
// }

// .slide-menu-enter,
// .slide-menu-leave-to {
//     opacity: 0;
// }

// Side menu

.slide-menu-enter-active {
    transition: all 0.4s ease;
}
.slide-menu-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-menu-enter, .slide-menu-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(-300px);
    opacity: 0;
}

// Adaptive

@media screen and (max-width: 400px) {
    .side-menu {
        width: 250px !important;
        .logo {
            padding: 10px !important;
        }
    }
    .menu-btn.offset {
        padding-left: 250px !important;
    }
}

@media screen and (max-width: 500px) {
    .menu-btn {
        span {
            display: none;
        }
    }
}
</style>

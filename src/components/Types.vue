<!--
    About agency template
-->

<template>
    <div class="types" id="about">
        <div class="container">
            <div class="container-wrapper">
                <div class="info">
                    <div class="types-wrapper">
                        <div
                            class="flats-wrapper"
                            @mouseover="showIndex = 0"
                            @mouseout="showIndex = null"
                        >
                            <div class="flats" :class="{hovered : showIndex == 0}"></div>
                            <div class="label">
                                <router-link
                                    v-if="objects.flats.length"
                                    :to="{ name: 'Objects', params: { objects: objects.flats }}"
                                >
                                    <a href>Квартиры</a>
                                </router-link>
                                <span v-else class="fake_href">Квартиры</span>
                                <div
                                    class="show-objects"
                                    v-show="showIndex == 0"
                                >{{`Объектов в базе - ${objects.flats.length}`}}</div>
                            </div>
                        </div>
                        <div
                            class="apartments-wrapper"
                            @mouseover="showIndex = 1"
                            @mouseout="showIndex = null"
                        >
                            <div class="apartments" :class="{hovered : showIndex == 1}"></div>
                            <div class="label">
                                <router-link
                                    v-if="objects.apartments.length"
                                    :to="{ name: 'Objects', params: { objects: objects.apartments }}"
                                >
                                    <a href>Апартаменты</a>
                                </router-link>
                                <span v-else class="fake_href">Апартаменты</span>
                                <div
                                    class="show-objects"
                                    v-show="showIndex == 1"
                                >{{`Объектов в базе - ${objects.apartments.length}`}}</div>
                            </div>
                        </div>
                        <div
                            class="houses-wrapper"
                            @mouseover="showIndex = 2"
                            @mouseout="showIndex = null"
                        >
                            <div class="houses" :class="{hovered : showIndex == 2}"></div>
                            <div class="label">
                                <router-link
                                    v-if="objects.houses.length"
                                    :to="{ name: 'Objects', params: { objects: objects.houses }}"
                                >
                                    <a href>Загородные дома</a>
                                </router-link>
                                <span v-else class="fake_href">Загородные дома</span>
                                <div
                                    class="show-objects"
                                    v-show="showIndex == 2"
                                >{{`Объектов в базе - ${objects.houses.length}`}}</div>
                            </div>
                        </div>
                        <div
                            class="dacha-wrapper"
                            @mouseover="showIndex = 3"
                            @mouseout="showIndex = null"
                        >
                            <div class="dacha" :class="{hovered : showIndex == 3}"></div>
                            <div class="label">
                                <router-link
                                    v-if="objects.dacha.length"
                                    :to="{ name: 'Objects', params: { objects: objects.dacha }}"
                                >
                                    <a href>Дачные дома</a>
                                </router-link>
                                <span v-else class="fake_href">Дачные дома</span>
                                <div
                                    class="show-objects"
                                    v-show="showIndex == 3"
                                >{{`Объектов в базе - ${objects.dacha.length}`}}</div>
                            </div>
                        </div>
                        <div
                            class="commercial-wrapper"
                            @mouseover="showIndex = 4"
                            @mouseout="showIndex = null"
                        >
                            <div class="commercial" :class="{hovered : showIndex == 4}"></div>
                            <div class="label">
                                <router-link
                                    v-if="objects.commercial.length"
                                    :to="{ name: 'Objects', params: { objects: objects.commercial }}"
                                >
                                    <a href>Коммерческая недвижимость</a>
                                </router-link>
                                <span v-else class="fake_href">Коммерческая недвижимость</span>
                                <div
                                    class="show-objects"
                                    v-show="showIndex == 4"
                                >{{`Объектов в базе - ${objects.commercial.length}`}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!--
    About agency component
-->

<script>
import Axios from "axios";
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "types",
    data: function() {
        return {
            showIndex: null
        };
    },
    props: {
        objects: Object
    }
};
</script>

<!--
    About agency styles
-->

<style lang="scss" scoped>
.types {
    font-family: sans-serif;
    position: relative;
    z-index: 1;
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .types-wrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0 30px;
            .flats-wrapper {
                width: 65.5%;
                height: 300px;
                overflow: hidden;
                margin-top: 40px;
                position: relative;
                .flats {
                    background: url(../assets/img/flat_type.jpg);
                    background-position: center;
                    background-size: cover;
                    width: 100%;
                    height: 100%;
                    transition: all 0.5s ease;
                }
            }
            .apartments-wrapper,
            .houses-wrapper,
            .dacha-wrapper,
            .commercial-wrapper {
                width: 31%;
                height: 300px;
                margin-top: 40px;
                position: relative;
            }
            .apartments-wrapper {
                overflow: hidden;
                .apartments {
                    background: url(../assets/img/apart_type.jpg);
                    background-position: center;
                    background-size: cover;
                    height: 100%;
                    width: 100%;
                    transition: all 0.5s ease;
                }
            }
            .houses-wrapper {
                overflow: hidden;
                .houses {
                    background: url(../assets/img/house_type.jpg);
                    background-position: center;
                    background-size: cover;
                    height: 100%;
                    width: 100%;
                    transition: all 0.5s ease;
                }
            }
            .dacha-wrapper {
                overflow: hidden;
                .dacha {
                    background: url(../assets/img/dacha_type.jpg);
                    background-position: center;
                    background-size: cover;
                    height: 100%;
                    width: 100%;
                    transition: all 0.5s ease;
                }
            }
            .commercial-wrapper {
                overflow: hidden;
                .commercial {
                    height: 100%;
                    width: 100%;
                    background: url(../assets/img/commercial_type.jpg);
                    background-position: center;
                    background-size: cover;
                    transition: all 0.5s ease;
                }
            }
            .hovered {
                transform: scale(1.2);
            }
            .label {
                position: absolute;
                background-color: #000000bd;
                color: white;
                padding: 10px 0;
                width: 100%;
                bottom: 0;
                a {
                    text-decoration: none;
                    color: white;
                    &:hover {
                        color: yellow;
                    }
                }
                .fake_href {
                    color: white;
                    &:hover {
                        color: grey;
                        cursor: not-allowed;
                    }
                }
                .show-objects {
                    font-size: 12px;
                    padding-top: 5px;
                }
            }
        }
    }
}

// Adaptive

@media screen and (min-width: 700px) and (max-width: 900px) {
    .flats-wrapper {
        width: 100% !important;
    }
    .apartments-wrapper,
    .houses-wrapper,
    .dacha-wrapper,
    .commercial-wrapper {
        width: 46% !important;
    }
}

@media screen and (max-width: 699px) {
    .flats-wrapper,
    .apartments-wrapper,
    .houses-wrapper,
    .dacha-wrapper,
    .commercial-wrapper {
        width: 100% !important;
    }
}
</style>

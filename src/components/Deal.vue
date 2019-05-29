<!--
    Deal template
-->

<template>
    <div
        class="deal-wrapper"
        v-bind="value"
        @mouseover="showExtra = true"
        @mouseout="showExtra = false"
    >
        <div
            class="deal"
            :style="{ 'background-image': 'url(' + value.img + ')','background-size': 'cover' }"
            :class="{hovered:showExtra}"
        ></div>
        <div class="deal-information">
            <div class="info">
                <div class="price">
                    {{value.price}}
                    <span>{{value.currency}}</span>
                </div>
            </div>
            <div class="deal-title" @click="goToRouteMobile">{{value.annotation}}</div>
            <router-link :to="{ name: 'Objects', params: { objects: [] }}">
                <img
                    src="../assets/img/show.png"
                    alt="Go to object details"
                    width="15"
                    height="15"
                    class="img-btn"
                >
            </router-link>
        </div>
    </div>
</template>

<!--
    Deal component
-->

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "deal",
    data() {
        return {
            showExtra: false
        };
    },
    methods: {
        goToRouteMobile: function() {
            let currWidth = screen.width;
            if (currWidth < 700) {
                this.$router.push({ name: "Objects", params: { objects: [] } });
            }
        }
    },
    components: {
        Carousel: Carousel,
        Slide: Slide
    },
    props: {
        value: Object
    }
};
</script>

<!--
    Slider template
-->

<style lang="scss" scoped>
.deal-wrapper {
    position: relative;
    overflow: hidden;
    .deal {
        height: 350px;
        position: relative;
        transition: all 0.5s ease;
    }
    .deal-information {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .deal-title {
            background-color: #000000bd;
            padding: 10px;
        }
        .info {
            display: flex;
            flex-direction: row;
            .price {
                background-color: #4cc251;
                padding: 10px;
                width: 150px;
                font-size: 20px;
            }
        }
        a {
            position: absolute;
            right: 15px;
            bottom: 8px;
            transition: all 0.2s ease-in-out;
            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .hovered {
        transform: scale(1.1);
    }
}

// Adaptive

@media screen and (max-width: 700px) {
    .deal-title {
        font-size: 13px;
    }
    .deal-information {
        .img-btn {
            display: none;
        }
        .mobile-link {
            display: block;
        }
    }
}

@media screen and (min-width: 701px) {
    .mobile-link {
        display: none;
    }
}
</style>

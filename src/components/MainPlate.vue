<!--
    Main plate template
-->

<template>
    <div class="main-plate">
        <div class="video-wrapper">
            <video muted playsinline autoplay class="background" loop preload="auto">
                <source
                    src="https://myhometheme.net/video-myhome-filles/agent.mp4"
                    type="video/mp4"
                >
            </video>
        </div>
        <div class="container">
            <div class="annotation-wrapper">
                <div class="annotation">
                    <img
                        class="logo"
                        src="../assets/img/white-logo.png"
                        alt="Logo"
                        width="110"
                        height="65"
                    >
                    <h5>Поможем вам найти жилище мечты</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis enim quidem quisquam dolorem commodi placeat, explicabo ipsam quos ad dolore. Neque animi incidunt totam eius assumenda recusandae rerum, quasi optio possimus voluptatum obcaecati necessitatibus commodi sit consequuntur deserunt. Veniam aperiam libero odio alias, voluptates dicta eius vitae nobis temporibus!</p>
                    <div class="base-contacts">
                        <div class="phone" :class="{worktime: isWorkTime}" @click="callMe($event)">
                            <img
                                src="../assets/img/call-logo.png"
                                alt="Phone"
                                width="30"
                                height="30"
                            >
                            <span>+7-800-111-11-11</span>
                        </div>
                        <div class="socials">
                            <a href="mailto:test@test.com">
                                <img
                                    src="../assets/img/mail-logo.png"
                                    alt="Phone"
                                    width="30"
                                    height="30"
                                >
                            </a>
                            <a href="http://vk.com">
                                <img
                                    src="../assets/img/vk-logo.png"
                                    alt="Phone"
                                    width="30"
                                    height="30"
                                >
                            </a>
                            <a href="http://ok.ru">
                                <img
                                    src="../assets/img/ok-logo.png"
                                    alt="Phone"
                                    width="30"
                                    height="30"
                                >
                            </a>
                            <a href="http://instagrem.com">
                                <img
                                    src="../assets/img/inst-logo.png"
                                    alt="Phone"
                                    width="30"
                                    height="30"
                                >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="best-dials-wrapper">
                <div class="title">Лучшие предложения агентсва</div>
                <div class="best-deals">
                    <slider :config="sliderConfig" :objects="bestDeals"></slider>
                </div>
            </div>
        </div>
    </div>
</template>

<!--
    Main plate component
-->

<script>
import Slider from "./BestDealsSlider.vue";
import Deal from "./Deal.vue";

export default {
    name: "mainPlate",
    data() {
        return {
            sliderConfig: {
                perPageCustom: [[320, 1], [500, 1], [992, 2]],
                autoplay: true,
                autoplayTimeout: 5000,
                easing: "ease",
                minSwipeDistance: 8,
                perPage: 2,
                scrollPerPage: true,
                navigationClickTargetSize: 8,
                navigationEnabled: false,
                navigationNextLabel: "▶",
                navigationPrevLabel: "◀",
                paginationEnabled: true,
                paginationActiveColor: "#a09797",
                paginationColor: "#000000",
                paginationPadding: 3,
                paginationSize: 10
            }
        };
    },
    components: {
        Slider: Slider,
        Deal: Deal
    },
    methods: {
        isWorkTime() {
            return true;
        },
        callMe(e) {
            window.location.href = "tel:+78001111111";
        }
    },
    props: {
        bestDeals: Array
    }
};
</script>

<!--
    Main plate styles
-->

<style lang="scss" scoped>
.main-plate {
    // background: url("../assets/img/main-plate.png") no-repeat center;
    background-size: cover;
    font-family: sans-serif;
    color: white;
    margin-bottom: 165px;
    position: relative;
    .video-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        video {
            position: absolute;
            width: 100%;
            left: 0;
        }
    }
    .container {
        position: relative;
        height: 600px;
        max-width: 1200px;
        margin: auto;
        .annotation-wrapper {
            padding-top: 65px;
            padding-right: 30px;
        }
        .annotation {
            background-color: #474e4e5c;
            width: 500px;
            margin-left: auto;
            img {
                padding-top: 10px;
            }
            p {
                margin: 0;
                padding: 0 20px;
                text-align: justify;
                font-size: 12px;
                text-indent: 20px;
            }
            .base-contacts {
                padding-top: 10px;
                height: 50px;
                display: flex;
                .phone {
                    width: 50%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    &:hover {
                        cursor: pointer;
                    }
                    a {
                        color: azure;
                        font-size: 22px;
                        text-decoration: none;
                        font-weight: 500;
                    }
                    img {
                        padding: 0;
                        align-self: center;
                        &:hover {
                            animation: shake 0.5s;
                            animation-iteration-count: 1;
                        }
                    }
                    span {
                        align-self: center;
                        font-size: 20px;
                        padding-left: 10px;
                    }
                }
                .worktime {
                    background-color: #2dea3da8;
                }
                .overtime {
                    background-color: #ff26009e;
                }
                .socials {
                    width: 50%;
                    display: flex;
                    justify-content: space-evenly;
                    img:hover {
                        animation: shake 0.5s;
                        animation-iteration-count: 1;
                    }
                }
            }
        }
        .best-dials-wrapper {
            padding: 30px 30px 0;
            .title {
                text-align: left;
                text-transform: uppercase;
                font-size: 13px;
                padding: 10px 25px 10px;
                background-color: #64676991;
                // padding-left: 25px;
                width: 240px;
            }
            .best-deals {
                // background-color: #353838cf;
                height: 400px;
            }
        }
    }
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}

// Adaptive

@media screen and (min-width: 500px) and (max-width: 600px) {
    .annotation-wrapper {
        padding: 80px 30px 0 !important;
    }
    .video-wrapper {
        video {
            width: 200% !important;
        }
    }
}

@media screen and (min-width: 600px) and (max-width: 700px) {
    .annotation-wrapper {
        padding: 70px 70px 0 !important;
    }
    .video-wrapper {
        video {
            width: 120% !important;
        }
    }
}

@media screen and (max-width: 450px) {
    .best-dials-wrapper {
        padding: 30px 0 0 !important;
        .title {
            width: 100% !important;
        }
    }
}

@media screen and (max-width: 500px) {
    .annotation-wrapper {
        padding: 70px 30px 0 !important;
        .base-contacts {
            height: auto !important;
            .phone,
            .socials {
                width: 100% !important;
                padding: 10px 0;
            }
        }
    }
    .video-wrapper {
        video {
            width: 320% !important;
        }
    }
    .base-contacts {
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 700px) {
    .annotation-wrapper {
        .annotation {
            width: 100% !important;
            margin: 0 !important;
        }
    }
}
</style>


<!-- Object card template -->

<template>
    <div class="card-object" @mouseover="cardHovered = true" @mouseleave="cardHovered = false">
        <div class="regular-card">
            <div class="deal-type">{{dealType}}</div>
            <div class="cover">
                <carousel
                    :autoplay="false"
                    :perPage="1"
                    :scrollPerPage="true"
                    :mouseDrag="false"
                    :navigationClickTargetSize="8"
                    :navigationEnabled="false"
                    :paginationPadding="3"
                    :paginationSize="10"
                    :paginationActiveColor="sliderPaginateActiveColor"
                    :paginationColor="sliderPaginateColor"
                >
                    <slide v-for="(photo, index) in object.photos.slice(0,5)" :key="index">
                        <img class="main-photo" :src="photo" alt="Object photo">
                    </slide>
                </carousel>
            </div>
            <div class="title">{{`${objTitle} в г. ${object.objCity}`}}</div>
            <div class="address">{{`${object.objCity}, ${object.objAddress}`}}</div>
            <div class="photos-count">
                {{object.photos.length}}
                <img
                    src="../assets/img/photo.png"
                    alt="Count photos icon"
                    width="15"
                    height="15"
                >
            </div>
            <hr>
            <div class="footer">
                <div class="price">
                    <span>{{objPrice[0]}}</span>
                    {{objPrice[1]}}
                </div>
                <router-link :to="{ name: 'Details', params: { object: object }}">
                    <button>Перейти к описанию</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<!-- Object card object -->
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "object-card",
    data() {
        return {
            cardHovered: false,
            sliderPaginateColor: "#ffffff",
            sliderPaginateActiveColor: "#4cc251"
        };
    },
    props: {
        object: Object
    },
    computed: {
        dealType: function() {
            let type = "";
            switch (this.$props.object.dealType) {
                case "Купить":
                    type = "Продажа";
                    break;
                case "Арендовать":
                    type = "Долгосрочная аренда";
                    break;
                case "Арендовать посуточно":
                    type = "Посуточная аренда";
                    break;
            }
            return type;
        },
        objTitle: function() {
            if (this.$props.object.objType == "Квартиры") {
                if (this.$props.object.objRoom == 1000)
                    return "Свободно-спланированная квартира";
                else if (!this.$props.object.objRoom) return "Студия";
                else
                    return `${this.$props.object.objRoom} - комнатная квартира`;
            } else if (this.$props.object.objType == "Апартаменты") {
                if (this.$props.object.objRoom == 1000)
                    return "Свободно-спланированные апартаменты";
                else if (!this.$props.object.objRoom)
                    return "Студия - апартаменты";
                else
                    return `${
                        this.$props.object.objRoom
                    } - комнатные апартаменты`;
            } else if (this.$props.object.objType == "Загородные дома") {
                return `${this.$props.object.objFloor} - этажный дом`;
            } else if (this.$props.object.objType == "Дачные дома") {
                return `Дачный дом с участком ${
                    this.$props.object.objSquare
                } соток`;
            } else if (
                this.$props.object.objType == "Коммерческая недвижимость"
            ) {
                return `Коммерческое помещение площадью ${
                    this.$props.object.objSquare
                } кв.м.`;
            }
        },
        objPrice: function() {
            let price = [];
            switch (this.$props.object.dealType) {
                case "Купить":
                    price = [
                        this.$props.object.objPrice,
                        String.fromCodePoint(8381)
                    ];
                    break;
                case "Арендовать":
                    price = [
                        this.$props.object.objPrice,
                        `${String.fromCodePoint(8381)} ежемесячно`
                    ];
                    break;
                case "Арендовать посуточно":
                    price = [
                        this.$props.object.objPrice,
                        `${String.fromCodePoint(8381)} в сутки`
                    ];
                    break;
            }
            return price;
        }
    },
    components: {
        Carousel: Carousel,
        Slide: Slide
    }
};
</script>

<!-- Object card styles -->

<style lang="scss">
.card-object {
    font-family: sans-serif;
    .regular-card {
        position: relative;
        text-align: left;
        padding-bottom: 40px;
        font-size: 15px;
        .main-photo {
            width: 100%;
            height: 220px;
        }
        .cover {
            width: 100%;
            height: 220px;
        }
        .deal-type {
            position: absolute;
            background-color: #4cc251;
            padding: 10px;
            right: 0;
            color: white;
            text-transform: uppercase;
            font-size: 13px;
            z-index: 1;
        }
        .title {
            font-weight: 300;
            padding: 15px 0 5px !important;
        }
        .address {
            padding: 5px 0;
        }
        .photos-count {
            position: absolute;
            right: 0;
            bottom: 85px;
            img {
                padding-left: 3px;
            }
        }
        .footer {
            display: flex;
            justify-content: space-between;
            .price {
                span {
                    font-size: 20px;
                    color: #4cc251;
                }
            }
            button {
                text-transform: uppercase;
                background: none;
                border: 1px solid;
                padding: 3px 5px;
                &:hover {
                    background-color: #4cc251;
                    cursor: pointer !important;
                    color: white;
                    border-color: #4cc251;
                }
                &:focus {
                    outline: none;
                }
            }
        }
    }
    .VueCarousel-pagination {
        position: absolute;
        bottom: 10px;
        text-align: right;
        right: 6px;
        .VueCarousel-dot {
            width: 8px !important;
            height: 8px !important;
            &:hover,
            &:focus {
                outline: none;
            }
        }
    }
}
</style>



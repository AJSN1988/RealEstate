<!--
    Object details template
-->

<template>
    <div class="object-details">
        <top-filter :params="{title : 'У списку объектов', routeName : 'Objects'}"></top-filter>
        <div class="container">
            <div class="object-wrapper">
                <div class="object-title-wrapper">
                    <div
                        class="object-header"
                    >{{`${getPluralDealType} ${getObjType} по адресу: г. ${object.objCity} ${object.objAddress}`}}</div>
                    <div class="object-title-controls">
                        <div class="title-btn">
                            <img
                                src="../assets/img/print.png"
                                alt="Pring icon"
                                width="15"
                                height="15"
                            >
                            Распечатать
                        </div>
                        <div class="vertical-divider"></div>
                        <div class="title-btn">
                            <img
                                src="../assets/img/warning.png"
                                alt="Pring icon"
                                width="15"
                                height="15"
                            >
                            Пожаловаться
                        </div>
                    </div>
                </div>
                <div class="obj-buy-wrapper">
                    <div class="obj-buy-contacts">
                        <div class="agent-info">
                            <span>{{getAgentLabel}}</span>
                            {{object.agent}}
                        </div>
                        <div class="phone-info">
                            <a href="tel:+7-999-999-99-99">{{`Позвонить ${object.agentPhone}`}}</a>
                        </div>
                    </div>
                    <div class="price-wrapper">
                        <div class="obj-price">{{getObjPrice}}</div>
                        <div class="calced-price">{{relativeSquarePrice}}</div>
                    </div>
                </div>
                <div class="preview-obj-wrapper">
                    <div
                        class="obj-details"
                        v-if="object.objType == 'Квартиры' || object.objType == 'Апартаменты'"
                    >
                        <div class="details-wrapper">
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/square-icon.png"
                                            alt="Object square icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Площадь</div>
                                </div>
                                <div class="value">{{`${object.objSquare} кв. м.`}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/floor-icon.png"
                                            alt="Object floor icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Этаж</div>
                                </div>
                                <div class="value">{{`${object.objFloor} из ${object.floorsCount}`}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/rooms-icon.png"
                                            alt="Object rooms icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Комнаты</div>
                                </div>
                                <div class="value" v-if="object.objRoom != 0">{{object.objRoom}}</div>
                                <div class="value" v-else>Квартира-студия</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/condition-icon.png"
                                            alt="Object condition icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Состояние</div>
                                </div>
                                <div class="value">{{object.condition}}</div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="obj-details"
                        v-if="object.objType == 'Загородные дома' || object.objType == 'Дачные дома'"
                    >
                        <div class="details-wrapper">
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/square-icon.png"
                                            alt="Object square icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Площадь</div>
                                </div>
                                <div class="value">{{`${object.objSquare} кв. м.`}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/floor-icon.png"
                                            alt="Object floor icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Этажность</div>
                                </div>
                                <div class="value">{{`${object.objFloor}`}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/rooms-icon.png"
                                            alt="Object rooms icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Комнаты</div>
                                </div>
                                <div class="value">{{object.objRoom}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/condition-icon.png"
                                            alt="Object condition icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Состояние</div>
                                </div>
                                <div class="value">{{object.condition}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="obj-details" v-if="object.objType == 'Коммерческая недвижимость'">
                        <div class="details-wrapper">
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/square-icon.png"
                                            alt="Object square icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Площадь</div>
                                </div>
                                <div class="value">{{`${object.objSquare} кв. м.`}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/floor-icon.png"
                                            alt="Object floor icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Этаж</div>
                                </div>
                                <div class="value">{{`${object.objFloor}`}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/rooms-icon.png"
                                            alt="Object rooms icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Помещений</div>
                                </div>
                                <div class="value">{{object.objRoom}}</div>
                            </div>
                            <div class="obj-detail">
                                <div class="info-wrapper">
                                    <div class="icon">
                                        <img
                                            src="../assets/img/condition-icon.png"
                                            alt="Object condition icon"
                                            width="25"
                                            height="25"
                                        >
                                    </div>
                                    <div class="title">Состояние</div>
                                </div>
                                <div class="value">{{object.condition}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="photo-wrapper">
                        <photo-slider :photos="object.photos"></photo-slider>
                    </div>

                    <div class="obj-description">
                        <div class="title">Описание объекта</div>
                        <div class="description-wrapper">{{object.description}}</div>
                    </div>
                    <div class="obj-extra">
                        <div class="title">Дополнительная информация о здании</div>
                        <div class="extra-wrapper">
                            <div class="build-status-wrapper extra-info">
                                <div class="extra-title">Тип здания</div>
                                <div class="status" v-if="object.new">Новостройка</div>
                                <div class="status" v-else>Вторичное жилье</div>
                            </div>
                            <div class="build-year-wrapper extra-info" v-if="object.new">
                                <div class="extra-title">Сдача дома в эксплуатацию</div>
                                <div class="build-year">{{object.yearWillComplite}}</div>
                            </div>
                            <div class="build-year-wrapper extra-info" v-else>
                                <div class="extra-title">Возраст здания (лет)</div>
                                <div class="build-year">{{object.ageBuild}}</div>
                            </div>
                            <div class="build-type-wrapper extra-info">
                                <div class="extra-title">Тип здания</div>
                                <div class="build-type">{{object.categories}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="object-map">
                        <div class="title">Объект на карте</div>
                        <div class="map-container">
                            <yandex-map
                                :coords="object.mapCoordinates"
                                zoom="16"
                                style="width: 100%; height: 400px;"
                                :scroll-zoom="false"
                                map-type="map"
                            >
                                <ymap-marker
                                    marker-id="1"
                                    marker-type="placemark"
                                    :coords="object.mapCoordinates"
                                    hint-content="Расположение объекта"
                                    :balloon="{
                                        header: ` ${getPluralDealType} ${getObjType} стоимостью ${getObjPrice}`,
                                        body: `Адрес: г. ${object.objCity} ${object.objAddress}`
                                    }"
                                    :icon="{color: 'green', glyph: 'home'}"
                                    cluster-name="1"
                                ></ymap-marker>
                            </yandex-map>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <app-bottom></app-bottom>
    </div>
</template>

<!--
    Object details component
-->

<script>
import TopFilter from "./TopFilter";
import AppBottom from "./AppBottom";
import PhotoSlider from "./PhotoSlider";
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
    name: "object-details",
    created() {
        if (!this.$store.state.filtredObjects.length || !this.$props.object) {
            this.$router.push({ name: "Home" });
        }
    },
    mounted() {
        document.querySelector(".object-details").scrollIntoView();
    },
    data() {
        return {};
    },
    computed: {
        getAgentLabel() {
            return this.$props.object.agent[0];
        },
        getPluralDealType() {
            switch (this.$props.object.dealType) {
                case "Купить":
                    return this.$props.object.objType != "Апартаменты"
                        ? "Продается"
                        : "Продаются";
                case "Арендовать":
                    return this.$props.object.objType != "Апартаменты"
                        ? "Сдается в долгосрочную аренду"
                        : "Сдаются в долгосрочную аренду";
                case "Арендовать посуточно":
                    return this.$props.object.objType != "Апартаменты"
                        ? "Сдается в посуточную аренду"
                        : "Сдаются в посуточную аренду";
            }
        },
        getObjType() {
            switch (this.$props.object.objType) {
                case "Квартиры":
                    return "квартира";
                case "Загородные дома":
                    return "загородный дом";
                case "Дачный дома":
                    return "дачный дом";
                default:
                    return this.$props.object.objType;
            }
        },
        getObjPrice() {
            switch (this.$props.object.dealType) {
                case "Купить":
                    return `${
                        this.$props.object.objPrice
                    } ${String.fromCodePoint(8381)}`;
                case "Арендовать":
                    return `${
                        this.$props.object.objPrice
                    } ${String.fromCodePoint(8381)} ежемесячно`;
                case "Арендовать посуточно":
                    return `${
                        this.$props.object.objPrice
                    } ${String.fromCodePoint(8381)} ежесуточно`;
            }
        },
        relativeSquarePrice() {
            return `${Math.floor(
                +this.$props.object.objPrice / +this.$props.object.objSquare
            )} ${String.fromCodePoint(8381)} за кв. м.`;
        }
    },
    props: {
        object: Object
    },
    components: {
        TopFilter: TopFilter,
        AppBottom: AppBottom,
        PhotoSlider: PhotoSlider,
        yandexMap: yandexMap,
        ymapMarker: ymapMarker
    }
};
</script>

<!--
    Object details styles
-->

<style lang="scss" scoped>
.object-details {
    font-family: sans-serif;
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .object-wrapper {
            margin: 0 30px 40px;
            background-color: white;
            .object-title-wrapper {
                display: flex;
                flex-wrap: wrap;
                padding: 15px 20px;
                justify-content: space-between;
                .object-title-controls {
                    display: flex;
                    .title-btn {
                        &:hover {
                            cursor: pointer;
                            color: #51c54c;
                        }
                    }
                    .vertical-divider {
                        border: 1px solid #2c3e50;
                        margin: 0 10px;
                    }
                }
            }
            .obj-buy-wrapper {
                display: flex;
                justify-content: space-between;
                padding: 0 20px 10px;
                .obj-buy-contacts {
                    display: flex;
                    .agent-info {
                        padding-right: 10px;
                        span {
                            padding: 5px 10px;
                            background-color: #b9b9b9;
                            margin-right: 5px;
                            color: white;
                        }
                    }
                    .phone-info {
                        a {
                            padding: 5px 10px;
                            background-color: #51c54c;
                            color: white;
                            text-decoration: none;
                        }
                    }
                }
                .price-wrapper {
                    color: white;
                    display: flex;
                    .obj-price {
                        font-size: 20px;
                        color: #51c54c;
                    }
                    .calced-price {
                        font-size: 12px;
                        margin-top: 5px;
                        color: #00000082;
                        margin-left: 10px;
                    }
                }
            }
            .obj-description {
                padding: 10px 0;
                .title {
                    text-transform: uppercase;
                    text-align: left;
                    padding: 10px 0;
                    font-size: 15px;
                }
                .description-wrapper {
                    text-align: justify;
                    text-indent: 20px;
                }
            }
            .obj-extra {
                padding: 10px 0;
                .title {
                    text-transform: uppercase;
                    text-align: left;
                    padding: 10px 0;
                    font-size: 15px;
                }
                .extra-info {
                    width: 400px;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 5px;
                    .extra-title {
                        color: #989292;
                    }
                }
            }
            .object-map {
                .title {
                    text-transform: uppercase;
                    text-align: left;
                    padding: 10px 0;
                    font-size: 15px;
                }
                padding-bottom: 20px;
            }
        }
        .preview-obj-wrapper {
            padding: 0 20px;
            .obj-details {
                padding: 20px 0 10px;
                .details-wrapper {
                    display: flex;
                    justify-content: start;
                    .obj-detail {
                        color: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 150px;
                        margin-right: 10px;
                        .info-wrapper {
                            display: flex;
                            flex-wrap: nowrap;
                            padding: 10px;
                            background-color: #b9b9b9;
                            .title {
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-end;
                                text-transform: uppercase;
                                font-size: 13px;
                                padding-left: 10px;
                            }
                        }
                        .value {
                            font-size: 14px;
                            text-align: left;
                            padding: 10px 0;
                            color: #00000082;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .object-wrapper {
        margin: 0 !important;
        .obj-buy-contacts {
            font-size: 13px !important;
        }
        .details-wrapper {
            flex-wrap: wrap !important;
            .obj-detail {
                width: 100% !important;
                margin-right: 0 !important;
            }
        }
        .extra-info {
            width: 100% !important;
        }
    }
}

@media screen and (min-width: 499px) and (max-width: 655px) {
    .details-wrapper {
        flex-wrap: wrap !important;
        .obj-detail {
            width: 45% !important;
        }
    }
}

@media screen and (max-width: 700px) {
    .obj-buy-wrapper {
        flex-wrap: wrap !important;
        .obj-buy-contacts,
        .price-wrapper {
            width: 100% !important;
        }
        .price-wrapper {
            padding-top: 15px !important;
        }
    }
}

@media screen and (max-width: 900px) {
    .object-wrapper {
        .object-title-wrapper {
            .object-header,
            .object-title-controls {
                width: 100%;
                padding-bottom: 20px;
            }
            .object-header {
                text-align: left;
            }
        }
    }
}
</style>
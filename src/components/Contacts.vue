<!--
    Contacts template
-->

<template>
    <div class="contacts">
        <div class="map-container">
            <yandex-map
                :coords="[55.664891, 39.877185]"
                zoom="16"
                style="width: 100%; height: 500px;"
                :scroll-zoom="false"
                map-type="map"
                :placemarks="placemarks"
                @map-was-initialized="onLoadMap"
            ></yandex-map>
        </div>
        <div class="card-container">
            <div class="contacts-card">
                <div class="annotation">
                    <div class="logo">
                        <img
                            src="../assets/img/white-logo.png"
                            alt="White logo"
                            width="80"
                            height="50"
                        >
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est asperiores eveniet iusto, quae nesciunt cum esse dolores corporis reiciendis quas consequuntur, quos sapiente! Nam!</p>
                </div>
                <div class="offices-wrapper">
                    <div
                        class="office-address"
                        @click="changeLocation(0)"
                        :class="{ selected: activeLocation == 0 }"
                    >
                        <div class="image">
                            <img
                                src="../assets/img/main_office.png"
                                alt="Office logo"
                                width="32"
                                height="32"
                            >
                        </div>
                        <h5>Рошаль</h5>
                        <span>Головной офис</span>
                    </div>
                    <div
                        class="office-address"
                        @click="changeLocation(1)"
                        :class="{ selected: activeLocation == 1 }"
                    >
                        <div class="image">
                            <img
                                src="../assets/img/dep_office.png"
                                alt="Office logo"
                                width="32"
                                height="32"
                            >
                        </div>
                        <h5>Шатура</h5>
                        <span>Филиал компании</span>
                    </div>
                    <div
                        class="office-address"
                        @click="changeLocation(2)"
                        :class="{ selected: activeLocation == 2 }"
                    >
                        <div class="image">
                            <img
                                src="../assets/img/dep_office.png"
                                alt="Office logo"
                                width="32"
                                height="32"
                            >
                        </div>
                        <h5>Москва</h5>
                        <span>Филиал компании</span>
                    </div>
                </div>
                <div class="selected-address">
                    <div class="address full-address">
                        <div class="address-header">Адрес</div>
                        <div
                            class="address-body"
                        >{{` ${placemarks[activeLocation].header}, ${placemarks[activeLocation].street}`}}</div>
                    </div>
                    <div class="address phone">
                        <div class="address-header">Телефон</div>
                        <div class="address-body">{{`${placemarks[activeLocation].phone}`}}</div>
                    </div>
                    <div class="address email">
                        <div class="address-header">E-mail</div>
                        <div class="address-body">{{`${placemarks[activeLocation].email}`}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!--
    Contacts component
-->

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
    name: "contacts",
    data() {
        return {
            mapInstance: {},
            activeLocation: 0,
            placemarks: [
                {
                    coords: [55.663693, 39.870203],
                    center: [55.664248, 39.872209],
                    header: "Головной офис в г. Рошаль",
                    street: "улица Косякова, д. 17",
                    phone: "+7-777-999-99-99",
                    email: "roshal@test.com",
                    photo:
                        "https://d324f21dro7npl.cloudfront.net/pics/office/330/2346//crop/754,544/",
                    clusterName: "1",
                    balloonTemplate: `<div>
                        <h5 style="padding-left: 20px; margin: 0;">Головной офис в г. Рошаль</h5>
                        <p style="padding-left: 20px; padding-bottom: 5px; margin: 0;">улица Косякова, д. 17</p>
                        <img src="https://d324f21dro7npl.cloudfront.net/pics/office/330/2346//crop/754,544/" width="250" heigth="150" style="padding-left: 20px;">
                        <div style="display: flex; flex-direction: column;">
                            <a href="tel:+7-777-999-99-99" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                                +7-777-999-99-99
                            </a>
                            <a href="mailto:roshal@test.com" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                                roshal@test.com
                            </a>
                        </div>
                        <p style="padding-left: 20px; font-size: 10px; text-transform: uppercase; margin: 0; text-align: center;">Режим работы: Ежедневно с 9-00 до 18-00</p>
                    </div>`
                },
                {
                    coords: [55.576796, 39.544289],
                    center: [55.57734, 39.546614],
                    header: "Филиал в г. Шатура",
                    street: "Интернациональная улица, д. 17",
                    phone: "+7-777-888-88-88",
                    email: "shatura@text.com",
                    photo:
                        "https://www.intheblack.com/~/media/intheblack/allimages/sponsored-content/2018/dexus-office-space.jpg",
                    clusterName: "2",
                    balloonTemplate: `<div>
                        <h5 style="padding-left: 20px; margin: 0;">Филиал в г. Шатура</h5>
                        <p style="padding-left: 20px; padding-bottom: 5px; margin: 0;">Интернациональная улица, д. 17</p>
                        <img src="https://www.intheblack.com/~/media/intheblack/allimages/sponsored-content/2018/dexus-office-space.jpg" width="250" heigth="150" style="padding-left: 20px;">
                        <div style="display: flex; flex-direction: column;">
                            <a href="tel:+7-777-888-88-88" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                                +7-777-888-88-88
                            </a>
                            <a href="mailto:shatura@text.com" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                                shatura@text.com
                            </a>
                        </div>
                        <p style="padding-left: 20px; font-size: 10px; text-transform: uppercase; margin: 0; text-align: center;">Режим работы: Ежедневно с 9-00 до 18-00</p>
                    </div>`
                },
                {
                    coords: [55.743394, 37.620331],
                    center: [55.743816, 37.622548],
                    header: "Филиал в г. Москва",
                    street: "Лаврушинский переулок, 3/8с2",
                    phone: "+7-777-222-22-22",
                    email: "moskow@text.com",
                    photo:
                        "https://yourmactech.com.au/wp-content/uploads/2017/11/office-mac-365-macbook-imac-1110x530.jpg",
                    clusterName: "3",
                    balloonTemplate: `<div>
                        <h5 style="padding-left: 20px; margin: 0;">Филиал в г. Москва</h5>
                        <p style="padding-left: 20px; padding-bottom: 5px; margin: 0;">Лаврушинский переулок, 3/8с2</p>
                        <img src="https://yourmactech.com.au/wp-content/uploads/2017/11/office-mac-365-macbook-imac-1110x530.jpg" width="250" heigth="150" style="padding-left: 20px;">
                        <div style="display: flex; flex-direction: column;">
                            <a href="tel:+7-777-222-22-22" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                                +7-777-222-22-22
                            </a>
                            <a href="mailto:moskow@text.com" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                                moskow@text.com
                            </a>
                        </div>
                        <p style="padding-left: 20px; font-size: 10px; text-transform: uppercase; margin: 0; text-align: center;">Режим работы: Ежедневно с 9-00 до 18-00</p>
                    </div>`
                }
            ]
        };
    },
    methods: {
        onLoadMap: function(map) {
            this.mapInstance = map;
            this.changeLocation(0);
        },
        changeLocation: function(id) {
            let place = this.placemarks[id];
            this.activeLocation = id;

            this.mapInstance.balloon
                .open(place.coords, {
                    contentBody: `
                    <div>
                        <h5 style="padding-left: 20px; margin: 0;">${
                            place.header
                        }</h5>
                        <p style="padding-left: 20px; padding-bottom: 5px; margin: 0;">${
                            place.street
                        }</p>
                        <img src="${
                            place.photo
                        }" width="250" heigth="150" style="padding-left: 20px;">
                        <div style="display: flex; flex-direction: column;">
                            <a href="tel:${
                                place.phone
                            }" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                            ${place.phone}
                            </a>
                            <a href="mailto:${
                                place.email
                            }" style="text-align: center; padding: 5px; margin: 5px 0 5px 20px; border: 1px solid #4cc251; color: white; background-color: #4cc251; text-decoration: none; cursor: pointer;">
                                ${place.email}
                            </a>
                        </div>
                        <p style="padding-left: 20px; font-size: 10px; text-transform: uppercase; margin: 0; text-align: center;">Режим работы: Ежедневно с 9-00 до 18-00</p>
                    </div>`
                })
                .then(
                    setTimeout(() => {
                        this.mapInstance.setCenter(place.center, 18);
                    }, 100)
                );
        }
    },
    components: { yandexMap, ymapMarker }
};
</script>

<!--
    Contacts styles
-->

<style lang="scss" scoped>
.contacts {
    font-family: sans-serif;
    .card-container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .contacts-card {
            position: absolute;
            width: 500px;
            height: 300px;
            bottom: 100px;
            right: 30px;
            z-index: 2;
            background-color: #6e6e6fe0;
            color: white;
            font-size: 13px;
            text-align: left;
            .annotation {
                display: flex;
                padding: 20px 25px 0;
                .logo {
                    padding-right: 20px;
                    width: 80px;
                }
            }

            p {
                margin: 5px 0;
            }
            h4 {
                color: white;
                margin: 20px 0 0 25px;
            }
            span {
                margin-left: 25px;
                font-size: 9px;
                text-transform: uppercase;
            }
            .offices-wrapper {
                display: flex;
                justify-content: space-between;
                padding: 20px 25px;
                .office-address {
                    width: 30%;
                    height: 100px;
                    border: 2px solid #6e6e6f00;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    h5 {
                        font-size: 15px;
                        text-transform: uppercase;
                        margin: 10px 0;
                        font-weight: 500;
                        color: white;
                    }
                    span {
                        margin: 0;
                        color: #f6da6e;
                    }
                    &:hover {
                        cursor: pointer;
                        border-color: white !important;
                    }
                }
            }
            .selected {
                border-color: #f6da6e !important;
            }
            .office-address.selected:hover {
                border-color: #f6da6e !important;
                cursor: default;
            }
            .selected-address {
                padding: 0 25px;
                .address {
                    display: flex;
                    padding-bottom: 5px;
                    .address-header {
                        color: #f6da6e;
                        text-transform: uppercase;
                        width: 18%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .address-body {
                        width: 82%;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}

// Adaptive

@media screen and (min-width: 700px) and (max-width: 900px) {
    .contacts-card {
        padding: 0 30px 20px !important;
    }
}

@media screen and (max-width: 900px) {
    .contacts-card {
        position: relative !important;
        width: auto !important;
        right: 0 !important;
        bottom: 0 !important;
        height: auto !important;
    }
}

@media screen and (max-width: 700px) {
    .selected-address {
        padding: 0 25px 15px !important;
    }
}
</style>
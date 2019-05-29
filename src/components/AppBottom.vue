<!--
   Footer template
-->

<template>
    <div class="app-footer" id="contacts">
        <div class="container">
            <div class="footer-top">
                <div class="footer-logo">
                    <img
                        src="../assets/img/white-logo.png"
                        alt="Company logo"
                        width="80"
                        height="50"
                    >
                </div>
                <div
                    class="footer-info"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem culpa fugiat consectetur similique blanditiis ad ipsa veniam saepe, sit beatae mollitia obcaecati ut? Possimus sed autem dignissimos, qui iusto reiciendis quae minima soluta repellat id sunt ea iure voluptatem veritatis quia sit maiores dicta nihil. Molestias eligendi quisquam delectus. Quos dicta non libero necessitatibus incidunt alias! Rerum laborum nesciunt expedita!</div>
            </div>
            <div class="main-footer-section">
                <div class="footer-section">
                    <div class="header">Правовая информация</div>
                    <div class="fake-line">
                        <div class="colored-line"></div>
                        <div class="none-colored-line"></div>
                    </div>
                    <div
                        class="section-body legal-info"
                    >Посещая сайт www.real.estate.com, Вы предоставляете согласие на обработку данных о cookies, сбор которых автоматически осуществляется ООО «Реал Эстейт» (Российская Федерация, 140730, г. Рошаль, ул. Косякова, дом 18) на условиях Положения обработки персональных данных. Компания также может использовать указанные данные для их последующей обработки системами Google Analytics, Яндекс.Метрика и др., которая осуществляется с целью функционирования сайта www.real.estate.com</div>
                </div>
                <div class="footer-section">
                    <div class="header">Новостная рассылка</div>
                    <div class="fake-line">
                        <div class="colored-line"></div>
                        <div class="none-colored-line"></div>
                    </div>
                    <div class="section-body subscribe-news">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos at, consectetur aliquid quasi consequuntur facilis debitis nulla corporis perferendis repellendus eligendi consequatur expedita voluptatibus unde!</p>
                        <div class="subscribe-form">
                            <input type="text" placeholder="Ваш e-mail">
                            <button>Подписаться</button>
                        </div>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="header">Реквизиты компании</div>
                    <div class="fake-line">
                        <div class="colored-line"></div>
                        <div class="none-colored-line"></div>
                    </div>
                    <div class="section-body company-data-wrapper">
                        <div class="company-data-list">
                            <div class="company-data">
                                <div class="data-header">Полное наименование</div>
                                <div class="data-body">ООО "Реал Эстейт"</div>
                            </div>
                            <div class="company-data">
                                <div class="data-header">Юридический адрес</div>
                                <div class="data-body">140730, г. Рошаль, ул. Косякова, д. 18</div>
                            </div>
                            <div class="company-data">
                                <div class="data-header">ИНН</div>
                                <div class="data-body">7777777777777</div>
                            </div>
                            <div class="company-data">
                                <div class="data-header">КПП</div>
                                <div class="data-body">99999999999</div>
                            </div>
                            <div class="company-data">
                                <div class="data-header">ОГРН</div>
                                <div class="data-body">11111111111</div>
                            </div>
                            <div class="company-data">
                                <div class="data-header">ОКВЭД</div>
                                <div class="data-body">33.333.33</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="header">Полезные ссылки</div>
                    <div class="fake-line">
                        <div class="colored-line"></div>
                        <div class="none-colored-line"></div>
                    </div>
                    <div class="section-body useful-links">
                        <div class="link-wrapper">
                            <a href="www.test.com">Отзывы клиентов</a>
                        </div>
                        <div class="link-wrapper">
                            <a href="www.test.com">Полезные статьи</a>
                        </div>
                        <div class="link-wrapper">
                            <a href="www.test.com">Нормативная база</a>
                        </div>
                        <div class="link-wrapper">
                            <a href="www.test.com">Кадастровая карта РФ</a>
                        </div>
                        <div class="link-wrapper">
                            <a href="www.test.com">Написать web мастеру</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <a href="mailto:atnr@bk.ru&amp;subject=Письмо%20автору">© Кинеев Алексей 2018-2018</a>
        </div>
    </div>
</template>

<!--
    Footer component
-->

<script>
export default {
    name: "app-bottom",
    data() {
        return {
            originVkIcon: true,
            originFbIcon: true,
            originOkIcon: true,
            showModal: false
        };
    },
    methods: {
        gotoUrl(url) {
            window.location.href = url;
        }
    }
};
</script>

<!--
    Footer styles
-->

<style lang="scss" scoped>
.app-footer {
    font-family: sans-serif;
    background: url(../assets/img/footer_image.jpg) no-repeat;
    background-size: cover;
    color: white;
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .footer-top {
            padding: 20px 0;
            display: flex;
            .footer-logo {
                padding-right: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .footer-info {
                font-size: 11px;
                width: 60%;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
        .main-footer-section {
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
            .footer-section {
                width: 25%;
                .header {
                    text-align: left;
                    text-transform: uppercase;
                    font-size: 14px;
                    padding-bottom: 20px;
                }
                .fake-line {
                    padding-bottom: 20px;
                    margin-right: 50px;
                    display: flex;
                    .colored-line {
                        width: 30%;
                        border-top: 2px solid #f6da6e;
                    }
                    .none-colored-line {
                        width: 70%;
                        border-top: 2px solid #737070;
                    }
                }
                .section-body {
                    margin-right: 20px;
                }
                .section-body.legal-info {
                    margin-right: 20px;
                    text-align: left;
                    font-size: 11px;
                }
                .section-body.subscribe-news {
                    p {
                        font-size: 11px;
                        text-align: left;
                    }
                    .subscribe-form {
                        display: flex;
                        p {
                            margin: 0;
                            padding-bottom: 20px;
                        }
                        input {
                            width: 140px;
                            border: 1px solid white;
                            background: none;
                            outline: none;
                            padding: 5px 10px;
                            color: white;
                            font-size: 13px;
                            margin-right: 5px;
                        }
                        button {
                            background-color: #f6da6e;
                            padding: 8px;
                            border: none;
                            text-transform: uppercase;
                            font-size: 11px;
                            outline: none;
                            &:hover {
                                cursor: pointer;
                                background-color: #737070;
                            }
                        }
                    }
                }
                .section-body.company-data-wrapper {
                    text-align: left;
                    font-size: 11px;
                    .company-data-list {
                        margin-right: 20px;
                        .data-header {
                            text-transform: uppercase;
                            color: #f6da6e;
                        }
                        .data-body {
                            padding-bottom: 5px;
                        }
                    }
                }
                .section-body.useful-links {
                    text-align: left;
                    margin-right: 20px;
                    .link-wrapper {
                        padding-bottom: 10px;
                        a {
                            text-transform: uppercase;
                            &:hover {
                                color: #f6da6e;
                            }
                        }
                    }
                }
            }
        }
        hr {
            border: none;
            color: #f6da6e;
            background-color: #f6da6e;
            height: 1px;
            margin: 0 0 5px 0;
        }
        a {
            color: white;
            font-size: 12px;
            text-decoration: none;
        }
    }
}

// Adaptive

@media screen and (min-width: 899px) and (max-width: 1240px) {
    .main-footer-section {
        padding: 20px !important;
        .footer-section {
            width: 47% !important;
        }
    }
}

@media screen and (max-width: 1240px) {
    .footer-top {
        padding: 20px !important;
    }
    .main-footer-section {
        padding: 20px !important;
        flex-wrap: wrap;
        .footer-section {
            width: 100% !important;
        }
        .footer-section:nth-child(1),
        .footer-section:nth-child(2n) {
            margin-bottom: 30px !important;
        }
    }
    hr {
        margin: 0 20px 5px 20px !important;
    }
}
</style>
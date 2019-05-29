<!--
    Our agents template
-->

<template>
    <div class="our-agents" id="agents">
        <div class="container">
            <div class="agents-wrapper">
                <h4>Авторизованные риэлторы</h4>
                <div
                    class="annotation"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam velit suscipit, molestiae nobis hic officiis possimus repudiandae excepturi esse, quasi aliquid! Optio quod cumque illo minima consequatur non ex distinctio pariatur sed quos dolore consequuntur asperiores qui, unde iure, vitae doloribus nisi cupiditate vero fuga iusto quis ipsum ea. Eos.</div>
                <hr>
                <carousel
                    :autoplay="false"
                    :loop="true"
                    :perPage="1"
                    :scrollPerPage="true"
                    :mouseDrag="true"
                    :navigationClickTargetSize="8"
                    :navigationEnabled="true"
                    :paginationEnabled="false"
                    :paginationPadding="3"
                    :paginationSize="10"
                    :navigationNextLabel="arrowRight"
                    :navigationPrevLabel="arrowLeft"
                >
                    <slide v-for="(agent, index) in agents" :key="index">
                        <div class="agent-wrapper">
                            <div class="agent-info">
                                <img
                                    class="main-photo"
                                    :src="agent.portrait"
                                    alt="Agent photo"
                                    height="300"
                                    width="300"
                                >
                                <div class="description">
                                    <h3>{{agent.name}}</h3>
                                    <h5>{{`Представительство в г. ${agent.department}`}}</h5>
                                    <div
                                        class="annotation"
                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum maxime nesciunt quam nobis corporis cumque earum dolor, placeat facilis reiciendis voluptatum, saepe hic inventore aliquid doloribus labore necessitatibus officiis amet esse.</div>
                                    <a :href="`tel:+${agent.phone}`">
                                        <img
                                            src="../assets/img/call_green.png"
                                            alt="Call logo"
                                            width="32"
                                            height="32"
                                        >
                                        <div class="phone">{{agent.phone}}</div>
                                    </a>
                                    <a :href="`mailto:${agent.email}`">
                                        <img
                                            src="../assets/img/email_green.png"
                                            alt="Call logo"
                                            width="32"
                                            height="32"
                                        >
                                        <div class="phone">{{agent.email}}</div>
                                    </a>
                                    <div class="socials">
                                        <a href="#">
                                            <img
                                                src="../assets/img/vk-logo_dark.png"
                                                alt="Vk logo"
                                                width="32"
                                                height="32"
                                            >
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../assets/img/fb-logo_dark.png"
                                                alt="Facebook logo"
                                                width="32"
                                                height="32"
                                            >
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../assets/img/ok-logo_dark.png"
                                                alt="OK logo"
                                                width="32"
                                                height="32"
                                            >
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../assets/img/inst-logo_dark.png"
                                                alt="Instagram logo"
                                                width="32"
                                                height="32"
                                            >
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="agent-form">
                                <h3>{{`Написать собщение ${agent.plural}`}}</h3>
                                <div class="message-form">
                                    <div
                                        class="selector-wrapper"
                                        @click="showOptions = !showOptions"
                                    >
                                        <div
                                            class="selector"
                                            :class="{'error-input' : !optionValid}"
                                        >
                                            <div class="selector-title">{{selectedOption}}</div>
                                            <img
                                                src="../assets/img/right.png"
                                                alt="List icon"
                                                width="13"
                                                height="13"
                                                v-bind:class="{rotate: showOptions}"
                                            >
                                        </div>
                                        <transition name="showList">
                                            <div
                                                class="options"
                                                id="typeOptions"
                                                v-if="showOptions"
                                            >
                                                <ul>
                                                    <li
                                                        v-for="(option, index) in options"
                                                        :key="index"
                                                        @click="setOption(option)"
                                                        v-bind:class="{selected : option == selectedOption}"
                                                    >
                                                        <div class="option-wrapper">
                                                            <span>{{option}}</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </transition>
                                    </div>
                                    <div class="name-wrapper">
                                        <input
                                            type="text"
                                            :class="{'error-input' : !nameValid}"
                                            :model="nameValue"
                                            :value="nameValue"
                                            @click="startChangeInput"
                                            @keydown="changeInput"
                                            @blur="endChangeInput"
                                            id="nameInput"
                                        >
                                    </div>
                                    <div class="phone-wrapper">
                                        <input
                                            type="text"
                                            :class="{'error-input' : !phoneValid}"
                                            :model="phoneValue"
                                            :value="phoneValue"
                                            id="phoneInput"
                                            @click="startChangeInput"
                                            @keydown="changeInput"
                                            @blur="endChangeInput"
                                        >
                                    </div>
                                    <div class="text-wrapp">
                                        <textarea
                                            cols="58"
                                            rows="5"
                                            :class="{'error-input' : !messageValid}"
                                            :model="messageValue"
                                            :value="messageValue"
                                            id="messageArea"
                                            @click="startChangeInput"
                                            @keydown="changeInput"
                                            @blur="endChangeInput"
                                        ></textarea>
                                    </div>
                                    <div
                                        class="status"
                                        :class="{success : successSend, error : errorSend}"
                                    >{{formStatus}}</div>
                                    <div class="controls">
                                        <button
                                            class="send-btn"
                                            @click="submitForm(agent.email)"
                                        >Отправить</button>
                                        <button class="reset-btn" @click="clearForm">
                                            <img
                                                src="../assets/img/clear_form.png"
                                                alt="Reset form icon"
                                                width="12"
                                                height="12"
                                            >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<!--
    Our agents component
-->

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "agents",
    data() {
        return {
            arrowRight: "&#8250;",
            arrowLeft: "&#8249;",
            showOptions: false,
            selectedOption: "Субъект недвижимости",
            optionValid: true,
            options: [
                "Квартиры",
                "Апартаменты",
                "Загородные дома",
                "Дачные дома",
                "Коммерческая недвижимость"
            ],
            nameValue: "Укажите Ваше имя",
            nameValid: true,
            phoneValue: "Укажите Ваш номер телефона",
            phoneValid: true,
            messageValue: "Укажите текст сообщения",
            messageValid: true,
            formStatus: 'Корректно заполните поля и нажмите "Отправить"',
            successSend: false,
            errorSend: false
        };
    },
    props: {
        agents: Array
    },
    created: function() {
        window.addEventListener("scroll", this.closeSelectorInScroll);
    },
    methods: {
        setOption: function(option) {
            this.selectedOption = option;
            this.optionValid = true;
        },
        closeSelectorInScroll: function() {
            if (this.showOptions) this.showOptions = false;
        },
        startChangeInput: function(e) {
            let id = e.target.attributes.id.nodeValue;
            switch (id) {
                case "nameInput":
                    if (this.nameValue == "Укажите Ваше имя")
                        this.nameValue = "";
                    break;
                case "phoneInput":
                    if (this.phoneValue == "Укажите Ваш номер телефона")
                        this.phoneValue = "+7-";
                    break;
                case "messageArea":
                    if (this.messageValue == "Укажите текст сообщения")
                        this.messageValue = "";
            }
        },
        endChangeInput: function(e) {
            let id = e.target.attributes.id.nodeValue;
            switch (id) {
                case "nameInput":
                    if (!e.target.value) {
                        this.nameValue = "Укажите Ваше имя";
                    } else {
                        this.nameValue = e.target.value;
                    }
                    this.nameValid = true;
                    break;
                case "phoneInput":
                    if (!e.target.value || e.target.value == "+7-")
                        this.phoneValue = "Укажите Ваш номер телефона";
                    else this.phoneValue = e.target.value;
                    this.phoneValid = true;
                    break;
                case "messageArea":
                    this.messageValid = true;
                    if (!e.target.value)
                        this.messageValue = "Укажите текст сообщения";
                    else this.messageValue = e.target.value;
            }
        },
        changeInput: function(e) {
            let id = e.target.attributes.id.nodeValue;

            switch (id) {
                case "nameInput":
                    let namePattern = /^[а-яА-Я\s]*$/i;
                    if (
                        e.key == "Backspace" ||
                        e.key == " " ||
                        e.key == "Delete" ||
                        e.key.match(namePattern)
                    ) {
                        return true;
                    } else {
                        e.preventDefault();
                    }
                    break;
                case "phoneInput":
                    if (
                        "1234567890".indexOf(e.key) != -1 &&
                        this.phoneValue.length < 16
                    ) {
                        if (
                            this.phoneValue.length == 2 ||
                            this.phoneValue.length == 6 ||
                            this.phoneValue.length == 10 ||
                            this.phoneValue.length == 13
                        )
                            this.phoneValue += "-";
                        this.phoneValue += e.key;
                    } else if (e.key == "Backspace") {
                        this.phoneValue = this.phoneValue.slice(
                            0,
                            this.phoneValue.length - 1
                        );
                    }
                    e.preventDefault();
                case "messageArea":
                    let msgPattern = /^[а-яА-Яa-zA-Zs0-9?!.,\s]*$/i;
                    if (
                        e.key == "Backspace" ||
                        e.key == " " ||
                        e.key == "Delete" ||
                        e.key.match(msgPattern)
                    ) {
                        return true;
                    } else {
                        e.preventDefault();
                    }
                    break;
            }
        },
        submitForm: function(agentMail) {
            let fullNamePattern = /^[а-яА-Я\s]*$/i;
            let fullPhonePattern = /^[+]?[(]?[0-9]{1}[-s.]?[0-9]{3}[-s.]?[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{2}[-s.][0-9]{2}/i;
            let fullMessagePattern = /^[а-яА-Яa-zA-Zs0-9?!.,\s]*$/i;

            if (
                !this.nameValue.match(fullNamePattern) ||
                !/\S/.test(this.nameValue) ||
                this.nameValue == "Укажите Ваше имя"
            )
                this.nameValid = false;
            else this.nameValid = true;
            if (!this.phoneValue.match(fullPhonePattern))
                this.phoneValid = false;
            else this.phoneValid = true;
            if (this.selectedOption == "Субъект недвижимости")
                this.optionValid = false;
            else this.optionValid = true;
            if (
                this.messageValue == "Укажите текст сообщения" ||
                !/\S/.test(this.messageValue) ||
                !this.messageValue.match(fullMessagePattern)
            )
                this.messageValid = false;
            else this.messageValid = true;

            if (
                this.nameValid &&
                this.phoneValid &&
                this.optionValid &&
                this.messageValid
            ) {
                this.errorSend = false;
                let p = new Promise((response, error) => {
                    this.formStatus = "Отправка сообения";
                    console.log(agentMail); // Send mail )))
                    setTimeout(() => {
                        response("Сообщение было успешно отправлено");
                    }, 2000);
                });
                p.then(result => {
                    this.formStatus = result;
                    this.selectedOption = "Субъект недвижимости";
                    this.nameValue = "Укажите Ваше имя";
                    this.phoneValue = "Укажите Ваш номер телефона";
                    this.messageValue = "Укажите текст сообщения";
                    this.successSend = true;
                    setTimeout(() => {
                        this.formStatus =
                            'Корректно заполните поля и нажмите "Отправить"';
                        this.successSend = false;
                    }, 3000);
                });
            } else {
                this.formStatus =
                    "Корректно заполните отмеченное и повторите попытку";
                this.errorSend = true;
            }
        },
        clearForm: function() {
            this.selectedOption = "Субъект недвижимости";
            this.nameValue = "Укажите Ваше имя";
            this.phoneValue = "Укажите Ваш номер телефона";
            this.messageValue = "Укажите текст сообщения";
            this.formStatus = 'Корректно заполните поля и нажмите "Отправить"';
            this.errorSend = this.successSend = false;
            this.optionValid = this.nameValid = this.phoneValid = this.messageValid = true;
        }
    },
    components: {
        Carousel: Carousel,
        Slide: Slide
    }
};
</script>

<!--
    Our agents styles
-->

<style lang="scss" scoped>
.our-agents {
    font-family: sans-serif;
    position: relative;
    z-index: 1;
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .agents-wrapper {
            background-color: white;
            padding: 0 30px;
            h4 {
                margin: 0;
                padding: 20px 0;
            }
            .annotation {
                padding: 0 150px;
                text-align: justify;
                text-indent: 20px;
                font-size: 13px;
            }
            hr {
                margin: 20px 150px;
            }
            h3 {
                margin: 0;
                text-transform: uppercase;
                color: #4cc251;
                font-weight: 300;
            }
            .agent-wrapper {
                display: flex;
                justify-content: space-between;
                padding: 0 50px 70px;
                .agent-info {
                    display: flex;
                    justify-content: start;

                    .description {
                        width: 300px;
                        text-align: left;
                        padding: 0 20px;
                        .annotation {
                            padding: 0;
                            text-align: left;
                            text-indent: 0;
                            margin: 20px 0;
                        }
                        a {
                            padding-top: 10px;
                            display: flex;
                            text-decoration-line: none;
                            color: #6b6464;
                            .phone {
                                padding: 5px 0 0 10px;
                                font-size: 20px;
                            }
                        }
                        .socials {
                            display: flex;
                            margin-top: 10px;
                            a {
                                padding-right: 10px;
                            }
                        }
                    }
                }
                .agent-form {
                    text-align: left;
                    width: 370px;
                    .selector-wrapper {
                        margin-top: 10px;
                        .selector {
                            display: flex;
                            border: 1px solid #8080807a;
                            justify-content: space-between;
                            padding: 5px 10px;
                            font-size: 12px;
                            img {
                                transform: rotate(0deg);
                                transition: 0.6s ease;
                            }
                            .rotate {
                                transform: rotate(90deg);
                                transition: 0.6s ease;
                            }
                        }
                        .options {
                            width: 368px;
                            border: 1px solid #8080807a;
                            margin-top: 15px;
                            z-index: 2;
                            position: absolute;
                            background-color: white;
                            ul {
                                margin: 0;
                                font-size: 12px;
                                li {
                                    width: 100%;
                                    margin: 0;
                                    &:hover {
                                        cursor: pointer;
                                        background-color: #736c6c2e;
                                    }
                                    .option-wrapper {
                                        padding: 9px 0 9px 10px;
                                    }
                                }
                                .selected {
                                    background-color: #736c6c2e;
                                    cursor: default !important;
                                }
                            }
                        }
                    }
                    input[type="text"] {
                        margin-top: 15px;
                        padding: 5px 10px;
                        border: 1px solid #8080807a;
                        font-size: 12px;
                        color: #2c3e50;
                        width: 348px;
                        font-family: inherit;
                        &:focus {
                            outline: none;
                        }
                    }
                    textarea {
                        margin-top: 15px;
                        width: 348px;
                        padding: 5px 10px;
                        border-color: #8080807a;
                        color: #2c3e50;
                        resize: none;
                        font-size: 12px;
                        font-family: inherit;
                        -webkit-box-shadow: none;
                        -moz-box-shadow: none;
                        box-shadow: none;
                        &:focus {
                            outline: none;
                        }
                    }
                    .error-input {
                        border-color: #e83636 !important;
                    }
                    .status {
                        text-transform: uppercase;
                        font-size: 11px;
                        margin-top: 7px;
                    }
                    .success {
                        color: #3b983f;
                    }
                    .error {
                        color: #e83636;
                    }
                    .controls {
                        margin-top: 7px;
                        display: flex;
                        .send-btn {
                            padding: 5px 10px;
                            background-color: #4cc251;
                            color: white;
                            text-transform: uppercase;
                            font-size: 12px;
                            border: none;
                            &:hover {
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                        .reset-btn {
                            padding: 5px 10px;
                            background-color: #a6a6ad;
                            color: white;
                            border: none;
                            &:hover {
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }
            }
        }
    }
}

::-webkit-input-placeholder {
    color: white;
    font-size: 14px;
    font-weight: 300;
}
::-moz-placeholder {
    color: white;
    font-size: 14px;
    font-weight: 300;
}
:-ms-input-placeholder {
    color: white;
    font-size: 14px;
    font-weight: 300;
}
:-moz-placeholder {
    color: white;
    font-size: 14px;
    font-weight: 300;
}

// Vue animations

.showList-enter-active,
.showList-leave-active {
    transition: opacity 0.4s;
}
.showList-enter,
.showList-leave-to {
    transition: opacity 0.4s;
    opacity: 0;
}

// Adaptive

@media screen and (max-width: 1200px) {
    .our-agents {
        padding: 0 30px;
        .agent-wrapper {
            flex-direction: column;
            .agent-info {
                justify-content: center !important;
            }
            .agent-form {
                margin: auto;
                padding-top: 20px;
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .agent-info {
        display: flex;
        flex-direction: column;
        .main-photo {
            padding: 0 !important;
            margin: auto;
        }
        .description {
            padding: 15px 0 0 !important;
            margin: auto;
        }
    }
}

@media screen and (max-width: 800px) {
    .annotation {
        padding: 0 !important;
    }
}

@media screen and (max-width: 700px) {
    .our-agents {
        padding: 0 !important;
        .agent-wrapper {
            padding: 0 !important;
        }
        .main-photo {
            width: 100% !important;
            height: 100% !important;
        }
        .description {
            width: auto !important;
        }
        .agent-form {
            width: 100% !important;
        }
        input,
        textarea {
            box-sizing: border-box !important;
            width: 100% !important;
        }
    }
    .controls {
        margin-bottom: 30px !important;
    }
}
</style>
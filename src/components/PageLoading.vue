<!--
    Page loading screen template
-->

<template>
    <div class="page-loading">
        <div class="company-logo">
            <img src="../assets/img/white-logo.png" alt="Company Logo" width="120" height="80">
        </div>
        <div class="annotation" :class="{hidden : loadingError}">
            <h4>Загрузка ресурсов. Пожалуйста подождите</h4>
        </div>
        <div class="error-description" :class="{hidden : loadingError == false}">
            <h4>Ошибка получения ресурсов с сервера</h4>
            <p>{{this.$store.state.loadErrorText}}</p>
        </div>
        <div class="lds-roller" :class="{hidden : loadingError}">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<!--
    Page loading screen component
-->

<script>
export default {
    name: "pageLoading",
    computed: {
        loadingError() {
            return this.$store.state.loadError;
        }
    }
};
</script>

<!--
    Page loading screen styles
-->

<style lang="scss" scoped>
.page-loading {
    font-family: sans-serif;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: grey;
    z-index: 11;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .annotation {
        color: white;
    }
    .hidden {
        display: none !important;
    }
    .lds-roller {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
        margin-left: auto;
        margin-right: auto;
    }
    .lds-roller div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
    }
    .lds-roller div:after {
        content: " ";
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #fff;
        margin: -3px 0 0 -3px;
    }
    .lds-roller div:nth-child(1) {
        animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
        top: 50px;
        left: 50px;
    }
    .lds-roller div:nth-child(2) {
        animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
        top: 54px;
        left: 45px;
    }
    .lds-roller div:nth-child(3) {
        animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
        top: 57px;
        left: 39px;
    }
    .lds-roller div:nth-child(4) {
        animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
        top: 58px;
        left: 32px;
    }
    .lds-roller div:nth-child(5) {
        animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
        top: 57px;
        left: 25px;
    }
    .lds-roller div:nth-child(6) {
        animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
        top: 54px;
        left: 19px;
    }
    .lds-roller div:nth-child(7) {
        animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
        top: 50px;
        left: 14px;
    }
    .lds-roller div:nth-child(8) {
        animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
        top: 45px;
        left: 10px;
    }
    @keyframes lds-roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
<template>
    <div class="objects-filter">
        <div class="container">
            <div class="nav-wrapper">
                <div class="to-main-btn">
                    <button @click="goToPage">
                        <div class="inner-btn-wrapper">
                            <img
                                src="../assets/img/left-arrow.png"
                                alt="Left arrow"
                                width="18"
                                height="18"
                            >
                            <div class="btn-text">{{this.$props.params.title}}</div>
                        </div>
                    </button>
                </div>
                <div class="company-info">
                    <div class="company-info-wrapper">
                        <img
                            src="../assets/img/dark-logo.png"
                            alt="Main logo"
                            width="80"
                            height="45"
                        >
                        <div class="some-description">
                            <div
                                class="some-description-wrapper"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at explicabo alias ut voluptatibus voluptates mollitia optio consequatur veniam deserunt animi distinctio suscipit laboriosam sequi asperiores odit amet illo, vero porro ipsum accusamus iusto!</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <obj-filter></obj-filter> -->
        </div>
    </div>
</template>

<script>
import Filter from "./Filter";

export default {
    name: "topFilter",
    data() {
        return {};
    },
    props: {
        params: Object
    },
    methods: {
        goToPage: function() {
            this.$router.push({ name: this.$props.params.routeName });
        }
    },
    components: {
        ObjFilter: Filter
    }
};
</script>

<style lang="scss" scoped>
.objects-filter {
    font-family: sans-serif;
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .nav-wrapper {
            display: flex;
            padding: 0 30px 30px;
            button {
                background-color: #28c128cf;
                color: white;
                outline: none;
                height: 60px;
                text-transform: uppercase;
                font-size: 15px;
                border: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .inner-btn-wrapper {
                    display: flex;
                    justify-content: center;
                    padding: 0 15px 0 10px;
                    img {
                        padding-right: 10px;
                    }
                }
            }
            .company-info,
            .some-description {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .company-info-wrapper,
                .some-description-wrapper {
                    display: flex;
                    justify-content: start;
                }
            }
            .company-info {
                img {
                    padding: 0 20px;
                }
            }
            .some-description-wrapper {
                font-size: 11px;
                width: 600px;
                text-align: left;
            }
        }
    }
}

// Adaptive

@media screen and (min-width: 700px) and (max-width: 1000px) {
    .nav-wrapper {
        padding: 0 30px 20px !important;
    }
    .to-main-btn {
        .btn-text {
            font-size: 13px !important;
        }
    }
    .some-description-wrapper {
        width: 350px !important;
    }
}

@media screen and (min-width: 400px) and (max-width: 500px) {
    .nav-wrapper {
        margin-bottom: -75px !important;
        .company-info {
            margin-bottom: 80px !important;
        }
    }
}

@media screen and (max-width: 399px) {
    .nav-wrapper {
        margin-bottom: -145px !important;
        .company-info {
            margin-bottom: 150px !important;
        }
    }
}

@media screen and (max-width: 750px) {
    .nav-wrapper {
        flex-wrap: wrap;
        padding: 0 !important;
        .to-main-btn {
            width: 100%;
            button {
                width: 100% !important;
            }
        }
        .company-info {
            width: 100% !important;
            padding: 10px 30px !important;
            .company-info-wrapper {
                width: 100% !important;
                img {
                    padding: 0 20px 0 0 !important;
                }
                .some-description {
                    .some-description-wrapper {
                        width: 100% !important;
                    }
                }
            }
        }
    }
}
</style>
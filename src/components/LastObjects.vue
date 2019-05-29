<!-- Last objects template -->

<template>
    <div class="last-objects" id="lastObject">
        <div class="container">
            <div class="title">Последние предложения агенства</div>
            <div class="objects-list-wrapper">
                <div class="objects-list">
                    <div class="object-wrapper" v-for="(obj, index) in objects" :key="index">
                        <object-card :object="obj"></object-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Object card object -->
<script>
import ObjectCard from "./ObjectCard";

export default {
    name: "last-objects",
    props: {
        objects: Array
    },
    components: {
        ObjectCard: ObjectCard
    }
};
</script>

<!-- Object card styles -->

<style lang="scss">
.last-objects {
    font-family: sans-serif;
    margin-top: 5px;
    overflow-x: hidden;
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .title {
            text-align: left;
            text-transform: uppercase;
            font-size: 13px;
            padding: 10px 30px;
        }
        .objects-list-wrapper {
            padding: 0 30px;
            .objects-list {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                justify-content: space-between;
                .object-wrapper {
                    width: 350px;
                }
            }
        }
    }
}

// Adaptive

@media screen and (max-width: 1100px) {
    .objects-list {
        justify-content: space-evenly !important;
    }
}

@media screen and (max-width: 400px) {
    .VueCarousel-dot-container {
        display: none !important;
    }
    .objects-list-wrapper {
        padding: 0 !important;
        .object-wrapper {
            width: auto !important;
            .regular-card {
                padding: 0 10px 40px !important;
                .deal-type,
                .photos-count {
                    right: 10px;
                }
            }
            .title {
                padding: 10px 0 !important;
            }
            .address {
                padding: 0 !important;
            }
        }
    }
}
</style>
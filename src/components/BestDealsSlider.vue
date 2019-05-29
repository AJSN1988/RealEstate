<!--
    Slider template
-->

<template>
    <carousel
        :autoplay="config.autoplay"
        :autoplayTimeout="config.autoplayTimeout"
        :perPageCustom="config.perPageCustom"
        :easing="config.easing"
        :minSwipeDistance="config.minSwipeDistance"
        :perPage="config.perPage"
        :scrollPerPage="config.scrollPerPage"
        :speed="config.speed"
        :navigationClickTargetSize="config.navigationClickTargetSize"
        :navigationEnabled="config.navigationEnabled"
        :navigationNextLabel="config.navigationNextLabel"
        :navigationPrevLabel="config.navigationPrevLabel"
        :paginationEnabled="config.paginationEnabled"
        :paginationActiveColor="config.paginationActiveColor"
        :paginationColor="config.paginationColor"
        :paginationPadding="config.paginationPadding"
        :paginationSize="config.paginationSize"
    >
        <slide v-for="(item, index) in objects" :key="index">
            <deal :value="item"></deal>
        </slide>
    </carousel>
</template>

<!--
    Slider component
-->

<script>
import Axios from "axios";
import { Carousel, Slide } from "vue-carousel";
import Deal from "./Deal.vue";

export default {
    name: "slider",
    mounted() {
        // Axios.get("http://localhost:3000/deals/")
        //     .then(response => {
        //         this.items = response.data;
        //     })
        //     .catch(error => {
        //         this.$store.commit("changeLoadStatus", true);
        //         console.error(`Get best deals resources fail`);
        //     });
    },
    data() {
        return {
            items: {}
        };
    },
    components: {
        Carousel: Carousel,
        Slide: Slide,
        Deal: Deal
    },
    props: {
        config: Object,
        objects: Array
    }
};
</script>

<!--
    Slider template
-->

<style lang="scss" scoped>
.VueCarousel-pagination[data-v-438fd353] {
    position: absolute;
    top: -60px;
    width: 50px;
    right: 0;
}
</style>

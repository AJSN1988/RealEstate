<template>
    <div class="obj-finder">
        <top-filter :params="{ title : 'На главную', routeName : 'Home' }"></top-filter>
        <objects :objects="objects"></objects>
        <app-bottom></app-bottom>
    </div>
</template>

<script>
import TopFilter from "./TopFilter";
import Objects from "./Objects";
import AppBottom from "./AppBottom";

export default {
    name: "objFinder",
    data() {
        return {};
    },
    mounted() {
        document.querySelector(".obj-finder").scrollIntoView();
    },
    props: {
        objects: Array
    },
    components: {
        TopFilter: TopFilter,
        Objects: Objects,
        AppBottom: AppBottom
    }
};
</script>

<style lang="scss" scoped>
.obj-finder {
    font-family: sans-serif;
}
</style>

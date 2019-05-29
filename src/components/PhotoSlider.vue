<!-- Photo slider template -->
<template>
    <div class="photo-slider">
        <div
            class="slider-container"
            @mouseover="showSliderContols = true"
            @mouseleave="showSliderContols = false"
        >
            <div class="active-photo-wrapper">
                <img :src="photos[activePhotoIndex]" alt="Active photo" width="100%" height="auto">
            </div>
            <div class="previews-out-wrapper" :v-bind="photosInBlock">
                <div class="previews-inner-wrapper">
                    <div
                        class="preview-mini"
                        v-for="(photo, index) in photos"
                        :key="index"
                        :id="index"
                        :class="{ active : activePhotoIndex == index }"
                        :data-offset="index * -160"
                        @click="changeActivePhoto"
                    >
                        <img
                            :src="photo"
                            alt="Mini photo"
                            :width="imgkWidth"
                            :height="imgHeigth"
                            :id="index"
                        >
                    </div>
                </div>
            </div>
            <div class="preview-controls">
                <div
                    class="prev-control"
                    :class="{ 'freeze-control' : activePhotoIndex == 0 }"
                    @click="changeSlide('prev')"
                >
                    <img src="../assets/img/left-arrow.png" alt="Prev btn" width="18" height="18">
                </div>
                <div
                    class="next-control"
                    :class="{ 'freeze-control' : activePhotoIndex == photos.length-1 }"
                    @click="changeSlide('next')"
                >
                    <img
                        src="../assets/img/right-arrow-white.png"
                        alt="Next btn"
                        width="18"
                        height="18"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Photo slider script -->
<script>
export default {
    name: "PhotoSlider",
    created() {
        window.addEventListener("resize", this.resizeHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeHandler);
    },
    mounted() {
        this.adjustSlider();
    },
    data() {
        return {
            activePhotoIndex: 0,
            previewsCountPerPage: 5,
            containerBreakPoints: [
                { breakPoint: 1200, width: 800, count: 5 },
                { breakPoint: 920, width: 640, count: 4 },
                { breakPoint: 720, width: 480, count: 3 },
                { breakPoint: 520, width: 320, count: 2 },
                { breakPoint: 320, width: 160, count: 1 }
            ],
            // showSliderContols: false,
            previewsHorizonthalOffset: 0,
            photosInBlock: 5,
            activeBlock: 0,
            borderIndexs: [],
            containerWidth: 800,
            imgkWidth: 150,
            imgHeigth: 100,
            blockPadding: 10
        };
    },
    methods: {
        changeActivePhoto(e) {
            this.activePhotoIndex = parseInt(e.target.id);
        },
        getBorders() {
            let result = [];
            for (let i = 0; i < 20; i += this.photosInBlock) {
                if (i - 1 > 0) result.push(i - 1);
            }
            return result;
        },
        changeSlide(direction) {
            if (
                this.activePhotoIndex == this.$props.photos.length - 1 &&
                direction == "next"
            )
                return false;
            if (this.activePhotoIndex == 0 && direction == "prev") return false;

            let slider = document.querySelector(".previews-inner-wrapper");
            let blockWidth = this.imgkWidth + this.blockPadding;

            if (direction == "next") {
                this.activePhotoIndex++;

                if (
                    this.borderIndexs.includes(this.activePhotoIndex - 1) ||
                    this.photosInBlock == 1
                ) {
                    this.activeBlock += 1;
                    slider.style.left = `${this.activeBlock *
                        this.photosInBlock *
                        -blockWidth}px`;
                }
            } else if (direction == "prev") {
                this.activePhotoIndex--;
                if (
                    this.borderIndexs.includes(this.activePhotoIndex) ||
                    this.photosInBlock == 1
                ) {
                    this.activeBlock -= 1;
                    slider.style.left = `${this.activeBlock *
                        this.photosInBlock *
                        (blockWidth * -1)}px`;
                }
            }
        },
        adjustSlider() {
            let componentWidth = document.querySelector(".previews-out-wrapper")
                .offsetWidth;

            let currBreakPoint = null;
            let stop = false;
            this.containerBreakPoints.forEach((el, index) => {
                if (window.innerWidth >= el.breakPoint && !stop) {
                    currBreakPoint = el;
                    stop = true;
                }
            });

            this.photosInBlock = this.previewsCountPerPage =
                currBreakPoint.count;
            this.containerWidth = currBreakPoint.width;
            document.querySelector(".previews-out-wrapper").style.width = `${
                this.containerWidth
            }px`;

            this.borderIndexs = this.getBorders();
        },
        resetSlider() {
            this.activePhotoIndex = this.activeBlock = 0;
            document.querySelector(".previews-inner-wrapper").style.left =
                "0px";
        },
        resizeHandler() {
            this.adjustSlider();
            this.resetSlider();
        }
    },
    props: {
        // options: Object,
        photos: Array
    }
};
</script>

<!-- Photo slider styles -->
<style lang="scss" scoped>
.photo-slider {
    width: 100%;
    .slider-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .active-photo-wrapper {
            width: 100%;
            max-height: 600px;
            img {
                max-height: 600px;
            }
        }
        .previews-out-wrapper {
            margin: 10px 40px;
            overflow-x: hidden;
            position: relative;
            height: 120px;
            width: 800px;
            margin: auto;
            padding-top: 10px;
            .previews-inner-wrapper {
                position: absolute;
                display: flex;
                flex-direction: row;
                justify-content: center;
                z-index: 1;
                transition: all 1s ease;
                left: 0;
                min-width: 100%;
            }
            .preview-mini {
                width: 150px;
                padding: 0 5px;
            }
            .preview-mini.active {
                img {
                    opacity: 0.5;
                }
            }
        }
        .preview-controls {
            position: relative;
            width: 100%;
            height: 0;
            background-color: grey;
            .prev-control,
            .next-control {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #51c54c;
                z-index: 2;
                transition: opacity 0.9s;
                img {
                    padding: 11px 0 0 0;
                }
                &:hover {
                    cursor: pointer;
                }
            }
            .prev-control {
                position: absolute;
                bottom: 45px;
                left: 45px;
            }
            .next-control {
                position: absolute;
                bottom: 45px;
                right: 45px;
            }
            .freeze-control {
                background-color: #8080808c;
                &:hover {
                    cursor: default;
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .prev-control {
        left: 0 !important;
    }
    .next-control {
        right: 0 !important;
    }
}
</style>



<template>
    <div class="carousel">
        <VueSlickCarousel v-bind="settings">
             <template #prevArrow="arrowOption">
                <div class="custom-arrow">
                    {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                </div>
            </template>
            <div class="carousel_item"><promotion-banner class="bg_blue"></promotion-banner></div>
            <div class="carousel_item"><promotion-banner class="bg_orange"></promotion-banner></div>
            <div class="carousel_item"><promotion-banner class="bg_black"></promotion-banner></div>
            <div class="carousel_item"><promotion-banner class="bg_orange"></promotion-banner></div>
            <div class="carousel_item"><promotion-banner class="bg_blue"></promotion-banner></div>
    </VueSlickCarousel>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import PromotionBanner from '../components/PromotionBanner.vue'

export default {
    name: "Carousel",
    components: { 
        VueSlickCarousel,
        PromotionBanner
    },
    data(){
        return {
            settings: {
                "arrows": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "variableWidth": true,
                "adaptiveHeight": true,
                "responsive": [{
                    "breakpoint": 768,
                    "settings": {
                        "variableWidth": false,
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        }
                    }
                   
                ]
            }
        }
    },
    
  }

</script>
<style lang="scss" scoped>
@import'../assets/variables.scss';
@import'../assets/media.scss';
.carousel{
    margin-bottom: 30px;
    @include media(">desktop") {
        margin-bottom: 70px;
    }
    .bg_blue {
        background-color: #1AA2EF;
    }
    .bg_orange {
        background-color: $orange;
    }
    .bg_black {
        background: #000;
    }
}
::v-deep .slick-slide {
    @media screen and (min-width: 768px) {
        width: 540px;
        margin-right: 30px;
    }
}
::v-deep .slick-next,
::v-deep .slick-prev {
    width: 36px;
    height: 36px;
    text-align: center;
    line-height: 33px;
    border-radius: 7px;
}
::v-deep .slick-next {
    background: $orange;
    right: 0;
    top: -32px;
}

::v-deep .slick-next::before {
    content: url('../static/slick-next-active.svg');
    vertical-align: -7px;
}
::v-deep .slick-prev{
    left: auto;
    right: 65px;
    top: -32px;
    background: $light_grey;
}
::v-deep .slick-prev::before {
    content: url('../static/slick-prev.svg');
    vertical-align: middle;
}
</style>
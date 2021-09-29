<template>
    <div class="promotion_banner ">
        <div class="d-flex">
            <div class="col-6 px-0">
                <h3 class="promotion_banner-title">{{title}}</h3>
                <p class="promotion_banner-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="col-6">
                    <img class="w-100" src="../static/fist-bump.svg" alt="">
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    name: "PromotionBanner",
    data() {
        return {
            title: "Приглашай друзей и получай 15% скидку",
            bannerList: [
                {

                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/variables.scss';
@import '../assets/media.scss';
.promotion_banner {
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    @include media(">desktop") {
        padding: 30px;

    }
    &-title {
        font-weight: 800;
        font-size: 18px;
        line-height: 18px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        @include media(">desktop") {
            font-size: 24px;
            line-height: 28px;
        }
    }
    &-desc {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        @include media(">desktop") {
            font-size: 16px;
            line-height: 19px;
        }
    }
    &-icon {

        @include media(">desktop") {
            // padding: 115px;

        }
    }
}
</style>
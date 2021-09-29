<template>
    <div class="redirect">
        <h3 class="redirect_title">мобильное приложение</h3>
        <button class="redirect_button to-appstore"></button>
        <button class="redirect_button to-playmarket"></button>
    </div>
</template>
<script>
export default {
    name: "RedirectButtons"
}
</script>
<style lang="scss">
@import '../assets/variables.scss';
    .redirect {
        margin-bottom: 125px;
        &_title {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            text-transform: uppercase;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: $black;
            margin-bottom: 20px;
        }
        &_button {
            min-width: 160px;
            height: 44px;
        }
        .to-appstore {
            background: url('../static/appstore.svg');
            margin-right: 20px;
        }
        .to-playmarket {
            background: url('../static/playmarket.svg');
        }
    }
</style>
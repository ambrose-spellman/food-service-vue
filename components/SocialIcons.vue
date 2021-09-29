<template>
    <div class="social_media">
        <a href="#" class="social_media-link instagram-ic"></a>
        <a href="#" class="social_media-link whatsapp-ic"></a>
    </div>
</template>
<script>
export default {
    name: "SocialIcons"
}
</script>
<style lang="scss" scoped>
.social_media {
    text-align: center;
    &-link {
        display: inline-block;
        width: 24px;
        height: 24px;
    }
    .instagram-ic {
        background: url('../static/ins-icon-red.svg') center center/contain no-repeat;
        margin-right: 30px;
    }
    .whatsapp-ic {
        background: url('../static/whatsapp-red.svg') center center/contain no-repeat;
    }
}
</style>
<template>
   <div class="header_contact">
        <div class="header_contact-item">
            <span class="header_contact-item-text phone_icon">Call center </span>
            <a href="" class="header_contact-item-text">+7 (701) 445 66 66</a>
        </div>
        <div class="header_contact-item">
            <span class="header_contact-item-text whatsapp_icon">WhatsApp </span>
            <a href="" class="header_contact-item-text">+7 (701) 445 66 66</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "HeaderContact"
}
</script>
<style lang="scss" scoped>
@import '../assets/media.scss';
.header_contact{
    text-align: center;
    padding: 4px 0;
    margin-bottom: 40px;
    @include media(">desktop") {
        margin-bottom: 0;
    }
    &-item {
        &:first-child {
            margin-bottom: 25px;
            @include media("screen", ">=tablet") {
                margin-right: 40px;
                margin-bottom: 0;
            }
        }
    }
    &-item-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        font-feature-settings: "pnum" on, "lnum" on;
        color: #2b2a29;
    }
    .phone_icon {
        background: url("../static/phone-icon.svg") left center no-repeat;
        padding-left: 30px;
    }
    .whatsapp_icon {
        background: url("../static/whatsapp.svg") left center/contain no-repeat;
        padding-left: 30px;
    }
}
</style>
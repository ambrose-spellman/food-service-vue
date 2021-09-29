<template>
    <div>
        <div class="footer">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="logo-col col-lg-2">
                        <b-navbar-brand href="#" class="logo"></b-navbar-brand>
                        <social-icons></social-icons>
                    </div>
                    <div class="contacts-col col-md-6 col-lg-4">
                        <div class="row">
                            <div class="col-6 d-flex flex-column">
                                <h5 class="footer_section-title">shoq doner</h5>
                                <a href="" class="footer_section-link">О нас</a>
                                <a href="" class="footer_section-link">Акции</a>
                                <a href="" class="footer_section-link">FAQ</a>
                            </div>
                            <div class="col-6 d-flex flex-column">
                                <h5 class="footer_section-title">Контакты</h5>
                                <a href="tel:+7 (701) 445 66 66" class="footer_section-link">+7 (701) 445 66 66</a>
                                <a href="tel:+7 (701) 445 55 55" class="footer_section-link">+7 (701) 445 55 55</a>
                                <a href="email:info@shoqdoner.kz" class="footer_section-link">info@shoqdoner.kz</a>
                            </div>
                        </div>
                    </div>
                    <div class="redirect-col col-lg-4 col-xl-4">
                        <redirect-buttons></redirect-buttons>
                    </div>
                </div>
                <div class="footer_copyright"><span>shoq doner © 1441</span></div>
            </div>
        </div>
    </div>
</template>
<script>
import SocialIcons from "./SocialIcons.vue";
import RedirectButtons from "./RedirectButtons.vue";
export default {
    name: "FooterBlock",
    components: {
        SocialIcons,
        RedirectButtons
    },
}
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
@import "../assets/media.scss";
.footer {
    background: $light_grey;
    padding: 100px 0;
    @include media(">desktop") {
        padding: 120px 0;
    }
    .logo {
      background: url("../static/logo.svg") center center/cover no-repeat;
      display: inline-block;
      width: 128px;
      height: 60px;
      margin-bottom: 42px;
    }
    
   
    &_section-link, &_section-title,
     &_copyright {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $black;
    }
     &_section-title,
     &_copyright {
        text-transform: uppercase;
    }

    &_copyright,
    &_section-link {
        opacity: 0.5;
    }
    &_copyright {
        text-align: center;
        @include media(">desktop"){
            margin-top: 50px;
            text-align: left;
        }
    }
    &_section-link {
        margin-bottom: 15px;
    }
    &_section-title{
        margin-bottom: 20px;
    }
    .redirect-col {
        @include media(">desktop_xl"){
            flex: 0 0 34.6666666667%;
            max-width: 34.666667%;
        }
    }
    .contacts-col {
        @include media(">desktop"){
            flex: 0 0 35.6666666667%;
            max-width: 35.666667%;
        }
    }
    .social_media {
        text-align: left;
    }
    .logo-col,
    .contacts-col,
    .redirect-col {
        margin-bottom: 50px;
        @include media(">desktop"){
            margin-bottom: 0;
        }
    }
}
.redirect {
    margin-bottom: 0;
}
</style>
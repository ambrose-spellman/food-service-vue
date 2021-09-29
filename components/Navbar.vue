<template>
  <div>
    <header class="header">
      <div class="header_top">
        <div class="container">
            <header-contact class="d-none d-lg-flex"></header-contact>
          </div>
        </div>
      <div class="header_nav container">
        <b-navbar-brand href="#" class="header_nav-logo"></b-navbar-brand>
        <pickup-delivery class="d-none d-lg-block"></pickup-delivery>
        <header-address class="d-none d-lg-block"></header-address>
         <header-user-panel></header-user-panel>
        <header-lang class="lang_dropdown d-none d-lg-block"></header-lang>
         <mobile-menu></mobile-menu>
         <nav class="mobile_menu" id="mobile_menu">
          <div class="hidden_menu">
              <pickup-delivery></pickup-delivery>
              <header-address></header-address>
              <redirect-buttons></redirect-buttons>
              <header-contact></header-contact>
              <header-lang></header-lang>
              <social-icons></social-icons>
          </div>
        </nav>
      </div>
      <div>
      </div>
    </header>
  </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue'
import PickupDelivery from './PickupDelivery.vue'
import HeaderAddress from './HeaderAddress.vue'
import RedirectButtons from './RedirectButtons.vue'
import HeaderContact from './HeaderContact.vue'
import HeaderLang from './HeaderLang.vue'
import HeaderUserPanel from './HeaderUserPanel.vue'
import MobileMenu from './MobileMenu.vue'
export default{
  components: {
    SocialIcons,
    PickupDelivery,
    HeaderAddress,
    RedirectButtons,
    HeaderContact,
    HeaderLang,
    HeaderUserPanel,
    MobileMenu
  },
  name: "Navbar",
}
</script>

<style scoped lang="scss" >
@import "../assets/variables.scss";
@import "../assets/media.scss";

.mobile_menu {
  overflow: hidden;
  display: none;
  &::after {
    content: "";
    width: 135px;
    height: 5px;
    background: #000;
    border-radius: 100px;
    position: absolute;
    width: 135px;
    height: 5px;
    left: calc(50% - 135px/2);
    bottom: 8px;
  }
}
@media screen and (max-width: 992px) {
  .mobile_menu.responsive {
    position: absolute;
    display: block;
    width: 100%;
    background: #fff;
    top: 85px;
    left: 0;
    right: 0;
    padding: 0 15px 60px;
    z-index: 10;
  }
}
.header {
  margin-bottom: 20px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.07);
  &_top {
    background: #f6f6f6;
    display: none;
   @include media-context(('custom': 769px)){
    @include media("screen", ">=custom") {
        display: block;
        }
   }

    }
  &_nav {
    display: flex;
    position: relative;
    padding: 10px 0 0;
    @include media(">=desktop") {
      align-items: center;
       padding: 20px 0;
    }
    &-logo {
      background: url("../static/logo.svg") center center/cover no-repeat;
      display: inline-block;
      width: 128px;
      height: 60px;
      margin-right: 40px;
    }
  }
}


</style>

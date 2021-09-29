<template>
  <div class="header_address">
    <div class="header_address-wrapper" id="show-modal" @click="showModal = true">
      <span class="header_address-city">Алматы</span>
      <span class="header_address-address">ул. Шевченко 165Б</span>
    </div>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header"> header</h3>
    </modal>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
export default {
  name: "HeaderAddress",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
@import "../assets/media.scss";
.header_address {
  position: relative;
  padding-left: 48px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  @include media(">desktop") {
    margin: 0 auto 0 0;
    flex-basis: 20%;
  }
  &::before {
    content: "";
    display: inline-block;
    background: $light_grey url("../static/address-icon.svg") center center/20px
      no-repeat;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    left: 0;
  }
  &::after {
    content: url("../static/angle.svg");
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 5px;
  }
  &-wrapper {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: $black;
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  &-address {
    font-feature-settings: "pnum" on, "lnum" on;
  }
}
</style>

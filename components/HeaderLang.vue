<template>
  <div>
    <div class="header_lang d-lg-none">
      <button class="header_lang-item is-active">Русский</button>
      <button class="header_lang-item">Қазақша</button>
      <button class="header_lang-item">English</button>
    </div>
    <div class="lang_select" :data-value="value" :data-list="list">
      <div class="selector" @click="toggle()">
        <div class="label">
          <span>{{ value }}</span>
        </div>
        <div class="arrow" :class="{ expanded: visible }"></div>
        <div :class="{ hidden: !visible, visible }">
          <ul class="lang_dropdown">
            <li
              :class="{ current: item === value }"
              v-for="item in list"
              v-bind:key="item"
              @click="select(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderLang",
  data() {
    return {
      value: "Русский",
      list: ["Русский", "Қазақша", "English"],
      visible: false,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
@import "../assets/media.scss";
.lang_select {
  width: 100px;
  .selector {
    background: #fff;
    position: relative;
    z-index: 1;
    .arrow {
      position: absolute;
      right: 10px;
      top: 40%;
      width: 12px;
      height: 6px;
      background: url("../static/angle.svg") center/cover no-repeat;
      transform: rotateZ(0deg) translateY(0px);
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
    }

    .expanded {
      transform: rotateZ(180deg) translateY(2px);
    }
    .label {
      display: block;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      font-feature-settings: "pnum" on, "lnum" on;
      color: $black;
    }
  }
  .lang_dropdown {
    width: 163px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 45px;
     &::before {
      position:absolute;
      top: -13px;
      right: 15px;
      content: "";
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 16px solid #fff;
      z-index: 2;
    }
    &::after {
      /* This is the shadow triangle */
      position:absolute;
      top:-16px; right: 13px;
      content: '';
      width: 0;
      height: 0;
      border-left: 17px solid transparent;
      border-right: 17px solid transparent;
      border-bottom: 17px solid rgba(0,0,0, 0.03);
      z-index:1;
      }
  }
  li {
    padding: 10px 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: $black;
    border-bottom: 1px solid $light_grey;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      color: $orange;
    }
  }
  .current {
    background: url("../static/check.svg") right 15px center/16px 11px no-repeat;
  }
  .hidden {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
    
  }
}
.header_lang {
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @include media(">desktop") {
    &::after {
      content: url("../static/angle.svg");
      display: inline-block;
      position: absolute;
      right: 10px;
    }
    flex-direction: column;
  }
  &-item {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: $black;
  }
}
</style>

<template>
  <div>
    <div class="header_lang d-lg-none">
      <button class="header_lang-item is-active">Русский</button>
      <button class="header_lang-item">Қазақша</button>
      <button class="header_lang-item">English</button>
    </div>
      <div class="dropdown_custom" data-open="false">
      <button
        class="dropdown_custom-button user_panel-user-button"
        aria-haspopup="true"
        aria-expanded="false"
      >Русский
      <i class="dropdown-button-arrow fas fa-angle-down"></i></button>

      <ul
        class="dropdown_custom-menu slide"
        aria-role="menu"
        aria-hidden="true"
      >
        <li
          class="dropdown_custom-menu-item"
          tabindex="-1"
          aria-role="menuitem"
        >
          <i class="dropdown_custom-item-icon fas history-ic"></i>
          <span>История заказов</span>
        </li>
        <li
          class="dropdown_custom-menu-item"
          tabindex="-1"
          aria-role="menuitem"
        >
          <i class="dropdown_custom-item-icon address-ic"></i>
          <span>Қазақша</span>
        </li>

        <li
          class="dropdown_custom-menu-item"
          tabindex="-1"
          aria-role="menuitem"
        >
          <i class="dropdown_custom-item-icon credit_card-ic"></i>
          <span>English</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {Select, Option} from 'element-ui';
export default {
    name: "HeaderLang",
     mounted() {
    class Dropdown {
      constructor(container) {
        this.isOpen = false;
        this.activeIndex = undefined;

        this.container = container;
        this.button = container.querySelector(".dropdown_custom-button");
        this.menu = container.querySelector(".dropdown_custom-menu");
        this.items = container.querySelectorAll(".dropdown_custom-menu-item");
      }

      initEvents() {
        this.button.addEventListener("click", this.toggle.bind(this));
        document.addEventListener("click", this.onClickOutside.bind(this));
        document.addEventListener("keydown", this.onKeyEvent.bind(this));
      }

      toggle() {
        this.isOpen = !this.isOpen;
        this.button.setAttribute("aria-expanded", this.isOpen);
        this.menu.setAttribute("aria-hidden", !this.isOpen);
        this.container.dataset.open = this.isOpen;
      }

      onClickOutside(e) {
        if (!this.isOpen) return;

        let targetElement = e.target;

        do {
          if (targetElement == this.container) return;

          targetElement = targetElement.parentNode;
        } while (targetElement);

        this.toggle();
      }

      onKeyEvent(e) {
        if (!this.isOpen) return;

        if (e.key === "Tab") {
          this.toggle();
        }

        if (e.key === "Escape") {
          this.toggle();
          this.button.focus();
        }

        if (e.key === "ArrowDown") {
          this.activeIndex =
            this.activeIndex < this.items.length - 1 ? this.activeIndex + 1 : 0;
          this.items[this.activeIndex].focus();
        }

        if (e.key === "ArrowUp") {
          this.activeIndex =
            this.activeIndex > 0 ? this.activeIndex - 1 : this.items.length - 1;
          this.items[this.activeIndex].focus();
        }
      }
    }

    const dropdown_customs = document.querySelectorAll(".dropdown_custom");
    dropdown_customs.forEach((dropdown_custom) =>
      new Dropdown(dropdown_custom).initEvents()
    );
  },
}
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
@import "../assets/media.scss";
::v-deep .el-input__inner {
    border: none;
    background: none;
}
::v-deep .el-select-dropdown__list {
    list-style: none;
}
::v-deep .el-select {
    display: inline-block;
    position: relative;
    max-width: 110px;
}
::v-deep .el-select>.el-input {
    display: block;
}
::v-deep .el-input {
    position: relative;
    width: 100%;
}
::v-deep .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #2B2A29;

}
::v-deep .el-input__suffix {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    pointer-events: none;
}
::v-deep .el-input__suffix-inner {
    pointer-events: all;
}
::v-deep .el-select-dropdown {
    position: absolute;
    z-index: 1001;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    box-sizing: border-box;
    margin: 5px 0;
}

::v-deep .el-select .el-input .el-select__caret {
    color: #c0c4cc;
    font-size: 14px;
    transition: transform .3s;
    transform: rotate(180deg);
    cursor: pointer;
}
::v-deep .el-select .el-input .el-select__caret.is-reverse {
    transform: rotate(0deg);
}
::v-deep .el-input__icon {
    width: 25px;
    line-height: 40px;
    height: 100%;
    text-align: center;
}
::v-deep .el-icon-arrow-up:before {
    content: url('../static/angle.svg');
}
::v-deep .el-input__icon:after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
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
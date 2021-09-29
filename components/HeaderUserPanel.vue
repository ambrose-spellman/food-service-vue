<template>
  <div class="user_panel">
    <div class="dropdown_custom" data-open="false">
      <button
        class="dropdown_custom-button user_panel-user-button"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>

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
          <i class="dropdown_custom-item-icon user-ic"></i>
          <div class="d-flex flex-column">
            <span class="dropdown_custom-sm-text">Мои данные</span>
            <span class="dropdown_custom-bold-text">Sapar Ospanov</span>
          </div>
        
        </li>
       <li
          class="dropdown_custom-menu-item"
          tabindex="-1"
          aria-role="menuitem"
        >
          <i class="dropdown_custom-item-icon bonus-ic"></i>
          <div class="d-flex flex-column">

          <span class="dropdown_custom-sm-text">Бонусы</span>
          <span class="dropdown_custom-bold-text">470 бонусов</span>
          </div>
        </li>
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
          <span>Адреса доставки</span>
        </li>

        <li
          class="dropdown_custom-menu-item"
          tabindex="-1"
          aria-role="menuitem"
        >
          <i class="dropdown_custom-item-icon credit_card-ic"></i>
          <span>Мои карты</span>
        </li>
      </ul>
    </div>
    <button class="user_panel-basket">
      <span class="user_panel-basket-counter">2</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "HeaderUserPanel",
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
};
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
@import "../assets/media.scss";
.user_panel {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 50px 0 auto;
  @include media(">desktop") {
    margin: 0;
  }
  &-login,
  &-basket,
  &-user-button {
    border: none;
    outline: none;
    vertical-align: middle;
    display: inline-block;
  }
  &-basket {
    background: $light_grey url("../static/basket.svg") center center/20px
      no-repeat;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 26px;
    position: relative;
  }
  &-basket-counter {
    display: inline-block;
    color: #fff;
    background: $orange;
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    position: absolute;
    top: -9px;
    right: -10px;
  }
  &-login {
    color: $orange;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    background: none;
    margin-right: 20px;
  }
  &-user-button {
    background: $light_grey url("../static/user-icon.svg") center center/20px
      no-repeat;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 20px;
  }
}

</style>
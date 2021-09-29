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
  }
}
// Dropdown_custom
.dropdown_custom {
  position: relative;
  margin-right: 30px;
}

.dropdown_custom-label {
  display: inline-block;
  margin-bottom: 0.5em;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
}

.dropdown_custom-button {
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: $black;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0px 0px 0px 3px hsl(var(--clr-primary) / 40%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover,
  &:focus,
  .dropdown_custom:focus-within > & {
    &::after {
      opacity: 1;
    }
  }
}

.dropdown_custom-button-arrow {
  margin-left: auto;
  transition: transform 0.2s;

  .dropdown_custom[data-open="true"] & {
    transform: rotate(180deg);
  }
}

.dropdown_custom-menu {
  position: absolute;
  right: -22px;
  top: 49px;
  z-index: 1000;
  width: 313px;
  margin: 0.5em;
  padding: 0.35em 0;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;

  .dropdown_custom[data-open="true"] & {
    visibility: visible;
    opacity: 1;
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
}
.dropdown_custom-sm-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
.dropdown_custom-bold-text {
  font-weight: bold;
}
.dropdown_custom-menu-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  border-bottom: 1px solid #f6f6f6;
  position: relative;
  &:last-child {
    border-bottom: none;
  }
  &:focus {
    background-color: hsl(var(--clr-primary) / 10%);
  }
  &::after {
    content: url("../static/angle-right.svg");
    display: inline-block;
    width: 6px;
    height: 12px;
    opacity: 0.5;
    position: absolute;
    right: 24px;
  }
}
.dropdown-button-arrow {
  margin-left: 13px;
  transition: transform 0.2s;
  background: url("../static/angle.svg") center/contain no-repeat;
  width: 12px;
  height: 6px;
  transform: rotate(0);

  .dropdown[data-open="true"] & {
    transform: rotate(180deg);
  }
}
.dropdown_custom-item-icon {
  height: 24px;
  width: 24px;
  margin: 0 15px;
}
.user-ic {
  background: url("../static/fi_user.svg") center/cover no-repeat;
}
.bonus-ic {
  background: url("../static/coin.svg");
}
.history-ic {
  background: url("../static/u_history.svg");
}
.address-ic {
  background: url("../static/fi_map-pin.svg");
}
.credit_card-ic {
  background: url("../static/fi_credit-card.svg");
}
// Slide animation
.dropdown_custom-menu.slide {
  transform: translateY(1rem);

  .dropdown_custom[data-open="true"] & {
    transform: translateY(0);
  }
}
</style>

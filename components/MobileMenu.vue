<template>
     <div class="hamburger" @click="toggle()" id="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
</template>
<script>
export default {
    name: "MobileMenu",
    methods: {
        toggle() {
            const nav = document.getElementById("mobile_menu");
            const hamburger = document.getElementById("hamburger");
            hamburger.onclick = function () { 
                nav.classList.toggle('responsive');
                this.classList.toggle('is-active');
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
.hamburger {
  display: none;
}

@media screen and (max-width: 992px) {
  .hamburger {
    position: absolute;
    right: 19px;
    top: 25px;
    display: block;
    cursor: pointer;
    width: 24px;
    height: 28px;
    .line {
      width: 24px;
      height: 3px;
      background-color: $black;
      display: block;
      margin: 6px 0;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
  }
  .hamburger.is-active {
    .line:nth-child(2) {
      opacity: 0;
      -webkit-transform: translateX(5px);
      -ms-transform: translateX(5px);
      -o-transform: translateX(5px);
      transform: translateX(5px);
    }
    .line:nth-child(1) {
      -webkit-transform: translateX(4px) translateY(10px) rotate(45deg);
      -ms-transform: translateX(4px) translateY(10px) rotate(45deg);
      -o-transform: translateX(4px) translateY(10px) rotate(45deg);
      transform: translateX(4px) translateY(10px) rotate(45deg);
    }
    .line:nth-child(3) {
      -webkit-transform: translateX(4px) translateY(-9px) rotate(-45deg);
      -ms-transform: translateX(4px) translateY(-9px) rotate(-45deg);
      -o-transform: translateX(4px) translateY(-9px) rotate(-45deg);
      transform: translateX(4px) translateY(-9px) rotate(-45deg);
    }
  }
}
</style>
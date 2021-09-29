<template>
    <div class="delivery">
        <button class="delivery-button is-active">Доставка</button>
        <button class="delivery-button">Самовывоз</button>
    </div>
</template>
<script>
export default {
    name: "PickupDelivery",
    methods: {
    },
    data() {
        return {
           
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
@import '../assets/media.scss';

.delivery {
    background: #f6f6f6;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: fit-content;
    border: 3px solid $light_grey;
    margin-bottom: 22px;
    @include media(">desktop") {
      margin: 0 40px 0 0;
    }
    &-button {
      background: #f6f6f6;
      border-radius: 20px;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      align-items: center;
      text-align: center;
      color: #2b2a29;
      padding: 10px 25px;
    }
    .is-active {
      background: #fde4dd;
      color: $orange;
    }
  }
</style>
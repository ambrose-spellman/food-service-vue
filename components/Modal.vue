<template>
     <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                   header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                   body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                 
                </slot>
              </div>
               <button class="modal-default-button" @click="$emit('close')"></button>
            </div>
          </div>
        </div>
      </transition>
</template>
<script>
export default {
    name: "Modal",
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
    width: 50%;
    margin: 0px auto;
    padding: 25px;
    background: #FFFFFF;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  background: #fff url('../static/close-ic.svg') center center/25px no-repeat;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: absolute;
  top: -50px;
  right: -50px;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
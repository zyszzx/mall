<template>
  <label for="tick" class="tick-icon" :class="{checked: isChecked}" >
    <input type="checkbox" id="tick"><span class="tick-icon-img"></span>
  </label>
</template>

<script>
  export default {
    name: 'TickBtn',
    // data() {
    //   return {
    //     //主动修改时起作用
    //     isChecked: false,
    //   }
    // },
    props: {
      isChecked:{
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }

</script>

<style scoped>
  .tick-icon input {
    opacity: 0;
  }

  .tick-icon {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 1px solid #aaaaaa;
  }

  .checked {
    background-color: var(--color-tint);
    border: 1px solid var(--color-tint);
    background-image: url('../../../assets/img/cart/tick.svg');
  }

</style>

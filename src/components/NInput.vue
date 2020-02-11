<template>
  <div class="n-input" :class="{filled: value, focus: inputFocused, disable: disable, novalid: novalid}" @click="inputFocus">
    <div class="n-input__label" :class="{focused: inputFocused || value, required: ('required' in $attrs)}">{{ label }}</div>
    <input class="n-input__input" type="text" name="" value="" @focus="bonk" @blur="knob" v-model="value">
  </div>
</template>

<script>
  export default {
    props: ['label', 'disable', 'novalid'],
    data() {
      return {
        inputFocused: false,
        value: ''
      }
    },
    methods: {
      bonk() {
        this.inputFocused = true;
        console.log('focus');
      },
      knob() {
        this.inputFocused = false;
        console.log('unfocus');
      },
      inputFocus() {
        console.log(this);
        // console.log()
        this.$el.getElementsByClassName('n-input__input')[0].focus();
      }
    }
  }
</script>

<style lang="scss" scoped>
  $text-main: #000000;
  $text-secondary: #757575;
  $unfocus: #73A3D2;
  $primary: #1765B2;
  $disable: #9E9E9E;
  $error: #DB4437;

  .n-input {
    height: 35px;
    // background: rgba(0,0,0,0.1);
    position: relative;
    border-bottom: 1px solid $unfocus;
    color: $unfocus;
    font-family: 'Noto Sans', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: color 0.15s;
    &:hover { cursor: text; }

    .n-input__label {
      position: absolute;
      width: 100%;
      height: 22px;
      bottom: 0;
      left: 0;
      font-size: 16px;
      line-height: 22px;
      text-align: left;
      transition: font-size 0.15s, height 0.15s, bottom 0.15s, left 0.15s;

      &.focused {
        font-size: 12px;
        height: 14px;
        bottom: 22px;
        line-height: 14px;
      }
      &.required {
        &.focused {
          // left: -5px;
        }
        &::after {
          content: '*'
        }
      }
    }

    input[type="text"] {
      position: absolute;
      background-color: transparent;
      font-size: 16px;
      font-family: 'Noto Sans', sans-serif;
      // background-color: rgba(0,100,100,0.3);
      border: none;
      padding: 0;
      width: calc(100% - 8px);
      height: 22px;
      bottom: 0;
      left: 0;
      padding: 0 4px;
      // height: 100%;
      &:focus {
        outline: none;
      }
    }
  }

  .n-input.filled {
    color: $text-secondary;
    border-color: $text-secondary;
  }
  .n-input.focus {
    color: $primary;
    border-color: $primary;
  }
  .n-input.disable {
    color: $disable;
    border-color: $disable;
    pointer-events: none;
  }
  .n-input.novalid {
    border-color: $error;
    .n-input__label {
      color: $error;
    }
  }

</style>

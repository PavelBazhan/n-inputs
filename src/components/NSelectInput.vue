<template>
  <div class="n-select-input" :class="{filled: value, focus: inputFocused, disable: disable, novalid: novalid}" @click="inputFocus">
    <div class="n-input__label" :class="{focused: inputFocused || value, required: ('required' in $attrs)}">{{ label }}</div>
    <input
      class="n-input__input"
      type="text"
      name=""
      :value="value"
      @input="input"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div class="input-icon_wrapper">
      <div class="input-icon inp_arrow"></div>
    </div>
    <div class="n-select-list_wrapper" :class="{ showed: inputFocused }">
      <n-select-list :items="items" @select="selectItem($event)"></n-select-list>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value', 'items', 'label', 'disable', 'novalid'],
    model: {
      prop: 'value',
      event: 'input'
    },
    data() {
      return {
        inputFocused: false
      }
    },
    methods: {
      bonk() {
        this.inputFocused = true;
        console.log('focus');
      },
      onFocus() {
        this.inputFocused = true;
        console.log('open list');
      },
      onBlur() {
        this.inputFocused = false;
        console.log('close list');
      },
      knob() {
        this.inputFocused = false;
        console.log('unfocus');
      },
      inputFocus() {
        this.$el.getElementsByClassName('n-input__input')[0].focus();
      },
      input(ev) {
        console.log("ev: ", ev.target.value);
        this.$emit('input', ev.target.value);
      },
      selectItem(e) {
        console.log(e);
        this.$emit('input', e.item);
        // this.inputFocused = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $text-main: #000000;
  $text-secondary: #757575;
  $unfocus: #73A3D2;
  $primary: #1765B2;
  $secondary: #E0EDF8;
  $disable: #9E9E9E;
  $error: #DB4437;

  .n-select-input {
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

    .input-icon_wrapper {
      font-size: 10px;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 22px;
      // background: rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
    }

    .n-select-list_wrapper {
      // background: rgba(0,0,0,0.1);
      position: absolute;
      top: 100%;
      width: 100%;
      display: none;
      &.showed {
        display: block;
      }
    }
  }

  .n-select-input.filled {
    color: $text-secondary;
    border-color: $text-secondary;
  }
  .n-select-input.focus {
    color: $primary;
    border-color: $primary;
  }
  .n-select-input.disable {
    color: $disable;
    border-color: $disable;
    pointer-events: none;
    & input {
      color: $disable;
    }
  }
  .n-select-input.novalid {
    border-color: $error;
    .n-input__label {
      color: $error;
    }
  }

</style>

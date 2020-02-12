<template>
  <div class="n-select-list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="n-select-list_item"
      @click="selectItem(item, index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items'],
    methods: {
      selectItem(item, index) {
        console.log(item, index);
        this.$emit('select', {item, index});
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

  .n-select-list {
    border: 1px solid $unfocus;
    border-top: 1px solid $primary;
    font-size: 12px;
    // padding-right: 10px;

    .n-select-list_item {
      height: 24px;
      line-height: 24px;
      padding-left: 12px;
      &:hover {
        cursor: pointer;
        background-color: $secondary;
      }
    }
  }
</style>

<template>
  <div class="inputs">
    <div class="inputs_wrapper">
      <div class="inputs_block">
        <n-input
          label="Code"
        />
        <n-input
          label="Код"
          required
        />
        <n-input
          label="Код"
          :disable="true"
        />
        <n-input
          label="Код"
          :novalid="true"
        />
      </div>
      <div class="inputs_block">

      </div>
    </div>
  </div>
</template>

<script>
  import NInput from "@/components/NInput.vue"

  export default {
    components: {
      NInput
    }
  }
</script>

<style lang="scss" scoped>
  .inputs {
    margin: 30px 0;
    display: flex;
    width: 100vw;
    justify-content: center;
    .inputs_wrapper {
      width: 60vw;
      display: flex;
      justify-content: space-around;
      .inputs_block {
        background: rgba(0,0,0,0.01);
        padding: 0 24px;
        width: 20%;
        & > div {
          margin: 12px 0;
        }
      }
    }
  }
</style>

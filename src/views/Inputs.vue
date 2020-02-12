<template>
  <div class="inputs">
    <div class="inputs_wrapper">
      <div class="inputs_header">
        <h2>n-input</h2>
      </div>
      <div class="inputs_inner">
        <div class="inputs_block">
          <n-input
            label="Code"
            v-model="inputDefault"
          />
          <n-input
            label="Код"
            required
            v-model="inputRequired"
          />
          <n-input
            label="Код"
            :disable="true"
            v-model="inputDisabled"
          />
          <n-input
            label="Код"
            :novalid="true"
            v-model="inputNoValid"
          />
        </div>
        <div class="inputs_block">
          <div class="inputs_model">
            <span>regular: {{ inputDefault || 'null' }}</span>
          </div>
          <div class="inputs_model">
            <span>required: {{ inputRequired || 'null' }}</span>
          </div>
          <div class="inputs_model">
            <span>disabled: {{ inputDisabled || 'null' }}</span>
          </div>
          <div class="inputs_model">
            <span>no valid: {{ inputNoValid || 'null' }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="inputs_wrapper">
      <div class="inputs_header">
        <h2>n-select-input</h2>
        <div class="input-icon icon_px10-arrow"></div>
      </div>
      <div class="inputs_inner">
        <div class="inputs_block">
          <n-select-input
            label="Code"
            v-model="inputSelect"
            :items="fruits"
          />
        </div>
        <div class="inputs_block">
          <div class="inputs_model">
            <span>select: {{ inputSelect || 'null' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NInput from "@/components/NInput.vue"
  import NSelectInput from "@/components/NSelectInput.vue"

  export default {
    components: {
      NInput,
      NSelectInput
    },
    data() {
      return {
        inputDefault: 'initial',
        inputRequired: 'initial',
        inputDisabled: 'initial',
        inputNoValid: 'initial',
        inputSelect: 'apple'
      }
    },
    computed: {
      fruits() {
        return [
          'apple',
          'lemon',
          'banana',
          'cherry',
          'lime'
        ]
      }
    },
    methods: {
      bonk(e) {
        console.log('e: ', e);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .inputs {
    margin: 30px 0;
    display: flex;
    flex-flow: column wrap;
    width: 100vw;
    justify-content: center;
    align-items: center;
    .inputs_wrapper {
      display: flex;
      flex-flow: column nowrap;
      .inputs_header {
        padding: 0 24px;
        h2 {
          text-align: left;
          font-size: 24px;
        }
      }
      .inputs_inner {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        .inputs_block {
          background: rgba(0,0,0,0.01);
          margin: 0 24px;
          padding: 0 24px;
          width: 250px;
          & > div {
            margin: 12px 0;
            &:last-child {
              margin-bottom: 24px;
            }
          }
          .inputs_model {
            height: 36px;
            position: relative;
            span {
              display: block;
              height: 22px;
              // line-height: 22px;
              position: absolute;
              bottom: 1px;
              left: 0;
            }
          }
        }
      }

    }
  }
</style>

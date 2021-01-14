<template>
  <div class="ak-dialog-wrapper">
    <div class="ak-dialog" :style="{ width: width, marginTop: top }">
      <div class="ak-dialog-header">
        <span class="ak-dialog-title">
          <slot name="title">
            {{ title }}
          </slot>
        </span>
        <button class="ak-dialog-headerbtn">
          <i class="ak-editor"></i>
        </button>
      </div>
      <div class="ak-dialog-body">
        <slot></slot>
      </div>
      <div class="ak-dialog-footer">
        <!-- 如果footer不传递内容，则不显示footer -->
        <slot name="footer" v-if="$slots.footer"></slot>
        <template v-else>
          <ak-button>取消</ak-button>
          <ak-button type="primary">确定</ak-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'akDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: Number
    },
    top: {
      type: Number
    }
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.ak-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .ak-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &-header {
      padding: 20px 20px 10px;
      .ak-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ak-dialog-headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .ak-close {
          color: 909399;
        }
      }
    }
    &-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .ak-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>

<template>
  <div class="index">
    <h2>index</h2>
    <ak-button>默认按钮</ak-button>
    <ak-button type="primary">primary组件</ak-button>
    <ak-button type="success">success组件</ak-button>
    <ak-button type="info">primary组件</ak-button>
    <ak-button type="danger">success组件</ak-button>
    <ak-button type="warning">primary组件</ak-button>

    <div>
      <ak-button plain>默认按钮</ak-button>
      <ak-button type="primary" plain>primary组件</ak-button>
      <ak-button type="success" plain>success组件</ak-button>
      <ak-button type="info" plain>primary组件</ak-button>
      <ak-button type="danger" plain>success组件</ak-button>
      <ak-button type="warning" plain>primary组件</ak-button>
    </div>
    <div>
      <ak-button round>默认按钮</ak-button>
      <ak-button type="primary" round>primary组件</ak-button>
      <ak-button type="success" round>success组件</ak-button>
      <ak-button type="info" round icon="copy">primary组件</ak-button>
      <ak-button type="danger" round icon="dollar" disabled
        >success组件</ak-button
      >
      <ak-button type="warning" circle icon="editor" disabled></ak-button>
      <ak-button @click="onClick" disabled>点击事件</ak-button>
      <ak-button disabled>点击事件</ak-button>
      <ak-dialog title="温馨提示" width="80%" top="200px">
        <template v-slot:title>
          <div style="color: red">我是标题</div>
        </template>
        <span>这是匿名插槽</span>
        <template v-slot:footer>
          <div style="color: red">尾部</div>
        </template>
      </ak-dialog>
    </div>
  </div>
</template>
<script>
import akDialog from '../ui/Dialog.vue'
export default {
  components: { akDialog },
  methods: {
    onClick() {
      console.log(
        '父组件在使用时定义自己的点击事件，其本质是子组件中的点击事件触发父组件中的点击事件。'
      )
    }
  }
}
</script>
<style lang="scss" scoped></style>

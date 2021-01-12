<template>
  <div class="index">
    <h2>index</h2>
    <button disabled>Click Me!</button>
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
    </div>
  </div>
</template>
<script>
export default {
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

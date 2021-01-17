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
      <ak-button @click="onClick">点击事件</ak-button>
      <ak-button disabled>点击事件</ak-button>

      <!-- ak-dialog -->
      <ak-dialog
        title="温馨提示"
        width="40%"
        top="200px"
        :visible.sync="visible"
      >
        <template v-slot:title>
          <div style="color: red">我是标题</div>
        </template>
        <span>这是默认插槽</span>
        <template v-slot:footer>
          <ak-button type="info" @click="visible = false">取消</ak-button>
          <ak-button type="primary" @click="visible = false">确定</ak-button>
        </template>
      </ak-dialog>

      <!-- ak-input -->
      <div style="width: 50%">
        <ak-input
          placeholder="请输入密码"
          type="password"
          name="name"
          showPassword
          v-model="usernam"
        ></ak-input>
        <ak-input
          placeholder="请输入密码"
          type="text"
          name="name"
          clearable
          v-model="usernam"
        ></ak-input>
      </div>
    </div>
    <ak-switch v-model="switchBoolean" />
    <ak-radio-group v-model="gender1">
      <ak-radio name="aking" label="1"></ak-radio>
      <ak-radio name="aking" label="0"></ak-radio>
    </ak-radio-group>
    <ak-radio name="aking" label="1" v-model="gender"></ak-radio>
    <ak-radio name="aking" label="0" v-model="gender"></ak-radio>
  </div>
</template>
<script>
import akDialog from '../ui/Dialog.vue'
import akInput from '../ui/Input.vue'
import akSwitch from '../ui/Switch.vue'
import akRadio from '../ui/Radio.vue'
import akRadioGroup from '../ui/RadioGroup.vue'
export default {
  components: { akInput, akDialog, akSwitch, akRadio, akRadioGroup },
  data() {
    return {
      gender: '0',
      gender1: '1',
      visible: true,
      usernam: 'aking',
      switchBoolean: true,
      radioValue: '2'
    }
  },
  methods: {
    onClick() {
      console.log(
        '父组件在使用时定义自己的点击事件，其本质是子组件中的点击事件触发父组件中的点击事件。'
      )
      console.log(this.usernam)
      console.log(this.switchBoolean)
    }
  }
}
</script>
<style lang="scss" scoped></style>

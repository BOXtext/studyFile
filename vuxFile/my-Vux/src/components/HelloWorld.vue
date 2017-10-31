<template>
 <div>

  
    <x-header>
      <span>overwrite-left</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <br>
    <x-header style="background-color:#000;">custom background color</x-header>
    <br>
    <x-header title="slot:overwrite-title">
      <div class="overwrite-title-demo" slot="overwrite-title">
        <button-tab>
          <button-tab-item selected>A</button-tab-item>
          <button-tab-item>B</button-tab-item>
        </button-tab>
      </div>
    </x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
import { Divider } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: true
    }
  }
}
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
</style>
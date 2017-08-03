<template>
  <div>
    <div v-bind:class = "[aStyle, bStyle]">
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Style',
    data() {
      return {
        aStyle: 'aStyle',
        bStyle: 'bStyle'
      }
    }
  }
</script>

<style >
  .aStyle {
    width: 100px;
    height: 100px;
  }
  .bStyle{
    border: 1px solid red;
  }
</style>
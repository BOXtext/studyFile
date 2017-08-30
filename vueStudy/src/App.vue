<template>
  <div id="app">
    <router-view></router-view>
    <div id="top">
      <i class="iconfont icon-dingbu"></i>
    </div>
  </div>
</template>

<script>
import './assets/iconfont.css'
import $ from 'jquery'
$(function () {
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            // console.log(scrollValue);
            if(scrollValue >= 50) {
              $('#top').fadeIn()
            } else {
              $('#top').fadeOut();
            }
        });
        $('#scroll').click(function () {
            $("html,body").animate({ scrollTop: 0 }, 200);
        });
    }
});
export default {
  name: 'app'

}
</script>

<style>
#app {
  height: 1000px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#top {
  display: none;
  border: 1px solid red;
  position: absolute;
  right: 50px;
  bottom: 50px;
}
</style>

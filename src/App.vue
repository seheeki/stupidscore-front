<template>
  <div class="app-container nanumbarungothic">
    <Header />
    <router-view />
    <Footer />
  </div>
  
</template>

<script>
import Header from './views/layout/HeaderView.vue';
import Footer from './views/layout/FooterView.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-container {
  min-height: 100vh; /* 최소 화면 높이만큼 컨테이너가 차도록 설정 */
  background-color: #35822e;
}
</style>
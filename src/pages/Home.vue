<template>
  <div class='home'>
    <img src='../assets/logo.png'>
    <Paragraph msg='Welcome to Your Vue.js App'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Paragraph from '@/components/atoms/Paragraph/index.vue';

export default {
  name: 'Home',
  components: {
    Paragraph,
  },
};
</script>

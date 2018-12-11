<template>
  <div id="System">
    <SideBar />
    <Container />
    <Header />
  </div>
</template>

<script>
import Header from './system/Header.vue';
import Container from './system/Container.vue';
import SideBar from './system/SideBar.vue';

export default {
  components: {
    Header,
    Container,
    SideBar,
  },
};
</script>

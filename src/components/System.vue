<template>
  <div id="v-system">
    <v-sidebar></v-sidebar>
    <v-header></v-header>
    <v-container></v-container>
  </div>
</template>

<script>
import Header from './system/Header.vue';
import Container from './system/Container.vue';
import SideBar from './system/SideBar.vue';
import {mapGetters} from 'vuex';

export default {
  components: {
    'v-header': Header,
    'v-container': Container,
    'v-sidebar': SideBar,
  },
}
</script>
<template>
  <div v-if="isLoggedIn">
    <router-view></router-view>
  </div>
  <div v-else>
    <v-login></v-login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components: {
    'v-login': Login,
  },
  computed: mapGetters(['isLoggedIn']),
  watch: {
    isLoggedIn: {
      immediate: true,
      async handler(newVal) {
        // Get Current User if is already logged in
        if(newVal) {
          try {
            await this.$store.dispatch("getCurrentUser");
          } catch (error) {
            this.$store.dispatch("logout");
          }
        }
      }
    }
  },
}
</script>
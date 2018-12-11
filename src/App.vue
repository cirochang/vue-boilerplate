<template>
  <div v-if="isLoggedIn">
    <RouterView />
  </div>
  <div v-else>
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Login,
  },
  computed: mapGetters(['isLoggedIn']),
  watch: {
    isLoggedIn: {
      immediate: true,
      async handler(newVal) {
        // Get Current User if is already logged in
        if (newVal) {
          try {
            await this.$store.dispatch('getCurrentUser');
          } catch (error) {
            this.$store.dispatch('logout');
          }
        }
      },
    },
  },
};
</script>

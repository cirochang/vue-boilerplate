<template>
  <div id='v-home'>
    Hi, I am the home container
    <v-card></v-card>
  </div>
</template>

<script>
import Card from '@/components/modules/Card.vue';

export default {
  components: {
    'v-card': Card,
  },
}
</script>
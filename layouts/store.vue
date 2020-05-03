<template>
  <v-app dark>
    <main-nav />

    <v-content>
      <v-container col="12">
        <v-row>
          <v-col md="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import mainNav from '@/components/nav/nav.vue'
@Component({
  components: { mainNav }
})
export default class storeLayout extends Vue {}
</script>

<style></style>

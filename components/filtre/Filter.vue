<template>
  <v-card outlined>
    <v-card-title>
      <div class="text-center">
        <span class="title">Filtre</span>
      </div>
    </v-card-title>
    <v-card-text>
      Rechercher par nom :
      <v-text-field
        class="minimize-height"
        hide-details
        light
        solo
        append-icon="mdi-magnify"
        height="20px"
        label="Filtrer par nom"
        placeholder="Filtrer par nom"
      ></v-text-field>
      <br />
      <hr />
      <br />
      <Slider label="Prix" />
      <Badge label="Size" :items="['XL', 'L']" />
      <v-btn round depressed block color="secondery" @click="colchange">Filtrer</v-btn>
    </v-card-text>
    <v-card-actions></v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Slider from './Slider.vue'
import Badge from './Badge.vue'
@Component({
  components: { Slider, Badge }
})
export default class MyFilter extends Vue {}
</script>

<style></style>

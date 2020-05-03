<template>
  <v-card>
    <v-card-title>Grace à vous</v-card-title>
    <v-card-subtitle>Votre participation à l'economie de : {{ where }}</v-card-subtitle>
    <v-card-text>
      <center>
        <v-avatar color="success" size="100">
          <span class="black--text headline">3</span>
        </v-avatar>
        <v-avatar color="success" size="100">
          <span class="black--text headline">10000€</span>
        </v-avatar>
        <v-avatar color="success" size="100">
          <span class="black--text headline">3</span>
        </v-avatar>
      </center>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class RewardCard extends Vue {
  @Prop({ type: String })
  public where?: string
}
</script>

<style scoped></style>

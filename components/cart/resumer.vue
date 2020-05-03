<template>
  <v-card :outlined="!outlined" fixed class="sticky">
    <v-card-title class="black">Resumer de vos achats</v-card-title>
    <v-card-text>
      <v-row>
        <v-col md="8">Prix des produits :</v-col>
        <v-spacer />
        <v-col md="4" class="text-right">{{ priceProduct }}€</v-col>
      </v-row>
      <v-row>
        <v-col md="8">Prix du transport :</v-col>
        <v-spacer />
        <v-col md="4" class="text-right">{{ priceShippement }}€</v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col md="8" class="title">Prix du total :</v-col>
        <v-spacer />
        <v-col md="4" class="text-right title">{{ priceShippement + priceProduct }}€</v-col>
      </v-row>
      <v-row>
        <v-btn class="primary" block>Acheter(10)</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Resumer extends Vue {
  @Prop({ type: Boolean, default: false })
  public outlined?: boolean

  public priceProduct = 10
  public priceShippement = 10
}
</script>

<style>
.sticky {
  position: sticky;
  top: 112px;
  position: -webkit-sticky;
}
</style>

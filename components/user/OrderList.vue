<template>
  <v-card tile :outlined="outlined">
    <v-list flat>
      <v-subheader>Vos commandes</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <v-list-item-subtitle
              v-if="item.status === 'order'"
            >Disponible le : {{ item.available }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="item.status === 'done'">Commande terminée</v-list-item-subtitle>
            <v-list-item-subtitle v-if="item.status === 'available'">Disponible au magazin</v-list-item-subtitle>
            <v-list-item-subtitle>Produit : {{ item.product }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-eye-outline</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class OrderList extends Vue {
  @Prop({ type: Boolean, default: false })
  public outlined?: boolean = false

  public item = 1
  public items = [
    {
      text: 'Shoes Express',
      icon: 'mdi-clock',
      product: 3,
      available: '10/01/2021 à 12h',
      status: 'order'
    },
    {
      text: 'Shoes Express',
      icon: 'mdi-clock',
      product: 3,
      available: '10/01/2020 à 12h',
      status: 'available'
    },
    {
      text: 'Shoes Express',
      icon: 'mdi-moon-new',
      product: 3,
      available: '10/01/2019 à 12h',
      status: 'done'
    }
  ]
}
</script>

<style scoped></style>

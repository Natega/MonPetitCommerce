<template>
  <v-list dense>
    <v-subheader>Catégorie</v-subheader>
    <v-list-item-group v-model="item" color="primary">
      <v-list-item v-for="(item, i) in categorie" :key="i" class="text-center">
        <v-list-item-avatar>
          <img :src="item.icon" class="category-img" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="body-1" v-text="item.title">2</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class CategoryList extends Vue {
  public categorie?: Object[] = [
    {
      icon: require('~/assets/img/shoes.png'),
      title: 'Chaussure'
    },
    {
      icon: require('~/assets/img/tshirt.png'),
      title: 'Vêtement'
    },
    {
      icon: require('~/assets/img/bread.png'),
      title: 'Boulangerie'
    },
    {
      icon: require('~/assets/img/meat.png'),
      title: 'Charcutier'
    }
  ]
}
</script>

<style scoped>
.category-img:hover {
  padding: 3px;
  filter: invert(0%);
  background-color: white;
  border: 4px solid white;
}

.category-img {
  border: 2px solid black;
  padding: 4px;

  filter: invert(100%);
}
</style>

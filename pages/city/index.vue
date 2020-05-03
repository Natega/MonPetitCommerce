<template>
  <div>
    <v-row>
      <v-col md="9">
        <Map />
        <v-row class="test">
          <v-col md="12" sm="12">
            <h1 id="logo">{{ title }}</h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="3">
        <v-list dense>
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
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in 10" md="9">
        <Shop />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Map from '@/components/Map.vue'
import Shop from '@/components/store/Thumnail.vue'
@Component({
  layout: 'store',
  components: { Map, Shop }
})
export default class AddUrl extends Vue {
  public title?: string = 'Moret sur loing'
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
.map {
  height: 50vh;
  z-index: 0;
}
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
.button-bottom {
  margin-bottom: 15px;
}
.ck.ck-content.ck-editor__.editable {
  min-height: 500px;
}
.test {
  background: #009688;
  margin: 0px;
}
</style>

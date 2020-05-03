<template>
  <div>
    <v-row>
      <v-col md="9">
        <Map />

        <v-row class="test">
          <v-col md="3" xs="12" sm="12" class="text-center">
            <v-avatar size="50" class="category">
              <img src="~/assets/img/shoes.png" alt="Chaussure" title="Chaussure" />
            </v-avatar>
            <v-avatar size="50" class="category">
              <img src="~/assets/img/tshirt.png" alt="Chaussure" title="Chaussure" />
            </v-avatar>
          </v-col>
          <v-col md="9" sm="12">
            <h1 id="logo">{{ title }}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3">
            <MyFilter />
          </v-col>
          <v-col md="9">
            <v-row dense>
              <v-col v-for="card in 9" :key="card" md="4">
                <Product />
              </v-col>
            </v-row>
            <div class="text-center">
              <v-pagination v-model="page" :length="3" disabled></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="3">
        <Who
          name="Sarah Dupont"
          picture="https://cdn.pixabay.com/photo/2017/06/06/09/22/waitress-2376728_960_720.jpg"
        />
        <BR />
        <Address
          :name="title"
          picture="https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
          :tel="tel"
          :address="address"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Map from '@/components/Map.vue'
import Who from '@/components/Who.vue'
import Address from '@/components/Address.vue'
import Product from '@/components/product/Product.vue'
import MyFilter from '@/components/filtre/Filter.vue'

@Component({
  layout: 'store',
  components: { Map, Product, Who, MyFilter, Address }
})
export default class AddUrl extends Vue {
  public id?: string
  public title?: string = 'Shoes Express'
  public page?: number = 1
  public address?: string = '12 rue des belles galantes, 77250 Moret-sur-loing'
  public tel?: string = '06.83.56.15.XX'

  beforeCreate() {
    this.id = this.$route.params.id
  }

  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
.map {
  height: 50vh;
  z-index: 0;
}
.category img:hover {
  padding: 8px;
  filter: invert(0%);
  background-color: white;
}
.category {
  border: 2px solid white;
  padding: 2px;
}
.category img {
  padding: 8px;
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

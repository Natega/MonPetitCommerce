<template>
  <v-card outlined>
    <v-img
      contain
      class="white--text"
      height="200px"
      src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png"
    >
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex>
            <v-chip class="body-2 green--text" color="white">nouveau</v-chip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <div>
        <span class="title blue--text">{{ name }}</span>
        <br />
        <v-rating v-model="rating" readonly small dense background-color="orange" color="orange"></v-rating>
        <span class="title">${{ displayPrice }}</span>
        <del small class="body-2">${{ price }}</del>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn large round depressed block color="primary" @click="colchange">AJOUTER AU PANIER</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class myProductList extends Vue {
  public name = 'Black Shoes for Men'

  public rating = '3.5'
  public displayPrice = 63
  public price = 57.0
  public reduc = 0.5
}
</script>

<style></style>

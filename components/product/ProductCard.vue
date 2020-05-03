<template>
  <v-card outlined>
    <v-row>
      <v-col cols="1" class="text-center">
        <v-checkbox v-model="selected"></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-img
          :aspect-ratio="16 / 9"
          src="https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-chip font="black" class="body-2" color="info">name</v-chip>
            </v-layout>
          </v-container>
        </v-img>
      </v-col>
      <v-col cols="5">
        <h3>Chaussure de sport</h3>Couleur : noir
        <br />
        <span class="title">{{ price }}€</span>
      </v-col>
      <v-col cols="3" class="decal text-right">
        <v-btn icon class>
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
        <v-text-field v-model="quantity" type="text" class="centered-input">
          <template v-slot:prepend>
            <v-btn icon @click="less">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </template>
          <template v-slot:append-outer>
            <v-btn icon @click="add">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class myProductList extends Vue {
  public quantity = 1
  public selected = true
  public price = 1
  public add() {
    this.quantity++
  }

  public less() {
    this.quantity--
  }
}
</script>

<style scoped>
.decalLeft {
  padding-left: 20px;
}
.decal {
  padding-right: 20px;
}
.centered-input >>> input {
  text-align: center;
}
</style>

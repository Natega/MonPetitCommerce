<template>
  <v-card class>
    <v-row>
      <v-col cols="1" class="text-center">
        <v-col>
          <v-avatar size="45" class="category">
            <img src="~/assets/img/tshirt.png" alt="Chaussure" title="Chaussure" />
          </v-avatar>
        </v-col>
        <v-avatar size="45" class="category">
          <img src="~/assets/img/shoes.png" alt="Chaussure" title="Chaussure" />
        </v-avatar>
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
      <v-col cols="7">
        <v-row>
          <v-col class="px-0">
            <h3>Shoes Express</h3>Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs
            perspicabilis hanc condidisse Perseus memoratur, Iovis filius et
            Danaes, vel certe ex Aethiopia profectus Sandan quidam nomine vir
            opulentus et nobilis et Anazarbus auctoris vocabulum referens, et
            Mopsuestia vatis illius domicilium Mopsi, quem a conmilitio
            Argonautarum cum aureo vellere direpto redirent, errore abstractum
            delatumque ad Africae litus mors repentina consumpsit, et ex eo
            cespite punico tecti manes eius heroici dolorum varietati medentur
            plerumque sospitales.
          </v-col>
        </v-row>
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
  public name = 'Black Shoes for Men'

  public rating = '3.5'
  public displayPrice = 63
  public price = 57.0
  public reduc = 0.5
}
</script>

<style>
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
</style>

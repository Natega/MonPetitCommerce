<template>
  <div>
    <v-row v-if="$auth.loggedIn">
      <v-col md="12">
        <OrderList outlined="true" />
      </v-col>
      <v-col md="6">
        <v-card outlined>
          <v-card-title>Profile</v-card-title>
          <v-card-text>
            <v-text-field label="Utilisateur" :value="$auth.user.name" />
            <v-text-field label="Email" :value="$auth.user.email" />
            <v-text-field label="Rue" value="12 rue des belles galates" />
            <v-text-field label="Ville" value="Moret sur loing" />
            <v-text-field label="Code postal" value="77250" />
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block>Mettre à jour</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card outlined>
          <v-card-title>Zone de recherche</v-card-title>
          <v-card-text>
            <v-text-field label="Ville" value="Moret sur loing" />
            <v-text-field label="Code postal" value="77250" />
            <Map />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Map from '@/components/Map.vue'
import Category from '@/components/category/Category.vue'
import RewardCard from '@/components/reward/RewardCard.vue'
import OrderList from '@/components/user/OrderList.vue'
import Shop from '@/components/store/Thumnail.vue'
@Component({
  components: { Map, Category, RewardCard, OrderList, Shop }
})
export default class Profile extends Vue {
  public title = 'Moret sur loing' // @TODO replace by the adresse of the user
}
</script>
<style scoped>
.map {
  height: 50vh;
  z-index: 0;
}
.test {
  background: #009688;
  margin: 0px;
}
</style>

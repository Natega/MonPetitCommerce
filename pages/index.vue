<template>
  <div>
    <v-row v-if="$auth.loggedIn">
      <v-col md="9" sm="12" xs="12">
        <Map />
        <v-row class="test">
          <v-col md="12" sm="12">
            <h1 id="logo">{{ title }}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="item in 10" cols="12">
            <Shop />
          </v-col>
        </v-row>
        <BR />
      </v-col>
      <v-col md="3">
        <Category />
        <OrderList />
        <RewardCard :where="title" />
      </v-col>
    </v-row>
    <div v-else class="screen">
      <v-img class="mainImage" :src="require('~/assets/bg/main.jpg')">
        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center opacity" cols="12">
              <h1 class="display-1">Mon petit Commerce</h1>
              <h4 class="subheading">Acheter près de chez vous</h4>
              <h5 class="subheading">Trouver le bon produit près de chez vous</h5>
            </v-col>
            <v-btn class="login" color="primary" x-large dark @click="loginFacebook">Créer un compte</v-btn>

            <v-btn
              class="login black--text"
              color="white"
              x-large
              dark
              @click="loginFacebook"
            >Se connecter</v-btn>
          </v-row>
        </v-container>
      </v-img>
    </div>

    <v-row v-if="!$auth.loggedIn">
      <v-col md="12" class="text-center test">
        <h2>Nos Commercants</h2>
      </v-col>
      <v-col md="3">
        <Who
          name="Sarah Dupont"
          picture="https://cdn.pixabay.com/photo/2017/06/06/09/22/waitress-2376728_960_720.jpg"
        />
      </v-col>
      <v-col md="3">
        <Who
          name="Michel Dupont"
          picture="https://cdn.pixabay.com/photo/2015/03/27/03/14/worker-694267_960_720.jpg"
        />
      </v-col>
      <v-col md="3">
        <Who
          name="Pierre Dupont"
          picture="https://cdn.pixabay.com/photo/2019/12/04/10/22/engineer-4672332_960_720.jpg"
        />
      </v-col>
      <v-col md="3">
        <Who
          name="Syvia Dupont"
          picture="https://cdn.pixabay.com/photo/2016/08/22/14/42/engineer-1612104_960_720.jpg"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Who from '@/components/Who.vue'
import Category from '@/components/category/Category.vue'
import RewardCard from '@/components/reward/RewardCard.vue'
import OrderList from '@/components/user/OrderList.vue'
import Shop from '@/components/store/Thumnail.vue'
import Map from '@/components/Map.vue'
@Component({
  layout: 'store',
  components: { Map, Who, Category, RewardCard, OrderList, Shop }
})
export default class FirstPage extends Vue {
  public title = 'Moret sur loing' // @TODO replace by the adresse of the user
}
</script>
<style scoped>
.login {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.test {
  background: #009688;
  margin: 0px;
  position: sticky;
  top: -50px;
}
.screen,
.map {
  height: 50vh;
}
.mainImage {
  height: 50vh;
  z-index: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  min-height: 200px;
}
.opacity {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

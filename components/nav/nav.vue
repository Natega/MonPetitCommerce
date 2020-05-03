<template>
  <v-app-bar fixed app>
    <v-toolbar-title  v-ripple class="clickable" @click="goToHome()">
      <v-btn color="black">Mon petit commerce</v-btn>
    </v-toolbar-title>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-spacer />
    <v-text-field
      class="minimize-height"
      hide-details
      light
      solo
      append-icon="mdi-magnify"
      height="20px"
      placeholder="Trouvez un produit ou une boutique près de chez vous..."
    ></v-text-field>

    <div v-if="$auth.loggedIn">
      <v-divider class="mx-4" inset vertical></v-divider>
      {{ $auth.user.name }}
    </div>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-avatar
      v-if="$auth.loggedIn"
      v-ripple
      size="48"
      class="clickable"
      @click.stop="goToProfile()"
    >
      <v-img :src="$auth.user.picture.data.url" class="white--text headline"></v-img>
    </v-avatar>
    <v-btn v-else @click="loginFacebook">Se connecter</v-btn>
    <v-divider v-if="$auth.loggedIn" class="mx-4" inset vertical></v-divider>
    <v-btn v-if="$auth.loggedIn" class="user" @click="logoutFacebook">Logout</v-btn>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-badge bordered color="success" class="black--text" overlap content="0">
      <v-btn icon @click.stop="goToCart()">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class mainNav extends Vue {
  public goToHome() {
    this.$router.push({
      path: '/'
    })
  }

  public goToCart() {
    this.$router.push({
      path: '/cart'
    })
  }

  public goToProfile() {
    this.$router.push({
      path: '/profile'
    })
  }

  public loginFacebook() {
    this.$auth.loginWith('facebook').then(() => {
      localStorage.setItem('redirect', this.$route.path)
    })
  }

  public logoutFacebook() {
    this.$auth.logout()
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>

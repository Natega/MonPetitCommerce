<template>
  <div class="map">
    <client-only>
      <l-map :zoom="zoom" :center="center" :min-zoom="zoom" :max-zoom="zoom" :options="mapOptions">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <span v-for="(marker, i) in markers" :key="i">
          <l-marker :lat-lng="marker" @click="hw(i)"></l-marker>
        </span>
      </l-map>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class AddUrl extends Vue {
  public mapOptions = {
    zoomControl: false,
    attributionControl: false,
    zoomSnap: true,
    dragging: false
  }

  public id?: string
  public zoom = 17
  public center = [48.373347, 2.816429]

  public url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'

  public attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

  public markers = [
    [48.373347, 2.816429],
    [48.373347, 2.817419]
  ]

  public hw(i: string) {
    this.$router.push({
      path: '/store/123'
    })
  }

  beforeCreate() {
    this.id = this.$route.params.id
  }

  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
.button-bottom {
  margin-bottom: 15px;
}
.ck.ck-content.ck-editor__.editable {
  min-height: 500px;
}
.map {
  height: 100%;
  z-index: 0;
}
.vue2leaflet-map {
  z-index: 0;
}
</style>

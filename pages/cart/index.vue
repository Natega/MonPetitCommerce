<template>
  <v-row>
    <v-col md="2"></v-col>
    <v-col md="6">
      <v-row>
        <v-col v-for="(item, i) in 10" :key="i" cols="12">
          <ProductCard />
        </v-col>
      </v-row>
    </v-col>
    <v-col md="2">
      <ResumerCard  />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductCard from '@/components/product/ProductCard.vue'
import ResumerCard from '@/components/cart/resumer.vue'
@Component({
  layout: 'store',
  components: { ProductCard, ResumerCard }
})
export default class cart extends Vue {
  public title?: string = 'Moret sur loing'
}
</script>

<style scoped></style>

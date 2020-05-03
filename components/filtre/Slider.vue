<template>
  <div>
    {{ label }} :
    <v-range-slider v-model="slider" class="align-center" :max="max" :min="min" hide-details>
      <template v-slot:prepend>
        <span>{{ slider[0] }}€</span>
      </template>
      <template v-slot:append>
        <span>{{ slider[1] }}€</span>
      </template>
    </v-range-slider>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Slider extends Vue {
  @Prop({ type: String })
  public label?: string

  public slider = [0, 100]
  public min = 0
  public max = 100
}
</script>

<style></style>

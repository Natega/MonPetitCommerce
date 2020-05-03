<template>
  <div>
    {{ label }} :
    <br />
    <v-chip v-for="(item, i) in items" :key="i" color="primary" class="ma-2">{{ item }}</v-chip>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Slider extends Vue {
  @Prop({ type: String })
  public items?: string[]

  @Prop({ type: String })
  public label?: string
}
</script>

<style></style>

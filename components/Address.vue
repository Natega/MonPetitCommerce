<template>
  <v-card outlined>
    <v-img contain full class="white--text" :src="picture">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-chip font="black" class="body-2" color="info">{{ name }}</v-chip>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <div class="text-center">
        <span class="title">{{ name }}</span>
        <BR />
      </div>
    </v-card-title>
    <v-card-text>
      <v-icon>mdi-cellphone</v-icon>
      <span class="body-1 contact">{{ tel }}</span>
      <br />
      <v-icon>mdi-map-marker</v-icon>
      <span class="body-2 contact">{{ address }}</span>
      <br />
      <br />
      <hr />
      <br />
      {{ text }}
    </v-card-text>
    <v-card-actions></v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class myAddress extends Vue {
  @Prop({ type: String })
  public name?: string

  @Prop({ type: String })
  public picture?: string

  @Prop({ type: String })
  public tel?: string

  @Prop({ type: String })
  public address?: string

  public text =
    'Altera sententia est, quae definit amicitiam paribus officiis ac voluntatibus. Hoc quidem est nimis exigue et exiliter ad calculos vocare amicitiam, ut par sit ratio acceptorum et datorum. Divitior mihi et affluentior videtur esse vera amicitia nec observare restricte, ne plus reddat quam acceperit; neque enim verendum est, ne quid excidat, aut ne quid in terram defluat, aut ne plus aequo quid in amicitiam congeratur.'

  public rating = '3.5'
  public displayPrice = 63
  public price = 57.0
  public reduc = 0.5
}
</script>

<style>
.contact {
  vertical-align: text-top;
}
</style>

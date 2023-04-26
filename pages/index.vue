<template>
  <v-row>
    <v-col max-width="200px" v-for="card in card.items.slice().reverse()" :key="card.name" cols="12" md="4" lg="3">
      <CardTask :card=card />
    </v-col>
  </v-row>
</template>

<script lang="ts" >
import { defineComponent} from "vue";
import { useCardStore } from "@/stores/card.ts";
import  CardTask  from '@/components/CardTask';

export default defineComponent({
  components: {CardTask},
  setup() {
    const card = useCardStore();
    return{card}
  }
});
</script>
<style>

</style>

<template>
  <v-card variant="outlined">
    <v-checkbox 
      v-model="card.checked"
      @input="task.checkItem(card.name, card.checked)"
      color="success" 
      hide-details>
    </v-checkbox>
    <v-card-item>
      <div>
        <div class="text-overline mb-1" v-if="card.checked==true">COMPLETO</div>
        <div class="text-overline mb-1" v-else>EM ANDAMENTO</div>
        <div class="text-h6 mb-1">{{ card.name }}</div>
        <div class="text-caption line-clamp-2">{{ card.description }}</div>
      </div>
    </v-card-item>
    <v-card-actions class="d-flex justify-end">
      <!-- <v-btn variant="outlined"> Button </v-btn> -->
      <v-btn text @click="task.removeItem(card.name)">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { useCardStore } from "/stores/card.ts";
export default defineComponent({
  props: {
    card: Object,
  },
  setup() {
    const task = useCardStore();
    return{task}
  },
});
</script>

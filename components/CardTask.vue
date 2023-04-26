<template>
  <v-card variant="outlined" :class=" card.checked ? 'checked-true' : ''">
    <v-checkbox 
      v-model="card.checked"
      @input="task.checkItem(card.name, card.checked)"
      color="" 
      :class=" card.checked ? 'checked-true' : ''"
      hide-details>
    </v-checkbox>
    <v-card-item>
      <div>
        <div :class="[
          'text-overline mb-1 ',
          card.checked ? 'checked-true' : '' 
        ]" v-if="card.checked==true">TAREFA COMPLETA</div>
        <div class="text-overline mb-1" v-else>TAREFA EM ANDAMENTO</div>
        <div class="text-h4 mb-1">{{ card.name }}</div>
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
<style>
.checked-true{
  color: white !important;
  background-color: #50C878 !important;
}
.text-h4::first-letter{
  text-transform:capitalize !important;
}
</style>

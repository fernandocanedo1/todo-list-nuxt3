<template>
  <div v-if="!numTasks">
    <h1>Não possui tarefas.</h1>
    <br />
    <NuxtLink to="/registertask">
      <v-btn prepend-icon="mdi-check-circle"> Adicione aqui </v-btn>
    </NuxtLink>
  </div>
  <v-row>
    <v-col
      max-width="200px"
      v-for="(cards, index) in card.items.slice().reverse()"
      :key="cards.name"
      cols="12"
      md="3"
      g="3"
    >
      <CardTask :card="cards" :indexCard="numTasks - index - 1" :numTask="numTasks" />
    </v-col>
  </v-row>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { useCardStore } from "@/stores/card.ts";
import CardTask from "@/components/CardTask";

export default defineComponent({
  components: { CardTask },
  setup() {
    const card = useCardStore();
    return { card, numTasks: computed(() => card.tasks.length) };
  },
});
</script>
<style>
</style>

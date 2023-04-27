<template>
  <div>
    <h1>Detalhes da tarefa</h1>
    <br />
    <h2>Nome:</h2>
    {{ task.name }}
    <h2>Descrição:</h2>
    {{ task.description }} 
    <h2>Situação</h2>
    <p v-if="task.checked">Concluída</p>
    <p v-else>Pendente</p>
  </div>
</template>
  
<script>
import TaskDetails from "/components/Toast.vue";
import { useCardStore } from "/stores/card.ts";

export default {
  components: { TaskDetails },
  computed: {
    task() {
      const { id } = useRoute().params;
      return useCardStore().getItemByIndex(id);
    },
  },
};
</script>
  
    
    
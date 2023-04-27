<template>
    <div>
        <h1>{{ task.name }}</h1>
        <p>{{ task.description }}</p>
        <p v-if="task.checked">Concluída</p>
        <p v-else>Pendente</p>
    </div>
</template>
  
<script>
import { useCardStore } from "/stores/card.ts";

export default {
    computed: {
        task() {
            const { id } = useRoute().params
            return useCardStore().getItemByIndex(id)
        },
    },
}
</script>
  
    
    
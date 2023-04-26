<template>
  <form @submit.prevent="addItemToCard" data-testid="add-items">
    <v-text-field 
      v-model="itemName" 
      :rules="nameRules" 
      label="Nome" 
      required 
    />
    <v-textarea
      v-model="itemDescription"
      :rules="descriptionRules"
      clearable
      clear-icon="mdi-close-circle"
      label="Descrição"
      required
    />
    <v-btn type="submit" size="x-large">Adicionar Tarefa</v-btn>
  </form>
</template>
  
  <script lang="ts">
import { defineComponent, ref } from "vue";
import { useCardStore } from "/stores/card.ts";

export default defineComponent({
  setup() {
    const card = useCardStore();
    const itemName = ref("");
    const itemDescription = ref("");

    function addItemToCard() {
      if (!itemName.value && !itemDescription.value) return;
      card.addItem(itemName.value, itemDescription.value, false);
      itemName.value = "";
      itemDescription.value = "";
    }
    return {
      itemName,
      itemDescription,
      addItemToCard,
      card,
    };
  },
});
</script>
  
<style scoped>
input {
}
</style>
  
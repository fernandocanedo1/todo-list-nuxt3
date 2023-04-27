<template>
  <form @submit.prevent="addItemToCard" data-testid="add-items">
    <H1>Informe os dados da tarefa:</H1><br>
    <v-text-field v-model="itemName" label="Nome" required />
    <v-textarea v-model="itemDescription" clearable clear-icon="mdi-close-circle" label="Descrição" required />
    <v-btn type="submit" :disabled="!isFormValid" @click="myFunction()" size="x-large">Adicionar Tarefa</v-btn>
  </form>
  <div>
    <div id="snackbar">
      Tarefa adicionada com sucesso!<br>
      <NuxtLink to="/"><h2>Clique para voltar</h2></NuxtLink>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCardStore } from "/stores/card.ts";

export default defineComponent({
  setup() {
    const card = useCardStore();
    const itemName = ref("");
    const itemDescription = ref("");
    const isFormValid = computed(() => !!itemName.value && !!itemDescription.value)

    function addItemToCard() {
      if (!itemName.value && !itemDescription.value) return;
      card.addItem(itemName.value, itemDescription.value, false);
      itemName.value = "";
      itemDescription.value = "";
    }

    return {
      isFormValid,
      itemName,
      itemDescription,
      addItemToCard,
      card,
    };
  },
  methods: {
    myFunction() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
    }
  }
});
</script>
  
<style scoped>
input {}
</style>
  
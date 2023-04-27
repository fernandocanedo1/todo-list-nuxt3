<template>
  <form @submit.prevent="addItemToCard" data-testid="add-items">
    <H1>Informe os dados:</H1><br />
    <v-text-field name="Name" v-model="itemName" label="Nome" required />
    <v-textarea
    name="Decription"
      v-model="itemDescription"
      clearable
      clear-icon="mdi-close-circle"
      label="Descrição"
      required
    />
    <v-btn
      prepend-icon="mdi-check-circle"
      color="sucess"
      type="submit"
      :disabled="!isFormValid"
      @click="myFunction()"
      size="large"
      >Adicionar Tarefa</v-btn
    >
    </form>
  <Toast
    msg="Tarefa adicionada com sucesso!"
    link="<NuxtLink to='/'><h2>Clique para voltar</h2></NuxtLink>"
  />
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCardStore } from "/stores/card.ts";
import Toast from "/components/Toast.vue";

export default defineComponent({
  components: { Toast },
  setup() {
    const card = useCardStore();
    const itemName = ref("");
    const itemDescription = ref("");
    const isFormValid = computed(() => !!itemName.value && !!itemDescription.value);

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
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 5000);
    },
  },
});
</script>
  
<style scoped>
input {
}
</style>
  
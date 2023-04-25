<template>
  <v-row>
    <v-col max-width="200px" v-for="(card, index) in items.slice().reverse()" :key="index" cols="12" md="4" lg="3">
      <CardTask :card=card :index=index />
    </v-col>
  </v-row>
</template>

<script >
import  CardTask  from '@/components/CardTask';
export default {
  components: {CardTask},
  data() {
    return {
      items: [
        { title: "Comprar leite", description: "Leite desnatado", done: false, checked: false },
        { title: "Pagar a conta de luz", description: "Conta vencida em 15/04", checked: true },
        { title: "Ligar para o médico", description: "Agendar consulta", checked: false },
        { title: "1", description: "Agendar consulta", checked: true },
        { title: "Ligar para o médico", description: "Agendar consulta", checked: false },
      ],
    };
  },
};
</script>
<style>

</style>

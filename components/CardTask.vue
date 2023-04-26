<template>
  <v-card variant="outlined">
    <v-checkbox v-model="card.checked" color="success" hide-details></v-checkbox>
    <v-card-item>
      <div>
        <div class="text-overline mb-1">COMPLETO</div>
        <div class="text-h6 mb-1">{{ card.name }}</div>
        <div class="text-caption line-clamp-2">{{card.description}}</div>
      </div>
    </v-card-item>
    <v-card-actions class="d-flex justify-end">
      <!-- <v-btn variant="outlined"> Button </v-btn> -->
      <v-btn text @click="deleteCard">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default defineComponent({
  props: {
    card: Object
  },
  setup() {},
  methods: {
    deleteCard() {
      console.log("deleted:" );
    },
  },
});
</script>

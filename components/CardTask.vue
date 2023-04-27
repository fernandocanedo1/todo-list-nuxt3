<template>
  <v-card variant="outlined" :class="card.checked ? 'checked-true' : ''">
    <v-checkbox
      name="checked"
      v-model="card.checked"
      @input="task.checkItem(card.name, card.checked)"
      color=""
      :class="card.checked ? 'checked-true' : ''"
      hide-details
    >
    </v-checkbox>
    <v-card-item>
      <NuxtLink  name="linkTask" :to="'/task/' + indexCard">
        <div>
          <div
            :class="['text-overline mb-1 ', card.checked ? 'checked-true' : '']"
            v-if="card.checked == true"
          >
            TAREFA CONCLUIDA
          </div>
          <div class="text-overline mb-1" v-else>TAREFA EM ANDAMENTO</div>
          <div class="text-h4 mb-1">{{ card.name }}</div>
          <div class="text-caption text-h2 line-clamp-2">{{ card.description }}</div>
        </div>
      </NuxtLink>
    </v-card-item>
    <v-card-actions class="d-flex justify-end">
      <v-btn name="delete" text @click="removeItem()">Delete</v-btn>
    </v-card-actions>
  </v-card>
  <Toast msg="Tarefa deletada" />
</template>
<script>
import { useCardStore } from "/stores/card.ts";
import Toast from "/components/Toast.vue";
export default defineComponent({
  components: { Toast },
  props: {
    card: Object,
    indexCard: Number,
    numTask: Number,
  },
  setup() {
    const task = useCardStore();
    return { task };
  },
  methods: {
    removeItem() {
      this.task.removeItem(this.card.name);
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 1000);
    },
  },
});
</script>
<style>
.checked-true {
  color: white !important;
  background-color: #3cb371 !important;
}

.text-h4::first-letter {
  text-transform: capitalize !important;
}
</style>

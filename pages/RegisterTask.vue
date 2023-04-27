<template>
  <v-row>
    <v-col max-width="200px" cols="12" md="5" g="3">
      <FormTask />
    </v-col>
  </v-row>
</template>
  
<script lang="ts">
import FormTask from '@/components/CardTask';
export default defineComponent({
  components: { FormTask },
});
</script>
  
<style>
input {}
</style>
  
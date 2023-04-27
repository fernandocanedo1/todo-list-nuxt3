<template>
  <div id="snackbar">
    {{ msg }}
    <div v-if="link">
      <br />
      <NuxtLink to="/">
        <h3 v-html="link"></h3>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    msg: String,
    link: String,
  },
});
</script>

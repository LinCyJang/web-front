<template>
  <div class="right mx-4">
    <v-card height="400" class="my-4">
      <v-date-picker v-model="picker" flat></v-date-picker>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      picker: new Date().toISOString().substr(0, 10)
    };
  }
};
</script>

<style></style>

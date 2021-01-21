<template>
  <v-container>
    <v-timeline dense clipped v-for="(item, index) in articles" :key="index">
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="primary"
        icon="mdi-book-variant"
      >
        <v-card flat>
          <v-container>
            <h1>{{ index }}</h1>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        v-for="event in item"
        :key="event.id"
        class="mb-4"
        :color="
          event.importance === 1
            ? 'green lighten-1'
            : event.importance === 2
            ? 'primary'
            : 'pink lighten-1'
        "
        slot
        small
      >
        <v-card :to="`/${$route.name}/detail?id=${event.id}`" flat>
          <v-container>
            <!-- {{ $utils.formatTime("MM-dd", event.createtime / 1) }} -->
            {{ event.title }}
          </v-container>
        </v-card>
        <v-divider></v-divider>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  props: {
    articles: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>

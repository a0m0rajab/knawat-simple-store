<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end" :src="link">
      <v-card-title>{{ title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0"> Price: {{ price }} </v-card-subtitle>
    <v-card-text v-html="desc" class="text--primary"> </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="blue" text> Add <v-icon>mdi-plus</v-icon> </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    link: String,
    price: Number,
  },
};
</script>

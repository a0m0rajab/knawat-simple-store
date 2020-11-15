<template>
<v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" :src="link">
        <v-card-title>{{ title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0"> {{ price }} </v-card-subtitle>
    <v-card-text class="text--primary">
        {{ desc }}
    </v-card-text>
    <v-card-actions>
        <v-spacer />
        <v-btn color="blue" text> Add <v-icon>mdi-plus</v-icon>
        </v-btn>
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

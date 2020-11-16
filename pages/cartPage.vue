<template>
  <div>
    <v-data-table
      hide-default-header
      hide-default-footer
      :headers="headers"
      :items="products"
      :items-per-page="products.length"
      class="elevation-1"
      v-if="products.length !== 0"
    >
      <template v-slot:item.image="{ item }">
        <v-img max-width="200" :src="imageName(item.images[0], item.name.tr)">
        </v-img>
      </template>
      <template v-slot:item.title="{ item }">
        {{ item.name.tr }}
      </template>
      <template v-slot:item.price="{ item }">
        {{ item.variations.market_price }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="removeProductFromCart(item.sku)"
          color="red"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-chip
      v-if="products.length !== 0"
      class="ma-2"
      color="orange"
      text-color="white"
    >
      Total Price {{ total }}
    </v-chip>
    <p v-else>you can buy more ;)</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  data: () => ({
    headers: [
      {
        text: "image",
        align: "start",
        value: "image",
      },
      {
        text: "title",
        value: "title",
      },
      {
        text: "price",
        value: "price",
      },
      {
        text: "actions",
        align: "end",
        value: "actions",
      },
    ],
  }),
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
    }),
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),
    imageName(link, name) {
      return `${link}/${name}/200`;
    },
  },
};
</script>

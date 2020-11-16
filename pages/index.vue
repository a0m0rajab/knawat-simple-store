<template>
  <v-row justify="center" align="center">
    <v-col v-for="product in products" :key="product.sku">
      <product
        :title="product.name.tr"
        :desc="product.description.tr"
        :link="product.images[0]"
        :price="product.variations[0].market_price"
      />
    </v-col>
    <v-col>
      <mountain />
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import mountain from "~/components/mountain.vue";

import product from "~/components/product.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    mountain,
    Logo,
    VuetifyLogo,
    product,
  },
  created() {
    console.log("created");
    this.$store.dispatch("products/getAllProducts");
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: mapActions("cart", ["addProductToCart"]),
};
</script>

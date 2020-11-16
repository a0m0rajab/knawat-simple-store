<template>
  <v-row justify="center" align="center">
    <v-col v-for="product in products" :key="product.sku">
      <product
        :title="product.name.tr"
        :link="imageName(product.images[0], product.name.tr)"
        :price="product.variations.market_price"
        :sku="product.sku"
      />
    </v-col>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="count / 10"
        :total-visible="9"
      ></v-pagination>
    </div>
  </v-row>
</template>



<script>
import Logo from "~/components/Logo.vue";

import product from "~/components/product.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    Logo,
    VuetifyLogo,
    product,
  },
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    page: function () {
      this.$store.dispatch("products/getAllProducts", this.page);
    },
  },
  created() {
    console.log("created");
    this.$store.dispatch("products/getAllProducts", this.page);
  },
  computed: {
    ...mapState({
      products: (state) => state.products.all,
      count: (state) => state.products.count,
    }),
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    imageName(link, name) {
      return `${link}/${name}/200`;
    },
  },
};
</script>

<template>
<v-row justify="center" align="center">
    <v-col v-for="product in products" :key="product.sku">
        <product :title="product.name[`en`]" :desc="product.description[`en`]" :link="porduct.images[0]" :price="product.variations[0].cost_price" />
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
import {
    mapMutations,
    mapState,
    mapActions
} from "vuex";

export default {
    async asyncData({
        params,
        $axios
    }) {
        $axios.setToken(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0OWQ5Mzc4LTNhNjktNGZiYy04YjM4LTQ4OWRmMjQyODg3ZCIsImV4cCI6MTYxMDU0Mjk2NCwiaWF0IjoxNjA1MzU4OTY0fQ.7lnp6hM54C_aVAj7esC-Gqhn869NtJzFnl_B9kqLIoQ",
            "Bearer"
        );
        // $http.setHeader("123", "Bearer");
        // https://mp.knawat.io/api/catalog/products?page=1&hideOutOfStock=1
        const products = await $axios.$get(
            `https://mp.knawat.io/api/catalog/products?page=${1}&hideOutOfStock=${1}}`
        );
        return {
            products,
        };
    },
    components: {
        mountain,
        Logo,
        VuetifyLogo,
        product,
    },
    created() {
        // console.log("created");
        // this.$store.dispatch("products/getAllProducts");
    },
    computed: mapState({
        // products: (state) => state.products.all,
    }),
    methods: mapActions("cart", ["addProductToCart"]),
};
</script>

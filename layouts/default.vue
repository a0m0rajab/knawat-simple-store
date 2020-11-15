<template>
<v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
        <v-container>
            <nuxt />
        </v-container>
    </v-main>
    <v-footer absolute app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            title: "Knawat Demo Store",
        };
    },
};
</script>

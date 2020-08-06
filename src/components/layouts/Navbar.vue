<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="logo"
          transition="scale-transition"
          width="150"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <router-link to="/cart">
      <v-btn text>
        <v-badge color="green" :content="cartBage">
          <v-icon>mdi-cart-minus</v-icon>
        </v-badge>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
import logo from "@/assets/logo.svg";

export default {
  props: {
    cartBage: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    logo: logo,
  }),
};
</script>
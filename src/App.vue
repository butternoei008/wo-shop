<template>
  <v-app>
    <Navbar :cartBage="cartBage" />
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary white--text">
      <v-col class="text-center">© WO-SHOP 2020</v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/layouts/Navbar'

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      amount: 0
    }
  },
  computed: {
    ...mapGetters(['itemInCart']),
    cartBage() {
      return this.itemInCart.length
    }
  }
};
</script>

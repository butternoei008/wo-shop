<template>
  <v-container fluid style="padding: 0">
    <v-carousel>
      <v-carousel-item :color="carousel.captionColor" :src="carousel.img">
        <v-row class="fill-height" align="center" justify="center">
          <v-sheet style="padding: 1rem; border: 2px solid #fff;" class="display-3">WO-SHOP</v-sheet>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row justify="center">
        <v-text-field
          solo
          label="Search product name"
          prepend-inner-icon="mdi-magnify"
          style="max-width: 1000px"
          v-model="keyword"
          v-on:keyup="searchProduct(keyword)"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col v-for="product in products" :key="product.id" md="3" sm="6">
          <v-card>
            <v-img height="100%" :src="product.img"></v-img>
            <v-card-text>
              <v-card-title>{{ product.name }}</v-card-title>
              <div class="display-1">
                <v-row no-gutters>
                  {{ product.price | totHB }}
                  <v-spacer></v-spacer>
                  <v-btn v-on:click="addProductToCart(product)">
                    <v-icon>mdi-cart-plus</v-icon>
                  </v-btn>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { ADD_CART_PRODUCT } from "../store/actions.type";

export default {
  name: "Home",
  data() {
    return {
      carousel: {
        img:
          "https://images.unsplash.com/photo-1586116194455-5e6d5d426c7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        captionColor: "#000",
      },
      keyword: '',
      products: []
    };
  },
  computed: {
    ...mapGetters(["allProduct"]),
  },
  mounted() {
    this.products = this.allProduct
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch(ADD_CART_PRODUCT, product);
    },
    searchProduct(keyword) {
      if(this.keyword != '') {
        this.products = this.allProduct.filter(product => product.name.includes(keyword))
      } else {
        this.products = this.allProduct
      }
    }
  },
  filters: {
    totHB: (price) => {
      return Intl.NumberFormat("th-TH", {
        style: "currency",
        currency: "THB",
      }).format(price);
    },
  },
};
</script>

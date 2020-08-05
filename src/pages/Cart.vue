<template>
  <v-container>
    <h1>Am Cart</h1>
    <v-card>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th v-for="(header, index) in headers" :key="index">{{ header.text }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in itemInCart" :key="index">
                <td>
                  <v-img width="100" :src="item.img" alt />
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="text-right">
           <h1>Total {{ total | totHB }}</h1>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      headers: [
        { text: "Image", value: "img" },
        { text: "Name", value: "name" },
        { text: "price", value: "price" },
      ],
    };
  },
  computed: {
    ...mapGetters(["itemInCart"]),
    total() {
      return this.itemInCart.reduce((total, item) => {
        return total + parseFloat(item.price);
      }, 0);
    },
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
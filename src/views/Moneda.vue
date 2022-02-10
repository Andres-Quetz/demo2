<template>
  <div>
    <h1>Administración de Monedas</h1>
    <ul>
      <li v-for="elemento in info" :key="elemento.id">
        {{ elemento.code }} - {{ elemento.description }} -
        {{ elemento.rate_float }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response.data.bpi));
  },
};
</script>

<template>
  <div>
    <h2>Lista de Monedas</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      quam, eveniet asperiores labore provident harum officiis expedita odit
      magni, praesentium voluptatibus cum ut velit! Mollitia pariatur laboriosam
      adipisci aut sit.
    </div>
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

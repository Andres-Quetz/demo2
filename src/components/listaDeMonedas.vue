<template>
  <div>
    <div>
      {{ fullName }}
      <button @click="completarNombre('Quetz Morales')">Completarnombre</button>
    </div>
    <div>
      <button @click="consultarPrecio()">Consultar...</button>
      <ul>
        <li v-for="elemento in info" :key="elemento.id">
          {{ elemento.code }} - {{ elemento.description }} -
          {{ elemento.rate_float }}
        </li>
      </ul>
    </div>
    <hr />

    <hr />
    <div><button @click="saveH()">Guardar Registro</button></div>
    <hr />
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody v-for="precio in monedas" :key="precio.id">
          <tr>
            <td>{{ precio.code }}</td>
            <td>{{ precio.description }}</td>
            <td>{{ precio.rate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      nombrecompleto: "",
      price: [],
    };
  },
  mounted() {
    let moneda = JSON.parse(localStorage.getItem("historial"));
    if (moneda != null) {
      try {
        //this.monedas = JSON.parse(localStorage.getItem("historial"));
        this.setMonedas(moneda);
      } catch (e) {
        localStorage.removeItem("historial");
      }
    }
  },
  computed: {
    ...mapState(["name", "fullName", "monedas"]),
  },
  methods: {
    consultarPrecio() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.info = response.data.bpi;
          for (const key in this.info) {
            this.price.push(this.info[key]);
          }
        });
    },
    ...mapMutations(["completarNombre", "saveMonedas", "setMonedas"]),
    crearnombre() {
      this.nombrecompleto = this.name + "quetz";
    },

    saveH() {
      this.saveMonedas(this.price);
      localStorage.setItem("historial", JSON.stringify(this.monedas));
    },
  },
};
</script>

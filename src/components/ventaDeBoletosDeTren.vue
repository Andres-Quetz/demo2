<template>
  <div>
    <div class="row">
      <h5>Comp... ventas de tren</h5>
    </div>
    <div class="row">
      <div v-if="showForm">
        <input type="text" placeholder="nombre" />
        <button @click="guardarDatos()">Guardar</button>
      </div>
    </div>
    <div class="row" v-if="showAsientos">
      <div
        class="col-2"
        @click="metodoShowAsientos(index)"
        v-for="(asientoDeTren, index) in asientosDeTren"
        :key="index"
      >
        {{ asientoDeTren.nombre }}
        <input
          class="img-fluid"
          alt="Responsive image"
          type="image"
          :src="require('@/assets/asientos/' + asientoDeTren.img)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ventaDeBoletosDeTren",
  created() {
    this.iniAsientosDeTren();
  },
  data() {
    return {
      showAsientos: true,
      showForm: false,
    };
  },
  computed: {
    ...mapState(["asientosDeTren"]),
  },
  methods: {
    guardarDatos() {
      this.metodoShowAsientos();
      
    },
    metodoShowAsientos(id) {
      alert(id)
      this.showAsientos
        ? (this.showAsientos = false)
        : (this.showAsientos = true);
      this.showForm ? (this.showForm = false) : (this.showForm = true);
    },
    ...mapMutations(["iniAsientosDeTren"]),
  },
};
</script>

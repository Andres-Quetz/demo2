import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    historico: [],
    name: "andres",
    fullName: "",
    monedas: [],
    asientosDeTren: [] /*[
      {
        folio: "label",
        estado: true,
        nombre: "",
        img: "disponible.png",
        costo: 2500,
      },
      {
        folio: "label",
        estado: true,
        nombre: "",
        img: "disponible.png",
        costo: 2500,
      },
      {
        folio: "label",
        estado: true,
        nombre: "",
        img: "disponible.png",
        costo: 2500,
      },
    ],*/,
  },
  mutations: {
    iniAsientosDeTren(state) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 6; k++) {
          state.asientosDeTren.push({
            folio: "label",
            estado: true,
            nombre: j + "" + k,
            img: "disponible.png",
            costo: 2500,
          });
        }
      }
    },
    setMonedas(state, par1) {
      state.monedas = par1;
    },
    completarNombre(state, apellido) {
      state.fullName = state.name + apellido;
    },
    saveMonedas(state, precio) {
      for (let key in precio) {
        state.monedas.push({
          code: precio[key].code,
          description: precio[key].description,
          rate: precio[key].rate,
        });
      }
    },
  },
  actions: {},
  modules: {},
});

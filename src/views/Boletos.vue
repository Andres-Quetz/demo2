<template>
  <div>
    <h2>Gestion de Boletos de Tren</h2>
    <div class="row">
      <div class="col">Lado izquierdo</div>
      <div class="col"><ventaDeBoletosDeTren></ventaDeBoletosDeTren></div>

      <div class="col">Lado Derecho</div>
    </div>
  </div>
</template>

<script>
import ventaDeBoletosDeTren from "@/components/ventaDeBoletosDeTren.vue";

export default {
  components: {
    ventaDeBoletosDeTren,
  },
};
</script>

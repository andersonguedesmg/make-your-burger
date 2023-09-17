<template>
  <div class="main-container">
    <h1>Gerenciamento dos Pedidos</h1>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "OrderView",
  components: { Dashboard },
};
</script>

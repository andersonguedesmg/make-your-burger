<template>
  <div>
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>Cliente:</th>
        <th>Pão:</th>
        <th>Carne:</th>
        <th>Opcionais:</th>
        <th>Ações:</th>
      </tr>
      <tr v-for="burger in burgers" :key="burger.id">
        <td>{{ burger.id }}</td>
        <td>{{ burger.name }}</td>
        <td>{{ burger.bread }}</td>
        <td>{{ burger.meat }}</td>
        <td>
          <ul>
            <li v-for="(optional, index) in burger.optional" :key="index">
              {{ optional }}
            </li>
          </ul>
        </td>
        <td>
          <select name="status" class="status">
            <option
              v-for="status in statusList"
              :key="status.id"
              :value="status.type"
              :selected="burger.status == status.type"
            >
              {{ status.type }}
            </option>
          </select>
          <button class="delete-btn">Cancelar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      burgers: null,
      burger_id: null,
      statusList: [],
    };
  },
  methods: {
    async getOrders() {
      const req = await fetch("http://localhost:3000/burger");

      const data = await req.json();

      this.burgers = data;

      this.getStatus();
    },

    async getStatus() {
      const req = await fetch("http://localhost:3000/status");

      const data = await req.json();

      this.statusList = data;
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 5px;
  text-align: left;
}

ul {
  list-style-type: none;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>

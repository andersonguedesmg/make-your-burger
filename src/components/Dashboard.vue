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
      <tr>
        <td>1</td>
        <td>Jed Bartlet</td>
        <td>Pão de Hamburguer</td>
        <td>Picanha</td>
        <td>
          <ul>
            <li>Bacon</li>
            <li>Cheddar</li>
            <li>Presunto</li>
          </ul>
        </td>
        <td>
          <select>
            <option></option>
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

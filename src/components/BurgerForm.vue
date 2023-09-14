<template>
  <div>
    <form id="burger-form">
      <div class="input-container">
        <label for="name">Cliente:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu Nome"
        />
      </div>
      <div class="input-container">
        <label for="bread">Escolha o Pão:</label>
        <select name="bread" id="bread">
          <option value="">-- Selecione o tipo de Pão --</option>
          <option
            v-for="bread in breadList"
            :key="bread.id"
            :value="bread.type"
          >
            {{ bread.type }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="meat">Escolha a Carne:</label>
        <select name="meat" id="meat">
          <option value="">-- Selecione o tipo de Carne --</option>
          <option v-for="meat in meatList" :key="meat.id" :value="meat.type">
            {{ meat.type }}
          </option>
        </select>
      </div>
      <div id="optional-container" class="input-container">
        <label id="optional-title" for="optional"
          >Selecione os opcionais:</label
        >
        <div
          class="checkbox-container"
          v-for="optional in optionalList"
          :key="optional.id"
        >
          <input type="checkbox" name="optional" :value="optional.type" />
          <span>{{ optional.type }}</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BurgerForm",
  data() {
    return {
      breadList: null,
      meatList: null,
      optionalList: null,
      name: null,
      bread: null,
      meat: null,
      optional: [],
      status: "Solicitado",
    };
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredients");
      const data = await req.json();

      this.breadList = data.bread;
      this.meatList = data.meat;
      this.optionalList = data.optional;
    },
  },
  mounted() {
    this.getIngredients();
  },
};
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#optional-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#optional-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
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

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>

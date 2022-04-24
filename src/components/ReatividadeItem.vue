<template>
  <div class="container">
    <h2>Reatividade</h2>
    <pre>{{ disciplina }}</pre>
    <div>
      <label for="ano">Ano:</label>
      <input type="number" v-model="ano" id="ano" name="ano" />
      <button v-on:click="add">Add Ano</button>
      <button v-on:click="remove">Remover Ano</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      disciplina: { nome: "TECA" },
      ano: "",
    };
  },
  methods: {
    add() {
      // for vue 2
      // this.$set(this.disciplina, 'ano', this.ano)
      this.disciplina.ano = this.ano;
    },
    remove() {
      // for vue 2
      // this.$delete(this.disciplina, 'ano')
      delete this.disciplina.ano;
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  & div > *:not(:last-child) {
    margin-right: 5px;
  }
}
</style>

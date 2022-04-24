<template>
  <div class="wrapperMain">
    <div class="container">
      <h1>Criando um projeto com Vue.js 3!</h1>
      <ReatividadeItem />
      <hr />
      <DataBindingItem />
      <hr />
      <SecretItem />
      <hr />
      <h2>Props | v-for</h2>
      <div class="form">
        <form>
          <fieldset>
            <div class="clienteId">
              <label for="clienteId">Id:</label>
              <input
                type="text"
                name="clienteId"
                id="clienteId"
                readonly
                disabled
                v-model="cliente.id"
              />
            </div>

            <div class="nome">
              <label for="nome">Nome:</label>
              <input
                type="text"
                name="nome"
                id="nome"
                required
                placeholder="Digiete o seu nome"
                v-model="cliente.nome"
              />
            </div>

            <div class="cpf">
              <label for="cpf">CPF:</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                maxlength="11"
                pattern="[\d]{11}"
                required
                placeholder="Digiete o seu CPF"
                v-model="cliente.cpf"
              />
            </div>

            <div class="email">
              <label for="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Digite o seu e-mail"
                v-model="cliente.email"
              />
            </div>
          </fieldset>
          <div class="enviar">
            <button type="submit" @click.prevent="cadastrar">Salvar</button>
          </div>
        </form>
      </div>
      <div class="clientes">
        <ClienteItem
          v-for="(cliente, index) in clientes"
          :key="index"
          :cliente="{
            id: cliente.id,
            nome: cliente.nome,
            cpf: cliente.cpf,
            email: cliente.email,
          }"
          @remover="remover(index)"
          @editar="editar(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ClienteItem from "./components/ClienteItem.vue";
import ReatividadeItem from "./components/ReatividadeItem.vue";
import DataBindingItem from "./components/DataBindingItem.vue";
import SecretItem from "./components/SecretItem.vue";
export default {
  components: { ClienteItem, ReatividadeItem, DataBindingItem, SecretItem },
  data: () => {
    return {
      disciplina: { nome: "TECA" },
      valor: "",
      cliente: { id: "", nome: "", cpf: "", email: "" },
      clientes: [],
    };
  },
  methods: {
    cadastrar() {
      if (this.cliente.id) {
        return this.atualizar();
      }

      this.cliente.id = this.clientes.length + 1;
      this.clientes.push(this.cliente);
      this.limpar();
    },
    atualizar() {
      this.clientes = this.clientes.map((curr) => {
        if (curr.id === this.cliente.id) curr = this.cliente;

        return curr;
      });

      this.limpar();
    },
    remover(index) {
      this.clientes = this.clientes.filter((curr, idx) => idx !== index);
    },
    editar(index) {
      const clienteFound = this.clientes.find((curr, idx) => idx === index);
      this.cliente = Object.assign({}, clienteFound);
    },
    limpar() {
      this.cliente = { id: "", nome: "", cpf: "", email: "" };
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

:root {
  color-scheme: dark;
}

#app {
  width: 100%;
  margin: 20px;
}

hr {
  width: 100%;
  border: 1px dashed #333;
}

body {
  height: 100vh;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}

.container,
.move {
  padding: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 10px;
}

.imagem {
  width: 50px;
}

.move {
  width: calc(100vw - 5px);
  height: 30vh;
}

.coord {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid #2c032c40;
  padding: 5px;
}

.wrapperMain {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.wrapperMain h1 {
  text-align: center;
}

.clientes {
  flex-direction: row;
  padding: 10px 10px;
}

.form {
  width: 100%;
  & fieldset {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    border-radius: 5px;
    border: 1px solid #33323381;
    box-shadow: 5px 5px 5px #33323381;

    & div {
      width: 100%;
      display: flex;
      flex-direction: column;
      width: 20%;
    }
  }
}

@media (max-width: 600px) {
  .form {
    height: 255px;
  }

  .clientes {
    height: calc(100vh - 255px);
    overflow-y: auto;
  }

  .form fieldset {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form fieldset div {
    padding: 5px 10px;
    width: 100%;
  }
}

.clientes {
  width: 100%;
  & :not(:last-child) {
    margin-bottom: 15px;
  }
}

.enviar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.enviar button {
  font-size: 1rem;
  color: #fff;
  background: #494949;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 2rem;
  transition: filter 0.2s;
  margin-bottom: 10px;
  cursor: pointer;

  transition: filter, transform 0.2s;
}

.enviar button:hover {
  filter: brightness(0.7);
  transform: scale(1.05);
}

input:invalid {
  border: #680e0ebb solid 1px;
  border-radius: 5px;
}
</style>

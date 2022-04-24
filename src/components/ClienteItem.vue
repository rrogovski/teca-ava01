<template>
  <div class="wrapperCliente">
    <h2>Cliente: {{ cliente.id }} - {{ cliente.nome }}</h2>
    <div class="acoes">
      <button type="submit" @click.prevent="$emit('editar')">Editar</button>
      <button type="submit" @click.prevent="$emit('remover')">Remover</button>
    </div>
    <details>
      <summary>Dados do Cliente</summary>
      <ul>
        <li>CPF: {{ cliente.cpf }}</li>
        <li>Email: {{ cliente.email }}</li>
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: {
    cliente: {
      id: String,
      nome: String,
      cpf: String,
      email: String,
    },
    remover: Function,
    editar: Function,
  },
};
</script>

<style>
.wrapperCliente {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  /* width: 300px; */
  border-radius: 5px;
  border: 1px solid #4e004e40;
  box-shadow: 5px 5px 5px #756775;
  padding: 5px 5px;
  border-top: 50px;

  transition: all 500ms ease;
}

.wrapperCliente h2,
.wrapperCliente details {
  text-align: center;
}

.wrapperCliente li {
  list-style: none;
}

.wrapperCliente:hover {
  transform: scale(1.02);
}
.acoes {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.acoes button {
  font-size: 1rem;
  color: #fff;
  background: #494949;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 2rem;
  transition: filter, transform 0.2s;
  margin-bottom: 10px;
  cursor: pointer;
}

.acoes button:hover {
  filter: brightness(0.7);
  transform: scale(1.05);
}
</style>

<template>
  <div class="container">
    <h2>Data Binding One-way | Two-way Data Binding com V-Model</h2>
    <span>Texto: {{ text }}</span>
    <div>
      <label for="one-way">One-way:</label>
      <input type="text" :value="text" id="one-way" name="one-way" />
    </div>
    <div>
      <label for="two-way">Two-way:</label>
      <input type="text" v-model="text" id="two-way" name="two-way" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      text: "Texto inicial",
    };
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

<template>
  <div class="container">
    <h2>v-if | v-else</h2>
    <div v-konami-code="(result) => (show = result)" v-if="show">
      <span>You Know the Secret! 😎</span>
    </div>
    <div v-konami-code="(result) => (show = result)" v-else>
      <span>Enter the code to reach the master level! 👨‍💻</span>
      <small>Hint: Konami Code</small>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show: false,
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

  div {
    & span {
      display: block;
    }
    & small {
      display: none;
      text-align: center;
    }
    & span:hover ~ small {
      display: block;
      text-align: center;
      color: #6b6b6b40;
    }
  }

  & div > *:not(:last-child) {
    margin-right: 5px;
  }
}
</style>

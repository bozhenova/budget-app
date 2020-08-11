<template>
  <div class="total-value" :style="{color: color}">Balance: {{ total }}</div>
</template>

<script>
export default {
name: 'TotalBalance',
props: {
  total: {
  type: Number,
  default: 0
    }
  },
  computed: {
  color() {
  if (this.total > 0) {
  return 'green';
  } else if (this.total < 0) {
      return 'red'
    }
  return 'black';
    }
  }
}
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
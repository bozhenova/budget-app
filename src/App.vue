<template>
  <div id="app">
    <h2>Budget App</h2>
    <TotalBalance :total="totalBalance" />
    <div class="wrapper">
      <Form />
      <BudgetList :list="filteredList" />
    </div>
    <Dialog />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';
import Dialog from '@/components/Dialog';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { BudgetList, TotalBalance, Form, Dialog },
  computed: {
    ...mapGetters('data', ['itemsList', 'sortType']),
    totalBalance() {
      return this.itemsList.reduce((acc, item) => {
        return item.type === 'INCOME' ? acc + item.value : acc - item.value;
      }, 0);
    },
    filteredList() {
      switch (this.sortType) {
        case 'income':
          return this.itemsList.filter(item => item.type === 'INCOME');
        case 'outcome':
          return this.itemsList.filter(item => item.type === 'OUTCOME');
        default:
          return this.itemsList;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.wrapper {
  margin-top: 20px;
  display: flex;
  align-items: start;
}
</style>

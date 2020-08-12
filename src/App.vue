<template>
  <div id="app">
   <h2>Budget App</h2>
    <TotalBalance :total="totalBalance" />
    <div class="wrapper">
    <Form @submit-form="onFormSubmit" />
    <BudgetList :list="filteredList" :handleDelete="handleDelete" @sort-items="changeSortType"/>
    </div>
    <ElDialog
      title="Do you want to delete this item?"
      :visible="dialogVisible"
      width="30%"
      :before-close="closeDialog"
    >
      <span>
        <ElButton @click="dialogVisible = false">Cancel</ElButton>
        <ElButton type="primary" @click="handleConfirm">Confirm</ElButton>
      </span>
    </ElDialog>
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';

export default {
  name: 'App',
  components: { BudgetList, TotalBalance, Form },
  data: () => ({
    list: [
      {
        type: 'INCOME',
        value: 100,
        comment: 'Sold a picture',
        id: 1
      },
      {
        type: 'OUTCOME',
        value: 50,
        comment: 'Shopping',
        id: 2
      },
    ],
    dialogVisible: false,
    currentId: 0,
    sortType: 'all'
  }),
  computed: {
    totalBalance() {
      return this.list.reduce((acc, item) => {
        return item.type === 'INCOME' ? acc + item.value : acc - item.value;
      }, 0);
    },
    filteredList() {
    switch (this.sortType) {
      case 'income':
        return this.list.filter(item => item.type === 'INCOME');
      case'outcome':
        return this.list.filter(item => item.type === 'OUTCOME');
      default:
        return this.list;
    }
  }
  },
  methods: {
    handleDelete(id) {
      this.currentId = id;
      this.dialogVisible = true;
    },
    deleteItem() {
    const index = this.list.findIndex(item => item.id === this.currentId)
      this.$delete(this.list, index);
    },
    onFormSubmit(data) {
    data.id = Math.random();
    this.list.push(data);
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    handleConfirm() {
      this.closeDialog();
      this.deleteItem();
    },
    changeSortType(sortType) {
    this.sortType = sortType;
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

<template>
  <div id="app">
   <h2>Budget App</h2>
    <TotalBalance :total="totalBalance" />
    <div class="wrapper">
    <Form @submit-form="onFormSubmit" />
    <BudgetList :list="list" :handleDelete="handleDelete" />
    </div>
    <ElDialog
      title="Do you want to delete this item?"
      :visible="dialogVisible"
      width="30%"
      :before-close="handleClose"
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
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1
      },
      2: {
        type: 'OUTCOME',
        value: 50,
        comment: 'Some outcome comment',
        id: 2
      }
    },
    dialogVisible: false,
    currentId: 1
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => {
        return item.type === 'INCOME' ? acc + item.value : acc - item.value;
      }, 0);
    }
  },
  methods: {
    handleDelete(id) {
      this.currentId = id;
      this.dialogVisible = true;
    },
    deleteItem() {
      this.$delete(this.list, this.currentId);
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      this.$set(this.list, newObj.id, newObj);
    },
    handleClose() {
      this.dialogVisible = false;
    },
    handleConfirm() {
      this.dialogVisible = false;
      this.deleteItem();
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

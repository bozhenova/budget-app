<template>
<div class="list-item">
<span class="budget-comment">{{ item.comment }}</span>
  <span class="budget-value" :style="{color: color}">{{ item.value }}<i :class="arrowType"/></span>
  <ElButton type="danger" size="mini" @click="handleDelete(item.id)">
  Delete
  </ElButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BudgetListItem',
  props: {
  item: {
      type: Object,
      default: () => ({})
    }
  },
    methods: {
    ...mapActions('data', ['setCurrentId', 'toggleDialog']),
    handleDelete(id) {
      this.setCurrentId(id)
      this.toggleDialog(true);
    }
  },
  computed: {
  arrowType() {
    return this.item.type === 'INCOME' ? 'el-icon-top' : 'el-icon-bottom';
    },
  color() {
    if (this.item.type === 'INCOME') {
      return 'green';
    }
    return 'red'
    }
  }
}
</script>

  <style scoped>
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
  </style>
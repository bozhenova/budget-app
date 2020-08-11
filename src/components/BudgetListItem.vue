<template>
<div class="list-item">
<span class="budget-comment">{{ item.comment }}</span>
  <span class="budget-value">{{ item.value }}</span>
  <ElButton type="danger" size="mini" @click="handleDelete(item.id)">
  Delete
  </ElButton>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
  item: {
      type: Object,
      default: () => ({})
    }
  },
    methods: {
    handleDelete(id) {
      this.$emit('delete-item', id);
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
<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
    <ElButtonGroup>
  <ElButton type="danger" data-sort="outcome" circle icon="el-icon-minus" @click="handleSorting"/>
  <ElButton type="primary" data-sort="all" circle icon="el-icon-s-home" @click="handleSorting"/>
  <ElButton type="success" data-sort="income" circle icon="el-icon-plus" @click="handleSorting"/>
  </ElButtonGroup>
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="item in list"
          :key="item.id"
          :item="item"
        />
      </template>
      <ElAlert :style="{marginTop: '12px'}" v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem';
import { mapActions } from 'vuex';

export default {
  name: 'BudgetList',
  components: { BudgetListItem },
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
  }),
  computed: {
    isEmpty() {
      return !this.list.length;
    }
  },
  methods: {
    ...mapActions('data', ['changeSortType']),
    handleSorting(e) {
      const sortType = e.currentTarget.dataset.sort;
      this.changeSortType(sortType);
  },
  }
};
</script>

<style scoped>
.budget-list-wrap {
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
</style>

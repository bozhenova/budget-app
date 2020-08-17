<template>
 <ElDialog
      title="Do you want to delete this item?"
      :visible="this.dialogVisible"
      width="30%"
      :before-close="closeDialog"
    >
      <span>
        <ElButton @click="closeDialog">Cancel</ElButton>
        <ElButton type="primary" @click="handleConfirm">Confirm</ElButton>
      </span>
    </ElDialog>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'Dialog',
  computed: {
      ...mapGetters('data', ['dialogVisible', 'currentId']),
  },
  methods: {
    ...mapActions('data', ['toggleDialog', 'deleteItem']),
      closeDialog() {
      this.toggleDialog(false);
    },
      handleConfirm() {
      this.toggleDialog(false);
      this.deleteItem(this.currentId)
    },
  }

}
</script>

<style scoped>

</style>
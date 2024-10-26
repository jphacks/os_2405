<script setup>
defineProps({
    onClickPlusButton: {
        type: Function,
        default: () => { console.log('TODO: プラスボタンが押されました') }
    },
    onClickMenuButton: {
        type: Function,
        default: () => { console.log('TODO: メニューボタンが押されました') }
    }
})
</script>

<style scoped>
.floating-action-wrapper {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<template>
  <div class="floating-action-wrapper">
    <div class="floating-action-buttons">
        <v-btn
            fab
            color="primary"
            icon="mdi-pen-plus"
            class="me-4"
            @click="onClickPlusButton"
            :size="60"
        >
        </v-btn>
        <v-btn
            fab
            color="primary"
            icon="mdi-menu"
            @click="onClickMenuButton"
            :size="60"
        >
        </v-btn>
    </div>
    
  </div>
</template>
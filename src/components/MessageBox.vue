<script setup>
defineProps({
    message: {
        type: String,
        default: 'テストメッセージです'
    },
    isError: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <v-sheet outlined class="message-box" :class="{ error: isError, success: !isError }">
        <div class="message">
            <v-icon color="red-lighten-1" class="message-icon" v-if="isError">mdi-alert-outline</v-icon>
            <v-icon color="green-darken-3" class="message-icon" v-else>mdi-check-circle-outline</v-icon>
            <span class="message-text">{{ message }}</span>
        </div>
    </v-sheet>
</template>

<style scoped>
.message-box {
    border-radius: 4px;
    font-weight: bold;
    font-size: large;
    white-space: pre-wrap; /* これ書かないと改行が無視される */
    display: flex; /* Flexboxを使用 */
    align-items: center; /* 垂直方向の中央揃え */

    &.error {
        border: 1px solid #EF5350;
        background-color: #FFCDD2;
        color: #EF5350;
    }

    &.success {
        border: 1px solid #2E7D32;
        background-color: #C8E6C9;
        color: #2E7D32;
    }

    .message {
        padding: 16px;
        word-break: break-word;
        overflow-wrap: break-word;
        max-width: 100%; /* 幅を制限 */
        display: flex;
        align-items: center;
    }

    .message-icon {
        margin-right: 8px;
        flex-shrink: 0;
    }

    .message-text {
        flex: 1;
    }

}

</style>
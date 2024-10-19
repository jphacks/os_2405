<script setup>
import VerifyCompletedView from '@/views/VerifyCompletedView.vue';
import { navigate } from '@/function';
</script>

<template>
    <VerifyCompletedView 
        message="プロフィールの登録が完了しました。"
        buttonText="ログインする"
        :on-click="() => navigate('/login')"
    />
</template>
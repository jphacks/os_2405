<script setup>
import VerifyCompletedView from '@/views/VerifyCompletedView.vue';
</script>

<template>
    <VerifyCompletedView 
        message="メールアドレスの認証が完了しました。"
        buttonText="プロフィールの登録"
        :on-click="() => { console.log('TODO: プロフィール登録のウィンドウを表示') }"
    />
    <!-- TODO 関数はプロフィール登録画面が変える -->
</template>
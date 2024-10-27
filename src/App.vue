<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { firebaseAuth } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const loading = ref(false)
const router = useRouter()
const currentUser = ref(null)

//画面遷移完了後は必ずロードを終わらせる
onMounted(() => {
  router.afterEach(() => {
    loading.value = false
  })

  // ログインしているユーザーを取得する
  //ログイン，ログアウト時にユーザー情報を取得して更新する
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user != null) {
      currentUser.value = user;
    } else {
      currentUser.value = null;
    }
  });
})
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="progress-container" v-show="loading">
          <v-progress-circular
            color="green"
            indeterminate
            :size="64"
          ></v-progress-circular>
        </div>
        <RouterView v-model:loading="loading" v-show="!loading"/>
      </v-container>
    </v-main>
  </v-app>
</template>


<style>
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
<script setup>
import { navigate } from '@/function';
</script>

<template>
    <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-sheet class="pa-6" rounded>
              <v-row justify="center">
                <v-col cols="12" class="text-center">
                  <h1 class="text-h4 font-weight-bold mb-4">メールを送信しました</h1>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <p class="text-body-1 font-weight-bold">
                    登録していただいたメールアドレス宛に認証メールを送信しました。
                    メールに記載されたリンクから登録を完了してください。
                  </p>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" sm="6" class="text-center">
                  <v-icon
                    size="164"
                    icon="mdi-email-outline"
                  ></v-icon>
                </v-col>
              </v-row>
              <v-btn
                color="primary"
                class="my-btn font-weight-bold"
                @click="navigate('/login')"
                >
                ログイン画面に戻る
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
</template>

<style scoped>
.my-btn {
    width: 100%;
    margin: 20px 0;
}
</style>
<script setup>
import { ref } from 'vue'

const rail = ref(true)

defineProps({
    handleLogout: {
        type: Function,
        required: true
    },
    myTaskButton: {
        type: Function,
        required: true
    },
    memoButton: {
        type: Function,
        required: true
    },
})
</script>

<template>
    <v-navigation-drawer
        width="256"
        :rail="rail" 
        permanent
        color="grey-lighten-5"
        class="nav-font"
        >
        <!-- Hamburger Menu Header -->
        <div class="d-flex align-center py-3 px-4">
            <v-spacer />
            <v-btn
            density="compact"
            icon="mdi-menu"
            variant="text"
            @click="rail = !rail"
            class="d-md-none"
            />
        </div>

        <v-list nav>
            <!-- Personal Tasks -->
            <v-list-item
                prepend-icon="mdi-account"
                value="personal"
                @click="myTaskButton"
            >
                <span v-show="!rail">
                    個人タスク
                </span>
            </v-list-item>

            <!-- Memo List -->
            <v-list-item
                prepend-icon="mdi-note-text"
                value="memos"
                @click="memoButton"
            >
                <span v-show="!rail">
                    メモ
                </span>
                </v-list-item>
                
                <v-list-group value="settings">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-cog"
                        >
                        <span v-show="!rail">
                            設定
                        </span>
                    </v-list-item>
                </template>
                
                <v-list-item
                    prepend-icon="mdi-logout"
                    value="logout"
                    @click="handleLogout"
                    class="pl-4"
                >
                    <span v-show="!rail">
                        ログアウト
                    </span>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
  </template>
  
<style scoped>

/* オプション: ドロワーのスタイルカスタマイズ */
:deep(.v-navigation-drawer__scrim) {
    backdrop-filter: blur(4px);
}

.nav-font {
    font-weight: bolder;
    font-size: 16px;
}

span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
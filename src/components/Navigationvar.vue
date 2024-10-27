<script setup>
import MakeNewMemo from '@/components/MakeNewMemo.vue';

const props = defineProps({
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
    rail: {
        type: Boolean,
        default: false
    },
    memoCreateButton: {
        type: Function,
        required: true
    }
})

const emit = defineEmits(['update:rail'])

const settingsClick = () => {
    if(props.rail) {
        emit('update:rail', false);
    }
}

const dialog = ref(false);

const closeDialog = () => {
    dialog.value = false;
}
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
            <v-btn
                density="compact"
                icon="mdi-menu"
                variant="text"
                @click="emit('update:rail', !rail)"
                class="d-md-none"
            />
            <v-spacer />
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
            <!-- Memo List -->
            <v-list-group value="memo">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-note-text"
                        @click="memoButton"
                        class="memo-item"
                    >
                        <div class="d-flex align-center w-100">
                            <span v-show="!rail" class="flex-grow-1">
                                メモ
                            </span>
                            <v-btn
                                v-show="!rail"
                                icon="mdi-plus"
                                density="compact"
                                size="small"
                                variant="text"
                                class="add-button mr-2"
                                @click.stop="memoCreateButton"
                            />
                        </div>
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
                
            <!-- Settings -->
            <v-list-group value="settings">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-cog"
                        @click="settingsClick"
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

    <MakeNewMemo 
        :close-dialog="() => closeDialog()"
        :dialog="dialog"
    />
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

.add-button {
    position: absolute;
    right: 32px; /* 矢印の位置に合わせて調整 */
}

/* プラスボタンのホバー時のスタイル */
.add-button:hover {
    background-color: rgba(0, 0, 0, 0.04);
}
</style>
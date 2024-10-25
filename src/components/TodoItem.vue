<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    id: {
        type: [String, Number],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    deadline: {
        type: [Date, String],
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    }
});

const dialog = ref(false);

/**
 * 日時をフォーマットする
 * 例) 2022/01/01 12:00
 */
const formattedDateTime = computed(() => {
    const date = new Date(props.deadline);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}/${month}/${day} ${hours}:${minutes}`;
});
</script>

<template>
    <div>
        <div 
            class="title-card"
            @click="dialog = true"
        >
            <div class="content-wrapper">
                <div class="title-wrapper">
                    <div class="title">{{ title }}</div>
                </div>
                <div class="datetime">
                    <v-icon>mdi-clock-outline</v-icon>
                    {{ formattedDateTime }}
                </div>
            </div>
        </div>

        <!--下は後で変える-->
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
            <v-card>
                <v-card-title class="text-h5 mb-2">
                    {{ title }}
                </v-card-title>

                <v-card-text>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <div class="detail-label">登録日時</div>
                            <div>{{ formattedDateTime }}</div>
                        </div>
                        
                        <div class="detail-item">
                            <div class="detail-label">数量</div>
                            <div>{{ quantity }}</div>
                        </div>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        variant="text"
                        @click="dialog = false"
                    >
                        閉じる
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.title-card {
    display: flex;
    background-color: white;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    margin: 8px 0;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
}

.title-card:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* 上揃えに変更 */
    padding: 16px 24px;
    width: 100%;
    min-height: 64px;
    gap: 16px; /* タイトルと日時の間隔 */
}

.title-wrapper {
    flex: 1;
    min-width: 0; /* テキストの省略を有効にするために必要 */
}

.title {
    font-size: 1.5rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 2行まで表示 */
    line-clamp: 2; /* 2行まで表示 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all; /* 長い単語の改行を許可 */
    min-height: calc(1.5rem * 1.5 * 2); /* フォントサイズ × line-height × 行数 */
    line-height: 1.5;
}

.datetime {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #666;
    white-space: nowrap;
    padding-top: 4px; /* タイトルの1行目と揃える */
}

.detail-grid {
    display: grid;
    gap: 16px;
    margin-top: 8px;
}

.detail-item {
    display: grid;
    gap: 4px;
}

.detail-label {
    font-size: 0.875rem;
    color: #666;
    font-weight: bold;
}
</style>
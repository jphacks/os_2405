<script setup>
import { ref, computed, watch } from 'vue'
import { validate } from '@/function';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '100%'
    },
})

const emit = defineEmits(['update:value'])
const isAllDay = ref(false)

watch(isAllDay, (newVal) => {
    if (newVal) {
        // 終日が選択された場合、時間部分を削除
        const dateOnly = props.value.split('T')[0]
        emit('update:value', dateOnly)
    } else {
        // 終日が解除された場合、時間部分を00:00に設定
        const dateOnly = props.value.split('T')[0]
        emit('update:value', `${dateOnly}T00:00`)
    }
})

const errorMessage = ref('')
const hasError = computed(() => errorMessage.value !== '')

const dateRules = [
    (v) => !!v || '日付を入力してください',
    (v) => new Date(v) > new Date() || '過去の日付は選択できません'
]

watch(() => props.value, (value) => {
    const message = validate(value, dateRules)
    errorMessage.value = message
})
</script>

<template>
    <div class="date-picker-field" :style="{ width: props.width }">
        <label class="date-label">{{ label }}</label>
        <div class="date-input-wrapper" :class="{ 'input-error': hasError }">
            <input
                :type="isAllDay ? 'date' : 'datetime-local'"
                :value="value"
                @input="emit('update:value', $event.target.value)"
                class="date-input"
            >
            <v-icon class="calendar-icon">mdi-calendar</v-icon>
        </div>
        <span v-if="hasError" class="error-message">{{ errorMessage }}</span>
        <div class="all-day-checkbox">
            <input type="checkbox" v-model="isAllDay" id="all-day">
            <label for="all-day">終日</label>
        </div>
    </div>
</template>

<style scoped>
.date-picker-field {
    margin-bottom: 1rem;
}

.date-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
    font-size: 0.9rem;
}

.date-input-wrapper {
    position: relative;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
}

.date-input {
    width: 100%;
    padding: 0.5rem;
    padding-right: 2rem;
    font-size: 1rem;
    border: none;
    background: transparent;
    cursor: pointer;

    &::-webkit-calendar-picker-indicator {
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
}

.calendar-icon {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}

.input-error {
    border-color: #dc3545;
}

.error-message {
    display: block;
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.all-day-checkbox {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
}

.all-day-checkbox input {
    margin-right: 0.5rem;
}
</style>
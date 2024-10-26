<script setup>
const props = defineProps({
    value: {
        type: Number,
        default: 1
    },
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    },
    label: {
        type: String,
        default: '個数'
    }
})

const emit = defineEmits(['update:value'])

const decrement = () => {
    if (props.value > props.min) {
        emit('update:value', props.value - 1)
    }
}

const increment = () => {
    if (props.value < props.max) {
        emit('update:value', props.value + 1)
    }
}
</script>

<template>
    <div class="number-input">
        <label class="label">{{ label }}</label>
        <div class="input-wrapper">
            <div class="input-container">
                <v-icon 
                    class="control-icon"
                    @click="decrement"
                    :class="{ disabled: value <= min }"
                >
                    mdi-minus-circle-outline
                </v-icon>
                <span class="value">{{ value }}</span>
                <v-icon 
                    class="control-icon"
                    @click="increment"
                    :class="{ disabled: value >= max }"
                >
                    mdi-plus-circle-outline
                </v-icon>
            </div>
        </div>
    </div>
</template>

<style scoped>
.number-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.label {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
}

.input-wrapper {
    display: flex;
    justify-content: center; /* 中央寄せのために追加 */
    width: 100%;
}

.input-container {
    display: flex;
    align-items: center;
    gap: 16px;
}

.control-icon {
    font-size: 32px !important;
    color: #333;
    cursor: pointer;
    user-select: none;
}

.control-icon.disabled {
    color: #ccc;
    cursor: not-allowed;
}

.value {
    font-size: 1.5rem;
    min-width: 2ch;
    text-align: center;
}
</style>
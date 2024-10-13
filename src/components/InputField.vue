<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    value: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'ここに入力'
    },
    width: {
      type: String,
      default: '100%'
    },
    errorMessage: {
      type: String,
      default: ''
    }
})

const emit = defineEmits(['update:value']);

const hasError = computed(() => {
    return props.errorMessage !== '';
});

</script>

<template>
    <div class="input-field" :style="{width: props.width }">
      <label :for="id" class="input-label">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="emit('update:value', $event.target.value)"
        class="input-control"
        :class="{ 'input-error': hasError }"
      >
      <span v-if="hasError" class="error-message">{{ errorMessage }}</span>
    </div>
  </template>

<style scoped>
.input-field {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.input-control {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.input-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
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
</style>
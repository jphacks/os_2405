<script setup>
import { ref } from 'vue'

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
        default: '80%'
    }
})

</script>

<template>
    <div :style="{width: props.width }">
        <v-row>
            <v-col cols="6">
                <span>{{ label }}</span>
            </v-col>
            <v-col cols="6" class="text-end">
                <span>{{ value }}</span>
            </v-col>
        </v-row>
    </div>
</template>
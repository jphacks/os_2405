<script setup>
defineProps({
    message: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    },
    onClick: {
        type: Function,
        required: true
    }
})
</script>

<template>
    <v-row align="center" justify="center" style="height: 100vh;">
        <v-col cols="12" sm="8" md="6">
            <v-sheet class="text-center">
                <v-icon
                    color="primary"
                    size="156"
                    icon="mdi-check-circle-outline"
                    class="mb-4"
                ></v-icon>
                <h2 class="text-h5 mb-6">
                    {{ message }}
                </h2>
                <v-btn
                    color="primary"
                    block
                    @click="onClick"
                >
                    {{ buttonText }}
                </v-btn>
            </v-sheet>
        </v-col>
    </v-row>
</template>

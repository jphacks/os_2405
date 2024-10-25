<script setup>
import AddItemDialog from '@/components/AddItemDialog.vue';
import { ref } from 'vue';

const dialog = ref(false);

const openDialog = () => {
    dialog.value = true;
}
</script>

<template>
    <v-dialog
        v-model="dialog"
        max-width="400"
    >
        <AddItemDialog 
        />
    </v-dialog>

    <v-btn @click="openDialog">Open Dialog</v-btn>
</template>
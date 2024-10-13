<template>
    <v-row align="center" no-gutters>
      <v-col cols="5">
        <v-divider></v-divider>
      </v-col>
  
      <v-col cols="2" class="text-center">
        <span class="text-h6">{{ text }}</span>
      </v-col>
  
      <v-col cols="5">
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </template>
  
<script setup>
defineProps({
    text: {
        type: String,
        default: 'または'
    }
});
</script>
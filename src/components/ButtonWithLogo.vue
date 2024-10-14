<script setup>
//TODO: Googleのロゴとかpropsで渡せるようにする
import { ref } from 'vue'
import googleLogo from '@/assets/google-logo.png'

const props = defineProps({
    buttonText: {
        type: String,
        default: 'Googleアカウントでログイン'
    },
    onClick: {
        type: Function,
        required: true
    },
    width: {
        type: String,
        default: '100%'
    }
})

const googleLogoSrc = ref(googleLogo)

const handleClick = () => {
    props.onClick()
}
</script>

<template>
<v-btn
    class="google-btn font-weight-bold"
    @click="handleClick"
    elevation="1"
    color="white"
    :width="width"
>
    <template v-slot:prepend>
        <v-img
            :src="googleLogoSrc"
            alt="Google logo"
            width="20"
            height="20"
        />
    </template>
    {{ buttonText }}
</v-btn>
</template>

<style scoped>
.google-btn {
    border-radius: 4px;
    text-transform: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
    border: 1px solid #dadce0;
}

.google-btn-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 16px;
}

.google-logo {
    margin-right: 24px;
}
</style>
import { onMounted, onUnmounted, reactive } from 'vue';

export default function (resize: any) {
    onMounted(() => {
        window.addEventListener('resize', resize)
    })
    onUnmounted(() => {
        window.removeEventListener('resize', resize)
    })
}
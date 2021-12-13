import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const name = ref<string>('');
        const status = ref<string>('');
        return {
            name,
            status
        };
    },
    mounted() {
        this.name = "rucker"
    }
});
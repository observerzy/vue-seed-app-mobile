import { Options, Vue } from "vue-class-component";
import DemoClass from "@/components/DemoClass/index.vue";
import DemoSetup from "@/components/DemoSetup/index.vue";

@Options({
    components: {
        DemoClass,
        DemoSetup
    },
})
export default class About extends Vue {
    value = ""
    mounted() {
        this.value = "rucker"
    }
    get msg(): string {
        return this.value
    }
}
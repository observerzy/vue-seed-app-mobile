import { Options, Vue } from "vue-class-component";

@Options({
    components: {

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
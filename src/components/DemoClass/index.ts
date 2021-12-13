import { Options, Vue } from "vue-class-component";

@Options({
    props: {
        msg: String,
    },
})
export default class Demo extends Vue {
    //msg = ''
    msg!: string;
    get message(): string {
        // this.name will be typed
        return 'Hello, ' + this.msg
    }
}
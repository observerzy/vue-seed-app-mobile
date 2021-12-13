import { Options, Vue } from "vue-class-component";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
@Options({
    data() {
        return {
            selectedKeys: ref<string[]>(['1']),
            collapsed: ref<boolean>(false),
        };
    },
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    }
})
export default class Home extends Vue {
    toAbout() {
        console.log("aa");

        this.$router.push("/about")
    }
}

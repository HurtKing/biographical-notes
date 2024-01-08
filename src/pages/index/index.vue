<template>
    <div class="PageHeader">

    </div>
    <div class="PageBody">
        <PageBody />
    </div>
<!--    <div class="PageFooter">-->
<!--        <PageFooter />-->
<!--    </div>-->
</template>

<script>
import axios from 'axios'
import PageBody from "@/components/index/PageBody/PageBody.vue";
// import PageFooter from "@/components/index/PageFooter/PageFooter.vue";
import Fingerprint2 from 'fingerprintjs2'
import CryptoJS from "crypto-js";

export default {
    data() {
        return {
            // 定义一些数据
            secretKey: 'AAAAB3NzaC1yc2EAAAADAQABAAABgQDtasvCLbI472MbxDmoVwdacJtr7MZhywwhAWjHEtGz/C6ssssPddqdGSnHHckYdqjgTP4BnRORsgtD4L0qCgvzE8o2oTuOinRU/AiUXWZKLzor0YGa/rRKa3h5hsXO+ebOorQCrnYegnjoyJ3nwL7ANghlW5ytE0wC7rKorLcKa54sywvAydK0gpSp2MiFmkgcxzRNtmRiQNtIdseEWvkydxZlQCMJXQowgh06rg7a/pk5XRYJA6jWMDgsGdnTEdD/VijwoGder1GQ+CkW1PKHAENzXl4xUWkMMlcQdGyLcMAS2j18YgeD37mDMqb1KdkXcC+M8p9Hbi7w2GoZj1PvQy98TlAKr+hYx+QLu5pFcK4CYvGEhbZ2x+51E3ALiHYRXCq22/GLXH363Dt4LIYB0rsCCTeEuScmHqBRLSEbbDN/a7X75Aa5c/oOHcnR/3rGYBGxORBp/QJfhCebau6R5Al3rCtYjn7WPXDtPZHecHYrC73vO+bRzAuD3r0Cj3c=',
        };
    },
    mounted() {
        this.recordLog();
    },

    methods: {
        //进入页面时向后台发送一次请求，记录访问日志
        async recordLog() {
            try {
                const components = await new Promise((resolve, reject) => {
                    Fingerprint2.get((components) => {
                        resolve(components)
                    })
                })

                const values = components.map((component) => component.value)
                const browserFingerprint = Fingerprint2.x64hash128(values.join(''), 31)

                // const key = 'AAAAB3NzaC1yc2EAAAADAQABAAABgQDtasvCLbI472MbxDmoVwdacJtr7MZhywwhAWjHEtGz/C6ssssPddqdGSnHHckYdqjgTP4BnRORsgtD4L0qCgvzE8o2oTuOinRU/AiUXWZKLzor0YGa/rRKa3h5hsXO+ebOorQCrnYegnjoyJ3nwL7ANghlW5ytE0wC7rKorLcKa54sywvAydK0gpSp2MiFmkgcxzRNtmRiQNtIdseEWvkydxZlQCMJXQowgh06rg7a/pk5XRYJA6jWMDgsGdnTEdD/VijwoGder1GQ+CkW1PKHAENzXl4xUWkMMlcQdGyLcMAS2j18YgeD37mDMqb1KdkXcC+M8p9Hbi7w2GoZj1PvQy98TlAKr+hYx+QLu5pFcK4CYvGEhbZ2x+51E3ALiHYRXCq22/GLXH363Dt4LIYB0rsCCTeEuScmHqBRLSEbbDN/a7X75Aa5c/oOHcnR/3rGYBGxORBp/QJfhCebau6R5Al3rCtYjn7WPXDtPZHecHYrC73vO+bRzAuD3r0Cj3c=';
                // const jsonData = {'aa': 14214};
                // const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(jsonData), key).toString();

                // if(window.location.href.indexOf('localhost') === -1){
                    await axios.post('/api/access', {
                        // data: encryptedData
                        browserFingerprint: browserFingerprint
                    }).then( res => {
                        // if(res.data.code === 409){
                        //     console.log('指纹已经存在');
                        // }
                    });
                // }
            } catch (error) {
                console.error('获取指纹信息时出错：', error.message)
            }
        }
    },
    components: {
        PageBody,      //主体
        // PageFooter,      //页眉
    },
};
</script>

<style>
.PageBody{
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('@/assets/images/1.png');
}


</style>
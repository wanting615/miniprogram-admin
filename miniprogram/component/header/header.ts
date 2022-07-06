import { getCapsuleInfo } from "../../utils/common"
Component({
    data: {
        navHeight: 0, //导航栏高度
        navTop: 0, //导航栏距顶部距离
        capsuleHeight: 0, //胶囊的高度
        capsuleWidth: 0, //胶囊宽度+距右距离
    },
    properties:{
        title: {
            type: String,
            value: ''
        },
        bgUrl: {
            type: String,
            value: ''
        }
    },
    lifetimes: {
        attached: function () {
            getCapsuleInfo().then(navInfo => {
                this.setData(navInfo)
            })
        }
    }
    
})
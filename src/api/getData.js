
import axios from '../request'

//注册接口
export const registerApi = (phone, pwd , name,autoCode)=> axios.post("/api/v1/pri/user/register",{
    "phone":phone,
    "pwd":pwd,
    "name":name,
    "autoCode":autoCode,

})

//登录接口
export const loginApi = (phone, pwd,captcha) => axios.post("/api/v1/pri/user/login",{
    phone,
    pwd,
    captcha
    // "captcha":captcha
   
} 
) 


//轮播图接口
export const getBanner = () => axios.get("/api/v1/pub/video/list_banner")
// export const get = () => axios.get("/api/v1/pri/item/result  ")

//视频列表接口
// export const getVideoList = (token)=> axios.get("/api/v1/pri/item/result",{
//     params:{
//         "token":token
//     }
// })
//视频列表接口
export const getVideoList = ()=> axios.get("/api/v1/pub/video/list")
//二手市场接口
export const getNongJu = ()=> axios.get("/api/v1/pub/video/nongju")
//咨询详情
export const getXiangqin = (vid)=> axios.get("/api/v1/pub/item/getImgById",{
    params: {
        info_id:vid
    }
})

//视频详情
export const getVideoDetail = (vid)=> axios.get("/api/v1/pub/video/find_detail_by_id?",{
    params: {
        video_id:vid
    }
})

//头像上传接口
export const getuserFace = (url, forms)=>axios.post("/api/v1/pri/user/user_face",{
    url,forms,
},{
    headers:{
        "content-type": "multipart/form-data",
        "token":token
    }
}) 

//订单列表
export const getOrderList = (token)=>axios.get("/api/v1/pri/order/list",{
    params:{
        "token":token
    }
})
//下单接口
export const saveOrder = (token, vid)=>axios.post("/api/v1/pri/order/save",{
    "video_id":vid
},{
    headers:{
        "token":token
    }
}) 
//用户信息接口
export const getUserInfo = (token)=>axios.get("/api/v1/pri/user/find_by_token",{
    params:{
        "token":token
    }
})
//短信验证码
export const checkApi = (phone)=> axios.post("/api/v1/pub/SendMessage",{
    "phone":phone,
    
})
//答题
export const getScore = (score,token)=> axios.get("/api/v1/pri/user/putResult",{
    params:{
        "token":token,
        score:score
    }
})
//首页资讯
export const getzixun = (token)=>axios.get("/api/v1/pub/item/information",{
    params:{
        "token":token
    }
})
//访问用户接口
export const getliaotian = (token)=>axios.get("/api/v1/pri/user/msg",{
    params:{
        "token":token
    }
})
//pk答题
export const getQuest = () => axios.get("/api/v1/pub/questionAll")
//getRobote
export const getRobote = () => axios.get("/userList")
export default class UrlService{
    public static baseUrl = "https://wanting615.com.cn/"
    // public static baseUrl = "http://localhost:3000/"
    // ----------------- doc ------------------- 
    public static docTypeList = UrlService.baseUrl + 'getTypeList';//获取所有文档类型
    public static getDocByType = UrlService.baseUrl + "getDocByType";//获取某类型的文档
    public static getReadDoc = UrlService.baseUrl + "getReadDoc"; //添加阅读量
    public static getPraises = UrlService.baseUrl + "getPraises"; //点赞
    //------------------ user --------------------
    public static login = UrlService.baseUrl + 'wxLogin'; // 登录
    public static sendWxUserInfo = UrlService.baseUrl + "updateUserInfo"; // 更新用户信息
    public static getUserInfo = UrlService.baseUrl + "getUserInfo"; // 获取用户信息
    public static feedback = UrlService.baseUrl + "wxFeedback"; //微信问题反馈
    public static getViews = UrlService.baseUrl + "getViews"; // 获取浏览历史记录
    public static getPraised = UrlService.baseUrl + "getPraised"; // 获取点赞记录
}
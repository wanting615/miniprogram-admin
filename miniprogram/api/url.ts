export default class UrlService{
    public static baseUrl = "http://47.100.104.142/"
    public static docTypeList = UrlService.baseUrl + 'getTypeList';//获取所有文档类型
    public static getDocByType = UrlService.baseUrl + "getDocByType";//获取某类型的文档
}
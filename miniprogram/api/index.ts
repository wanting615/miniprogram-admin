import httpService from "../utils/http";
import UrlService from "./url";
import { RootResult } from "../type/result";
import { Doc, DocType } from "../type/doc";

//获取所有文档类型
export const getDocTypeList = () => {
  return httpService<RootResult<DocType[]>>(UrlService.docTypeList)
}

//获取某类型的文档
export const getDocByType = (type: number, contentType: string, page: number) => {
  return httpService<RootResult<Doc[]>>(UrlService.getDocByType, { params: {type, contentType, page}})
}

//添加阅读量
export const getReadDoc = (id: number) => {
    return httpService<RootResult<Doc[]>>(UrlService.getReadDoc, { params: {id}})
}

  //点赞
export const getPraises = (id: number) => {
    return httpService<RootResult<Doc[]>>(UrlService.getPraises, { params: {id}})
}
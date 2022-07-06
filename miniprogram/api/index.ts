import httpService from "../utils/http";
import UrlService from "./url";
import { RootResult } from "../type/result";
import { Doc, DocType } from "../type/doc";
import { UserInfo } from "../type/user";

//获取所有文档类型
export const getDocTypeList = () => {
  return httpService<RootResult<DocType[]>>(UrlService.docTypeList)
}

//获取某类型的文档
export const getDocByType = (type: number, contentType: string, page: number) => {
  return httpService<RootResult<Doc[]> & {pages: number}>(UrlService.getDocByType, { params: {type, contentType, page}})
}

//添加阅读量
export const getReadDoc = (id: number, token?: string) => {
    return httpService<RootResult<Doc[]>>(UrlService.getReadDoc, { params: {id,token}})
}

//点赞
export const getPraises = (id: number, token?: string) => {
    return httpService<RootResult<Doc[]>>(UrlService.getPraises, { params: {id,token}})
}

// -------------------------- user 用户相关 ----------------------
export const loginUser = (code: string) => {
    return httpService<RootResult<UserInfo & {token: string}>>(UrlService.login, { params: {code},method: "POST"})
} 

export const sendWxUserInfo = (token: string, nickName: string, gender: number, avatarUrl: string) => {
    return httpService<RootResult<{nickName: string,avatarUrl: string}>>(UrlService.sendWxUserInfo, {
        params: {token, nickName, gender, avatarUrl},
        method: "POST"
    })
}
export const getUserInfo = (token: string) => {
    return httpService<RootResult<UserInfo>>(UrlService.getUserInfo, {
        params: {token}, method: "POST"})
}

export const feedBack = (token: string, docId: string, info: string, autor: string) => {
    return httpService<RootResult<null>>(UrlService.feedback, {
        params:{token, docId, info, autor },
        method: "POST"
    })
}
import { Doc } from "../../../type/doc";

export interface Data {
    id: number;//类型id
    type: '知识点' | '问答题';// 知识点or习题
    page: number;//当前页数
    listHeight: number; //列表高度 
    list: Doc[];//文档列表
    stopLoadFlag: boolean;
    noData: boolean;
    idText: string;
}
export interface Method {
    getDocs(): void;
    goDetailPage(e: Event): void;
    loadmore(): void;
}
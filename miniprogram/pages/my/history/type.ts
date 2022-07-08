import { Doc } from "../../../type/doc"
export interface Data{
    page: number; // 当前页数
    stopLoadFlag: Boolean; // 防止多次触发
    noData: Boolean; // 是否无数据
    list: Doc[]; // 数据列表
    listHeight: number // navbar 高度
}

export interface Method{
    getDocs(): void;
    loadmore(): void;
}
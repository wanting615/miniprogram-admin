import { Doc } from "../../../type/doc";

export interface Data {
    id: number;//类型id
    page: number;//当前页数
    list: Doc[];//文档列表
}
export interface Method {
    getDocs(id: number, type: string): void;
    goDetailPage(e: Event): void;
}
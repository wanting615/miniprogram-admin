import { DocType } from "../../type/doc";

export interface Data {
    docList: DocType[];
    baseUrl: string;
    // capsuleBarHeight: number;
    background: string[];
    customViewHeight: number;
}
export interface Method {
    getListPage(e: Event): void;
    onShow(): void;
}
import { DocType } from "../../type/doc";

export interface Data {
    docList: DocType[];
    baseUrl: string;
}
export interface Method {
    getListPage(e: Event): void;
    onShow(): void;
}
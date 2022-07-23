import { Doc } from "../../type/doc";
export interface Data {
    page: number;
    baseUrl: string;
    docs: Doc[];
    listHeight: number;
    stopLoadFlag: boolean;
    noData: boolean;
}

export interface Method {
    getDocs(): void;
}
import { Doc } from "../../../../type/doc";
export interface Data {
    doc: Doc | null
}
interface DetailEvent{
    detail: {
        value: {
            docId: string;
            autor: string;
            info: string;
        }
    }
}
export interface Method{
    formSubmit(e: DetailEvent): void;
}
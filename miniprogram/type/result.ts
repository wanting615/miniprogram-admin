export interface RootResult<T>{
    status: boolean;
    message: string;
    data: T,
    [propName: string]: any
}
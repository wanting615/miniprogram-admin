//文档类型
export interface DocType {
    id: number;
    type: number;//文档类型
    name: string;//类型名称
    iconUrl: string;//文档类型icon
    contentTypes: string[];//文档内容类型
    createAt: Date;//创建时间
  }
  
  export interface Doc {
    id: number;
    title: string;//标题
    type: number;//文档类
    typeName?: string,//文档类型名称
    contentType: string;//文档内容类型
    content: string;//内容
    autor: string;//作者
    creatAt: Date;//创建时间
  }
  
  export interface DocForm {
    id?: number;
    title: string;//标题
    typeName?: string,//文档类型名称
    type: number | undefined;//文档类
    contentType: string;//文档内容类型
    content: string;//内容
    autor?: string;//作者
  }
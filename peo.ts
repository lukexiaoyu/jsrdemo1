
/**
 * peo是一个接口
 */
interface peo{
    name:string,
    age:number,
    sex:string
}

/**
 * 导出一个peo1的例子，用的peo的接口类型
 */
export const peo1:peo={
    name:'张三',
    age:18,
    sex:'男'
}
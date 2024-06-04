export interface Product {
    id:string,
    name:string,
    icon:string,
    price:number,
    description:string,
}
export interface RestorationProduct {
    id: string;
    name: string;
    icon:string,
    products: Product[];
}

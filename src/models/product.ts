export interface Product {
    image: string | undefined;
    id: number | string;
    name: string;
    price: number;
    description: string;
    discount: number;
    stock: number;
}
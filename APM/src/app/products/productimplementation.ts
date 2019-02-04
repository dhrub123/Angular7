import { Product } from "./product";

export class ProductImplementation implements Product{
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public description: string,
        public price: number,
        public starRating: number,
        public imageUrl: string){
    }
}
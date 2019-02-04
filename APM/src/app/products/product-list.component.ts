import { Component, OnInit } from "@angular/core";
import { ProductImplementation } from "./productimplementation";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    private _listFilter: string;
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filteredProducts: ProductImplementation[];
    products: ProductImplementation[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          }
    ];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log('Initialize Application');
        this.listFilter = 'Rake';
        console.log('Filter String set to Rake');
    }

    public get listFilter(): string  {
		return this._listFilter;
	}

    public set listFilter(value: string ) {
        this._listFilter = value;
        this.filteredProducts = value ? this.performFilter(value) : this.products; 
    }
    
    performFilter(filterBy: string ): ProductImplementation[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:ProductImplementation) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1);
    }

    constructor(){
        this._listFilter = 'cart';
        this.filteredProducts = this.products;
    }

    onRatingClicked(message:String):void{
        this.pageTitle = 'Product List: ' + message;
        console.log(message);
    }
}
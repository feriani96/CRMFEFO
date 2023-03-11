import { Component, OnInit } from '@angular/core';
import { Product, ProductDto } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {
  products: Product[] = [];
  productsDto: ProductDto[] = [];

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {

  this.productService.getProducts().subscribe((data: Product[]) => {
    this.products = data;
    this.productsDto = this.inintProductDto(this.products);
    console.log(this.products);

  });
}


inintProductDto(products: Product[]):ProductDto[] {
  let tempProductDto: ProductDto[] = [];
 
  products.forEach((product) => {

    const restDto: ProductDto = {
      id: product.id,
      name: product.name,
      price: product.price,
      favorite: product.favorite,
      description: product.description,
      stars: product.stars,
      supplier: product.supplier,      
      tax: product.tax,
      photo: this.getPhoto(product.photo),
    
    };

    tempProductDto.push(restDto);

   });

  return tempProductDto;
}
 
private getPhoto(data: string): any {
  return 'data:image/jpg;base64,' + data;
}


}


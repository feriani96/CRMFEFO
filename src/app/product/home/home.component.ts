import { Component, OnInit } from '@angular/core';
import { Product, ProductDto } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';
declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  productsDto: ProductDto[] = [];
  // idTodelete!: string; product='';

  deleteModal: any;
  idTodelete: any;


  constructor(private productService:ProductService ) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data: ProductDto[]) => {
      this.products = data;
      this.productsDto = this.inintProductDto(this.products);
      console.log(this.products);
    });
    
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
      this.get();
    }
    get()
    {
      this.productService.get().subscribe((data)=>{this.products=data;
       // console.log(data);
      });
    }

    openDeleteModal(id: string) {
      this.idTodelete = id;
      this.deleteModal.show();
    }

    delete() {
      this.productService.delete(this.idTodelete).subscribe({
        next: (data: any) => {
        this.products = this.products.filter((id: any) => id !== this.idTodelete);
        this.deleteModal.hide();
      }});  
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




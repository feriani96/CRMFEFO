
export class Product {

    id:string;
    name:string;
    price:number;
    favorite:boolean;
    photo:any;
    description:string;
    stars:number;
    supplier:string;
    tax:number;


    
    constructor() {
      this.id='';
      this.name= '';
      this.price=0;
      this.favorite=true;
      this.photo= '';
      this.description='';
      this.stars=0;
      this.supplier='';
      this.tax=0;

     
    }
}

export interface ProductDto {
  id:string;
  name:string;
  price:number;
  favorite:boolean;
  photo:any;
  description:string;
  stars:number;
  supplier:string;
  tax:number;
}
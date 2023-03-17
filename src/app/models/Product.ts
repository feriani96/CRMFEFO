
export class Product {

  id: string;
  name: string;
  price: number;
  photo: any;
  description: string;
  tax: number
  
  constructor() {
    this.id = '';
    this.name = '';
    this.price = 0;
    this.photo = '';
    this.description = '';
    this.tax = 0;


  }
}

export interface ProductDto {
  id: string;
  name: string;
  price: number;
  photo: any;
  description: string;
  tax: number;
}
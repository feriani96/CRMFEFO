import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private productService: ProductService,
    private router:Router) {

    this.productForm = this._formBuilder.group({
      name: '',
      price:0,
      favorite:true,
      photo: Image,
      description:'',
      stars:0,
      supplier:'',
      tax:0,
  
  });
  
}
  ngOnInit() {
  }



  submit() {
    // this.productForm.value.idproduct = this.productForm.value.product.name ; 
    // console.log("Submitting .... :) ", this.productForm.value);
   
    this.productService.create(this.productForm.value)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/product/home"])
        console.log("success .....");
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
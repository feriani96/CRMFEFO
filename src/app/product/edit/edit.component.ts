import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm!: FormGroup;

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

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productService: ProductService,

  ) {}

 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
  } );

  getById(id: any) {
    this.productService.getById(id).subscribe((data) => {
      this.productForm = data;
    });
  }
 
  update() {
    this.productService.update(this.productForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/product/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}



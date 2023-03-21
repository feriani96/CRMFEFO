import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  productForm: Product = {

    id: '',
    name: '',
    price: 0,
    description: '',
    tax: 0,
    photo:null,
   
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: string) {
    this.productService.getById(id).subscribe((data) => {
      this.productForm = data;
    });
  }

  update() {
    this.productService.update(this.productForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/product/home"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}


  
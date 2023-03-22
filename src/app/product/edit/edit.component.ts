import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { DataUtils, FileLoadError } from 'src/app/service/data-util.service';
import { EventManager } from 'src/app/service/event-manager.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  formGroup!: FormGroup;


  productForm: Product = {

    id: '',
    name: '',
    price: 0,
    photo: null,
    photoContentType: '',
    description: '',
    tax: 0,

  };




  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    protected elementRef: ElementRef,
    private productService: ProductService,
  ) {

    this.formGroup = this.fb.group({
      name: '',
      price: 0,
      photo: null,
      photoContentType: null,
      description: '',
      tax: 17,

    });


  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: string) {
    this.productService.getById(id).subscribe((data) => {
      this.productForm = data;
      this.productForm = {
        id: this.productForm.id,
        name:this.productForm.name,
        price: this.productForm.price,
        photo: this.getPhoto(this.productForm.photo),
        description: this.productForm.description,
        tax:this.productForm.tax,
       
  
      };
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

  //--------------JN ADD MAIN PHOTO STARTS--------//


 
private getPhoto(data: string): any {
  return 'data:image/jpg;base64,' + data;
}



  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }



  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.formGroup, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast('big error'),
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.formGroup.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }



  //--------------JN ADD MAIN PHOTO ENDS--------//




}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUtils, FileLoadError } from 'src/app/service/data-util.service';
import { EventManager, EventWithContent } from 'src/app/service/event-manager.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm!: FormGroup;

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    private _formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) {

    this.productForm = this._formBuilder.group({
      name: '',
      price: 0,
      favorite: true,
      photo: null,
      photoContentType: null,
      description: '',
      stars: 0,
      supplier: '',
      tax: 0,

    });

  }
  ngOnInit() {
  }





  submit() {


    this.productService.create(this.productForm.value)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/product/home"])
          console.log("success .....");
        },
        error: (err) => {
          console.log(err);
        }
      })
  }



  //--------------JN ADD MAIN PHOTO STARTS--------//



  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.productForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast('big error'),
    });
  }



  //--------------JN ADD MAIN PHOTO ENDS--------//










}
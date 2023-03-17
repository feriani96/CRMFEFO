import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
  pagetitle = "Create Invoice"

  constructor(private builder: FormBuilder, private invoiceService: InvoiceService, private router: Router, private alert: ToastrService,
    private activeroute: ActivatedRoute) { }

  ngOnInit(): void {}


  invoiceform = this.builder.group({
    invoiceNo: this.builder.control('', Validators.required),
    customerId: this.builder.control('', Validators.required),
    customerName: this.builder.control(''),
    deliveryAddress: this.builder.control(''),
    remarks: this.builder.control(''),
    total: this.builder.control({ value: 0, disabled: true }),
    tax: this.builder.control({ value: 0, disabled: true }),
    netTotal: this.builder.control({ value: 0, disabled: true }),
    details: this.builder.array([])

  });




}

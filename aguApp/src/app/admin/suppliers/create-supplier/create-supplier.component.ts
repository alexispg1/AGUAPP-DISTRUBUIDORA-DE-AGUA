import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/supplier.service';
import { Router } from '@angular/router';
import { Suppliers } from 'src/app/models/supliers';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {
  supplier: Suppliers = new Suppliers();
  submitted = false;
  constructor(private supplierService:SupplierService, private router:Router) { }

  ngOnInit() {
  }

  newSupplier():void {
    this.submitted = false;
    this.supplier = new Suppliers();
  }

  save(){
    this.supplierService.addSuppliers(this.supplier).subscribe(
      data => {
        console.log(data)
        this.supplier = new Suppliers();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/admin/menu/suppliersList']);
  }
}

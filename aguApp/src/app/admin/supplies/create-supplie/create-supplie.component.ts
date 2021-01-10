import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplies } from 'src/app/models/supplies';
import { SupplieService } from 'src/app/supplie.service';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-create-supplie',
  templateUrl: './create-supplie.component.html',
  styleUrls: ['./create-supplie.component.css']
})
export class CreateSupplieComponent implements OnInit {
  supplie: Supplies = new Supplies();
  submitted = false;
  proveedores = [];
  seleccionado;
  constructor(private supplieService:SupplieService, private router:Router, 
    private supplierService: SupplierService) { }

  ngOnInit() {
    this.supplierService.getSuppliers().subscribe(
      data => {
        this.proveedores = data;
      }
    )
  }

  save(){
    this.supplieService.addSupplies(this.supplie).subscribe(
      data => {
        console.log(data)
        this.supplie = new Supplies();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    //this.submitted = true;
    
    this.supplie.id_proveedores = this.seleccionado.id;
    console.log("ID ", this.seleccionado.id, "Proveedor ",this.seleccionado.nombre);
    console.log(this.supplie);
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/admin/menu/suppliesList_']);
  }
}

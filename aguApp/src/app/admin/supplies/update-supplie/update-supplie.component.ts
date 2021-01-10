import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplies } from 'src/app/models/supplies';
import { SupplieService } from 'src/app/supplie.service';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-update-supplie',
  templateUrl: './update-supplie.component.html',
  styleUrls: ['./update-supplie.component.css']
})
export class UpdateSupplieComponent implements OnInit {
  id:number;
  supplie: Supplies;
  proveedores = [];
  seleccionado;
  myForm: FormGroup;
  proveedorSelected;
  constructor(private route: ActivatedRoute,private router: Router,
    private supplieService: SupplieService, private supplierService: SupplierService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.supplie = new Supplies();
    this.supplieService.getSupplie(this.id).subscribe(
      data => {
        console.log(data);
        this.supplie = data;
      },error => console.log(error));

    this.supplierService.getSuppliers().subscribe(
      data => {
        console.log(data);
        this.proveedores = data;
        for (let i of this.proveedores){
          if(this.supplie.id_proveedores == i.id){
            this.seleccionado = i
          }
        }
      }
    )
  }

  updateSupplie(){
    this.supplie.id_proveedores = this.seleccionado.id;
    console.log("modify",this.supplie);
    this.supplieService.updateSupplie(this.id, this.supplie).subscribe(
      data => {
        console.log(data);
        this.supplie = new Supplies();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSupplie();    
  }

  gotoList() {
    this.router.navigate(['/admin/menu/suppliesList_']);
  }
}

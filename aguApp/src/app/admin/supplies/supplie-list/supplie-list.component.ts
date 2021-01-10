import { Component, OnInit } from '@angular/core';
import { from, Observable } from "rxjs";
import { Router } from '@angular/router';
import { SupplieService } from 'src/app/supplie.service';
import { SupplierService } from 'src/app/supplier.service';
import { Supplies } from 'src/app/models/supplies';

@Component({
  selector: 'app-supplie-list',
  templateUrl: './supplie-list.component.html',
  styleUrls: ['./supplie-list.component.css']
})
export class SupplieListComponent implements OnInit {
  constructor(private router:Router, private supplieService:SupplieService,
    private supplierService: SupplierService) { }

  supplies: Observable<Supplies[]>;
  public datos_provee = []
  lista = []
  prov;
  ngOnInit() {
    this.reloadData();
  }

  changeData(){
    for (let i of this.lista){
      for (let j of this.datos_provee){
        if(i.id_proveedores == j.id){
          i.id_proveedores = j.nombre
        }
      }
    }
  }

  reloadData() {
    this.supplierService.getSuppliers().subscribe(
      datos__ => {
        this.datos_provee = datos__;
      }
    );
    this.supplieService.getSupplies().subscribe(
      data => {
        this.lista = data;
        this.changeData();
      }
    );
  }

  deleteSupplie(id:number){
    this.supplieService.deleteSupplies(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  suppliesDetails(id:number){
    this.router.navigate(['/', id]);
  }

  updateSupplie(id: number){
    this.router.navigate(['/admin/menu/updateSupplie_', id]);
  }

  add(){
    this.router.navigate(['/admin/menu/addSupplie_']);
  }

  menu(){
    console.log(localStorage.getItem('send_email'));
    this.router.navigate(['/admin/menu']);
  }
}

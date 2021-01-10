import { Component, OnInit } from '@angular/core';
import { Suppliers } from 'src/app/models/supliers';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {
  id:number;
  supplier: Suppliers;
  constructor(private route: ActivatedRoute,private router: Router,private supplierService: SupplierService) { }

  ngOnInit() {
    this.supplier = new Suppliers();
    this.id = this.route.snapshot.params['id'];
    this.supplierService.getSupplier(this.id).subscribe(
      data => {
        console.log(data);
        this.supplier = data;
      },error => console.log(error));
    
  }

  updateSupplier(){
    this.supplierService.updateSupplier(this.id, this.supplier).subscribe(
      data => {
        console.log(data);
        this.supplier = new Suppliers();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSupplier();    
  }

  gotoList() {
    this.router.navigate(['/admin/menu/suppliersList']);
  }
}

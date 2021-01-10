import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add_deliver_man(){
    this.router.navigate(['admin/menu/delivererRegister'])
  }
  list_deliver_man(){
    this.router.navigate(['admin/menu/delivererList']);
  }
  proveedores(){
    this.router.navigate(['/admin/menu/suppliersList']);
  }
  insumos(){
    this.router.navigate(['/admin/menu/suppliesList_']);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-deliverer',
  templateUrl: './register-deliverer.component.html',
  styleUrls: ['./register-deliverer.component.css']
})
export class RegisterDelivererComponent implements OnInit {
  hide=true;
  role_id:number=2;
  constructor() {
  }
  
  ngOnInit() {
  }

}

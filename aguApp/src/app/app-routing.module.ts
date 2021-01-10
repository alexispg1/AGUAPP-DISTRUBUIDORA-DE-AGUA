import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { RecoverAccountComponent } from './recover-account/recover-account.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MyUbicationsComponent} from './my-ubications/my-ubications.component';
import {RequestOrdesComponent} from './request-ordes/request-ordes.component';
import {OrderListComponent} from './order-list/order-list.component';
import {PostRegisterComponent} from './post-register/post-register.component';
import {AccountActivationComponent} from './account-activation/account-activation.component';
import {MyAcountsComponent} from './my-acounts/my-acounts.component';
import {MenuComponent} from './admin/menu/menu.component';
import {DelivererListComponent}from './admin/deliverer-list/deliverer-list.component';
import {RegisterDelivererComponent} from './admin/register-deliverer/register-deliverer.component'
import{DelivererMenuComponent} from '../app/deliverer/deliverer-menu/deliverer-menu.component'; 
import {DeliveriesComponent} from '../app/deliverer/deliveries/deliveries.component'
import{ActivarCuentaComponent} from '../app/activar-cuenta/activar-cuenta.component';


import { ChooseUbicationComponent } from './orders-steps/choose-ubication/choose-ubication.component';
import { ChooseRepartidorComponent } from './orders-steps/choose-repartidor/choose-repartidor.component';
import { ChooseDateAndTimeComponent } from './orders-steps/choose-date-and-time/choose-date-and-time.component';
import { ChooseServicesComponent } from './orders-steps/choose-services/choose-services.component';


//ORDERS ROUTES
import { OrderCurrentComponent } from './orders/order-current/order-current.component';
import {SupplierListComponent} from 'src/app/admin/suppliers/supplier-list/supplier-list.component';
import {CreateSupplierComponent} from 'src/app/admin/suppliers/create-supplier/create-supplier.component';
import {UpdateSupplierComponent} from 'src/app/admin/suppliers/update-supplier/update-supplier.component';

import {SupplieListComponent} from 'src/app/admin/supplies/supplie-list/supplie-list.component';
import {CreateSupplieComponent} from 'src/app/admin/supplies/create-supplie/create-supplie.component';
import {UpdateSupplieComponent} from 'src/app/admin/supplies/update-supplie/update-supplie.component';


import {NavbarRepartidoComponent} from './repartidor/layouts/navbar-repartido/navbar-repartido.component'
import{ElegirMedioDeTransporteComponent} from './repartidor/elegir-medio-de-transporte/elegir-medio-de-transporte.component';
import{ListaPedidosComponent} from './repartidor/lista-pedidos/lista-pedidos.component';
import{ListaPedidosHistorialComponent} from './repartidor/lista-pedidos-historial/lista-pedidos-historial.component';
import {ListaPedidosDetallesComponent} from './repartidor/lista-pedidos-detalles/lista-pedidos-detalles.component';
import {RutasComponent} from './repartidor/rutas/rutas.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registerUser',component:RegisterComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'recoverAccount/:token',component:RecoverAccountComponent},
  {path:'',component:LoginComponent,pathMatch: 'full'},
  {path:'user',component:UsersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'ubications',component:MyUbicationsComponent},
  {path:'sub-order-steps/new-ubication',component:RequestOrdesComponent},
  {path:'orderList',component:OrderListComponent},
  {path:'menubar',component:MenuBarComponent},
  {path:'accountActivation/:token',component:AccountActivationComponent},
  {path:'postRegister',component:PostRegisterComponent},
  {path:'accounts',component:MyAcountsComponent},
  {path:'admin/menu',component:MenuComponent},
  {path:'recordar/activar/cuenta',component:ActivarCuentaComponent},
  {path:'admin/menu/delivererRegister',component:RegisterDelivererComponent},
  {path:'admin/menu/delivererList',component:DelivererListComponent},
  {path:'deliverer/menu',component:DelivererMenuComponent},
  {path:'deliverer/deliveries',component:DeliveriesComponent},
  {path:'order-steps/ubicaciones',component:ChooseUbicationComponent},
  {path:'order-steps/repartidores',component:ChooseRepartidorComponent},
  {path:'order-steps/fecha-hora',component:ChooseDateAndTimeComponent},
  {path:'order-steps/servicios',component:ChooseServicesComponent},
  {path:'orders/order-current',component:OrderCurrentComponent},

  {path: 'admin/menu/suppliersList',component:SupplierListComponent},
  {path: 'admin/menu/addSupplier', component:CreateSupplierComponent},
  {path: 'admin/menu/updateSupplier/:id', component:UpdateSupplierComponent},

  {path: 'admin/menu/suppliesList_',component:SupplieListComponent},
  {path: 'admin/menu/addSupplie_', component:CreateSupplieComponent},
  {path: 'admin/menu/updateSupplie_/:id', component:UpdateSupplieComponent},
  
  {path:'repartidor/navbar',component:NavbarRepartidoComponent},
  {path:'repartidor/medio-de-transporte',component:ElegirMedioDeTransporteComponent},
  {path:'repartidor/lista-pedidos',component:ListaPedidosComponent},
  {path:'repartidor/lista-pedidos/historial',component:ListaPedidosHistorialComponent},
  {path:'repartidor/lista-pedidos/detalles',component:ListaPedidosDetallesComponent},
  {path: 'repartidor/rutas',component:RutasComponent},
  {path: '**',component:NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import{MaterialModule} from './material/material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MyUbicationsComponent } from './my-ubications/my-ubications.component';
import { RequestOrdesComponent } from './request-ordes/request-ordes.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PostRegisterComponent } from './post-register/post-register.component';
import {MatCardModule} from '@angular/material/card';
import { CreateSupplieComponent } from 'src/app/admin/supplies/create-supplie/create-supplie.component';
import { SupplieListComponent } from 'src/app/admin/supplies/supplie-list/supplie-list.component';
import { CreateSupplierComponent } from 'src/app/admin/suppliers/create-supplier/create-supplier.component';
import { SupplierListComponent } from 'src/app/admin/suppliers/supplier-list/supplier-list.component';
import { UpdateSupplierComponent } from 'src/app/admin/suppliers/update-supplier/update-supplier.component';
import { UpdateSupplieComponent } from 'src/app/admin/supplies/update-supplie/update-supplie.component';
import { ChooseUbicationComponent } from './orders-steps/choose-ubication/choose-ubication.component';
import { ChooseRepartidorComponent } from './orders-steps/choose-repartidor/choose-repartidor.component';
import { ChooseDateAndTimeComponent } from './orders-steps/choose-date-and-time/choose-date-and-time.component';
import { ChooseServicesComponent } from './orders-steps/choose-services/choose-services.component';
import { OrderCurrentComponent } from './orders/order-current/order-current.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { MyAcountsComponent } from './my-acounts/my-acounts.component';
import { MenuComponent } from './admin/menu/menu.component';
import { DelivererListComponent } from './admin/deliverer-list/deliverer-list.component';
import { RegisterDelivererComponent } from './admin/register-deliverer/register-deliverer.component';
import { DelivererMenuComponent } from './deliverer/deliverer-menu/deliverer-menu.component';
import { DeliveriesComponent } from './deliverer/deliveries/deliveries.component';
import { ActivarCuentaComponent } from './activar-cuenta/activar-cuenta.component';

import { ElegirMedioDeTransporteComponent } from './repartidor/elegir-medio-de-transporte/elegir-medio-de-transporte.component';
import { ListaPedidosComponent } from './repartidor/lista-pedidos/lista-pedidos.component';
import { NavbarRepartidoComponent } from './repartidor/layouts/navbar-repartido/navbar-repartido.component';
import { PerfilComponent } from './repartidor/perfil/perfil.component';
import { ListaPedidosHistorialComponent } from './repartidor/lista-pedidos-historial/lista-pedidos-historial.component';
import { ListaPedidosDetallesComponent } from './repartidor/lista-pedidos-detalles/lista-pedidos-detalles.component';
import { RutasComponent } from './repartidor/rutas/rutas.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("415824151320-qnoh0dmlq9vqmlojdd3054hijcilhqg5.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('735357880633218')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ToolbarComponent,
    ForgotPasswordComponent,
    RecoverAccountComponent,
    NotFoundComponent,
    UsersComponent,
    ProfileComponent,
    MenuBarComponent,
    MyUbicationsComponent,
    RequestOrdesComponent,
    OrderListComponent,
    PostRegisterComponent,
    ChooseUbicationComponent,
    ChooseRepartidorComponent,
    ChooseDateAndTimeComponent,
    ChooseServicesComponent,
    OrderCurrentComponent,
    AccountActivationComponent,
    MyAcountsComponent,
    MenuComponent,
    DelivererListComponent,
    RegisterDelivererComponent,
    DelivererMenuComponent,
    DeliveriesComponent,

    CreateSupplieComponent,
    SupplieListComponent,
    CreateSupplierComponent,
    SupplierListComponent,
    UpdateSupplierComponent,
    UpdateSupplieComponent,
    ActivarCuentaComponent,

    ElegirMedioDeTransporteComponent,
    ListaPedidosComponent,
    RutasComponent,
    NavbarRepartidoComponent,
    PerfilComponent,
    ListaPedidosHistorialComponent,
    ListaPedidosDetallesComponent,

  ],
  imports: [
    BrowserModule,
    LeafletModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    MatCardModule,
    NgxSpinnerModule
  ],
  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

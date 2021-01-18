import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { MapsComponent } from '../../maps/maps.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

import { LoginComponent } from 'app/auth/login/login.component';
import { ForgetPasswordComponent } from 'app/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from 'app/auth/reset-password/reset-password.component';
import { VerifyComponent } from 'app/auth/verify/verify.component';
import { CreateOrderComponent } from 'app/orders/create-order/create-order.component';
import { ListOrdersComponent } from 'app/orders/list-orders/list-orders.component';
import { RequestVooomerComponent } from 'app/orders/request-vooomer/request-vooomer.component';
import { ViewCustomersComponent } from 'app/customer/view-customers/view-customers.component';
import { CreateCustomerComponent } from 'app/customer/create-customer/create-customer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    NgbPaginationModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  declarations: [
    HomeComponent,
    MapsComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerifyComponent,
    CreateOrderComponent,
    ListOrdersComponent,
    RequestVooomerComponent,
    ViewCustomersComponent,
    CreateCustomerComponent,    

  ]
})

export class AdminLayoutModule {}

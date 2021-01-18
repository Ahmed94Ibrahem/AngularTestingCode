import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { AuthGaurd } from 'app/services/auth-gaurd.service';
import { ForgetPasswordComponent } from 'app/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from 'app/auth/reset-password/reset-password.component';
import { VerifyComponent } from 'app/auth/verify/verify.component';
import { CreateOrderComponent } from 'app/orders/create-order/create-order.component';
import { ListOrdersComponent } from 'app/orders/list-orders/list-orders.component';
import { RequestVooomerComponent } from 'app/orders/request-vooomer/request-vooomer.component';
import { ViewCustomersComponent } from 'app/customer/view-customers/view-customers.component';
import { CreateCustomerComponent } from 'app/customer/create-customer/create-customer.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: HomeComponent, canActivate: [AuthGaurd] },
    { path: 'orders/create-order',        component: CreateOrderComponent, canActivate: [AuthGaurd]},
    { path: 'orders/list-orders',        component: ListOrdersComponent, canActivate: [AuthGaurd]},
    { path: 'orders/request-vooomer',        component: RequestVooomerComponent, canActivate: [AuthGaurd]},
    { path: 'customers/view-customers',        component: ViewCustomersComponent, canActivate: [AuthGaurd]},
    { path: 'customers/create-customer',        component: CreateCustomerComponent, canActivate: [AuthGaurd]},


    { path: 'auth/forget-password',            component: ForgetPasswordComponent},
    { path: 'auth/reset-password',            component: ResetPasswordComponent},
    { path: 'auth/verify',            component: VerifyComponent},
    { path: 'auth/login',            component: LoginComponent},
];

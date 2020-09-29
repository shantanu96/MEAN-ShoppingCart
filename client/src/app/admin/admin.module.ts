import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductComponent } from './product/product.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    AddProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    LayoutModule,
    SharedModule
  ]
})
export class AdminModule { }

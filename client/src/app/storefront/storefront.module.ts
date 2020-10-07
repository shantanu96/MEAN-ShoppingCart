import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorefrontRoutingModule } from './storefront-routing.module';
import { StorefrontComponent } from './storefront.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    StorefrontComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    StorefrontRoutingModule,
    SharedModule,
    MatGridListModule
  ]
})
export class StorefrontModule { }

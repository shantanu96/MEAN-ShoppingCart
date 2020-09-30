import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { CartItemCardComponent } from './cart-item-card/cart-item-card.component';


@NgModule({
  declarations: [CartComponent, CartItemCardComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    MatListModule
  ]
})
export class CartModule { }

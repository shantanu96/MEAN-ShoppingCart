import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductCardComponent } from './widgets/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ItemBookComponent } from './item-book/item-book.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogueComponent, ItemBookComponent],
  exports: [CatalogueComponent]
})
export class CatalogueModule { }
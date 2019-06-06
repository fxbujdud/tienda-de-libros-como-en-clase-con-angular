import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingsComponent } from './shoppings/shoppings.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingsComponent, HistoryComponent]
})
export class ShoppingCarModule { }
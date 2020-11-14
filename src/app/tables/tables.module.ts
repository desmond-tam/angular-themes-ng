import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';

import { CurrencyPipe } from '../utils/currencyFormat.pipe';


const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent }
]

@NgModule({
  declarations: [BasicTableComponent,
  CurrencyPipe],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(routes),
  ]
})
export class TablesModule { }

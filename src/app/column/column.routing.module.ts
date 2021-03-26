import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ColumnComponent} from "./column.component";

const routes: Routes = [
  {path: '', component: ColumnComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColumnRoutingModule { }

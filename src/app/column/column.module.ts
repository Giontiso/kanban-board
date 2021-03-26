import { NgModule } from '@angular/core';
import { ColumnComponent } from './column.component';
import { MatButtonModule} from '@angular/material/button';
import {ColumnRoutingModule} from "./column.routing.module";

@NgModule({
  declarations: [
    ColumnComponent,
  ],
  imports: [
    MatButtonModule,
    ColumnRoutingModule
  ],
  exports: [
    ColumnComponent
  ],

  providers: [],
  bootstrap: []
})
export class ColumnModule { }

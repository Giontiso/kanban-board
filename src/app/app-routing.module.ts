import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./auth.guard.service";
import {LoginComponent} from "./login/login.component";
import {BoardComponent} from "./board/board.component";

const routes: Routes = [
  // {path: 'column',
  // loadChildren: () => import("./column/column.module").then((module) => module.ColumnModule), canActivate: [AuthGuardService]},
  // {path: 'second', component: SecondComponent},

  {path: '', component: LoginComponent},
  {path: 'board', component: BoardComponent, canActivate: [AuthGuardService]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

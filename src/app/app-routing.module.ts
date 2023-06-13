import { NgModule } from '@angular/core';
import {DatenschutzComponent} from "./components/datenschutz/datenschutz.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CmpNotFoundComponent} from "./components/cmp-not-found/cmp-not-found.component";
import { RouterModule, Routes } from '@angular/router';
import {TodoFormularComponent} from "./components/todo-formular/todo-formular.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";


  const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'datenschutz', component: DatenschutzComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'login', component: LoginComponent },
    { path: 'todo', component: TodoListComponent },
    { path: 'new', component: TodoFormularComponent},
    { path: '**', component: CmpNotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TestAPIComponent} from './test-api/test-api.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'test-api', component: TestAPIComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'**', redirectTo:'not-found'},
  {path:'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

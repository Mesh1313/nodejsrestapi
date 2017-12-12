import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES = [
	{
		path: '', redirectTo: 'dashboard', pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

export const APP_ROUTED_COMPONENTS = [DashboardComponent];
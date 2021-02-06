import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ViewComponent } from './view/view/view.component';

const routes: Routes = [
	{ path: '', redirectTo: '/date', pathMatch: 'full'},
	{ path: 'date', component: DateComponent},
	{ path: 'hello-world', component: HelloWorldComponent},
	{ path: 'hello-world', component: HelloWorldComponent, children: [{path: 'foo', redirectTo: '/date', pathMatch: 'full'}]},
	{ path: '**', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

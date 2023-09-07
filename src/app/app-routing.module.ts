import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component:FormComponent},
  {path:'about', component:AboutComponent},
  {path:'about/:username', component:AboutComponent},
  {path:'products', component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

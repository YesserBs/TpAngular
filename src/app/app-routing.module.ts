import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {
    'path': '',
    component: AcceuilComponent
  },
  {
    'path': 'products',
    component: ProductsComponent
  },
  {
    'path': 'edit/:id',
    component: UpdateProductComponent
  },
  {
    path: 'create/:newId',
    component: CreateProductComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
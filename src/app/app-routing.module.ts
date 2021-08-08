import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

//localhost:4200/
//localhost:4200/one
//localhost:4200/two 
//localhost:4200/pages
//localhost:4200/pages/one
//localhost:4200/pages/two

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'one',
        component: ComponentOneComponent,
      },
      {
        path: 'two',
        component: ComponentTwoComponent,
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

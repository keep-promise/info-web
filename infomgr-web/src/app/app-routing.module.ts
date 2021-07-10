import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './services/guard/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    canDeactivate: [LoginGuard],
    loadChildren: () => import('src/app/pages/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: '登录'}
  },
  {
    path: 'error',
    component: Error404Component,
    data: {
     title: '参数错误或者地址不存在'
    }
   },
   {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
   }



  // {
  //   path: "user",
  //   loadChildren: () => import('src/app/pages/user/user.module').then(m => m.UserModule),
  // },
  // {
  //   path: "info",
  //   loadChildren: () => import('src/app/pages/info/info.module').then(m => m.InfoModule),
  // },
  // {
  //   path: "chatroom",
  //   component: ChatroomComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from './pages/ws/chatroom/chatroom.component';

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => import('src/app/pages/user/user.module').then(m => m.UserModule),
  },
  {
    path: "info",
    loadChildren: () => import('src/app/pages/info/info.module').then(m => m.InfoModule),
  },
  {
    path: "chatroom",
    component: ChatroomComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QqListComponent } from 'src/app/pages/info/qq/qq-list/qq-list.component';
import { QqEditComponent } from 'src/app/pages/info/qq/qq-edit/qq-edit.component'

const routes: Routes = [
  {
    path: 'qq-list',
    component: QqListComponent
  },
  {
    path: 'qq-edit',
    component: QqEditComponent
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }

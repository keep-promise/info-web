import { NgModule } from '@angular/core';
import { DragDirective } from 'src/app/services/common/directive/drag-drop/drag/drag.directive';
import { DropDirective } from 'src/app/services/common/directive/drag-drop/drop/drop.directive';



@NgModule({
  declarations: [
    DragDirective,
    DropDirective
  ],
  imports: [
  ],
  exports: [
    DragDirective,
    DropDirective
  ]
})
export class DirectiveModule { }

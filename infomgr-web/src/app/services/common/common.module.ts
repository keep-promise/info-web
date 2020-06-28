import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from 'src/app/services/common/directive/directive.module';
import { PipeModule } from 'src/app/services/common/pipe/pipe.module';
import { ZorroModule } from 'src/app/services/common/zorro/zorro.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectiveModule,
    PipeModule,
    ZorroModule
  ],
  exports: [
    DirectiveModule,
    PipeModule,
    ZorroModule
  ]
})
export class CommonSharedModule { }

import { NgModule } from '@angular/core';
import { TestPipePipe } from './test-pipe/test-pipe.pipe';



@NgModule({
  declarations: [TestPipePipe],
  imports: [],
  exports: [
    TestPipePipe
  ]
})
export class PipeModule { }

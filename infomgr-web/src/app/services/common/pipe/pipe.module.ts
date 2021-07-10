import { NgModule } from '@angular/core';
import { TestPipePipe } from './test-pipe/test-pipe.pipe';
import { RelativeTimePipe } from './relativeTime/relative-time.pipe';


@NgModule({
  declarations: [
    TestPipePipe,
    RelativeTimePipe
  ],
  imports: [],
  exports: [
    TestPipePipe,
    RelativeTimePipe
  ]
})
export class PipeModule { }

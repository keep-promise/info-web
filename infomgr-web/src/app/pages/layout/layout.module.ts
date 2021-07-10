import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from 'src/app/pages/layout/layout-routing.module';
import { CommonModule } from '@angular/common';
import { ZorroModule } from 'src/app/services/common/zorro/zorro.module';


import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/services/common/pipe/pipe.module';

import { UserModule } from 'src/app/pages/user/user.module';
import { InfoModule } from 'src/app/pages/info/info.module';
import { MainComponent } from 'src/app/pages/main/main.component';
import { PageContentComponent } from 'src/app/pages/layout/page-content/page-content.component';
import { LayoutComponent } from './layout.component';
import { PageHeaderComponent } from './page-header/page-header.component';
// import { WsModule } from 'src/app/pages/ws/ws.module';
import { ChatroomComponent } from 'src/app/pages/ws/chatroom/chatroom.component';
import { MessageItemComponent } from 'src/app/pages/ws/message-item/message-item.component';
import { UserItemComponent } from 'src/app/pages/ws/user-item/user-item.component';
import { UsernameModalComponent  } from 'src/app/pages/ws/username-modal/username-modal.component';
import { TestComponent } from 'src/app/pages/html/test/test.component';
import { FlexComponent } from 'src/app/pages/html/flex/flex.component';



@NgModule({
  declarations: [
    MainComponent,
    PageContentComponent,
    LayoutComponent,
    PageHeaderComponent,
    ChatroomComponent,
    UserItemComponent,
    MessageItemComponent,
    UsernameModalComponent,
    TestComponent,
    FlexComponent
  ],
  imports: [
    CommonModule,
    ZorroModule,
    LayoutRoutingModule,
    UserModule,
    InfoModule,
    // WsModule,

    FormsModule,
    PipeModule


  ]
})
export class LayoutModule { }

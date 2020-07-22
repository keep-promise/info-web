import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './pages/layout/page-layout/page-layout.component';

import { CommonSharedModule } from 'src/app/services/common/common.module'
import { UserModule } from 'src/app/pages/user/user.module';
import { InfoModule } from 'src/app/pages/info/info.module';
import { ChatroomComponent } from './pages/ws/chatroom/chatroom.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    ChatroomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    InfoModule,
    CommonSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

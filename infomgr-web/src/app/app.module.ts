import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './pages/layout/page-layout/page-layout.component';

import { CommonSharedModule } from 'src/app/services/common/common.module'
import { UserModule } from 'src/app/pages/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    CommonSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

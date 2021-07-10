import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ZorroModule } from 'src/app/services/common/zorro/zorro.module';
import { CommonSharedModule } from 'src/app/services/common/common.module';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonSharedModule,
    ZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

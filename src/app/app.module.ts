import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTestComponent } from './my-test/my-test.component'
import { MyLifeComponent } from './my-life/my-life.component';
import { LifeDirective } from './my-life/life.directive'
import { MyLifeDirective } from './my-life/my-life.directive'
@NgModule({
  // 可声明对象表
  declarations: [
    AppComponent,
    MyTestComponent,
    MyLifeComponent,
    LifeDirective,
    MyLifeDirective
  ],
  // 导入表
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

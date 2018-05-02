import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { ElementModule } from './element.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ElementModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

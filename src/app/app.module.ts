import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ElementModule } from './element.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule, ElementModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

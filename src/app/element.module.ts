import { BrowserModule } from '@angular/platform-browser'
import { Injector, NgModule } from '@angular/core'

import { createCustomElement } from '@angular/elements'
import { ChatModule, ChatWidgetComponent } from './chat/'

@NgModule({
  imports: [BrowserModule, ChatModule],
  exports: [ChatModule]
})
export class ElementModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const el = <any>createCustomElement(ChatWidgetComponent, {
      injector: this.injector,
    })
    customElements.define('chat-widget', el)
  }
}

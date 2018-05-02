import { BrowserModule } from '@angular/platform-browser'
import { Injector, NgModule } from '@angular/core'

import { createCustomElement } from '@angular/elements'
import { ChatWidgetComponent } from './chat-widget/chat-widget.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [ChatWidgetComponent],
  exports: [ChatWidgetComponent],
  entryComponents: [ChatWidgetComponent],
})
export class ElementModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(ChatWidgetComponent, {
      injector: this.injector,
    })
    customElements.define('chat-widget', el)
  }
}

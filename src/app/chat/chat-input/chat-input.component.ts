import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'chat-input',
  template: `
    <textarea type="text" class="chat-input-text" placeholder="Type message..."
              #message (keydown.enter)="onSubmit()" (keyup.enter)="message.value = ''"></textarea>
    <button type="submit" class="chat-input-submit" (click)="onSubmit()">
      {{buttonText}}
    </button>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .chat-input-text {
      margin: 10px 0 0 10px;
      height: 25px;
      width: 70%;
      border: 0;
      resize: none;
      border: none;
      overflow: auto;
      outline: none;
      box-shadow: none;
      font-size: 14px;
      background-color: inherit;
      color: inherit;
    }

    .chat-input-text::-webkit-input-placeholder {
      color: inherit;
    }
    .chat-input-text::-moz-placeholder {
      color: inherit;
    }
    .chat-input-text::-ms-input-placeholder {
      color: inherit;
    }

    .chat-input-submit {
      margin: 9px 3px 0px;
      float: right;
      background-color: inherit;
      color: inherit;
      font-size: 24px;
      border: 0;
      outline: none;
    }
  `],
})
export class ChatInputComponent implements OnInit {
  @Input() public buttonText = '↩︎'
  @Input() public focus = new EventEmitter()
  @Output() public send = new EventEmitter()
  @ViewChild('message') message: ElementRef

  ngOnInit() {
    this.focus.subscribe(() => this.focusMessage())
  }

  public focusMessage() {
    this.message.nativeElement.focus()
  }

  public getMessage() {
    return this.message.nativeElement.value
  }

  public clearMessage() {
    this.message.nativeElement.value = ''
  }

  onSubmit() {
    const message = this.getMessage()
    if (message.trim() === '') {
      return
    }
    this.send.emit({ message })
    this.clearMessage()
    this.focusMessage()
  }

}

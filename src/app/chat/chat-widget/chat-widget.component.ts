import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { Subject } from 'rxjs'

const randomMessages = [
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'Is there anything else I can help you with?',
  'That\'s awesome',
  'Angular Elements is the bomb 💣 ',
  'Can you explain in more detail?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure to chat with you',
  'We are happy to make you a custom offer!',
  'Bye',
  ':)',
]

const rand = (max) => Math.floor(Math.random() * max)

const getRandomMessage = () => randomMessages[rand(randomMessages.length)]

@Component({
  selector: 'chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
})
export class ChatWidgetComponent implements OnInit {
  @Input() public theme: 'blue'|'grey'|'red' = 'blue'
  @ViewChild('bottom') bottom: ElementRef

  public focus = new Subject()
  public chatVisible = false

  public operator = {
    name: 'Operator',
    status: 'online',
    avatar: `https://randomuser.me/api/portraits/women/${rand(100)}.jpg`,
  }
  public client = {
    name: 'Guest User',
    status: 'online',
    avatar: `https://randomuser.me/api/portraits/men/${rand(100)}.jpg`,
  }

  public messages = []

  public addMessage(from, text, type: 'received' | 'sent') {
    this.messages.unshift({
      from,
      text,
      type,
      date: new Date().getTime(),
    })
    this.scrollToBottom()
    this.focusMessage()
  }

  public scrollToBottom() {
    this.bottom.nativeElement.scrollIntoView()
  }

  public focusMessage() {
    this.focus.next(true)
  }

  public randomMessage() {
    this.addMessage(this.operator, getRandomMessage(), 'received')
  }

  ngOnInit() {
    this.addMessage(this.operator, 'Hi, how can we help you?', 'received')
    this.focusMessage()
    this.scrollToBottom()
    setTimeout(() => this.toggleChat(), 1000)
  }

  public toggleChat() {
    this.chatVisible = !this.chatVisible
    if (this.chatVisible) {
      setTimeout(() => this.focusMessage(), 500)
    }
  }

  public sendMessage({ message }) {
    if (message.trim() === '') {
      return
    }
    this.addMessage(this.client, message, 'sent')
    setTimeout(() => this.randomMessage(), 1000)
  }

}

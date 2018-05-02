import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      Pick your color:
      <button class="btn" (click)="setTheme('blue')">Blue</button>
      <button class="btn" (click)="setTheme('grey')">Grey</button>
      <button class="btn" (click)="setTheme('red')">Red</button>
    </div>
    <chat-widget [theme]="theme"></chat-widget>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .btn {
      padding: 5px;
      margin: 0px 2px;
      border: 1px solid #a0a0a0;
    }
  `]
})
export class AppComponent {
  public theme = 'blue'
  public setTheme(theme) {
    this.theme = theme
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div> <app-fetch-todo></app-fetch-todo>`,
})
export class AppComponent {
  value = 'World';
}

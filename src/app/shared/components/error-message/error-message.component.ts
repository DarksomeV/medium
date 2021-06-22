import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: `<div>{{message}}</div>`,
})
export class ErrorMessageComponent {
  @Input() public message: string = 'Something went wrong';
}

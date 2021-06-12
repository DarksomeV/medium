import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IBackendErrors } from '../../types/backend-errors.interface';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorsComponent implements OnInit {
  @Input() public errors: IBackendErrors;

  public errorMessages: string[];

  public ngOnInit(): void {
    this.errorMessages = Object.keys(this.errors).map((name: string) => {
      const messages = this.errors[name].join(',  ');

      return `${name} ${messages}`;
    })
  }
}

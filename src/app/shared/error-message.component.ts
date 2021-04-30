import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <div *ngIf="hasError()" class="ui-message ui-messages-error">
      <p *ngIf="form.hasError('required')">O campo é obrigatório</p>
      <p *ngIf="form.hasError('email')">Por favor entre com um email válido</p>
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
    }
    .ui-messages-error p {
      margin: 0px;
      color: #da2f31;
    }
  `]
})

export class MessageComponent {
  @Input() form: any;
  @Input() label: string;

  hasError() {
    return this.form.errors !== null && this.form.enabled && (this.form.submitted || this.form.dirty) || this.form.touched;
  }
}
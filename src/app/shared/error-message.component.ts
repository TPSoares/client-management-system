import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <div *ngIf="hasError()" class="ui-message ui-messages-error">
      <p *ngIf="form.hasError('required')">O campo é obrigatório</p>
      <p *ngIf="form.hasError('pattern')">Informe um email válido</p>
      <p *ngIf="form.hasError('minlength')">Informe um telefone válido</p>
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
    if (this.form !== undefined) {
      return this.form.errors !== null && (this.form.submitted || this.form.touched);
    }
  }
}
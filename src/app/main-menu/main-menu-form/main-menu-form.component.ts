import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'main-menu-form',
  templateUrl: './main-menu-form.component.html',
  styleUrls: ['./main-menu-form.component.css']
})
export class MainMenuFormComponent {

  @Input()
  public forbiddenValues: Array<string>;

  @Output()
  public onSubmit = new EventEmitter();

  @Output()
  public onComplete = new EventEmitter();

  public form: any = {};


  constructor () {}

  isFormInvalid () {
    if (!this.form.name) { return true }
    const isForbidden = this.forbiddenValues.includes(this.form.name.toLowerCase());
    const isEmpty = !this.form.name || this.form.name.length < 2;
    return isForbidden || isEmpty;
  }

  discardForm (ngForm) {
    ngForm.reset();
    this.onComplete.emit(null);
  }

  submitForm (ngForm) {
    this.onSubmit.emit(this.form);
    this.onComplete.emit(this.form);
  }


}

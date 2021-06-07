import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initGroup();
  }

  public onSubmit(): void {

  }

  private initGroup(): void {
    this.registerForm = this._fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
}
